import { defineField, defineType } from 'sanity';

export const galleryImageType = defineType({
  title: 'Browser window',
  name: 'galleryImage',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      type: 'localizedTitle',
      description: 'The name shown in the browser window',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Address bar label',
      description: 'Text shown in the browser window, not a link',
    }),
  ],
  preview: {
    select: { title: 'caption.en', fallbackTitle: 'caption.nl' },
    prepare: ({ title, fallbackTitle }) => ({
      title: title || fallbackTitle || 'Untitled window',
    }),
  },
});
