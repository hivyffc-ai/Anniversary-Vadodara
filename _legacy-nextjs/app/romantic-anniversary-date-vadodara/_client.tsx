'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera,
  Sunset, Moon, Star, Sparkles, Wine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function RomanticAnniversaryDateVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const dateTimeSlots = [
    {
      emoji: "🌅",
      icon: Sunset,
      name: "Golden Hour Date",
      time: "5:00 PM - 8:00 PM",
      mood: "Watch the sunset together as you dine",
      best: "For photography lovers and early diners"
    },
    {
      emoji: "🌙",
      icon: Moon,
      name: "Starlight Romance",
      time: "7:00 PM - 10:00 PM",
      mood: "Classic candlelight dinner under soft lights",
      best: "Our most popular romantic slot"
    },
    {
      emoji: "✨",
      icon: Star,
      name: "Midnight Special",
      time: "10:00 PM - 12:00 AM",
      mood: "Late-night intimacy for night owls",
      best: "For couples who love late nights"
    }
  ];

  const romanticTouches = [
    { title: "Rose Petal Pathway", desc: "Walk on roses from entrance to your table" },
    { title: "Personalized Welcome", desc: "Your names on the welcome board" },
    { title: "Couple's Playlist", desc: "Share your songs, we'll play them" },
    { title: "Memory Corner", desc: "Display your photos at the venue" },
    { title: "Love Letters", desc: "Write letters to exchange during dinner" },
    { title: "Surprise Cake Reveal", desc: "Cake brought with sparklers" }
  ];

  const dateActivities = [
    {
      title: "Pre-Dinner Activities",
      items: [
        "Couples photo session (15 mins before dinner)",
        "Welcome drink by the decorated entrance",
        "Read love letters to each other"
      ]
    },
    {
      title: "During Dinner",
      items: [
        "Multi-course romantic dinner",
        "Conversation cards to spark deeper talks",
        "Soft romantic music playing"
      ]
    },
    {
      title: "Post-Dinner Moments",
      items: [
        "Cake cutting ceremony",
        "Photo session at decorated spots",
        "Exchange gifts in the romantic setting"
      ]
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
            <span className="text-rose-600 font-medium">Romantic Anniversary Date</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-700 via-pink-600 to-purple-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">💕</div>
          <div className="absolute bottom-10 right-10 text-9xl">🌹</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              💑 Just the Two of You
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Romantic Anniversary Date in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Escape the ordinary. Step into a world created just for two — where every candle 
              flickers with your love story, every rose speaks of romance, and every moment 
              becomes a memory. This isn&apos;t just a date; it&apos;s your love, celebrated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <Heart className="mr-2 h-5 w-5" />
                Plan Our Date
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to plan a romantic anniversary date in Vadodara.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Date Night Like No Other
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Remember when dates used to feel magical? When you&apos;d dress up just for each other? 
              When conversations went on for hours? When the world outside didn&apos;t matter?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>We bring that magic back.</strong> No crowded restaurants. No rushing through 
              dinner. No distractions. Just you, your partner, and a beautifully crafted romantic 
              experience that reminds you why you fell in love.
            </p>
          </div>
        </div>
      </section>

      {/* Time Slots */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">⏰ Choose Your Time</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                When Does Romance Feel Right?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {dateTimeSlots.map((slot, i) => (
                <Card key={i} className="bg-white border-rose-100 hover:shadow-xl transition-all text-center h-full">
                  <CardHeader>
                    <span className="text-5xl mb-4 block">{slot.emoji}</span>
                    <CardTitle className="text-xl">{slot.name}</CardTitle>
                    <Badge className="mt-2 bg-rose-100 text-rose-700">{slot.time}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{slot.mood}</p>
                    <p className="text-sm text-rose-600 font-medium">{slot.best}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Romantic Touches */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">💝 Special Touches</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Little Things That Make It Magical
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {romanticTouches.map((touch, i) => (
                <div key={i} className="flex gap-4 p-5 bg-rose-50 rounded-xl hover:bg-rose-100 transition-all">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center text-lg flex-shrink-0">
                    {['🌹', '💌', '🎵', '📸', '✉️', '🎂'][i]}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{touch.title}</h3>
                    <p className="text-sm text-gray-600">{touch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Date Journey */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">📖 Your Evening</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Your Romantic Date Unfolds
              </h2>
            </div>
            
            <div className="space-y-8">
              {dateActivities.map((phase, i) => (
                <Card key={i} className="bg-white border-rose-100">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                      <CardTitle>{phase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-600">
                          <Heart className="w-4 h-4 text-rose-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Conversation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">💬 Reconnect</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conversation Starters for Your Date
              </h2>
              <p className="text-gray-600">We provide conversation cards, but here are some we love:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "What's your favorite memory from our first year together?",
                "What's something I do that always makes you smile?",
                "Where do you see us in 10 years?",
                "What's one dream trip you want us to take together?",
                "What's something new you'd like us to try as a couple?",
                "When did you first know you loved me?"
              ].map((q, i) => (
                <div key={i} className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-100">
                  <p className="text-gray-700 italic">&quot;{q}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Camera className="w-3 h-3 mr-1 inline" /> Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Romantic Date Setups
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
                <Image src={src} alt={`Romantic date setup ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
              Romantic Date Packages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all ${i === 0 ? 'ring-2 ring-rose-500' : 'border-rose-100'}`}>
                {i === 0 && <Badge className="absolute top-4 right-4 bg-rose-500 text-white">Date Night Fav</Badge>}
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
                    Book Date <ArrowRight className="ml-2 w-4 h-4" />
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
                { q: "Is this really private? Will there be other couples?", a: "100% private! The entire venue and slot is exclusively yours. No other couples, no interruptions — just you two." },
                { q: "What should we wear for the romantic date?", a: "Dress up! Semi-formal or formal attire adds to the romantic vibe. Many couples coordinate their outfits too." },
                { q: "Can we bring wine or champagne?", a: "Outside alcohol isn't permitted, but we offer premium non-alcoholic beverages and mocktails that pair beautifully with dinner." },
                { q: "How do I make it a surprise for my partner?", a: "Book secretly via WhatsApp, tell them you're going for 'dinner,' and watch their face when they see the setup!" },
                { q: "Can I propose during the date?", a: "Absolutely! Let us know in advance, and we'll help coordinate the perfect proposal moment with extra special touches." }
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
            {anniversaryKeywords.filter(k => k.slug !== 'romantic-anniversary-date-vadodara').slice(0, 10).map((kw, i) => (
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
          <h2 className="text-2xl font-bold text-center mb-4">Romantic Dates for Couples from</h2>
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
      <section className="py-20 bg-gradient-to-r from-rose-700 via-pink-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for the Most Romantic Date?</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Stop planning ordinary dinners. Give your love the date night it deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8" onClick={() => setIsBookingOpen(true)}>
              <Heart className="mr-2 h-5 w-5" /> Book Our Date
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
