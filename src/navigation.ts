import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const localePrefix = 'always'; // Default
export const defaultLocale = 'nl'; // Default

export type AppPathnames = keyof typeof pathnames;

export const pathnames = {
  // If all locales use the  pathname
  // single external path can be provided.
  '/': '/',
  '/resume.pdf': '/resume.pdf',
  '/projects/[slug]': '/projects/[slug]',
  '/#projects': '/#projects',
  '/#experience': '/#experience',
  'mailto:jacob.salazaku@student.kdg.be':
    'mailto:jacob.salazaku@student.kdg.be',
};

const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation();
export { Link, redirect, usePathname, useRouter };
