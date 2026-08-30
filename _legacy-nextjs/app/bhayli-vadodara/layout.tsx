import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anniversary Celebration in Bhayli Vadodara | Villa & Poolside Romance',
  description: 'Anniversary celebration in Bhayli, Vadodara. Villa parties, poolside dinners & suburban romance. Near Vadodara-Halol Highway. Packages from ₹4,499!',
  keywords: 'anniversary celebration bhayli vadodara, villa anniversary party bhayli, poolside romantic dinner vadodara, suburban celebration bhayli',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
