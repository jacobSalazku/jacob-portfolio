import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation/navigation';
import { SITE_URL } from '@/utils/site-url';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';

const interFont = Inter({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Jacob Salazaku ',
    template: ' %s | Jacob Salazaku',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  description:
    'Portfolio Jacob Salazaku met projecten en alle  informatie over Jacob Salazaku',
  keywords: ['developer, front-end develop,'],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Website Jacob Salazaku',
    description:
      'Portfolio Jacob Salazaku met projecten en alle informatie over Jacob Salazaku',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jacob Salazaku Website',
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="motion-safe:scroll-smooth"
      data-scroll-behavior="smooth"
    >
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes
          to <body> before React hydrates; only this element ignores the mismatch */}
      <body className={interFont.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <div className="bg-ambient flex min-h-screen w-full flex-col items-center overflow-x-clip">
            <Navigation locale={locale} />
            <div className="w-full max-w-site flex-1 pt-2">{children}</div>
          </div>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
