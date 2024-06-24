import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Footer } from '@/components';
import './globals.css';

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
        url: '/jacob-open-graph.png',
        width: 567,
        height: 444,
        alt: 'Jacob Salazaku Website',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Lexendfont.className}>
        <main className="oveflow-hidden mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col items-center scroll-smooth">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
