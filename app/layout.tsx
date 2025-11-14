import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import FontLoader from '../components/FontLoader';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Action.IT - Your Secure AI Meeting Assistant',
  description: 'An AI meeting assistant that joins your calls, posts summaries to your tools, then wipes the slate clean. Privacy-first, automated, intelligent.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <FontLoader />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}