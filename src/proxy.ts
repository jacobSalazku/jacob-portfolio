import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales } from './navigation';

const NextIntlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
});

export function proxy(req: NextRequest): NextResponse {
  // `/` is redirected to `/home` in next.config.mjs, before this runs
  return NextIntlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)'],
};
