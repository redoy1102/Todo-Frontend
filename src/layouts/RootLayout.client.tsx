'use client';

import ThemeToggle from '@/components/theme/Themetoggle';
import Providers from '@/lib/Providers';
import { Toaster } from 'sonner';

const RootLayoutClient = ({ children }: any) => {
  return (
    <>
      <Toaster />
      <Providers>
        <div className="absolute top-1 right-1 z-50">
          <ThemeToggle />
        </div>
        <main>{children}</main>
      </Providers>
    </>
  );
};

export default RootLayoutClient;
