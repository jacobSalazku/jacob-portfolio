import { defineArrayMember, defineField, defineType } from 'sanity';
import { featureIconOptions } from './featureIcons';

export const featureBlock = defineType({
  name: 'featureBlock',
  title: 'Feature Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedTitle',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'label',
      hidden: true,
      type: 'string',
      options: {
        list: [
          { title: 'Feature', value: 'feature' },
          { title: 'Core', value: 'core' },
          { title: 'Tool', value: 'tool' },
        ],
      },
      description: 'No longer shown on the site',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'featureCategory' }],
      description:
        'Features with the same category are shown together next to one icon',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      description: 'Icon when the feature has no category',
      options: { list: featureIconOptions },
    }),
    defineField({
      name: 'points',
      type: 'array',
      of: [defineArrayMember({ type: 'localizedTitle' })],
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Live link',
      description:
        'Optional full address (https://…) shown as a link next to the title. Opens in a new tab.',
      validation: (rule) =>
        rule
          .custom((value) =>
            !value || /^https:\/\//.test(value)
              ? true
              : 'Use a full https:// address',
          )
          .warning(),
    }),
  ],
});
