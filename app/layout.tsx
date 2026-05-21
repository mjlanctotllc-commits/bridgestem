import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BridgeSTEM — Where Ideas Meet the Talent to Build Them',
  description:
    'BridgeSTEM empowers professionals, freelancers, and idea creators to collaborate, secure fair contributor structures, and develop products with reduced upfront costs—rewarding contributors with real ownership while transforming innovative ideas into thriving businesses.',
  keywords: 'startup collaboration, revenue share, contributor agreements, STEM innovation, equity-free startup',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: '#0A0F1E', color: '#fff', margin: 0 }}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
