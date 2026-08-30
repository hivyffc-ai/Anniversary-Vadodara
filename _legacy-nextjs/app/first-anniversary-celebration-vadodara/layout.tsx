import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First Anniversary Celebration Vadodara | Paper Anniversary Ideas',
  description: 'Celebrate your 1st wedding anniversary in Vadodara! Paper anniversary gifts, romantic dinner, surprise decoration. Mark year one special! Packages from ₹3,999.',
  keywords: 'first anniversary celebration vadodara, 1st wedding anniversary vadodara, paper anniversary gifts, first year anniversary party',
  openGraph: {
    title: 'First Anniversary Celebration in Vadodara',
    description: 'Celebrate your paper anniversary with romantic experiences.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
