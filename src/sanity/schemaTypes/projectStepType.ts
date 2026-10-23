import { defineField, defineType } from 'sanity';

export const projectStepType = defineType({
  title: 'Step',
  name: 'projectStep',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'localizedTitle' }),
    defineField({ name: 'text', type: 'localizedText' }),
  ],
  preview: {
    select: { title: 'title.en', fallbackTitle: 'title.nl' },
    prepare: ({ title, fallbackTitle }) => ({
      title: title || fallbackTitle || 'Untitled step',
    }),
  },
});
