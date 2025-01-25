import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Footer } from '@/components/footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';

const Lexendfont = Lexend({ weight: ['400', '300'], subsets: ['latin'] });
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
    'Portfolio Jacob Salazaku met  projecten en alle  informatie over Jacob Salazaku',
  keywords: ['developer, front-end develop,'],
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_BASE_URL}`,
    title: 'Website Jacob Salazaku',
    description:
      'Portfolio Jacob Salazaku met  projecten en alle  informatie over Jacob Salazaku',
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
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={Lexendfont.className}>
        <NextIntlClientProvider messages={messages}>
          <main className="oveflow-hidden mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col items-center scroll-smooth">
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
