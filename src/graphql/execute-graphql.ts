import 'server-only';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  Kind,
  print,
  type DocumentNode,
  type OperationDefinitionNode,
} from 'graphql';

type ExecuteOptions = {
  revalidate?: number | false;
  tags?: string[];
};

type GraphQLResponse<TData> = {
  data?: TData | null;
  errors?: { message: string }[];
};

const DEFAULT_REVALIDATE = 30;
const REQUEST_TIMEOUT_MS = 10_000;

const getOperationName = (document: DocumentNode) =>
  document.definitions.find(
    (definition): definition is OperationDefinitionNode =>
      definition.kind === Kind.OPERATION_DEFINITION,
  )?.name?.value;

export async function executeGraphQL<TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables: TVariables,
  options: ExecuteOptions = {},
): Promise<TData> {
  const url = process.env.SANITY_GRAPHQL_URL;
  if (!url) {
    throw new Error('Missing environment variable: SANITY_GRAPHQL_URL');
  }

  const token = process.env.SANITY_API_READ_TOKEN;
  const { revalidate = DEFAULT_REVALIDATE, tags } = options;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json, application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({
      operationName: getOperationName(document),
      query: print(document),
      variables,
    }),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    next: { revalidate, tags },
  });

  if (!response.ok) {
    throw new Error(
      `GraphQL request failed: ${response.status} ${response.statusText}`,
    );
  }

  const { data, errors } = (await response.json()) as GraphQLResponse<TData>;

  if (errors?.length) {
    throw new Error(errors.map((error) => error.message).join('; '));
  }
  if (!data) {
    throw new Error('GraphQL response contained no data');
  }

  return data;
}
