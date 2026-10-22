import { defineArrayMember, defineField, defineType } from 'sanity';

export const sectionTypes = [
  { title: 'Text', value: 'text' },
  { title: 'Steps', value: 'steps' },
  { title: 'Features', value: 'features' },
  { title: 'Decisions', value: 'decisions' },
  { title: 'Gallery', value: 'gallery' },
] as const;

type SectionValue = (typeof sectionTypes)[number]['value'];

// Hide a field unless the section has the given type
const onlyFor =
  (type: SectionValue) =>
  ({ parent }: { parent?: { type?: string } }) =>
    parent?.type !== type;

const ANCHOR_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

type SectionParent = {
  _key?: string;
  title?: { nl?: string; en?: string; fr?: string };
};

type SectionDocument = {
  sections?: { _key?: string; anchor?: { current?: string } }[];
};

export const projectSectionType = defineType({
  title: 'Section',
  name: 'projectSection',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: { list: [...sectionTypes], layout: 'radio' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'localizedTitle',
      description: 'Also used as the label in the table of contents',
      validation: (rule) =>
        rule.custom((title?: SectionParent['title']) =>
          title?.nl || title?.en || title?.fr
            ? true
            : 'Fill in the title in at least one language',
        ),
    }),
    defineField({
      name: 'anchor',
      type: 'slug',
      description: 'Used in the table of contents and the link to this section',
      options: {
        // Anchors only need to be unique inside one project; the validation
        // below checks that. Without this Sanity compares across all projects.
        isUnique: () => true,
        source: (_doc, { parent }) => {
          const { title } = (parent ?? {}) as SectionParent;
          return title?.en || title?.nl || title?.fr || '';
        },
      },
      validation: (rule) =>
        rule.required().custom((anchor, context) => {
          const value = anchor?.current;
          if (!value) return true;
          if (!ANCHOR_PATTERN.test(value)) {
            return 'Use lowercase letters, numbers and single hyphens';
          }
          const { _key } = (context.parent ?? {}) as SectionParent;
          const { sections = [] } = (context.document ?? {}) as SectionDocument;
          const isDuplicate = sections.some(
            (section) =>
              section._key !== _key && section.anchor?.current === value,
          );
          return isDuplicate
            ? 'This anchor is already used in this project'
            : true;
        }),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      hidden: onlyFor('text'),
    }),
    defineField({
      name: 'points',
      type: 'array',
      of: [defineArrayMember({ type: 'localizedTitle' })],
      hidden: onlyFor('text'),
    }),
    defineField({
      name: 'steps',
      type: 'array',
      hidden: onlyFor('steps'),
      of: [defineArrayMember({ type: 'projectStep' })],
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [defineArrayMember({ type: 'featureBlock' })],
      hidden: onlyFor('features'),
    }),
    defineField({
      name: 'decisions',
      type: 'array',
      hidden: onlyFor('decisions'),
      of: [defineArrayMember({ type: 'projectDecision' })],
    }),
    defineField({
      name: 'images',
      type: 'array',
      hidden: onlyFor('gallery'),
      of: [defineArrayMember({ type: 'galleryImage' })],
    }),
  ],
  preview: {
    select: { title: 'title.en', fallbackTitle: 'title.nl', type: 'type' },
    prepare: ({ title, fallbackTitle, type }) => ({
      title: title || fallbackTitle || 'Untitled section',
      subtitle: type,
    }),
  },
});
