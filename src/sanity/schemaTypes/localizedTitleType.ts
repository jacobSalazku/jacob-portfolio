import { defineType } from 'sanity';
import { supportedLanguages } from './blockContentType';

export const localizedTitleType = defineType({
  title: 'Localized Title',
  name: 'localizedTitle',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
});
