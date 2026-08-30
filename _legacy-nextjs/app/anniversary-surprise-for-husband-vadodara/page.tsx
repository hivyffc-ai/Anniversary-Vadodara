import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Anniversary Surprise for Husband Vadodara | Special Setup',
  description: 'Plan a memorable anniversary surprise for your husband in Vadodara. Romantic decorations, private venue, and personalized celebration setup.',
  alternates: {
    canonical: '/anniversary-surprise-for-husband-vadodara',
  },
  openGraph: {
    title: 'Anniversary Surprise for Husband Vadodara | Special Setup',
    description: 'Plan a memorable anniversary surprise for your husband in Vadodara. Romantic decorations, private venue, and personalized celebration setup.',
    url: `${siteConfig.website}/anniversary-surprise-for-husband-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anniversary Surprise for Husband Vadodara | Special Setup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anniversary Surprise for Husband Vadodara | Special Setup',
    description: 'Plan a memorable anniversary surprise for your husband in Vadodara. Romantic decorations, private venue, and personalized celebration setup.',
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
