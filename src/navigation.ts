import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'nl'] as const;
export const localePrefix = 'always'; // Default
export const defaultLocale = 'nl'; // Default`
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix,
});
