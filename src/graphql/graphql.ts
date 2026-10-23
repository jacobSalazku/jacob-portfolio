import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };

export type GetExperiencesQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;

export type GetExperiencesQuery = {
  allExperience: Array<{
    _id: string | null;
    title: string | null;
    publishedAt: string | null;
    initials: string | null;
    slug: { current: string | null } | null;
    lede: { nl: string | null; en: string | null; fr: string | null } | null;
    role: { nl: string | null; en: string | null; fr: string | null } | null;
    duration: {
      nl: string | null;
      en: string | null;
      fr: string | null;
    } | null;
    tags: Array<{ _id: string | null; title: string | null } | null> | null;
    timespan: {
      nl: string | null;
      en: string | null;
      fr: string | null;
    } | null;
    description: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
  }>;
};

export type GetExperienceBySlugQueryVariables = Exact<{
  slug: string;
}>;

export type GetExperienceBySlugQuery = {
  allExperience: Array<{
    _id: string | null;
    title: string | null;
    publishedAt: string | null;
    initials: string | null;
    url: string | null;
    slug: { current: string | null } | null;
    lede: { nl: string | null; en: string | null; fr: string | null } | null;
    role: { nl: string | null; en: string | null; fr: string | null } | null;
    duration: {
      nl: string | null;
      en: string | null;
      fr: string | null;
    } | null;
    team: { nl: string | null; en: string | null; fr: string | null } | null;
    focus: { nl: string | null; en: string | null; fr: string | null } | null;
    sections: Array<{
      type: string | null;
      anchor: { current: string | null } | null;
      title: { nl: string | null; en: string | null; fr: string | null } | null;
      body: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
      points: Array<{
        nl: string | null;
        en: string | null;
        fr: string | null;
      } | null> | null;
      steps: Array<{
        title: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
        text: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
      } | null> | null;
      features: Array<{
        label: string | null;
        icon: string | null;
        url: string | null;
        category: {
          _id: string | null;
          icon: string | null;
          title: {
            nl: string | null;
            en: string | null;
            fr: string | null;
          } | null;
        } | null;
        title: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
        content: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
        points: Array<{
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null> | null;
      } | null> | null;
      decisions: Array<{
        title: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
        text: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
      } | null> | null;
      images: Array<{
        url: string | null;
        caption: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
      } | null> | null;
    } | null> | null;
    tags: Array<{ _id: string | null; title: string | null } | null> | null;
    timespan: {
      nl: string | null;
      en: string | null;
      fr: string | null;
    } | null;
    description: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
    text: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
    tasks: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
    project: {
      title: string | null;
      slug: { current: string | null } | null;
    } | null;
  }>;
};

export type GetProjectsQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;

export type GetProjectsQuery = {
  allProject: Array<{
    _id: string | null;
    title: string | null;
    publishedAt: string | null;
    url: string | null;
    slug: { current: string | null } | null;
    lede: { nl: string | null; en: string | null; fr: string | null } | null;
    projectType: {
      nl: string | null;
      en: string | null;
      fr: string | null;
    } | null;
    text: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
    tags: Array<{ _id: string | null; title: string | null } | null> | null;
  }>;
};

export type GetProjectBySlugQueryVariables = Exact<{
  slug: string;
}>;

export type GetProjectBySlugQuery = {
  allProject: Array<{
    _id: string | null;
    title: string | null;
    publishedAt: string | null;
    languages: Array<string | null> | null;
    liveUrl: string | null;
    sourceUrl: string | null;
    url: string | null;
    slug: { current: string | null } | null;
    tags: Array<{ _id: string | null; title: string | null } | null> | null;
    lede: { nl: string | null; en: string | null; fr: string | null } | null;
    role: { nl: string | null; en: string | null; fr: string | null } | null;
    timeline: {
      nl: string | null;
      en: string | null;
      fr: string | null;
    } | null;
    projectType: {
      nl: string | null;
      en: string | null;
      fr: string | null;
    } | null;
    sections: Array<{
      type: string | null;
      anchor: { current: string | null } | null;
      title: { nl: string | null; en: string | null; fr: string | null } | null;
      body: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
      points: Array<{
        nl: string | null;
        en: string | null;
        fr: string | null;
      } | null> | null;
      steps: Array<{
        title: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
        text: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
      } | null> | null;
      features: Array<{
        label: string | null;
        icon: string | null;
        url: string | null;
        category: {
          _id: string | null;
          icon: string | null;
          title: {
            nl: string | null;
            en: string | null;
            fr: string | null;
          } | null;
        } | null;
        title: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
        content: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
        points: Array<{
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null> | null;
      } | null> | null;
      decisions: Array<{
        title: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
        text: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
      } | null> | null;
      images: Array<{
        url: string | null;
        caption: {
          nl: string | null;
          en: string | null;
          fr: string | null;
        } | null;
      } | null> | null;
    } | null> | null;
    text: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
  }>;
};

export type SectionFieldsFragment = {
  type: string | null;
  anchor: { current: string | null } | null;
  title: { nl: string | null; en: string | null; fr: string | null } | null;
  body: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
  points: Array<{
    nl: string | null;
    en: string | null;
    fr: string | null;
  } | null> | null;
  steps: Array<{
    title: { nl: string | null; en: string | null; fr: string | null } | null;
    text: { nl: string | null; en: string | null; fr: string | null } | null;
  } | null> | null;
  features: Array<{
    label: string | null;
    icon: string | null;
    url: string | null;
    category: {
      _id: string | null;
      icon: string | null;
      title: { nl: string | null; en: string | null; fr: string | null } | null;
    } | null;
    title: { nl: string | null; en: string | null; fr: string | null } | null;
    content: { nlRaw: unknown; enRaw: unknown; frRaw: unknown } | null;
    points: Array<{
      nl: string | null;
      en: string | null;
      fr: string | null;
    } | null> | null;
  } | null> | null;
  decisions: Array<{
    title: { nl: string | null; en: string | null; fr: string | null } | null;
    text: { nl: string | null; en: string | null; fr: string | null } | null;
  } | null> | null;
  images: Array<{
    url: string | null;
    caption: { nl: string | null; en: string | null; fr: string | null } | null;
  } | null> | null;
};

export type TagFieldsFragment = { _id: string | null; title: string | null };

export const SectionFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SectionFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ProjectSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'anchor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'current' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'title' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'points' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'steps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'features' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'title' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'en' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fr' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'points' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decisions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'caption' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SectionFieldsFragment, unknown>;
export const TagFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TagFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TechStack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TagFieldsFragment, unknown>;
export const GetExperiencesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetExperiences' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '12' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allExperience' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'is_defined' },
                                  value: { kind: 'BooleanValue', value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedAt' },
                          value: { kind: 'EnumValue', value: 'DESC' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'current' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lede' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'duration' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'initials' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TagFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'timespan' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'description' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TagFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TechStack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetExperiencesQuery, GetExperiencesQueryVariables>;
export const GetExperienceBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetExperienceBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allExperience' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'slug' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'current' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lede' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'duration' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'team' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'focus' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'initials' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SectionFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TagFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'timespan' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'description' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tasks' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'project' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'slug' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'current' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SectionFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ProjectSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'anchor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'current' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'title' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'points' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'steps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'features' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'title' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'en' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fr' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'points' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decisions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'caption' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TagFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TechStack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetExperienceBySlugQuery,
  GetExperienceBySlugQueryVariables
>;
export const GetProjectsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProjects' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '12' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allProject' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'is_defined' },
                                  value: { kind: 'BooleanValue', value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedAt' },
                          value: { kind: 'EnumValue', value: 'DESC' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'current' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lede' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projectType' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TagFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TagFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TechStack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetProjectBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProjectBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allProject' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'slug' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'current' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TagFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lede' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'timeline' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projectType' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'languages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'liveUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sourceUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SectionFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SectionFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ProjectSection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'anchor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'current' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'title' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'points' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'steps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'features' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'title' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'en' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fr' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nlRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'enRaw' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'frRaw' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'points' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decisions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'text' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'caption' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'nl' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'en' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fr' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TagFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TechStack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProjectBySlugQuery,
  GetProjectBySlugQueryVariables
>;
