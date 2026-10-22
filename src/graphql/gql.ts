/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GetExperiences($limit: Int = 12) {\n  allExperience(\n    where: {slug: {current: {is_defined: true}}}\n    sort: [{publishedAt: DESC}]\n    limit: $limit\n  ) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    timespan {\n      nl\n      en\n      fr\n    }\n    description {\n      nlRaw\n      enRaw\n      frRaw\n    }\n  }\n}": typeof types.GetExperiencesDocument,
    "query GetExperienceBySlug($slug: String!) {\n  allExperience(where: {slug: {current: {eq: $slug}}}, limit: 1) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    timespan {\n      nl\n      en\n      fr\n    }\n    description {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    text {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    tasks {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    project {\n      title\n      slug {\n        current\n      }\n    }\n  }\n}": typeof types.GetExperienceBySlugDocument,
    "query GetProjects($limit: Int = 12) {\n  allProject(\n    where: {slug: {current: {is_defined: true}}}\n    sort: [{publishedAt: DESC}]\n    limit: $limit\n  ) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n  }\n}": typeof types.GetProjectsDocument,
    "query GetProjectBySlug($slug: String!) {\n  allProject(where: {slug: {current: {eq: $slug}}}, limit: 1) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    lede {\n      nl\n      en\n      fr\n    }\n    role {\n      nl\n      en\n      fr\n    }\n    timeline {\n      nl\n      en\n      fr\n    }\n    projectType {\n      nl\n      en\n      fr\n    }\n    languages\n    liveUrl\n    sourceUrl\n    url\n    sections {\n      ...SectionFields\n    }\n    text {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    features {\n      title {\n        nl\n        en\n        fr\n      }\n      content {\n        nlRaw\n        enRaw\n        frRaw\n      }\n    }\n  }\n}": typeof types.GetProjectBySlugDocument,
    "fragment ImageFields on Image {\n  asset {\n    _id\n    altText\n  }\n  hotspot {\n    x\n    y\n    width\n    height\n  }\n  crop {\n    top\n    bottom\n    left\n    right\n  }\n}": typeof types.ImageFieldsFragmentDoc,
    "fragment SectionFields on ProjectSection {\n  type\n  anchor {\n    current\n  }\n  title {\n    nl\n    en\n    fr\n  }\n  body {\n    nlRaw\n    enRaw\n    frRaw\n  }\n  points {\n    nl\n    en\n    fr\n  }\n  steps {\n    title {\n      nl\n      en\n      fr\n    }\n    text {\n      nl\n      en\n      fr\n    }\n  }\n  features {\n    label\n    title {\n      nl\n      en\n      fr\n    }\n    content {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    points {\n      nl\n      en\n      fr\n    }\n    url\n    image {\n      ...ImageFields\n    }\n  }\n  decisions {\n    title {\n      nl\n      en\n      fr\n    }\n    text {\n      nl\n      en\n      fr\n    }\n  }\n  images {\n    caption {\n      nl\n      en\n      fr\n    }\n    url\n    image {\n      ...ImageFields\n    }\n  }\n}": typeof types.SectionFieldsFragmentDoc,
    "fragment TagFields on TechStack {\n  _id\n  title\n}": typeof types.TagFieldsFragmentDoc,
};
const documents: Documents = {
    "query GetExperiences($limit: Int = 12) {\n  allExperience(\n    where: {slug: {current: {is_defined: true}}}\n    sort: [{publishedAt: DESC}]\n    limit: $limit\n  ) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    timespan {\n      nl\n      en\n      fr\n    }\n    description {\n      nlRaw\n      enRaw\n      frRaw\n    }\n  }\n}": types.GetExperiencesDocument,
    "query GetExperienceBySlug($slug: String!) {\n  allExperience(where: {slug: {current: {eq: $slug}}}, limit: 1) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    timespan {\n      nl\n      en\n      fr\n    }\n    description {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    text {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    tasks {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    project {\n      title\n      slug {\n        current\n      }\n    }\n  }\n}": types.GetExperienceBySlugDocument,
    "query GetProjects($limit: Int = 12) {\n  allProject(\n    where: {slug: {current: {is_defined: true}}}\n    sort: [{publishedAt: DESC}]\n    limit: $limit\n  ) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n  }\n}": types.GetProjectsDocument,
    "query GetProjectBySlug($slug: String!) {\n  allProject(where: {slug: {current: {eq: $slug}}}, limit: 1) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    lede {\n      nl\n      en\n      fr\n    }\n    role {\n      nl\n      en\n      fr\n    }\n    timeline {\n      nl\n      en\n      fr\n    }\n    projectType {\n      nl\n      en\n      fr\n    }\n    languages\n    liveUrl\n    sourceUrl\n    url\n    sections {\n      ...SectionFields\n    }\n    text {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    features {\n      title {\n        nl\n        en\n        fr\n      }\n      content {\n        nlRaw\n        enRaw\n        frRaw\n      }\n    }\n  }\n}": types.GetProjectBySlugDocument,
    "fragment ImageFields on Image {\n  asset {\n    _id\n    altText\n  }\n  hotspot {\n    x\n    y\n    width\n    height\n  }\n  crop {\n    top\n    bottom\n    left\n    right\n  }\n}": types.ImageFieldsFragmentDoc,
    "fragment SectionFields on ProjectSection {\n  type\n  anchor {\n    current\n  }\n  title {\n    nl\n    en\n    fr\n  }\n  body {\n    nlRaw\n    enRaw\n    frRaw\n  }\n  points {\n    nl\n    en\n    fr\n  }\n  steps {\n    title {\n      nl\n      en\n      fr\n    }\n    text {\n      nl\n      en\n      fr\n    }\n  }\n  features {\n    label\n    title {\n      nl\n      en\n      fr\n    }\n    content {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    points {\n      nl\n      en\n      fr\n    }\n    url\n    image {\n      ...ImageFields\n    }\n  }\n  decisions {\n    title {\n      nl\n      en\n      fr\n    }\n    text {\n      nl\n      en\n      fr\n    }\n  }\n  images {\n    caption {\n      nl\n      en\n      fr\n    }\n    url\n    image {\n      ...ImageFields\n    }\n  }\n}": types.SectionFieldsFragmentDoc,
    "fragment TagFields on TechStack {\n  _id\n  title\n}": types.TagFieldsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetExperiences($limit: Int = 12) {\n  allExperience(\n    where: {slug: {current: {is_defined: true}}}\n    sort: [{publishedAt: DESC}]\n    limit: $limit\n  ) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    timespan {\n      nl\n      en\n      fr\n    }\n    description {\n      nlRaw\n      enRaw\n      frRaw\n    }\n  }\n}"): (typeof documents)["query GetExperiences($limit: Int = 12) {\n  allExperience(\n    where: {slug: {current: {is_defined: true}}}\n    sort: [{publishedAt: DESC}]\n    limit: $limit\n  ) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    timespan {\n      nl\n      en\n      fr\n    }\n    description {\n      nlRaw\n      enRaw\n      frRaw\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetExperienceBySlug($slug: String!) {\n  allExperience(where: {slug: {current: {eq: $slug}}}, limit: 1) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    timespan {\n      nl\n      en\n      fr\n    }\n    description {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    text {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    tasks {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    project {\n      title\n      slug {\n        current\n      }\n    }\n  }\n}"): (typeof documents)["query GetExperienceBySlug($slug: String!) {\n  allExperience(where: {slug: {current: {eq: $slug}}}, limit: 1) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    timespan {\n      nl\n      en\n      fr\n    }\n    description {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    text {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    tasks {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    project {\n      title\n      slug {\n        current\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProjects($limit: Int = 12) {\n  allProject(\n    where: {slug: {current: {is_defined: true}}}\n    sort: [{publishedAt: DESC}]\n    limit: $limit\n  ) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n  }\n}"): (typeof documents)["query GetProjects($limit: Int = 12) {\n  allProject(\n    where: {slug: {current: {is_defined: true}}}\n    sort: [{publishedAt: DESC}]\n    limit: $limit\n  ) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProjectBySlug($slug: String!) {\n  allProject(where: {slug: {current: {eq: $slug}}}, limit: 1) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    lede {\n      nl\n      en\n      fr\n    }\n    role {\n      nl\n      en\n      fr\n    }\n    timeline {\n      nl\n      en\n      fr\n    }\n    projectType {\n      nl\n      en\n      fr\n    }\n    languages\n    liveUrl\n    sourceUrl\n    url\n    sections {\n      ...SectionFields\n    }\n    text {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    features {\n      title {\n        nl\n        en\n        fr\n      }\n      content {\n        nlRaw\n        enRaw\n        frRaw\n      }\n    }\n  }\n}"): (typeof documents)["query GetProjectBySlug($slug: String!) {\n  allProject(where: {slug: {current: {eq: $slug}}}, limit: 1) {\n    _id\n    title\n    slug {\n      current\n    }\n    publishedAt\n    mainImage {\n      ...ImageFields\n    }\n    tags {\n      ...TagFields\n    }\n    lede {\n      nl\n      en\n      fr\n    }\n    role {\n      nl\n      en\n      fr\n    }\n    timeline {\n      nl\n      en\n      fr\n    }\n    projectType {\n      nl\n      en\n      fr\n    }\n    languages\n    liveUrl\n    sourceUrl\n    url\n    sections {\n      ...SectionFields\n    }\n    text {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    features {\n      title {\n        nl\n        en\n        fr\n      }\n      content {\n        nlRaw\n        enRaw\n        frRaw\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ImageFields on Image {\n  asset {\n    _id\n    altText\n  }\n  hotspot {\n    x\n    y\n    width\n    height\n  }\n  crop {\n    top\n    bottom\n    left\n    right\n  }\n}"): (typeof documents)["fragment ImageFields on Image {\n  asset {\n    _id\n    altText\n  }\n  hotspot {\n    x\n    y\n    width\n    height\n  }\n  crop {\n    top\n    bottom\n    left\n    right\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SectionFields on ProjectSection {\n  type\n  anchor {\n    current\n  }\n  title {\n    nl\n    en\n    fr\n  }\n  body {\n    nlRaw\n    enRaw\n    frRaw\n  }\n  points {\n    nl\n    en\n    fr\n  }\n  steps {\n    title {\n      nl\n      en\n      fr\n    }\n    text {\n      nl\n      en\n      fr\n    }\n  }\n  features {\n    label\n    title {\n      nl\n      en\n      fr\n    }\n    content {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    points {\n      nl\n      en\n      fr\n    }\n    url\n    image {\n      ...ImageFields\n    }\n  }\n  decisions {\n    title {\n      nl\n      en\n      fr\n    }\n    text {\n      nl\n      en\n      fr\n    }\n  }\n  images {\n    caption {\n      nl\n      en\n      fr\n    }\n    url\n    image {\n      ...ImageFields\n    }\n  }\n}"): (typeof documents)["fragment SectionFields on ProjectSection {\n  type\n  anchor {\n    current\n  }\n  title {\n    nl\n    en\n    fr\n  }\n  body {\n    nlRaw\n    enRaw\n    frRaw\n  }\n  points {\n    nl\n    en\n    fr\n  }\n  steps {\n    title {\n      nl\n      en\n      fr\n    }\n    text {\n      nl\n      en\n      fr\n    }\n  }\n  features {\n    label\n    title {\n      nl\n      en\n      fr\n    }\n    content {\n      nlRaw\n      enRaw\n      frRaw\n    }\n    points {\n      nl\n      en\n      fr\n    }\n    url\n    image {\n      ...ImageFields\n    }\n  }\n  decisions {\n    title {\n      nl\n      en\n      fr\n    }\n    text {\n      nl\n      en\n      fr\n    }\n  }\n  images {\n    caption {\n      nl\n      en\n      fr\n    }\n    url\n    image {\n      ...ImageFields\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment TagFields on TechStack {\n  _id\n  title\n}"): (typeof documents)["fragment TagFields on TechStack {\n  _id\n  title\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;