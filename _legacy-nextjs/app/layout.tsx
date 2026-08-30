import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#BE185D", // Rose-700 for Anniversary theme
};

export const metadata: Metadata = {
  metadataBase: new URL("https://anniversarydinnervadodara.com"),
  title: {
    default: "Anniversary Celebration Vadodara | Best Anniversary Venues & Romantic Dinner Packages",
    template: "%s | Anniversary Celebration Vadodara",
  },
  description:
    "Vadodara's premier anniversary celebration destination. Elegant private venues, romantic decorations, candlelight dinners & personalized packages for couples. 100% private rooftop & glass house. Starting ₹4,700. Call +91 74878 88730.",
  keywords: [
    "anniversary celebration vadodara",
    "wedding anniversary vadodara",
    "anniversary dinner vadodara",
    "anniversary surprise vadodara",
    "anniversary decoration vadodara",
    "romantic anniversary date vadodara",
    "anniversary venues vadodara",
    "private anniversary celebration",
    "anniversary restaurants vadodara",
    "first anniversary celebration",
    "25th anniversary celebration vadodara",
    "silver jubilee celebration vadodara",
    "10th anniversary vadodara",
    "anniversary planners vadodara",
    "rooftop anniversary celebration",
    "candlelight anniversary dinner",
    "surprise anniversary party vadodara",
    "anniversary celebration ideas vadodara"
  ],
  authors: [{ name: "Anniversary Celebration Vadodara", url: "https://anniversarydinnervadodara.com" }],
  creator: "Anniversary Celebration Vadodara",
  publisher: "Anniversary Celebration Vadodara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Event Venue",
  classification: "Anniversary Celebration Venue",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anniversarydinnervadodara.com",
    siteName: "Anniversary Celebration Vadodara",
    title: "Anniversary Celebration Vadodara | Best Anniversary Venues & Packages",
    description: "Vadodara's premier anniversary celebration destination. Private venues, romantic decorations, candlelight dinners. Starting ₹4,700.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anniversary Celebration Vadodara - Romantic Anniversary Venues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anniversary Celebration Vadodara | Premier Anniversary Venues",
    description: "Vadodara's best anniversary celebration destination. Private venues, romantic dinners & personalized packages. Starting ₹4,700.",
    images: ["/images/twitter-image.jpg"],
    creator: "@anniversaryvadodara",
    site: "@anniversaryvadodara",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: ['c1b155cb6acd07f9', '449567c9b7854ff6'],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara",
    "geo.position": "22.3072;73.1812",
    "ICBM": "22.3072, 73.1812",
  },
};

// JSON-LD Structured Data for Anniversary Celebration SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://anniversarydinnervadodara.com/#business",
      "name": "Anniversary Celebration Vadodara",
      "alternateName": "Anniversary Celebration Vadodara",
      "description": "Vadodara's premier anniversary celebration destination. Elegant private venues, romantic decorations, candlelight dinners, and personalized celebration packages for couples.",
      "url": "https://anniversarydinnervadodara.com",
      "telephone": "+91-7487888730",
      "email": "hello@anniversarydinnervadodara.com",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
      "image": [
        "https://anniversarydinnervadodara.com/images/gallery/anniversary-celebration-vadodara-1.jpg",
        "https://anniversarydinnervadodara.com/images/gallery/anniversary-dinner-setup-vadodara-1.jpg",
        "https://anniversarydinnervadodara.com/images/gallery/romantic-table-decoration-vadodara-1.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa",
        "addressLocality": "Gotri",
        "addressRegion": "Gujarat",
        "postalCode": "391101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.3072",
        "longitude": "73.1812"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/anniversarycelebrationvadodara/",
        "https://www.facebook.com/anniversarycelebrationvadodara/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Anniversary Celebration Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Eternal Love Celebration",
              "description": "Premium anniversary celebration with rooftop setup, decorations, cake & candlelight dinner"
            },
            "price": "6900",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golden Memories Glass House",
              "description": "Elegant glass house anniversary celebration with premium decorations"
            },
            "price": "6500",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Intimate Anniversary Celebration",
              "description": "Private anniversary celebration with elegant decorations"
            },
            "price": "4700",
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://anniversarydinnervadodara.com/#website",
      "url": "https://anniversarydinnervadodara.com",
      "name": "Anniversary Celebration Vadodara",
      "description": "Vadodara's premier anniversary celebration destination",
      "publisher": {
        "@id": "https://anniversarydinnervadodara.com/#business"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://anniversarydinnervadodara.com/#organization",
      "name": "Anniversary Celebration Vadodara",
      "url": "https://anniversarydinnervadodara.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://anniversarydinnervadodara.com/images/logo.png",
        "width": "512",
        "height": "512"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7487888730",
        "contactType": "reservations",
        "areaServed": "Vadodara",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://anniversarydinnervadodara.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://anniversarydinnervadodara.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Anniversary Packages",
          "item": "https://anniversarydinnervadodara.com/packages"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "About Us",
          "item": "https://anniversarydinnervadodara.com/about"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
