import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ali Umair - Flutter Developer',
  description: 'Professional portfolio of Ali Umair, a passionate Flutter developer specializing in creating beautiful and high-performance mobile applications.',
  keywords: ['portfolio', 'flutter', 'developer', 'mobile apps', 'dart', 'firebase', 'cross-platform'],
  authors: [{ name: 'Ali Umair' }],
  creator: 'Ali Umair',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ali-umair-portfolio.com',
    title: 'Ali Umair - Flutter Developer',
    description: 'Professional portfolio showcasing innovative mobile applications and development expertise.',
    siteName: 'Ali Umair Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Umair - Flutter Developer',
    description: 'Professional portfolio showcasing innovative mobile applications and development expertise.',
    creator: '@AliUmair',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}