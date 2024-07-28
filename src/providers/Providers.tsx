'use client';
import ThemeProvider from '@/providers/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </>
  );
}
