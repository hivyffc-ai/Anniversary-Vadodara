import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Anniversary Decoration Vadodara | Romantic Setup',
  description: 'Professional anniversary decoration services in Vadodara. Flowers, balloons, candles, and romantic themes for your celebration.',
  alternates: {
    canonical: '/anniversary-decoration-vadodara',
  },
  openGraph: {
    title: 'Anniversary Decoration Vadodara | Romantic Setup',
    description: 'Professional anniversary decoration services in Vadodara. Flowers, balloons, candles, and romantic themes for your celebration.',
    url: `${siteConfig.website}/anniversary-decoration-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anniversary Decoration Vadodara | Romantic Setup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anniversary Decoration Vadodara | Romantic Setup',
    description: 'Professional anniversary decoration services in Vadodara. Flowers, balloons, candles, and romantic themes for your celebration.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <ClientContent />;
}
