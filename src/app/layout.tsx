import type { Metadata } from "next";
import { Manrope, Quicksand } from 'next/font/google';
import './globals.css';
import og from '@/assets/images/og.png'

const base_font = Manrope({ subsets: ['latin'] });
const accent_font = Quicksand({
  subsets: ['latin'],
  variable: '--font-accent',
});

export const metadata: Metadata = {
  title: { default: 'Kuruwaa', template: '%s - Kuruwaa' },
  description: 'Accessible Care for a Balanced Life',

  openGraph: {
    type: 'website',
    url: 'https://kuruwa.vercel.app/',
    title: 'Kuruwaa',
    description:
      'Find the care you need, when you need it, and experience the peace of mind that comes from knowing you have a helping hand.',
    siteName: 'Kuruwaa',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${base_font.className} ${accent_font.variable}`}>
        {children}
      </body>
    </html>
  );
}
