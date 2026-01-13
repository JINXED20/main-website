import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ORDEX - Smart Delivery Solutions',
  description: 'Next-generation delivery infrastructure for the modern world. Fast, reliable, and intelligent logistics.',
  keywords: ['delivery', 'logistics', 'shipping', 'API', 'Saudi Arabia', 'MENA'],
  authors: [{ name: 'ORDEX' }],
  openGraph: {
    title: 'ORDEX - Smart Delivery Solutions',
    description: 'Next-generation delivery infrastructure for the modern world.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
