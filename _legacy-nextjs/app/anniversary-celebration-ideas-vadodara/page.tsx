import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Anniversary Celebration Ideas Vadodara | Creative Plans',
  description: 'Discover unique anniversary celebration ideas in Vadodara. From rooftop dinners to surprise parties, find the perfect way to celebrate.',
  alternates: {
    canonical: '/anniversary-celebration-ideas-vadodara',
  },
  openGraph: {
    title: 'Anniversary Celebration Ideas Vadodara | Creative Plans',
    description: 'Discover unique anniversary celebration ideas in Vadodara. From rooftop dinners to surprise parties, find the perfect way to celebrate.',
    url: `${siteConfig.website}/anniversary-celebration-ideas-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anniversary Celebration Ideas Vadodara | Creative Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anniversary Celebration Ideas Vadodara | Creative Plans',
    description: 'Discover unique anniversary celebration ideas in Vadodara. From rooftop dinners to surprise parties, find the perfect way to celebrate.',
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
