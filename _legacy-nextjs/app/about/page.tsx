import { Metadata } from 'next';
import FFCAboutPage from '@/components/ffc-about-page';

export const metadata: Metadata = {
  title: 'About Us | Anniversary Celebration Vadodara',
  description: 'Learn about Anniversary Celebration Vadodara - Vadodara\'s premier romantic anniversary celebration venue for couples. Our story, mission, and commitment to creating unforgettable moments.',
  keywords: 'about anniversary celebration vadodara, romantic anniversary venue, couple celebration story, anniversary venue vadodara',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <FFCAboutPage />;
}
