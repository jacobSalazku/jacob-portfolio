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
  '/projects/kdg-stage': '/projects/kdg-stage',
  '/projects/resqcontrol': '/projects/resqcontrol',
  '/#projects': '/#projects',
  '/#experience': '/#experience',
};

const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation();
export { Link, redirect, usePathname, useRouter };
