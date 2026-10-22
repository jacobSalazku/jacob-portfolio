import { defineField, defineType } from 'sanity';

export const galleryImageType = defineType({
  title: 'Gallery image',
  name: 'galleryImage',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'caption',
      type: 'localizedTitle',
      description: 'Shown under the image and used as its alt text',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Address bar label',
      description: 'Text shown in the browser window, not a link',
    }),
  ],
  preview: {
    select: {
      title: 'caption.en',
      fallbackTitle: 'caption.nl',
      media: 'image',
    },
    prepare: ({ title, fallbackTitle, media }) => ({
      title: title || fallbackTitle || 'Untitled image',
      media,
    }),
  },
});
