import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anniversary Celebration Ideas Vadodara | 50+ Romantic Ideas for Couples',
  description: 'Looking for anniversary celebration ideas in Vadodara? Discover 50+ unique romantic ideas - candlelight dinners, surprise parties, rooftop setups & more. Call +91 7487888730!',
  keywords: 'anniversary celebration ideas vadodara, romantic anniversary ideas, unique anniversary celebration, anniversary surprise ideas vadodara',
  openGraph: {
    title: 'Anniversary Celebration Ideas in Vadodara',
    description: '50+ creative anniversary celebration ideas for couples in Vadodara.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
