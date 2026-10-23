import { defineType } from 'sanity';
import { supportedLanguages } from './blockContentType';

export const localizedTextType = defineType({
  title: 'Localized Text',
  name: 'localizedText',
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
    type: 'text',
    rows: 3,
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
});
