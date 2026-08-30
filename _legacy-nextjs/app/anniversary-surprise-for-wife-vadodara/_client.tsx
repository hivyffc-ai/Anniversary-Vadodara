'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Clock, Star, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera, Sparkles,
  Flower2, Crown, Gem, Music
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function AnniversarySurpriseForWifeVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const romanceThemes = [
    {
      emoji: "🌹",
      title: "Rose Petal Paradise",
      desc: "Hundreds of fresh rose petals, heart-shaped arrangements, romantic red & pink décor, pathway lined with candles",
      vibe: "Classic romance that never fails to touch her heart"
    },
    {
      emoji: "✨",
      title: "Fairy Tale Dream",
      desc: "Twinkling fairy lights, dreamy white & blush décor, elegant drapes, princess-worthy setup",
      vibe: "For the wife who deserves a fairy tale ending"
    },
    {
      emoji: "🌸",
      title: "Garden of Love",
      desc: "Fresh flowers everywhere, floral archway, nature-inspired elegance, botanical beauty",
      vibe: "Perfect for flower-loving wives"
    },
    {
      emoji: "💎",
      title: "Luxurious Glamour",
      desc: "Gold accents, champagne tones, sophisticated elegance, premium touches everywhere",
      vibe: "When she deserves the finer things"
    }
  ];

  const surpriseElements = [
    { icon: Flower2, title: "Fresh Flowers", desc: "Real roses, orchids, and seasonal blooms in her favorite colors" },
    { icon: Crown, title: "Queen Treatment", desc: "From the moment she walks in, she's treated like royalty" },
    { icon: Music, title: "Her Favorite Songs", desc: "We play your song and her favorite romantic tracks" },
    { icon: Gem, title: "Luxury Details", desc: "Premium linens, elegant setup, attention to every detail" }
  ];

  const loveNoteIdeas = [
    "Write 10 things you love about her and place them around the venue",
    "Create a timeline of your relationship milestones",
    "Record a voice message confessing your love",
    "Prepare a slideshow of your favorite photos together",
    "Write a letter she'll read at the table"
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
            <span className="text-rose-600 font-medium">Anniversary Surprise for Wife</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🌹</div>
          <div className="absolute bottom-10 right-10 text-9xl">💕</div>
          <div className="absolute top-1/2 left-1/4 text-7xl">💐</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              👑 Make Her Feel Like a Queen
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Surprise for Wife in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              She takes care of everyone. This anniversary, let her be the one who&apos;s taken care of. 
              Plan a romantic surprise that shows her exactly how much she means to you — 
              because she deserves the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <Heart className="mr-2 h-5 w-5" />
                Surprise Her Now
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to plan an anniversary surprise for my wife in Vadodara.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Plan Secretly on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Opening */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">💝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              When Was the Last Time You Made Her Cry Happy Tears?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Remember how her eyes lit up when you proposed? That spark of pure joy and surprise? 
              Your wife still deserves to feel that magic. Not just on your wedding day, but every 
              anniversary thereafter.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We&apos;ve helped hundreds of husbands in Vadodara create moments that brought their 
              wives to tears of joy. <strong>Let us help you create yours.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What She'll Experience */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><Sparkles className="w-3 h-3 mr-1 inline" /> The Experience</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What She&apos;ll Experience
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {surpriseElements.map((item, i) => (
                <Card key={i} className="bg-white border-rose-100 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Romance Themes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">🎨 Themes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Her Perfect Romance Theme
              </h2>
              <p className="text-gray-600">Each theme is fully customizable based on her preferences</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {romanceThemes.map((theme, i) => (
                <Card key={i} className="border-rose-100 hover:shadow-xl transition-all overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{theme.emoji}</span>
                      <CardTitle className="text-xl">{theme.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600 mb-4">{theme.desc}</p>
                    <div className="bg-rose-50 rounded-lg p-3">
                      <p className="text-sm text-rose-700 italic">{theme.vibe}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 bg-gradient-to-br from-rose-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white text-rose-700">💌 Personal Touch</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Add a Personal Love Note
              </h2>
              <p className="text-gray-600">The decoration sets the scene. Your words touch her heart.</p>
            </div>
            
            <Card className="bg-white border-rose-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 text-rose-600">Ideas That Melt Her Heart:</h3>
                <ul className="space-y-3">
                  {loveNoteIdeas.map((idea, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
                      <span className="text-gray-700">{idea}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-rose-50 rounded-xl">
                  <p className="text-sm text-rose-700">
                    <strong>Pro Tip:</strong> We can print and beautifully display your messages as part of the setup. 
                    Just share your content with us!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Reveal Moment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">✨ The Moment</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Picture This...
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  You tell her you&apos;re going for a quick dinner. Nothing special, just the usual. 
                  She gets ready — maybe a little curious about your mysterious smile.
                </p>
                <p>
                  As you pull up to the venue, she sees the soft glow of fairy lights through 
                  the windows. Her eyebrows raise. &quot;What&apos;s this?&quot;
                </p>
                <p>
                  You guide her through the door. She gasps. Rose petals everywhere. Candles 
                  flickering. Her favorite song playing softly. A beautifully decorated space — 
                  just for her.
                </p>
                <p className="font-semibold text-rose-600">
                  And then she turns to you, tears in her eyes, and whispers: 
                  &quot;You did all this for me?&quot;
                </p>
                <p className="text-center text-2xl font-bold text-rose-600 pt-4">
                  That&apos;s the moment we help you create.
                </p>
              </div>
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
              Wife Surprise Setups We&apos;ve Created
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
                <Image src={src} alt={`Wife anniversary surprise ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
              Wife Surprise Packages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all ${i === 1 ? 'ring-2 ring-rose-500' : 'border-rose-100'}`}>
                {i === 1 && <Badge className="absolute top-4 right-4 bg-rose-500 text-white">Wife&apos;s Favorite</Badge>}
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
                    Surprise Her <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">💑</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
              &quot;I&apos;ve been married 12 years and thought I knew everything about surprising my wife. 
              But this... she said it was the most romantic thing I&apos;ve ever done. The team understood 
              exactly what she would love. Worth every rupee.&quot;
            </blockquote>
            <p className="text-rose-600 font-semibold">— Vikram P., 12th Anniversary Surprise</p>
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
                { q: "What flowers do you use in the setup?", a: "We use fresh roses (red, pink, white), seasonal flowers, and can include her favorites if you let us know. The flower arrangements are always fresh and fragrant." },
                { q: "Can I add jewelry or gifts to the surprise?", a: "Absolutely! Many husbands send us rings, necklaces, or personal gifts to be placed beautifully in the setup. We can create a special reveal moment for your gift." },
                { q: "My wife is particular about décor. Can I see designs beforehand?", a: "Yes! We'll share reference images and discuss colors, themes, and specific elements before your booking. We want it to be perfect for her taste." },
                { q: "Can I bring our wedding song to be played?", a: "Of course! Share your song list with us and we'll play your special songs during the dinner. Many couples love reliving their wedding song moment." },
                { q: "What if she has food preferences or allergies?", a: "Just share her dietary preferences, allergies, and favorite dishes. Our menu can be customized to include everything she loves." }
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
          <h2 className="text-2xl font-bold text-center mb-8">More Anniversary Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {anniversaryKeywords.filter(k => k.slug !== 'anniversary-surprise-for-wife-vadodara').slice(0, 10).map((kw, i) => (
              <Link key={i} href={`/${kw.slug}`} className="px-4 py-2 bg-white rounded-full border border-rose-200 hover:border-rose-400 hover:bg-rose-100 text-sm transition-all">
                {kw.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Serving All Vadodara Areas</h2>
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
      <section className="py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Her Anniversary Unforgettable</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            She deserves to feel special. Let us help you show her how much she means to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to plan a surprise anniversary celebration for my wife.`}>
              <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8">
                <Heart className="mr-2 h-5 w-5" /> Plan Her Surprise
              </Button>
            </Link>
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
