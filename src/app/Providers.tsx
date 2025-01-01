'use client';

import Appbar from '@/components/Appbar';
import Footer from '@/components/landing/footer/Footer';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <main>
      <Appbar />
      {children}
      <Footer />
    </main>
  );
}
