import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Romantic Anniversary Date Vadodara | Perfect Date Night Ideas',
  description: 'Plan a romantic anniversary date in Vadodara. Candlelight dinner, movie under stars, couples spa & more date night ideas. Create unforgettable memories! Book now.',
  keywords: 'romantic anniversary date vadodara, anniversary date night ideas, romantic date for anniversary, couple date ideas vadodara',
  openGraph: {
    title: 'Romantic Anniversary Date Ideas in Vadodara',
    description: 'Perfect date night experiences for your anniversary celebration.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
