import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Romantic Anniversary Date Vadodara | Perfect Evening',
  description: 'Plan a romantic anniversary date in Vadodara with candlelight dinner, beautiful decorations, and intimate setting.',
  alternates: {
    canonical: '/romantic-anniversary-date-vadodara',
  },
  openGraph: {
    title: 'Romantic Anniversary Date Vadodara | Perfect Evening',
    description: 'Plan a romantic anniversary date in Vadodara with candlelight dinner, beautiful decorations, and intimate setting.',
    url: `${siteConfig.website}/romantic-anniversary-date-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Romantic Anniversary Date Vadodara | Perfect Evening',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romantic Anniversary Date Vadodara | Perfect Evening',
    description: 'Plan a romantic anniversary date in Vadodara with candlelight dinner, beautiful decorations, and intimate setting.',
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
