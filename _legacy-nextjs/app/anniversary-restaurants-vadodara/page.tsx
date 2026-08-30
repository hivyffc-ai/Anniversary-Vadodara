import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Anniversary Restaurants Vadodara | Romantic Dining',
  description: 'Discover the best anniversary restaurants in Vadodara. Private dining, romantic ambiance, and special anniversary menus.',
  alternates: {
    canonical: '/anniversary-restaurants-vadodara',
  },
  openGraph: {
    title: 'Anniversary Restaurants Vadodara | Romantic Dining',
    description: 'Discover the best anniversary restaurants in Vadodara. Private dining, romantic ambiance, and special anniversary menus.',
    url: `${siteConfig.website}/anniversary-restaurants-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anniversary Restaurants Vadodara | Romantic Dining',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anniversary Restaurants Vadodara | Romantic Dining',
    description: 'Discover the best anniversary restaurants in Vadodara. Private dining, romantic ambiance, and special anniversary menus.',
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
