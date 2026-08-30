import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Anniversary Party Vadodara | Celebrate Your Marriage Milestone',
  description: 'Host a memorable wedding anniversary party in Vadodara. Intimate gatherings to grand celebrations. Family events, couple parties & milestone celebrations. Book now!',
  keywords: 'wedding anniversary party vadodara, anniversary party planning, marriage anniversary celebration, anniversary event vadodara',
  openGraph: {
    title: 'Wedding Anniversary Party in Vadodara',
    description: 'Celebrate your marriage milestone with a memorable anniversary party.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
