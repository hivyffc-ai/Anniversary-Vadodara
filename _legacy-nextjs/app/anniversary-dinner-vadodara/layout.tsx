import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anniversary Dinner Vadodara | Private Romantic Dining from ₹2,999',
  description: 'Plan a special anniversary dinner in Vadodara. Private candlelight setup, gourmet menu, romantic ambiance. Indoor & rooftop options available. Book now +91 7487888730!',
  keywords: 'anniversary dinner vadodara, romantic dinner for anniversary, private anniversary dinner, couple dinner vadodara',
  openGraph: {
    title: 'Anniversary Dinner in Vadodara',
    description: 'Intimate anniversary dinner experiences with private setup and gourmet cuisine.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
