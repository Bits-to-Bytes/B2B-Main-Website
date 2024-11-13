import siteConfig from '@/config/siteConfig';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import Providers from './Providers';

export const metadata = siteConfig;

const globalFont = Poppins({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${globalFont.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
