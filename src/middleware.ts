import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales } from './navigation';

const NextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  // Used when no locale matches
  defaultLocale,
});

export function middleware(req: NextRequest): NextResponse {
  console.log('Locale:', req.headers.get('Accept-Language'));
  return NextIntlMiddleware(req);
}

export const config = {
  //match all routes except those that start with /api, /_next, /_vercel, or contain a dot
  // will prefix nl where needed
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
