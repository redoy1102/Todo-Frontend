'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Toaster } from 'sonner';

const RootLayoutClient = ({ roboto, children }: any) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="absolute bottom-0 left-0 z-50">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayoutClient;
