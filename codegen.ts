import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as loadEnv } from 'dotenv';

loadEnv({ path: '.env.local' });
loadEnv();

const schemaUrl = process.env.SANITY_GRAPHQL_URL;
if (!schemaUrl) {
  throw new Error('Missing environment variable: SANITY_GRAPHQL_URL');
}

const config: CodegenConfig = {
  schema: {
    [schemaUrl]: {
      headers: process.env.SANITY_API_READ_TOKEN
        ? { Authorization: `Bearer ${process.env.SANITY_API_READ_TOKEN}` }
        : {},
    },
  },
  documents: ['src/**/*.gql'],
  generates: {
    'src/graphql/': {
      preset: 'client',
      presetConfig: { fragmentMasking: false },
      config: {
        documentMode: 'documentNode',
        strictScalars: true,
        useTypeImports: true,
        enumsAsTypes: true,
        dedupeFragments: true,
        scalars: { Date: 'string', DateTime: 'string', JSON: 'unknown' },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
