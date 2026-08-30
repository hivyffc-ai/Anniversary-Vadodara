'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCBookingFormInner, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { AreaConfig, packages, siteConfig, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';
import { generateAreaExpandedContent, generateAreaFAQContent } from '@/lib/seo-content-engine';
import { generateBreadcrumbSchema, generateServiceSchema, buildAreaBreadcrumbs } from '@/lib/schema-generator';

interface AnniversaryAreaPageProps {
  area: AreaConfig;
}

// Gallery images for area pages
const galleryImages = [
  '/images/gallery/IMG_20251108_195907946.jpg',
  '/images/gallery/IMG_20251117_201140680.jpg',
  '/images/gallery/IMG_20251126_195504828.jpg',
  '/images/gallery/IMG_20251130_190628327.jpg',
];

export default function AnniversaryAreaPage({ area }: AnniversaryAreaPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  
  // Hero slider auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  // Get top packages
  const topPackages = packages.slice(0, 3);

  // Get related keywords
  const relatedKeywords = anniversaryKeywords.slice(0, 8);

  // SEO Content Expansion: 700+ unique words + 10 unique FAQs with schema
  const seoContent = generateAreaExpandedContent(area.name, 'Vadodara', 'Friends Factory Cafe');
  const seoFAQs = generateAreaFAQContent(area.name, 'Vadodara', 'Friends Factory Cafe');
  const allFAQs = seoFAQs.faqs.slice(0, 10);

  const faqSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <main>
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-rose-800">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-rose-800">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-800 font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section — Homepage-style slider with booking form */}
      <section aria-label={`Anniversary Celebration in ${area.name}`} className="relative bg-gradient-to-br from-rose-800 via-amber-600 to-rose-900 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt={`Anniversary celebration in ${area.name} Vadodara - Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/70 via-rose-950/50 to-transparent" />

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === heroSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                📍 Serving {area.name}, Vadodara
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Anniversary Celebration in {area.name}, Vadodara
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Looking for the perfect anniversary celebration venue near {area.name}? We offer private rooftop and glass house venues with romantic decorations, just a short drive away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-rose-800 hover:bg-amber-50 text-lg px-8 py-6"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <MapPin className="h-4 w-4" /> Near {area.name}
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form — Desktop */}
            <div className="hidden lg:block">
              <FFCBookingFormInner variant="hero" pageTitle={`Anniversary in ${area.name}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form — Above the fold on mobile */}
      <section className="lg:hidden bg-gradient-to-r from-amber-50 via-amber-50 to-amber-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingFormInner pageTitle={`Anniversary in ${area.name}`} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section aria-label="Why Choose Us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-900">
              Anniversary Celebration Near {area.name}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-center mb-8">
                Residents of {area.name}, Vadodara can now celebrate their special anniversary at our premium venue. 
                Located in Gotri on Sevasi Canal Road, we're just a short drive from {area.name}. 
                Our private rooftop and glass house venues offer the perfect romantic setting for your milestone celebration.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <Card className="text-center border-amber-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rose-800" />
                  </div>
                  <h3 className="font-semibold mb-2">Near {area.name}</h3>
                  <p className="text-sm text-muted-foreground">15-20 mins drive from {area.name}</p>
                </CardContent>
              </Card>
              <Card className="text-center border-amber-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-800" />
                  </div>
                  <h3 className="font-semibold mb-2">Private Venue</h3>
                  <p className="text-sm text-muted-foreground">Exclusive space just for you</p>
                </CardContent>
              </Card>
              <Card className="text-center border-amber-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-rose-800" />
                  </div>
                  <h3 className="font-semibold mb-2">Premium Décor</h3>
                  <p className="text-sm text-muted-foreground">Elegant romantic decorations</p>
                </CardContent>
              </Card>
              <Card className="text-center border-amber-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-rose-800" />
                  </div>
                  <h3 className="font-semibold mb-2">3 Hours</h3>
                  <p className="text-sm text-muted-foreground">Ample celebration time</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section aria-label="Gallery" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-900">
            Our Anniversary Celebration Setups
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Anniversary celebration setup ${index + 1} for ${area.name} couples`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section aria-label="Anniversary Packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-rose-900">
            Anniversary Packages for {area.name} Couples
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the perfect package for your anniversary celebration
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {topPackages.map((pkg, index) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all border-amber-100 ${index === 0 ? 'ring-2 ring-amber-500' : ''}`}>
                {index === 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-amber-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="text-3xl mb-2">{pkg.emoji}</div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm">{pkg.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-rose-800">{formatPrice(pkg.price)}</span>
                    <span className="text-muted-foreground text-sm ml-1">/ celebration</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-rose-800 hover:to-amber-700 text-white"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Book This Package
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Anniversary Services in Area */}
      <section aria-label="Anniversary Services" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-900">
            Anniversary Services for {area.name} Residents
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedKeywords.map((kw, index) => (
              <Link 
                key={index}
                href={`/${kw.slug}`}
                className="block p-4 rounded-lg border border-amber-200 bg-white hover:border-amber-500 hover:bg-amber-50 transition-all group"
              >
                <h3 className="font-medium text-sm group-hover:text-rose-800 transition-colors flex items-center">
                  {kw.title}
                  <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section aria-label="Location and Contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-900">
              How to Reach Us from {area.name}
            </h2>
            <Card className="border-amber-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Our Location</h3>
                    <p className="text-muted-foreground">{siteConfig.address}</p>
                    <p className="text-sm text-rose-800 mt-2">
                      Approximately 15-20 minutes drive from {area.name}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button 
                    className="bg-amber-500 hover:bg-rose-800"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                  <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'm from ${area.name} and interested in anniversary celebration at your venue.`}>
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </Button>
                  </a>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Button variant="outline" className="border-amber-300 text-rose-800 hover:bg-amber-50">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Expanded Content — 700+ unique words */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {seoContent.paragraphs.map((section, idx) => (
              <div key={`seo-${idx}`} className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-rose-900">{section.heading}</h3>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Friendly Service Summary — structured for AI crawlers */}
      <section aria-label="Service Summary" className="py-12 bg-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-serif text-center text-rose-900">
            Anniversary Celebration in {area.name} — Quick Overview
          </h2>
          <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <dt className="font-semibold text-gray-900">Service Area</dt>
              <dd className="text-gray-600">{area.name}, Vadodara</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Venue</dt>
              <dd className="text-gray-600">{siteConfig.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Area</dt>
              <dd className="text-gray-600">Near {area.name}, Vadodara</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Price Range</dt>
              <dd className="text-gray-600">₹4,700 – ₹14,900</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Duration</dt>
              <dd className="text-gray-600">3 Hours Private Celebration</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Includes</dt>
              <dd className="text-gray-600">Decorations, Cake, Music, Romantic Setup</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Booking</dt>
              <dd className="text-gray-600">WhatsApp, Phone, or Online Form</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Contact</dt>
              <dd className="text-gray-600">{siteConfig.phone}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FAQ Section */}
      <section aria-label="Frequently Asked Questions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
                FAQ
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
                FAQs - Anniversary Celebrations in {area.name}
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {allFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-amber-100">
                  <AccordionTrigger className="text-left hover:text-rose-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-label="Book Your Celebration" className="py-16 bg-gradient-to-r from-rose-800 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Celebrate Your Anniversary Near {area.name}
          </h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            {area.name} residents, let us create a magical anniversary celebration for you and your partner. Book now!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-rose-800 hover:bg-amber-50"
              onClick={() => setIsBookingOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Celebration
            </Button>
            <a href={`https://wa.me/${siteConfig.whatsapp}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaMarkup) }}
      />

      {/* Breadcrumb Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(buildAreaBreadcrumbs(
            siteConfig.website,
            siteConfig.name,
            area.name,
            `${siteConfig.website}/${area.slug}`
          )))
        }}
      />

      {/* Service Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema({
            serviceName: `Anniversary Celebration near ${area.name}, Vadodara`,
            serviceUrl: `${siteConfig.website}/${area.slug}`,
            serviceDescription: `Best anniversary celebration venue near ${area.name}, Vadodara. Private romantic setup with elegant decorations, candlelight dinner, and personalized anniversary experience for couples.`,
            providerName: siteConfig.name,
            providerUrl: siteConfig.website,
            providerPhone: siteConfig.phone,
            providerAddress: siteConfig.address,
            providerCity: siteConfig.city,
            areaServed: `${area.name}, Vadodara`,
            priceRange: '₹4700 - ₹14900',
          }))
        }}
      />
      </main>

      <FFCFooter />
      <FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <FFCWhatsAppFloat />
    </div>
  );
}
