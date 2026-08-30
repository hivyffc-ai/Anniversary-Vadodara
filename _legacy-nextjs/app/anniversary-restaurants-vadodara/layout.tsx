import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anniversary Restaurants Vadodara | Best Romantic Dining Spots 2026',
  description: 'Discover the best anniversary restaurants in Vadodara. Private dining, rooftop venues, candlelight setup. Compare top spots for romantic anniversary dinner. Book now!',
  keywords: 'anniversary restaurants vadodara, best restaurant for anniversary vadodara, romantic restaurants vadodara, couple restaurants vadodara',
  openGraph: {
    title: 'Best Anniversary Restaurants in Vadodara',
    description: 'Top romantic restaurants perfect for anniversary celebrations in Vadodara.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
