import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <main className="oveflow-hidden mx-auto my-0 flex min-h-screen max-w-[1440px] flex-col items-center scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
