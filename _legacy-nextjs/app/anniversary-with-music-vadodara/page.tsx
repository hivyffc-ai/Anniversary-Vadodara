import { Metadata } from 'next';
import AnniversaryKeywordPage from '@/components/anniversary-keyword-page';
import { getKeywordBySlug } from '@/lib/anniversary-config';

const keyword = getKeywordBySlug('anniversary-with-music-vadodara');

export const metadata: Metadata = {
  title: keyword?.metaTitle || 'Anniversary Dinner Vadodara',
  description: keyword?.metaDescription || '',
  alternates: {
    canonical: '/anniversary-with-music-vadodara',
  },
};

export default function Page() {
  if (!keyword) return null;
  return <AnniversaryKeywordPage keyword={keyword} />;
}
