'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Clock, Star, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera, Sparkles,
  Shield, Award, Trophy, Target, Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function AnniversarySurpriseForHusbandVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const surpriseIdeas = [
    {
      title: "The Classic Gentleman's Evening",
      desc: "Candlelight dinner with his favorite dishes, sports theme décor, personalized beer mug or whiskey glass display",
      perfect: "Works best for husbands who appreciate quality time and good food"
    },
    {
      title: "Memory Lane Surprise",
      desc: "Photo gallery of your journey, video montage of special moments, timeline of your love story on display",
      perfect: "Perfect for sentimental husbands who value memories"
    },
    {
      title: "Adventure & Thrill Setup",
      desc: "Gaming corner, sports décor, his hobbies showcased with romantic twist",
      perfect: "Ideal for the fun-loving, adventurous husband"
    },
    {
      title: "Black & Gold Luxury Theme",
      desc: "Premium masculine décor, sophisticated ambiance, VIP treatment throughout",
      perfect: "Best for husbands who appreciate elegance"
    }
  ];

  const planningTimeline = [
    { day: "2 Weeks Before", task: "Book your surprise date with us, share his preferences" },
    { day: "1 Week Before", task: "Finalize theme, menu choices, special requests" },
    { day: "2 Days Before", task: "Confirm timing, plan your excuse to bring him" },
    { day: "D-Day", task: "We handle everything — you just bring your husband!" }
  ];

  const whyHusbandsLoveIt = [
    { icon: Trophy, title: "He Feels Special", desc: "Men rarely get surprised. This makes him feel truly valued and loved." },
    { icon: Heart, title: "Quality Time Together", desc: "No distractions, no phones — just the two of you reconnecting." },
    { icon: Target, title: "His Interests Included", desc: "We incorporate his hobbies and favorites into the celebration." },
    { icon: Gift, title: "Unexpected Delight", desc: "The element of surprise creates lasting memories." }
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
            <span className="text-rose-600 font-medium">Anniversary Surprise for Husband</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-800 via-rose-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🎁</div>
          <div className="absolute bottom-10 right-10 text-9xl">💑</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              🎉 Make Him Feel Like a King
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Surprise for Husband in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              He always makes you feel special. This anniversary, turn the tables. Let us help 
              you plan the most unforgettable surprise that will leave your husband speechless 
              and remind him why he&apos;s the luckiest man alive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-rose-500 text-white hover:bg-rose-600 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Plan His Surprise
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to plan an anniversary surprise for my husband in Vadodara.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Discuss Secretly on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">💭 We Get It</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Planning a Surprise for Your Husband is Tough
              </h2>
            </div>
            
            <div className="bg-rose-50 rounded-2xl p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Let&apos;s be honest:</strong> Surprising your husband isn&apos;t easy. He probably 
                notices everything. He might be suspicious if you&apos;re acting differently. And finding 
                the perfect gift after years of marriage? That&apos;s a challenge.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                But here&apos;s what we&apos;ve learned from hundreds of successful surprises: <strong>Husbands 
                don&apos;t want expensive gifts — they want to feel appreciated.</strong> They want to see 
                the effort you put in. They want an experience that shows you truly know them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyHusbandsLoveIt.map((item, i) => (
                <Card key={i} className="border-rose-100 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
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

      {/* Surprise Ideas */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><Lightbulb className="w-3 h-3 mr-1 inline" /> Ideas</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Surprise Themes That Work Every Time
              </h2>
              <p className="text-gray-600">Each can be customized based on your husband&apos;s personality</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {surpriseIdeas.map((idea, i) => (
                <Card key={i} className="bg-white border-rose-100 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{['🍷', '📸', '🎮', '✨'][i]}</span>
                      <CardTitle className="text-xl">{idea.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{idea.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-rose-50 rounded-lg p-3">
                      <p className="text-sm text-rose-700"><strong>Perfect for:</strong> {idea.perfect}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Keep It Secret */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">🤫 Top Secret</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How to Keep the Surprise a Secret
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg">The &quot;Dinner Plans&quot; Excuse</h3>
                    <p className="text-gray-300">Tell him you&apos;ve made reservations at a new restaurant. He won&apos;t suspect a private surprise setup.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg">Book During His Work Hours</h3>
                    <p className="text-gray-300">Make all calls and WhatsApp chats while he&apos;s at work. We&apos;re discrete in our communication.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg">Use Code Words</h3>
                    <p className="text-gray-300">When discussing over call, we can use code words or just say &quot;the event&quot; if needed.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-lg">Payment Options</h3>
                    <p className="text-gray-300">Pay via UPI from a personal account, or we accept cash on arrival.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><Calendar className="w-3 h-3 mr-1 inline" /> Planning</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Your Secret Planning Timeline
              </h2>
            </div>
            
            <div className="space-y-6">
              {planningTimeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-center bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-24 text-center flex-shrink-0">
                    <span className="text-sm font-bold text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                      {item.day}
                    </span>
                  </div>
                  <div className="h-px bg-rose-200 w-8 flex-shrink-0" />
                  <p className="text-gray-700">{item.task}</p>
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
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Camera className="w-3 h-3 mr-1 inline" /> Real Surprises</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Husband Surprise Setups We&apos;ve Created
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
                <Image src={src} alt={`Husband anniversary surprise ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
              Husband Surprise Packages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all bg-white ${i === 1 ? 'ring-2 ring-rose-500' : 'border-rose-100'}`}>
                {i === 1 && <Badge className="absolute top-4 right-4 bg-rose-500 text-white">Most Popular</Badge>}
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
                    Plan Surprise <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">💕</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
              &quot;My husband literally had tears in his eyes. He kept saying &apos;I can&apos;t believe you did all this for me.&apos; 
              That reaction was worth everything. Thank you Friends Factory for making it so easy!&quot;
            </blockquote>
            <p className="text-rose-600 font-semibold">— Priya S., surprised her husband on their 7th anniversary</p>
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
                { q: "What if my husband finds out before the surprise?", a: "We've done 500+ surprises and maintain strict confidentiality. We never call from an identifiable number, and all our communications are discrete. Even if he sees a message, it won't reveal the surprise." },
                { q: "Can I include specific gifts or items in the setup?", a: "Absolutely! You can send us gifts, photos, or any personal items you want incorporated. Many wives send watches, perfumes, or handwritten letters to be placed in the setup." },
                { q: "What if he doesn't like surprises?", a: "Even men who 'don't like surprises' love being made to feel special. Our setups are tasteful, not overwhelming. We've never had a husband who didn't appreciate the effort." },
                { q: "How do I get him to the venue without suspicion?", a: "The classic excuse is 'dinner plans.' We can also coordinate with his friends if you want them to bring him, or we can suggest creative ways based on your situation." },
                { q: "Can I be there when he arrives to see his reaction?", a: "Yes! Many wives hide nearby and come out after the initial surprise. We can help coordinate the perfect reveal moment." }
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

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">More Anniversary Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {anniversaryKeywords.filter(k => k.slug !== 'anniversary-surprise-for-husband-vadodara').slice(0, 10).map((kw, i) => (
              <Link key={i} href={`/${kw.slug}`} className="px-4 py-2 bg-rose-50 rounded-full border border-rose-200 hover:border-rose-400 hover:bg-rose-100 text-sm transition-all">
                {kw.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">We Serve All Vadodara</h2>
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
      <section className="py-20 bg-gradient-to-r from-slate-800 via-rose-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Surprise Your Husband?</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Start planning secretly today. WhatsApp us — we&apos;ll help you create a surprise he&apos;ll never forget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to plan a surprise anniversary celebration for my husband.`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                <MessageCircle className="mr-2 h-5 w-5" /> Start Planning (WhatsApp)
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
