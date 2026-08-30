'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera,
  MapPin, Star, Sparkles, Users, Car, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function AnniversaryVenuesVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const venueFeatures = [
    { icon: MapPin, title: "Prime Location", desc: "Centrally located in Vadodara, easy to reach from all areas" },
    { icon: Users, title: "Private Space", desc: "Entire venue exclusively for you — no other guests" },
    { icon: Star, title: "Decorated Setup", desc: "Already decorated when you arrive — no waiting" },
    { icon: Car, title: "Easy Parking", desc: "Hassle-free parking available at the venue" },
    { icon: Clock, title: "Flexible Timing", desc: "Multiple slots from 5 PM to midnight" },
    { icon: Heart, title: "Romantic Ambiance", desc: "Designed specifically for couple celebrations" }
  ];

  const venueSpaces = [
    {
      name: "The Rose Garden Room",
      capacity: "2-4 guests",
      desc: "Intimate setting with floral décor, soft lighting, and garden views. Perfect for romantic dinners.",
      features: ["Candlelight setup", "Fresh flower arrangements", "Private dining table", "Photo backdrop"]
    },
    {
      name: "The Starlight Terrace",
      capacity: "2-8 guests",
      desc: "Semi-open space with fairy lights overhead. Great for evening celebrations with family.",
      features: ["Open-air feel", "Fairy light canopy", "Weather-protected", "Larger seating"]
    },
    {
      name: "The Grand Celebration Hall",
      capacity: "10-20 guests",
      desc: "For milestone anniversaries with extended family and friends. Fully customizable.",
      features: ["Stage setup option", "DJ system available", "Multiple seating arrangements", "Grand décor"]
    }
  ];

  const whatSetsUsApart = [
    {
      title: "All-Inclusive Experience",
      desc: "Unlike hotels that just rent space, we provide decoration, food, cake, and service — all included."
    },
    {
      title: "Dedicated to Celebrations",
      desc: "Our venue is designed specifically for anniversary and couple celebrations, not generic events."
    },
    {
      title: "No Hidden Costs",
      desc: "The price you see includes everything. No surprise charges for décor, cake cutting, or taxes."
    },
    {
      title: "Personalization Freedom",
      desc: "Bring your own items, request specific décor, customize menu — we're flexible."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Anniversary Venues</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-rose-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🏛️</div>
          <div className="absolute bottom-10 right-10 text-9xl">💝</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              📍 The Perfect Space
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Venues in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Finding the right venue makes all the difference. Our anniversary celebration 
              spaces are designed for romance — private, beautifully decorated, and equipped 
              with everything you need for the perfect celebration in Vadodara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Book Venue
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'm looking for an anniversary venue in Vadodara.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enquire on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">✨ Venue Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Our Venue is Perfect for Anniversaries
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {venueFeatures.map((feature, i) => (
                <Card key={i} className="text-center border-rose-100 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Spaces */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">🏠 Our Spaces</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Celebration Space
              </h2>
            </div>
            
            <div className="space-y-6">
              {venueSpaces.map((space, i) => (
                <Card key={i} className="bg-white border-rose-100 overflow-hidden hover:shadow-xl transition-all">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-rose-500 to-pink-600 p-6 text-white flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-2">{space.name}</h3>
                      <Badge className="w-fit bg-white/20 text-white border-white/30">{space.capacity}</Badge>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <p className="text-gray-600 mb-4">{space.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {space.features.map((f, j) => (
                          <Badge key={j} className="bg-rose-100 text-rose-700">{f}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">🌟 Why Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Not Just a Venue — A Complete Experience
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whatSetsUsApart.map((item, i) => (
                <div key={i} className="p-6 bg-rose-50 rounded-xl">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><MapPin className="w-3 h-3 mr-1 inline" /> Location</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Easy to Reach from Anywhere in Vadodara
              </h2>
            </div>
            
            <Card className="bg-white border-rose-100">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Address</h3>
                    <p className="text-gray-600 mb-4">{siteConfig.address}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>📍 Central Vadodara location</p>
                      <p>🚗 10-15 mins from most areas</p>
                      <p>🅿️ Free parking available</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4">Distance from Key Areas</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• Alkapuri: ~8 km</p>
                      <p>• Akota: ~5 km</p>
                      <p>• Manjalpur: ~7 km</p>
                      <p>• Sama: ~10 km</p>
                      <p>• Race Course: ~6 km</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-rose-100">
                  <Link href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`} target="_blank">
                    <Button className="w-full md:w-auto bg-rose-500 hover:bg-rose-600">
                      <MapPin className="mr-2 h-4 w-4" /> Get Directions on Google Maps
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Camera className="w-3 h-3 mr-1 inline" /> Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Venue Spaces
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              '/images/gallery/IMG_20251108_195907946.jpg',
              '/images/gallery/IMG_20251117_201140680.jpg',
              '/images/gallery/IMG_20251126_195504828.jpg',
              '/images/gallery/IMG_20251126_195520782.jpg',
              '/images/gallery/IMG_20251130_190628327.jpg',
              '/images/gallery/IMG_20251201_201429116.jpg',
              '/images/gallery/IMG-20250123-WA0014.jpg',
              '/images/gallery/IMG-20250123-WA0018.jpg'
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image src={src} alt={`Venue space ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Gift className="w-3 h-3 mr-1 inline" /> Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Venue + Celebration Packages
            </h2>
            <p className="text-gray-600 mt-2">Venue, decoration, food — all included</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all bg-white ${i === 1 ? 'ring-2 ring-rose-500' : 'border-rose-100'}`}>
                {i === 1 && <Badge className="absolute top-4 right-4 bg-rose-500 text-white">Best Value</Badge>}
                <CardHeader>
                  <div className="text-3xl mb-2">{pkg.emoji}</div>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-rose-600 mb-4">{formatPrice(pkg.price)}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 5).map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-rose-500 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.cakeIncluded && <Badge className="mb-4 bg-green-100 text-green-700">🎂 Cake Included</Badge>}
                  <Button className="w-full bg-rose-500 hover:bg-rose-600" onClick={() => setIsBookingOpen(true)}>
                    Book Venue <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible>
              {[
                { q: "Do you rent the venue without packages?", a: "We specialize in complete celebration experiences. Venue rental includes decoration, food, and services. This ensures quality control and a seamless experience." },
                { q: "What's the maximum capacity of your venue?", a: "For intimate couple celebrations, our spaces work best. For larger gatherings (10-20 guests), we can accommodate with advance booking." },
                { q: "Is AC available in the venue?", a: "Yes, all our indoor spaces are air-conditioned for your comfort, regardless of the weather outside." },
                { q: "Can we visit the venue before booking?", a: "Absolutely! We encourage venue visits. WhatsApp us to schedule a quick tour and see the spaces in person." },
                { q: "What about venue decoration for a specific theme?", a: "All packages include decoration. You can choose from our themes or request a custom design — we'll bring your vision to life." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-rose-100">
                  <AccordionTrigger className="hover:text-rose-600">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">More Anniversary Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {anniversaryKeywords.filter(k => k.slug !== 'anniversary-venues-vadodara').slice(0, 10).map((kw, i) => (
              <Link key={i} href={`/${kw.slug}`} className="px-4 py-2 bg-white rounded-full border border-rose-200 hover:border-rose-400 text-sm transition-all">
                {kw.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Accessible from All Vadodara Areas</h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {vadodaraAreas.map((area, i) => (
              <Link key={i} href={`/${area.slug}`} className="px-3 py-1 bg-rose-50 rounded-full text-sm hover:bg-rose-100 transition-all">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 via-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Celebration Venue?</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Stop searching for the perfect venue — you&apos;ve found it. Book now and let us handle everything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8" onClick={() => setIsBookingOpen(true)}>
              <Calendar className="mr-2 h-5 w-5" /> Book Now
            </Button>
            <Link href={`tel:${siteConfig.phone}`}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Phone className="mr-2 h-5 w-5" /> {siteConfig.phone}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <FFCWhatsAppFloat />
    </div>
  );
}
