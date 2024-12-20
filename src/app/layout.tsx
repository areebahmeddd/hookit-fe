import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from './providers';

import './globals.css';
import { ThemeProvider } from 'next-themes';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Hookit',
  description: 'Workflow Management System',
  openGraph: {
    title: 'Hookit',
    description: 'Workflow Management System',
    type: 'website',
    url: 'https://hookit.vercel.app',
    images: ['https://hookit.vercel.app/og-image.png'],
    siteName: 'Hookit',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
