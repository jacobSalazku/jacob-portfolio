import { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { SITE_URL } from '@/utils/site-url';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';

const Lexendfont = Lexend({
  weight: ['100', '200', '400', '300'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Jacob Salazaku ',
    template: ' %s | Jacob Salazaku',
  },
  icons: [
    {
      url: '/jacob-app-icon.png',
    },
  ],
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
        url: '/jacob-og.png',
        width: 567,
        height: 444,
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
      <body className={Lexendfont.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="bg-ambient mx-auto my-0 flex min-h-screen w-full flex-col items-center overflow-x-clip scroll-smooth">
            <div className="max-w-screen-3xl flex w-screen flex-row items-start justify-center">
              <Navigation locale={locale} />
              <div className="sm:pt-18 h-full min-h-screen w-full flex-col items-center justify-start transition-all duration-150 ease-in-out xxxs:pt-20 xs:flex xl:w-8/12 xl:max-w-screen-lg xl:border-l xl:border-l-white/10 2xl:max-w-screen-xl">
                {children}
              </div>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
