/* eslint-disable react/no-children-prop */

import RootLayoutClient from '@/layouts/RootLayout.client';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Roboto } from 'next/font/google';
import '../../src/styles/globals.css';

//Dynamic imports for client-side only components
const DynamicAOSInit = dynamic(
  () => import('../providers/AOSProvider').then((mod) => mod.AOSInit),
  { ssr: false }
);
const DynamicToastProvider = dynamic(
  () => import('../providers/ToastProvider'),
  { ssr: false }
);

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nextjs-rnd : Let's try the latest version of Next.js!",
  description:
    'This might be called as nextjs starter pack with its latest version and some other cool stuffs like typescript, tailwindcss, animation, and more!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <DynamicAOSInit />
        <DynamicToastProvider />
        <RootLayoutClient children={children} />
      </body>
    </html>
  );
}
