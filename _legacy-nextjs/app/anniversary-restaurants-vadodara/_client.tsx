'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera,
  UtensilsCrossed, Wine, Star, Sparkles, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function AnniversaryRestaurantsVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const whyNotRegularRestaurant = [
    { problem: "Crowded & Noisy", solution: "100% private — entire space is yours" },
    { problem: "No Special Decoration", solution: "Fully decorated romantic setup" },
    { problem: "Time Pressure", solution: "No rush — enjoy at your own pace" },
    { problem: "Generic Service", solution: "Personalized experience for couples" },
    { problem: "Interruptions", solution: "Dedicated staff, no disturbances" },
    { problem: "Just Food", solution: "Complete celebration experience" }
  ];

  const diningExperience = [
    {
      title: "The Ambiance",
      desc: "Soft candlelight, fresh roses, romantic music — not a single detail overlooked"
    },
    {
      title: "The Menu",
      desc: "Multi-course dinner designed for couples — starters, mains, and dessert"
    },
    {
      title: "The Privacy",
      desc: "No other diners, no prying eyes — just you two in your own world"
    },
    {
      title: "The Service",
      desc: "Attentive but discrete — we're there when you need us, invisible when you don't"
    }
  ];

  const menuHighlights = [
    { course: "Appetizers", items: ["Cheese Fondue with Nachos", "Paneer Tikka Wraps", "Peri-Peri Fries"] },
    { course: "Mains", items: ["Chef's Special Pasta", "Garlic Bread", "Gourmet Pizza"] },
    { course: "Beverages", items: ["Welcome Mocktails", "Fresh Juices", "Hot Beverages"] },
    { course: "Desserts", items: ["Anniversary Cake", "Brownie with Ice Cream", "Pastries"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Anniversary Restaurants</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-700 via-rose-600 to-red-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🍽️</div>
          <div className="absolute bottom-10 right-10 text-9xl">🍷</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              🍴 Fine Dining Redefined
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Restaurant in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tired of crowded restaurants for your anniversary? Experience dining like never 
              before — a private restaurant experience just for the two of you. Romantic décor, 
              gourmet food, and uninterrupted quality time in Vadodara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <UtensilsCrossed className="mr-2 h-5 w-5" />
                Reserve Table
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! Looking for a private anniversary restaurant experience in Vadodara.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Booking
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Regular Restaurants */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">🤔 The Truth</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Regular Restaurants Fall Short
              </h2>
              <p className="text-gray-600">Your anniversary deserves better than &quot;just dinner&quot;</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyNotRegularRestaurant.map((item, i) => (
                <Card key={i} className="border-rose-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="text-red-500 text-lg">✗</div>
                      <div>
                        <p className="font-medium text-gray-500 line-through">{item.problem}</p>
                        <p className="text-rose-600 font-semibold mt-1">✓ {item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">✨ The Experience</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Than a Restaurant — It&apos;s Your Private Dining Room
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {diningExperience.map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><UtensilsCrossed className="w-3 h-3 mr-1 inline" /> Menu</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A Taste of What Awaits
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuHighlights.map((course, i) => (
                <Card key={i} className="border-rose-100">
                  <CardHeader className="bg-gradient-to-r from-rose-50 to-amber-50">
                    <CardTitle className="text-rose-600">{course.course}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {course.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-600">
                          <Star className="w-4 h-4 text-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-6">
              *Menu can be customized based on dietary preferences and allergies
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Camera className="w-3 h-3 mr-1 inline" /> Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Private Dining Experience
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
                <Image src={src} alt={`Private dining ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Gift className="w-3 h-3 mr-1 inline" /> Dining Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Anniversary Dining Packages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all ${i === 0 ? 'ring-2 ring-amber-500' : 'border-rose-100'}`}>
                {i === 0 && <Badge className="absolute top-4 right-4 bg-amber-500 text-white">Diner&apos;s Choice</Badge>}
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
                    Reserve <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible>
              {[
                { q: "Is this an actual restaurant open to public?", a: "No! We're a private celebration venue. When you book, the entire space is exclusively yours — like having your own private restaurant for the evening." },
                { q: "Can I see the menu before booking?", a: "Absolutely! WhatsApp us and we'll share the complete menu. We can also customize based on your preferences." },
                { q: "What if we have dietary restrictions?", a: "We accommodate vegetarian, vegan, Jain, and allergy-specific requirements. Just let us know when booking." },
                { q: "Is alcohol served?", a: "We serve premium non-alcoholic beverages and mocktails. Outside alcohol is not permitted." },
                { q: "How is this different from booking a restaurant's private room?", a: "Private rooms in restaurants still have staff walking in and out, kitchen noises, and time pressure. Here, the entire experience is crafted for romance — décor included, no rush, complete privacy." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-rose-100 bg-white rounded-lg mb-2">
                  <AccordionTrigger className="hover:text-rose-600 px-4">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-4">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">More Anniversary Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {anniversaryKeywords.filter(k => k.slug !== 'anniversary-restaurants-vadodara').slice(0, 10).map((kw, i) => (
              <Link key={i} href={`/${kw.slug}`} className="px-4 py-2 bg-rose-50 rounded-full border border-rose-200 hover:border-rose-400 text-sm transition-all">
                {kw.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Couples from All Vadodara Areas</h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {vadodaraAreas.map((area, i) => (
              <Link key={i} href={`/${area.slug}`} className="px-3 py-1 bg-white rounded-full text-sm hover:bg-rose-100 transition-all">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-700 via-rose-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for the Best Anniversary Dinner?</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Skip the crowded restaurants. Book your private dining experience today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8" onClick={() => setIsBookingOpen(true)}>
              <UtensilsCrossed className="mr-2 h-5 w-5" /> Reserve Now
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
