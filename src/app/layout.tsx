import siteConfig from '@/config/siteConfig';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import Footer from '@/components/landing/footer/Footer';
import Appbar from '@/components/Appbar';

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
      <body className={`${globalFont.className} select-none`}>
        <Appbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
