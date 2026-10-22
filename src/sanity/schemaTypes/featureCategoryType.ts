import { TagIcon } from '@sanity/icons/Tag';
import { defineField, defineType } from 'sanity';
import { featureIconMedia, featureIconOptions } from './featureIcons';

export const featureCategoryType = defineType({
  name: 'featureCategory',
  title: 'Feature category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'localizedTitle',
      validation: (rule) =>
        rule.custom((title?: { nl?: string; en?: string; fr?: string }) =>
          title?.nl || title?.en || title?.fr
            ? true
            : 'Fill in the title in at least one language',
        ),
    }),
    defineField({
      name: 'icon',
      type: 'string',
      description: 'Shown in the tile next to the grouped features',
      options: { list: featureIconOptions },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title.en', fallbackTitle: 'title.nl', icon: 'icon' },
    prepare: ({ title, fallbackTitle, icon }) => ({
      title: title || fallbackTitle || 'Untitled category',
      subtitle: icon,
      media: featureIconMedia[icon] ?? TagIcon,
    }),
  },
});
