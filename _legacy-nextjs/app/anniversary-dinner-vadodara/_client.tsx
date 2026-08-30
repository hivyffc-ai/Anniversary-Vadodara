'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Clock, Star, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera, UtensilsCrossed,
  Wine, Flame, Music, Shield, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function AnniversaryDinnerVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const dinnerMenu = [
    { course: "Welcome", items: ["Refreshing Welcome Drink", "Cheese & Herb Bruschetta"] },
    { course: "Starters", items: ["Creamy Cheese Fondue with Nachos & Wedges", "Paneer Tikka Tortilla Wraps", "Peri-Peri Fries with Mac & Cheese"] },
    { course: "Main Course", items: ["Chef's Special Pasta", "Garlic Bread with Cheese Dip", "Tangy Loaf with Special Sauce"] },
    { course: "Dessert", items: ["Anniversary Celebration Cake", "Chocolate Brownie with Ice Cream"] }
  ];

  const dinnerExperiences = [
    { icon: Flame, title: "Candlelight Setting", desc: "Soft flickering candles create the perfect romantic glow" },
    { icon: Wine, title: "Premium Refreshments", desc: "Welcome drinks, mocktails, and curated beverages" },
    { icon: Music, title: "Romantic Music", desc: "Handpicked playlist of love songs for your evening" },
    { icon: UtensilsCrossed, title: "Gourmet Menu", desc: "Multi-course dinner crafted for couples" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Anniversary Dinner</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🍷</div>
          <div className="absolute bottom-10 right-10 text-9xl">🕯️</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              🍽️ Romantic Dining Experience
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Dinner in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Savor an exquisite candlelight dinner crafted for two. Our private dining 
              experience combines gourmet cuisine, romantic ambiance, and impeccable service 
              to create the perfect anniversary evening in Vadodara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reserve Your Table
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to book an anniversary dinner in Vadodara.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Booking
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Dinner Special */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-rose-100 text-rose-700">✨ The Experience</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Than Just Dinner — It&apos;s a Memory
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From the moment you arrive to the last bite of dessert, every element is 
                designed to celebrate your love story.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dinnerExperiences.map((exp, i) => (
                <Card key={i} className="text-center border-rose-100 hover:shadow-xl transition-all">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
                    <p className="text-gray-600 text-sm">{exp.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Dining Experience Story */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">🌹 Your Evening</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Journey Through Romance
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Arrival & Welcome</h3>
                  <p className="text-gray-600">
                    Step into a world of romance as you&apos;re greeted with rose petals at the entrance. 
                    Your private table awaits, beautifully decorated with candles, flowers, and a 
                    personalized welcome note. A refreshing welcome drink sets the tone for the evening.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Culinary Journey</h3>
                  <p className="text-gray-600">
                    Indulge in a carefully curated multi-course dinner. Each dish is prepared fresh 
                    and presented with love. From creamy appetizers to main courses that satisfy, 
                    our chef ensures every bite tells a story. Soft romantic music plays in the 
                    background as you reconnect over delicious food.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sweet Celebrations</h3>
                  <p className="text-gray-600">
                    As your dinner concludes, the lights dim further. Your anniversary cake arrives 
                    with sparklers, creating a magical moment. Cut the cake together, make a wish, 
                    and savor the sweetness of your celebration. Capture photos at our decorated 
                    corner to remember this night forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">🍽️ The Menu</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Anniversary Dinner Menu
              </h2>
              <p className="text-gray-600">A curated dining experience designed for romance</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {dinnerMenu.map((course, i) => (
                <Card key={i} className="border-rose-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-rose-600">{course.course}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-rose-400 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-6">
              * Menu items may vary based on availability. Special dietary requirements can be accommodated with advance notice.
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
              Anniversary Dinner Setups
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
                <Image src={src} alt={`Anniversary dinner setup ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Gift className="w-3 h-3 mr-1 inline" /> Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Anniversary Dinner Packages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all ${i === 0 ? 'ring-2 ring-rose-500' : 'border-rose-100'}`}>
                {i === 0 && <Badge className="absolute top-4 right-4 bg-rose-500 text-white">Best Value</Badge>}
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
                    Book Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Couples Love Our Anniversary Dinners
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "100% Private", desc: "No other guests — the entire venue is exclusively yours" },
                { icon: Award, title: "Premium Quality", desc: "Fresh ingredients, elegant presentation, attention to detail" },
                { icon: Heart, title: "Romantic Ambiance", desc: "Candles, roses, fairy lights — every element speaks romance" },
                { icon: Star, title: "5-Star Service", desc: "Dedicated staff ensuring your evening is flawless" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
                { q: "What time slots are available for anniversary dinner?", a: "We offer dinner slots from 5:00 PM to 11:00 PM. The most popular romantic slot is 7:00 PM - 10:00 PM for sunset-to-starlight dining experience." },
                { q: "Can I customize the menu for dietary restrictions?", a: "Absolutely! We can accommodate vegetarian, vegan, and allergy-specific requirements. Please inform us at least 24 hours in advance." },
                { q: "Is alcohol served at the anniversary dinner?", a: "We offer premium non-alcoholic beverages and mocktails. Outside beverages are not permitted at the venue." },
                { q: "Can I bring my own cake instead?", a: "Yes, you can bring your own cake. However, our premium packages include a complimentary anniversary cake that many couples love." },
                { q: "What if we need to reschedule our dinner booking?", a: "We understand plans change. Rescheduling is free if done 48 hours before your booking. Shorter notice may incur a small fee." }
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

      {/* Related Services */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More Anniversary Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {anniversaryKeywords.filter(k => k.slug !== 'anniversary-dinner-vadodara').slice(0, 10).map((kw, i) => (
              <Link key={i} href={`/${kw.slug}`} className="px-4 py-2 bg-white rounded-full border border-rose-200 hover:border-rose-400 hover:bg-rose-50 text-sm transition-all">
                {kw.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Anniversary Dinner Across Vadodara</h2>
          <p className="text-center text-gray-600 mb-8">We welcome couples from all areas</p>
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
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Anniversary Dinner?</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Create an unforgettable dining experience with your beloved. Book now and let us make your anniversary magical.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8" onClick={() => setIsBookingOpen(true)}>
              <Calendar className="mr-2 h-5 w-5" /> Book Your Dinner
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
