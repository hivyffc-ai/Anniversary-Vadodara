'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera,
  Palette, Flower2, Star, Sparkles, Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function AnniversaryDecorationVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const decorationStyles = [
    {
      emoji: "🌹",
      title: "Romantic Rose Theme",
      colors: "Red, Pink, White",
      elements: "Fresh roses, rose petals, heart shapes, candles",
      mood: "Classic romance that speaks of eternal love"
    },
    {
      emoji: "✨",
      title: "Fairy Tale Magic",
      colors: "White, Gold, Blush",
      elements: "Fairy lights, drapes, elegant backdrops, crystals",
      mood: "Dreamy and enchanting, like a storybook"
    },
    {
      emoji: "🖤",
      title: "Elegant Black & Gold",
      colors: "Black, Gold, Champagne",
      elements: "Sophisticated balloons, metallic accents, luxury touches",
      mood: "Modern elegance for refined couples"
    },
    {
      emoji: "🌸",
      title: "Garden Paradise",
      colors: "Pastel Pinks, Greens, Lavender",
      elements: "Mixed florals, greenery, natural wood, boho vibes",
      mood: "Fresh and natural beauty"
    },
    {
      emoji: "💜",
      title: "Royal Purple",
      colors: "Purple, Silver, White",
      elements: "Regal touches, velvet textures, elegant draping",
      mood: "Fit for royalty, majestic and grand"
    },
    {
      emoji: "🩵",
      title: "Tropical Blue",
      colors: "Teal, Turquoise, White",
      elements: "Oceanic vibes, tropical flowers, relaxed luxury",
      mood: "Beachy, relaxed, and refreshing"
    }
  ];

  const decorationElements = [
    { title: "Balloon Arrangements", desc: "Arches, bouquets, scattered accents in your color scheme" },
    { title: "Fresh Flowers", desc: "Roses, orchids, carnations, and seasonal blooms" },
    { title: "Fairy Lights", desc: "Twinkling lights for magical ambiance" },
    { title: "Candles & Lanterns", desc: "LED and real candles for romantic glow" },
    { title: "Photo Backdrops", desc: "Instagram-worthy backdrop for memories" },
    { title: "Table Settings", desc: "Elegant table décor with coordinated linens" },
    { title: "Floor Decorations", desc: "Rose petals, pathway markers, rugs" },
    { title: "Personalized Elements", desc: "Names, dates, custom messages" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Anniversary Decoration</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🎈</div>
          <div className="absolute bottom-10 right-10 text-9xl">🌸</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              🎨 Design & Décor
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Decoration in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform any space into a romantic wonderland. Our expert decorators create 
              stunning anniversary setups with fresh flowers, elegant balloons, fairy lights, 
              and personalized touches that make your celebration picture-perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <Palette className="mr-2 h-5 w-5" />
                Book Decoration
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I need anniversary decoration in Vadodara.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Share Your Vision
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><Star className="w-3 h-3 mr-1 inline" /> Why Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Not Just Decoration — We Create Experiences
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Flower2, title: "Fresh Flowers Always", desc: "We use real, fresh flowers — no artificial substitutes" },
                { icon: Lightbulb, title: "Custom Designs", desc: "Every setup is tailored to your vision and preferences" },
                { icon: Sparkles, title: "Premium Quality", desc: "High-quality balloons, elegant accessories, premium touches" }
              ].map((item, i) => (
                <Card key={i} className="text-center border-rose-100">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decoration Themes */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><Palette className="w-3 h-3 mr-1 inline" /> Themes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Decoration Themes
              </h2>
              <p className="text-gray-600">Choose a theme or let us create something unique for you</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {decorationStyles.map((style, i) => (
                <Card key={i} className="bg-white border-rose-100 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{style.emoji}</span>
                      <CardTitle className="text-lg">{style.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p><strong className="text-rose-600">Colors:</strong> {style.colors}</p>
                      <p><strong className="text-rose-600">Elements:</strong> {style.elements}</p>
                      <div className="bg-rose-50 rounded-lg p-3 mt-3">
                        <p className="text-rose-700 italic">{style.mood}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decoration Elements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">✨ Elements</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Goes Into Our Decorations
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {decorationElements.map((el, i) => (
                <div key={i} className="flex gap-4 p-4 bg-rose-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{el.title}</h3>
                    <p className="text-sm text-gray-600">{el.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">📋 Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How It Works
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                { step: "1", title: "Share Your Vision", desc: "Tell us your theme, colors, any specific elements you want. Share reference photos if you have them!" },
                { step: "2", title: "We Design", desc: "Our team creates a decoration plan tailored to your preferences and the venue setup." },
                { step: "3", title: "Confirm & Book", desc: "Review the plan, make any adjustments, and confirm your booking with advance payment." },
                { step: "4", title: "We Decorate", desc: "On your special day, we arrive hours early to set up everything perfectly." },
                { step: "5", title: "You Celebrate!", desc: "Walk into a beautifully decorated space and create memories." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Camera className="w-3 h-3 mr-1 inline" /> Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Decoration Work
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
                <Image src={src} alt={`Anniversary decoration ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
              Decoration Packages
            </h2>
            <p className="text-gray-600 mt-2">All packages include setup and teardown</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all bg-white ${i === 1 ? 'ring-2 ring-rose-500' : 'border-rose-100'}`}>
                {i === 1 && <Badge className="absolute top-4 right-4 bg-rose-500 text-white">Most Chosen</Badge>}
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
                  <Button className="w-full bg-rose-500 hover:bg-rose-600" onClick={() => setIsBookingOpen(true)}>
                    Book Décor <ArrowRight className="ml-2 w-4 h-4" />
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
                { q: "How early do you set up the decoration?", a: "We typically arrive 2-3 hours before your celebration time to ensure everything is perfectly set up. For elaborate setups, we may need more time." },
                { q: "Can I request a custom color scheme?", a: "Absolutely! We love working with specific colors. Share your preferences, and we'll source balloons, flowers, and accessories in your exact shades." },
                { q: "Do you do at-home decorations?", a: "Yes! We can decorate at your home, our venue, or any location in Vadodara. Additional travel charges may apply for distant locations." },
                { q: "What happens to the decorations after the event?", a: "You can keep balloons and non-perishable items. Fresh flowers and rented items are taken back after the celebration." },
                { q: "Can you incorporate specific items I provide?", a: "Yes! Many clients provide photos, personal items, or specific decorations they want included. We'll integrate them beautifully." }
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
            {anniversaryKeywords.filter(k => k.slug !== 'anniversary-decoration-vadodara').slice(0, 10).map((kw, i) => (
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
          <h2 className="text-2xl font-bold text-center mb-4">Decoration Services Across Vadodara</h2>
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
      <section className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Design Your Dream Setup</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Share your vision with us. We&apos;ll turn it into a stunning reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8" onClick={() => setIsBookingOpen(true)}>
              <Palette className="mr-2 h-5 w-5" /> Get Started
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
