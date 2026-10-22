import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'nl'] as const;
export const localePrefix = 'always'; // Default
export const defaultLocale = 'nl'; // Default`
export type Locale = (typeof locales)[number];
export type AppPathnames = keyof typeof pathnames;

export const pathnames = {
  '/home': '/home',
  '/resume.pdf': '/resume.pdf',
  '/projects': '/projects',
  '/projects/[slug]': '/projects/[slug]',
  '/experience': '/experience',
  '/experience/[slug]': '/experience/[slug]',
  'mailto:jacob.salazaku69@gmail.com': 'mailto:jacob.salazaku69@gmail.com',
};

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix,
});
