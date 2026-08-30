import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'First Anniversary Celebration Vadodara | Paper Anniversary',
  description: 'Celebrate your first wedding anniversary in Vadodara with a special romantic setup. Mark one year of love in style.',
  alternates: {
    canonical: '/first-anniversary-celebration-vadodara',
  },
  openGraph: {
    title: 'First Anniversary Celebration Vadodara | Paper Anniversary',
    description: 'Celebrate your first wedding anniversary in Vadodara with a special romantic setup. Mark one year of love in style.',
    url: `${siteConfig.website}/first-anniversary-celebration-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'First Anniversary Celebration Vadodara | Paper Anniversary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Anniversary Celebration Vadodara | Paper Anniversary',
    description: 'Celebrate your first wedding anniversary in Vadodara with a special romantic setup. Mark one year of love in style.',
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
