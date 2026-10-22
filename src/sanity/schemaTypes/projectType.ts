import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'techStack' } })],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'lede',
      type: 'localizedText',
      description: 'Short introduction shown under the title',
    }),
    defineField({
      name: 'role',
      type: 'localizedTitle',
      description: 'For example: Frontend developer',
    }),
    defineField({
      name: 'timeline',
      type: 'localizedTitle',
      description: 'For example: 3 months',
    }),
    defineField({
      name: 'projectType',
      type: 'localizedTitle',
      description: 'For example: Web application',
    }),
    defineField({
      name: 'languages',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Dutch', value: 'nl' },
          { title: 'English', value: 'en' },
          { title: 'French', value: 'fr' },
        ],
      },
      description: 'Languages the project is available in',
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: 'liveUrl',
      type: 'url',
      title: 'Live site URL',
      validation: (rule) => rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'sourceUrl',
      type: 'url',
      title: 'Source code URL',
      validation: (rule) => rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Address bar label',
      description: 'Text shown in the browser window of the hero, not a link',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [defineArrayMember({ type: 'projectSection' })],
      description: 'Case study sections, shown in this order',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [defineArrayMember({ type: 'featureBlock' })],
    }),
  ],
});
