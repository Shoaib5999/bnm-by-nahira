'use client'

import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>{process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Blooms & Gifts'}</title>
        <meta name="description" content="Beautiful handcrafted flower bouquets, custom cakes, and personalized gifts for every occasion" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
