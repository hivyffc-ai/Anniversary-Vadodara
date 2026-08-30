import { Metadata } from 'next';
import AnniversaryKeywordPage from '@/components/anniversary-keyword-page';
import { getKeywordBySlug } from '@/lib/anniversary-config';

const keyword = getKeywordBySlug('anniversary-candlelight-setup-vadodara');

export const metadata: Metadata = {
  title: keyword?.metaTitle || 'Anniversary Dinner Vadodara',
  description: keyword?.metaDescription || '',
  alternates: {
    canonical: '/anniversary-candlelight-setup-vadodara',
  },
};

export default function Page() {
  if (!keyword) return null;
  return <AnniversaryKeywordPage keyword={keyword} />;
}
