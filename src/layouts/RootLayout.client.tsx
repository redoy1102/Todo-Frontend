'use client';

import DarkModeSwitcher from '@/components/shared/DarkModeSwitcher';
import Providers from '@/lib/providers';
import { Toaster } from 'sonner';

const RootLayoutClient = ({ session, roboto, children }: any) => {
  const toggleDarkMode = (mode: string) => {
    const html = document.getElementById('mainhtml');
    if (mode) {
      html?.classList.add('dark');
    } else {
      html?.classList.remove('dark');
    }
  };

  return (
    <html lang="en" id="mainhtml">
      <body className={roboto.className}>
        <DarkModeSwitcher toggleDarkMode={toggleDarkMode} />
        <Toaster />
        <Providers session={session}>
          <div className="min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayoutClient;
