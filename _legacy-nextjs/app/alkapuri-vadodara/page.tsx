import { Metadata } from 'next';
import ClientContent from './_client';
import { siteConfig } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: 'Anniversary Celebration in Alkapuri, Vadodara | Best Anniversary Venue',
  description: 'Book the best anniversary celebration in Alkapuri, Vadodara. Private venues, romantic decorations, candlelight dinners near Alkapuri. Starting ₹4,700. Call +91 7487888730.',
  alternates: {
    canonical: '/alkapuri-vadodara',
  },
  openGraph: {
    title: 'Anniversary Celebration in Alkapuri, Vadodara | Best Anniversary Venue',
    description: 'Book the best anniversary celebration in Alkapuri, Vadodara. Private venues, romantic decorations, candlelight dinners near Alkapuri. Starting ₹4,700. Call +91 7487888730.',
    url: `${siteConfig.website}/alkapuri-vadodara`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anniversary Celebration in Alkapuri, Vadodara | Best Anniversary Venue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anniversary Celebration in Alkapuri, Vadodara | Best Anniversary Venue',
    description: 'Book the best anniversary celebration in Alkapuri, Vadodara. Private venues, romantic decorations, candlelight dinners near Alkapuri. Starting ₹4,700. Call +91 7487888730.',
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
