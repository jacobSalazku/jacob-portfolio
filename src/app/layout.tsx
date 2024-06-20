import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Footer } from '@/components';
import { Navigation } from '@/features';
import './globals.css';

const Lexendfont = Lexend({ weight: ['400', '300'], subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Jacob Salazaku',
  description: 'Mijn portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Lexendfont.className}>
        <Navigation />
        <main className="oveflow-hidden mx-auto my-0 flex min-h-screen max-w-[1440px] flex-col items-center scroll-smooth">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
