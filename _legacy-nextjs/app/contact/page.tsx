import { Metadata } from 'next';
import FFCContactPage from '@/components/ffc-contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | Anniversary Celebration Vadodara',
  description: 'Get in touch with Anniversary Celebration Vadodara. Book your romantic anniversary celebration, ask questions, or visit us. Call +91 74878 88730.',
  keywords: 'contact anniversary celebration vadodara, book anniversary celebration, romantic venue contact, anniversary venue vadodara contact',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <FFCContactPage />;
}
