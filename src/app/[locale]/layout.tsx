import { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Navigation } from '@/features/navigation';
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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={Lexendfont.className}>
        <NextIntlClientProvider messages={messages}>
          <main className="mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col items-center scroll-smooth">
            <Navigation />
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
