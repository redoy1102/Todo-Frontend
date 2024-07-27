'use client';

import { Toaster } from 'sonner';

const RootLayoutClient = ({ roboto, children }: any) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayoutClient;
