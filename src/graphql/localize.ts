import type { LocalizedValue } from './types';

const FALLBACK_ORDER = ['nl', 'en', 'fr'];

// The value for the locale, or the first available language when the
// translation is missing (nl, then en, then fr).
export const localize = <T>(
  value: LocalizedValue<T> | undefined,
  locale: string,
): T | undefined => {
  if (!value) return undefined;
  for (const language of [locale, ...FALLBACK_ORDER]) {
    const translated = value[language];
    if (translated !== undefined) return translated;
  }
  return undefined;
};
