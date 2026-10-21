import { TagIcon } from '@sanity/icons/Tag';
import { defineField, defineType } from 'sanity';

export const techStackType = defineType({
  name: 'techStack',
  title: 'TechStack',
  type: 'document',
  icon: TagIcon,
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
      name: 'description',
      type: 'text',
    }),
  ],
});
