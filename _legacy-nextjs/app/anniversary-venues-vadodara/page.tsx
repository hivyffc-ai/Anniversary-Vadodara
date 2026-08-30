import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Anniversary Venues Vadodara | Private Celebration Spaces',
  description: 'Find the perfect anniversary venue in Vadodara. Private rooftop spaces, glass houses, and elegant celebration venues for couples.',
  alternates: {
    canonical: '/anniversary-venues-vadodara',
  },
  openGraph: {
    title: 'Anniversary Venues Vadodara | Private Celebration Spaces',
    description: 'Find the perfect anniversary venue in Vadodara. Private rooftop spaces, glass houses, and elegant celebration venues for couples.',
    url: `${siteConfig.website}/anniversary-venues-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anniversary Venues Vadodara | Private Celebration Spaces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anniversary Venues Vadodara | Private Celebration Spaces',
    description: 'Find the perfect anniversary venue in Vadodara. Private rooftop spaces, glass houses, and elegant celebration venues for couples.',
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
