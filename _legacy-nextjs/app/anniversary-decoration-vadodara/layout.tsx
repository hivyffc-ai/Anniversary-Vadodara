import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anniversary Decoration Vadodara | Romantic Room & Venue Decor from ₹2,999',
  description: 'Professional anniversary decoration services in Vadodara. Balloon decor, flower arrangements, candlelight setup & more. Home & venue decoration from ₹2,999. Book now!',
  keywords: 'anniversary decoration vadodara, romantic decoration vadodara, balloon decoration anniversary, flower decoration anniversary vadodara',
  openGraph: {
    title: 'Anniversary Decoration Services in Vadodara',
    description: 'Transform any space into a romantic paradise with our anniversary decoration services.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
