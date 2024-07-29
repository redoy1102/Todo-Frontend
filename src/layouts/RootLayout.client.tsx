'use client';

import ThemeToggle from '@/components/theme/Themetoggle';
import Providers from '@/providers/Providers';

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <div className="absolute bottom-0 left-1 z-50">
        <ThemeToggle />
      </div>
      <main>{children}</main>
    </Providers>
  );
};

export default RootLayoutClient;
