import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Anniversary Dinner Vadodara | Romantic Private Dining',
  description: 'Book a romantic anniversary dinner in Vadodara. Private venue, candlelight setting, elegant decorations, and personalized service for your special day.',
  alternates: {
    canonical: '/anniversary-dinner-vadodara',
  },
  openGraph: {
    title: 'Anniversary Dinner Vadodara | Romantic Private Dining',
    description: 'Book a romantic anniversary dinner in Vadodara. Private venue, candlelight setting, elegant decorations, and personalized service for your special day.',
    url: `${siteConfig.website}/anniversary-dinner-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anniversary Dinner Vadodara | Romantic Private Dining',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anniversary Dinner Vadodara | Romantic Private Dining',
    description: 'Book a romantic anniversary dinner in Vadodara. Private venue, candlelight setting, elegant decorations, and personalized service for your special day.',
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
