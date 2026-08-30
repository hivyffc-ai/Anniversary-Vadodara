/**
 * MAIN PAGE - ANNIVERSARY CELEBRATION VADODARA
 * The main home page for Anniversary Celebration - Vadodara
 * Comprehensive SEO-optimized landing page with all keywords and areas
 */

import { Metadata } from "next";
import AnniversaryHomePage from "@/components/anniversary-home-page";
import { siteConfig, anniversaryKeywords, vadodaraAreas } from "@/lib/anniversary-config";

// Generate all keywords for metadata
const allKeywords = [
  // Primary Keywords
  'anniversary celebration vadodara',
  'wedding anniversary vadodara',
  'anniversary party vadodara',
  'anniversary venue vadodara',
  // Service Keywords
  ...anniversaryKeywords.map(k => k.slug.replace(/-/g, ' ')),
  // Area Keywords
  ...vadodaraAreas.map(a => `anniversary celebration ${a.name.toLowerCase()} vadodara`),
  // Additional SEO Keywords
  'best anniversary celebration vadodara',
  'romantic anniversary dinner vadodara',
  'private anniversary venue vadodara',
  'anniversary surprise planning vadodara',
  'couple celebration vadodara',
  'anniversary restaurants vadodara',
  'rooftop anniversary vadodara',
  'candlelight dinner anniversary vadodara'
];

// Dynamic metadata for Anniversary Celebration Vadodara
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Anniversary Celebration Vadodara | Best Romantic Anniversary Venue for Couples`,
    description: `Vadodara's premier anniversary celebration venue. Book romantic private celebrations for 1st, 5th, 10th, 25th, 50th anniversary & more. Candlelight dinners, elegant decorations, surprise setups. Serving Alkapuri, Akota, Fatehgunj & all Vadodara areas. Call +91 7487888730`,
    keywords: allKeywords,
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `Anniversary Celebration Vadodara | Romantic Private Venues for Couples`,
      description: `Create magical anniversary memories at Vadodara's best celebration venue. Private rooftop & glass house settings, candlelight dinners, elegant decorations. Perfect for 1st to 50th anniversaries. Book now!`,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.website}/images/gallery/anniversary-celebration-vadodara-1.jpg`,
          width: 1200,
          height: 630,
          alt: 'Anniversary Celebration Vadodara - Romantic Private Venue'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Anniversary Celebration Vadodara | Best Romantic Venue`,
      description: `Book romantic anniversary celebrations in Vadodara. Private venues, candlelight dinners, elegant decorations. Call +91 7487888730`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: ['c1b155cb6acd07f9', '449567c9b7854ff6'],
    },
  };
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.website,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    postalCode: '391101',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.3,
    longitude: 73.1
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '17:00',
    closes: '23:00'
  },
  priceRange: '₹4700 - ₹6900',
  image: `${siteConfig.website}/images/gallery/anniversary-celebration-vadodara-1.jpg`,
  sameAs: [
    siteConfig.socialLinks.instagram,
    siteConfig.socialLinks.facebook
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1'
  },
  areaServed: vadodaraAreas.map(area => ({
    '@type': 'City',
    name: `${area.name}, Vadodara`
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Anniversary Celebration Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Eternal Love Celebration',
          description: 'Premium rooftop anniversary celebration with cake included'
        },
        price: '6900',
        priceCurrency: 'INR'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Golden Memories Glass House',
          description: 'Elegant glass house anniversary celebration'
        },
        price: '6500',
        priceCurrency: 'INR'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Intimate Anniversary Celebration',
          description: 'Simple yet elegant anniversary setup'
        },
        price: '4700',
        priceCurrency: 'INR'
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnniversaryHomePage />
    </>
  );
}