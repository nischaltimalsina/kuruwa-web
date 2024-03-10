import type { Metadata } from "next";
import { Manrope, Oxygen } from 'next/font/google';
import './globals.css';
import og from './opengraph-image.png';

const base_font = Manrope({ subsets: ['latin'] });
const accent_font = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-accent',
});

export const metadata: Metadata = {
  title: { default: 'Kuruwaa', template: '%s - Kuruwaa' },
  metadataBase: new URL('https://kuruwacare.com'),
  description: 'Accessible Care for a Balanced Life',
  openGraph: {
    type: 'website',
    url: 'https://kuruwacare.com/',
    title: 'Kuruwaa',
    description:
      'Find the care you need, when you need it, and experience the peace of mind that comes from knowing you have a helping hand.',
    siteName: 'Kuruwaa',
    images: [og.src],
  },
  twitter: {
    title: 'Kuruwaa',
    description:
      'Find the care you need, when you need it, and experience the peace of mind that comes from knowing you have a helping hand.',
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
      <body
        className={`${base_font.className} ${accent_font.variable}`}>
        {children}
      </body>
    </html>
  );
}
