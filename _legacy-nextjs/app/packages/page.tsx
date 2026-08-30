import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Anniversary Packages | Anniversary Celebration Vadodara',
  description: 'Explore 8 unique romantic anniversary celebration packages at Anniversary Celebration Vadodara. From rooftop setups to glass house experiences. Starting from ₹4,700.',
  keywords: 'anniversary packages vadodara, romantic packages, wedding anniversary packages, candlelight dinner packages, anniversary celebration packages vadodara',
  alternates: {
    canonical: '/packages',
  },
};

export default function PackagesPage() {
  return <FFCPackagesPage />;
}
