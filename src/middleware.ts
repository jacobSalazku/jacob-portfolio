import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales } from './navigation';

const NextIntlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
});

export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;

  // Redirect `/` to `/home`
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  return NextIntlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)'],
};
