import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Footer } from '@/components';
import './globals.css';

const Lexendfont = Lexend({ weight: ['400', '300'], subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_LOCAL_BASE_URL ?? ''),
  title: {
    default: 'Jacob Salazaku ',
    template: ' %s | Jacob Salazaku',
  },
  icons: [
    {
      url: '/logo.png',
    },
  ],

  description:
    'Portfolio Jacob Salazaku met  projecten en alle  informatie over Jacob Salazaku',
  keywords: ['developer, front-end develop,'],
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_LOCAL_BASE_URL}/blog`,
    title: 'Website Jacob Salazaku',
    description:
      'Portfolio Jacob Salazaku met  projecten en alle  informatie over Jacob Salazaku',
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
        <main className="oveflow-hidden mx-auto my-0 flex min-h-screen max-w-[1440px] flex-col items-center scroll-smooth">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
