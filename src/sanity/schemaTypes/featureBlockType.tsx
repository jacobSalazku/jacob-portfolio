import { defineArrayMember, defineField, defineType } from 'sanity';

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
      type: 'string',
      options: {
        list: [
          { title: 'Feature', value: 'feature' },
          { title: 'Core', value: 'core' },
          { title: 'Tool', value: 'tool' },
        ],
      },
      description: 'Badge shown next to the title',
    }),
    defineField({
      name: 'points',
      type: 'array',
      of: [defineArrayMember({ type: 'localizedTitle' })],
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Address bar label',
      description: 'Text shown in the browser window, not a link',
    }),
  ],
});
