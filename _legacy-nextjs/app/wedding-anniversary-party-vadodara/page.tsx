import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Wedding Anniversary Party Vadodara | Private Celebration',
  description: 'Host a memorable wedding anniversary party in Vadodara. Private venue, beautiful decorations, and personalized service.',
  alternates: {
    canonical: '/wedding-anniversary-party-vadodara',
  },
  openGraph: {
    title: 'Wedding Anniversary Party Vadodara | Private Celebration',
    description: 'Host a memorable wedding anniversary party in Vadodara. Private venue, beautiful decorations, and personalized service.',
    url: `${siteConfig.website}/wedding-anniversary-party-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Anniversary Party Vadodara | Private Celebration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Anniversary Party Vadodara | Private Celebration',
    description: 'Host a memorable wedding anniversary party in Vadodara. Private venue, beautiful decorations, and personalized service.',
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
