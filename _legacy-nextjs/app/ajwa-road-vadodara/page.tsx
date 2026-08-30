import { Metadata } from 'next';
import AnniversaryAreaPage from '@/components/anniversary-area-page';
import { getAreaBySlug, siteConfig } from '@/lib/anniversary-config';

const area = getAreaBySlug('ajwa-road-vadodara');

export const metadata: Metadata = {
  title: `Anniversary Celebration in Ajwa Road, Vadodara | ${siteConfig.name}`,
  description: 'Looking for anniversary celebration near Ajwa Road, Vadodara? Book romantic private venues with elegant decorations for your special day.',
  alternates: {
    canonical: '/ajwa-road-vadodara',
  },
};

export default function Page() {
  if (!area) return null;
  return <AnniversaryAreaPage area={area} />;
}
