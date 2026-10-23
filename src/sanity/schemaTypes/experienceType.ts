import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'timespan',
      type: 'localizedTitle',
    }),
    defineField({
      name: 'lede',
      type: 'localizedText',
      title: 'Short description',
      description: 'One or two sentences, shown in the experience list',
    }),
    defineField({
      name: 'role',
      type: 'localizedTitle',
      description: 'For example: Front-End Developer Internship',
    }),
    defineField({
      name: 'duration',
      type: 'localizedTitle',
      description: 'For example: 4 months',
    }),
    defineField({
      name: 'team',
      type: 'localizedTitle',
      description: 'For example: Small team of developers',
    }),
    defineField({
      name: 'focus',
      type: 'localizedTitle',
      description: 'For example: Responsive, accessible pages',
    }),
    defineField({
      name: 'initials',
      type: 'string',
      description: 'Shown in the badge in the list, for example KdG',
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Address bar label',
      description: 'Text shown in the browser window, not a link',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'project',
      type: 'reference',
      to: { type: 'project' },
      title: 'Project',
      description: 'Select the project associated with this experience',
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
      name: 'description',
      type: 'blockContent',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
    defineField({
      name: 'tasks',
      type: 'blockContent',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [defineArrayMember({ type: 'projectSection' })],
      description: 'Key contributions, shown in this order',
    }),
  ],
});
