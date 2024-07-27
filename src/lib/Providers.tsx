'use client';

import ThemeProvider from '@/components/theme/ThemeProvider';

export default function Providers({ children }: any) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
