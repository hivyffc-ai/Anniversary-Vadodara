'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Star, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera, Sparkles,
  Users, Utensils, Music, PartyPopper
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function WeddingAnniversaryPartyVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const partyTypes = [
    {
      emoji: "👫",
      title: "Intimate Couple Celebration",
      guests: "Just the two of you",
      desc: "Romantic candlelight dinner with full decoration, perfect for couples who want private time",
      ideal: "Most popular for working couples"
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      title: "Family Anniversary Party",
      guests: "4-8 guests",
      desc: "Include your parents, kids, or close family in the celebration with extended seating",
      ideal: "Perfect for milestone anniversaries"
    },
    {
      emoji: "🎉",
      title: "Friends & Family Bash",
      guests: "10-20 guests",
      desc: "A bigger celebration with your closest circle, music, and party vibes",
      ideal: "Great for 25th/50th milestones"
    }
  ];

  const partyElements = [
    { icon: Sparkles, title: "Stunning Décor", desc: "Theme-based decorations that wow your guests" },
    { icon: Utensils, title: "Delicious Food", desc: "Multi-course dining for everyone" },
    { icon: Music, title: "Music & DJ", desc: "Party playlist or DJ for larger events" },
    { icon: Camera, title: "Photo Corner", desc: "Dedicated photo spot with props" },
    { icon: PartyPopper, title: "Cake Ceremony", desc: "Cake cutting with celebration moment" },
    { icon: Gift, title: "Party Favors", desc: "Optional thank-you gifts for guests" }
  ];

  const timelineSteps = [
    { time: "Day Start", event: "Venue setup with decorations, balloons, and backdrop" },
    { time: "Guest Arrival", event: "Welcome drinks and mingling time" },
    { time: "Cake Cutting", event: "Anniversary cake cutting ceremony" },
    { time: "Dinner", event: "Delicious multi-course meal for all" },
    { time: "Celebration", event: "Music, dancing, speeches, and fun" },
    { time: "Send-off", event: "Photo session and memorable ending" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Wedding Anniversary Party</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-600 via-rose-500 to-pink-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🎊</div>
          <div className="absolute bottom-10 right-10 text-9xl">🥂</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              🎉 Party Time!
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Wedding Anniversary Party in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Some anniversaries call for more than a quiet dinner. Whether it&apos;s your 5th, 10th, 
              25th, or 50th — throw a party that celebrates your love story with the people who 
              matter most. We plan everything, you just celebrate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <PartyPopper className="mr-2 h-5 w-5" />
                Plan Your Party
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to plan a wedding anniversary party in Vadodara.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Discuss on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Party Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><Users className="w-3 h-3 mr-1 inline" /> Party Sizes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Party Style
              </h2>
              <p className="text-gray-600">From intimate to grand — we do it all</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {partyTypes.map((type, i) => (
                <Card key={i} className="border-rose-100 hover:shadow-xl transition-all h-full">
                  <CardHeader className="text-center">
                    <span className="text-5xl mb-4 block">{type.emoji}</span>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <Badge className="mt-2 bg-purple-100 text-purple-700">{type.guests}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{type.desc}</p>
                    <div className="bg-rose-50 rounded-lg p-3">
                      <p className="text-sm text-rose-700"><strong>Ideal:</strong> {type.ideal}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">✨ Party Essentials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything for a Perfect Party
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partyElements.map((item, i) => (
                <Card key={i} className="bg-white border-rose-100 text-center">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Party Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">📅 Timeline</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Party, Perfectly Planned
              </h2>
            </div>
            
            <div className="space-y-4">
              {timelineSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start bg-rose-50 rounded-xl p-4">
                  <div className="w-24 flex-shrink-0">
                    <Badge className="bg-rose-500 text-white">{step.time}</Badge>
                  </div>
                  <p className="text-gray-700">{step.event}</p>
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
              Anniversary Party Moments
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
                <Image src={src} alt={`Anniversary party ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
              Party Packages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all ${i === 1 ? 'ring-2 ring-purple-500' : 'border-rose-100'}`}>
                {i === 1 && <Badge className="absolute top-4 right-4 bg-purple-500 text-white">Party Favorite</Badge>}
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
                    Book Party <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            *For larger parties (10+ guests), contact us for custom pricing
          </p>
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
                { q: "How many guests can you accommodate?", a: "Our standard setups are for couples or small families (up to 8). For larger parties of 10-20 guests, we can arrange extended venue options. Contact us to discuss." },
                { q: "Can we bring our own decorations?", a: "We provide complete decoration. However, if you have specific items (photos, banners, etc.), we're happy to incorporate them into our setup." },
                { q: "Is there a DJ option available?", a: "For larger parties, we can arrange a DJ or create a custom Bluetooth playlist. Let us know your preference when booking." },
                { q: "Can guests bring gifts and leave them at the venue?", a: "Absolutely! We can set up a gift table as part of the party décor." },
                { q: "What about parking for guests?", a: "We have parking available at our venue. For larger parties, we can share nearby parking options as well." }
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
            {anniversaryKeywords.filter(k => k.slug !== 'wedding-anniversary-party-vadodara').slice(0, 10).map((kw, i) => (
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
          <h2 className="text-2xl font-bold text-center mb-4">Serving All Vadodara</h2>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 via-rose-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Party?</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s plan an anniversary party that everyone will talk about for years to come!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8" onClick={() => setIsBookingOpen(true)}>
              <PartyPopper className="mr-2 h-5 w-5" /> Start Planning
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
