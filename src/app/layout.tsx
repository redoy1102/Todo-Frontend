/* eslint-disable react/no-children-prop */
import RootLayoutClient from '@/layouts/RootLayout.client';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Roboto } from 'next/font/google';
import '../../src/styles/globals.css';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <RootLayoutClient session={session} roboto={roboto} children={children} />
  );
}
