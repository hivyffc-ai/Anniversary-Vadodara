import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Anniversary Surprise for Wife Vadodara | Make Her Day',
  description: 'Create a beautiful anniversary surprise for your wife in Vadodara. Elegant decorations, romantic ambiance, and thoughtful touches.',
  alternates: {
    canonical: '/anniversary-surprise-for-wife-vadodara',
  },
  openGraph: {
    title: 'Anniversary Surprise for Wife Vadodara | Make Her Day',
    description: 'Create a beautiful anniversary surprise for your wife in Vadodara. Elegant decorations, romantic ambiance, and thoughtful touches.',
    url: `${siteConfig.website}/anniversary-surprise-for-wife-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anniversary Surprise for Wife Vadodara | Make Her Day',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anniversary Surprise for Wife Vadodara | Make Her Day',
    description: 'Create a beautiful anniversary surprise for your wife in Vadodara. Elegant decorations, romantic ambiance, and thoughtful touches.',
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
