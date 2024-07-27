'use client';

import Providers from '@/lib/providers';
import { Toaster } from 'sonner';

const RootLayoutClient = ({ session, roboto, children }: any) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster />
        <Providers session={session}>
          <div className="min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayoutClient;
