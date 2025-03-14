import { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';

const Lexendfont = Lexend({
  weight: ['100', '200', '400', '300'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_BASE_URL ?? ''),
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
    url: `${process.env.NEXT_BASE_URL}`,
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
  params: { locale: string };
}>) {
  const { locale } = params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={Lexendfont.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="mx-auto my-0 flex min-h-screen w-full flex-col items-center overflow-hidden scroll-smooth bg-black-400">
            <div className="max-w-screen-3xl flex w-screen flex-row items-start justify-center">
              <Navigation locale={locale} />
              <div className="sm:pt-18 h-full min-h-screen w-full flex-col items-center justify-start transition-all duration-150 ease-in-out xxxs:pt-20 xs:flex lg:border-l lg:border-l-blue-50 lg:border-opacity-20 xl:w-8/12 xl:max-w-screen-lg 2xl:max-w-screen-xl">
                {children}
              </div>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
