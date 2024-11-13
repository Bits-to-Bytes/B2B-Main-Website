'use client';

import Appbar from '@/components/Appbar';
import Footer from '@/components/landing/footer/Footer';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarInset>
        <Appbar />
        {children}
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
