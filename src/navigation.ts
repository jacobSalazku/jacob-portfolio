import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'nl'] as const;
export const localePrefix = 'always'; // Default
export const defaultLocale = 'nl'; // Default`
export type Locale = (typeof locales)[number];
export type AppPathnames = keyof typeof pathnames;

export const pathnames = {
  // If all locales use the  pathname
  // single external path can be provided.
  '/home': '/home',
  '/resume.pdf': '/resume.pdf',
  '/projects': '/projects',
  '/projects/[slug]': '/projects/[slug]',
  '/experience': '/experience',
  '/experience/[slug]': '/experience/[slug]',
  'mailto:jacob.salazaku@student.kdg.be':
    'mailto:jacob.salazaku@student.kdg.be',
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation();
