import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anniversary Venues Vadodara | Private Romantic Celebration Spots',
  description: 'Find the perfect anniversary venue in Vadodara. Private rooftops, garden settings, indoor theaters & more. Exclusive venues for intimate celebrations. Book now!',
  keywords: 'anniversary venues vadodara, romantic venues for anniversary, private celebration venues, anniversary party venues vadodara',
  openGraph: {
    title: 'Anniversary Venues in Vadodara',
    description: 'Exclusive private venues perfect for romantic anniversary celebrations.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
