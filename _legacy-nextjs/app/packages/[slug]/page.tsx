import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FFCPackageDetailPage from '@/components/ffc-package-detail-page';
import { packages, getPackageBySlug } from '@/lib/anniversary-config';

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  
  if (!pkg) {
    return {
      title: 'Package Not Found',
    };
  }

  return {
    title: `${pkg.name} ${pkg.emoji} | Anniversary Celebration Vadodara`,
    description: `${pkg.shortDescription} Book ${pkg.name} at Anniversary Celebration Vadodara for ₹${pkg.price.toLocaleString()}. Perfect for ${pkg.perfectFor.join(', ')}.`,
    keywords: `${pkg.name}, ${pkg.perfectFor.join(', ')}, anniversary celebration vadodara, romantic anniversary packages`,
    openGraph: {
      title: `${pkg.name} | Anniversary Celebration Vadodara`,
      description: pkg.shortDescription,
    },
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return <FFCPackageDetailPage package={pkg} />;
}
