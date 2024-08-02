'use client';
import ThemeProvider from '@/providers/ThemeProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
