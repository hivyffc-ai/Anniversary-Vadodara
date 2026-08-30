'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Clock, Star, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera, Sparkles,
  Award, Trophy, Cake, PartyPopper
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function FirstAnniversaryCelebrationVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const firstYearMilestones = [
    { month: "Month 1", title: "The Honeymoon Phase", desc: "Remember those first days as newlyweds?" },
    { month: "Month 3", title: "First Disagreement", desc: "You learned to navigate conflicts together" },
    { month: "Month 6", title: "Half Year Mark", desc: "Your routines started forming" },
    { month: "Month 9", title: "Growing Together", desc: "You became each other's home" },
    { month: "Month 12", title: "One Year Strong!", desc: "You made it — and it's just the beginning" }
  ];

  const celebrationIdeas = [
    {
      emoji: "📜",
      title: "Paper Anniversary Theme",
      desc: "Traditional 1st anniversary gift is paper. Love letters scattered around, paper cranes, handwritten vows displayed beautifully",
      why: "Honor tradition while celebrating your modern love"
    },
    {
      emoji: "🌅",
      title: "Sunset Dinner Experience",
      desc: "Book the evening slot for a magical sunset-to-starlight dinner as you reflect on your first year",
      why: "Perfect for romantic, reflective couples"
    },
    {
      emoji: "📸",
      title: "Memory Lane Setup",
      desc: "Photos from wedding, honeymoon, and first year displayed throughout the venue",
      why: "Relive your journey together"
    },
    {
      emoji: "🎬",
      title: "First Dance Encore",
      desc: "Re-create your wedding first dance in a private, candlelit setting",
      why: "Recreate the magic of your wedding night"
    }
  ];

  const whyFirstAnniversaryMatters = [
    { icon: Trophy, title: "You Survived Year One!", desc: "The first year has the most adjustments. You made it!" },
    { icon: Heart, title: "Love Deepened", desc: "From wedding excitement to real, everyday love" },
    { icon: Award, title: "Partnership Formed", desc: "You're no longer just spouses — you're a team" },
    { icon: Sparkles, title: "Foundation Set", desc: "Year one sets the tone for all years to come" }
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
            <span className="text-rose-600 font-medium">First Anniversary Celebration</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-500 via-rose-500 to-pink-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">1️⃣</div>
          <div className="absolute bottom-10 right-10 text-9xl">💕</div>
          <div className="absolute top-1/2 left-1/4 text-7xl">📜</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              🎊 Your Paper Anniversary
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              First Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              365 days of marriage. Countless moments of love. Your first anniversary deserves 
              a celebration as special as the day you said &quot;I do.&quot; Let us help you create an 
              unforgettable evening to mark this beautiful milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <PartyPopper className="mr-2 h-5 w-5" />
                Celebrate Year One
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! We want to celebrate our first anniversary in Vadodara!`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why First Anniversary Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">🏆 Milestone</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Your First Anniversary is So Special
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whyFirstAnniversaryMatters.map((item, i) => (
                <Card key={i} className="border-rose-100 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center flex-shrink-0">
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

      {/* Your First Year Journey */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">📅 Your Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Look How Far You&apos;ve Come
              </h2>
              <p className="text-gray-600">Your first year was full of beautiful moments</p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-rose-200 transform -translate-x-1/2" />
              <div className="space-y-8">
                {firstYearMilestones.map((milestone, i) => (
                  <div key={i} className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <span className="text-sm font-bold text-rose-600">{milestone.month}</span>
                      <h3 className="font-bold text-lg text-gray-900">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                    <div className="w-8 h-8 bg-rose-500 rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10" />
                    <div className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paper Anniversary Theme */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-100 text-amber-700">📜 Tradition</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Paper Anniversary — A Beautiful Tradition
              </h2>
            </div>
            
            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Did you know the first anniversary is traditionally called the <strong>&quot;Paper Anniversary&quot;</strong>? 
                  Paper symbolizes the blank pages of your new life together — ready to be written with 
                  love, adventures, and memories.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-amber-100">
                    <h4 className="font-bold text-rose-600 mb-2">💌 Our Paper Theme Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Love letters displayed beautifully</li>
                      <li>• Origami decorations</li>
                      <li>• Handwritten vows on display</li>
                      <li>• Paper flower accents</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-amber-100">
                    <h4 className="font-bold text-rose-600 mb-2">✍️ Personalize It:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Write each other letters to open</li>
                      <li>• Share your first-year memories</li>
                      <li>• Create a time capsule together</li>
                      <li>• Exchange meaningful notes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Celebration Ideas */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700">💡 Ideas</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                First Anniversary Celebration Ideas
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {celebrationIdeas.map((idea, i) => (
                <Card key={i} className="bg-white border-rose-100 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{idea.emoji}</span>
                      <CardTitle className="text-xl">{idea.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{idea.desc}</p>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="text-sm text-amber-700"><strong>Why it works:</strong> {idea.why}</p>
                    </div>
                  </CardContent>
                </Card>
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
              First Anniversary Celebrations
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
                <Image src={src} alt={`First anniversary celebration ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
              First Anniversary Packages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all bg-white ${i === 0 ? 'ring-2 ring-amber-500' : 'border-rose-100'}`}>
                {i === 0 && <Badge className="absolute top-4 right-4 bg-amber-500 text-white">Perfect for 1st</Badge>}
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
                    Celebrate Year 1 <ArrowRight className="ml-2 w-4 h-4" />
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
            <div className="text-6xl mb-6">💝</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
              &quot;Our first anniversary was even more special than our wedding reception! The team 
              incorporated our wedding photos, played our first dance song, and the paper theme 
              was so thoughtful. We started a tradition of celebrating here every year!&quot;
            </blockquote>
            <p className="text-rose-600 font-semibold">— Sneha & Aakash, First Anniversary</p>
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
                { q: "How far in advance should we book for our first anniversary?", a: "We recommend booking 1-2 weeks in advance for weekdays and 2-3 weeks for weekends. First anniversary dates around Valentine's week or popular months like December should be booked earlier." },
                { q: "Can you incorporate elements from our wedding?", a: "Absolutely! Share your wedding photos, colors, songs, or any special elements. We love creating continuity between your wedding and anniversary celebration." },
                { q: "Is this suitable for couples who just want a quiet dinner?", a: "Yes! We offer intimate, understated setups as well as grand celebrations. Let us know your preference, and we'll create the perfect ambiance for you." },
                { q: "Can we invite close friends or family?", a: "Our standard packages are designed for couples, but we can arrange small group celebrations. Contact us to discuss options for 4-8 guests." },
                { q: "What makes your first anniversary setup different?", a: "We understand that year one is special. We incorporate paper theme elements, wedding callbacks, and create a reflective yet celebratory atmosphere that honors your journey." }
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
          <h2 className="text-2xl font-bold text-center mb-8">More Anniversary Milestones</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {anniversaryKeywords.filter(k => k.slug !== 'first-anniversary-celebration-vadodara').slice(0, 10).map((kw, i) => (
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
          <h2 className="text-2xl font-bold text-center mb-4">Celebrating Couples from All Vadodara</h2>
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
      <section className="py-20 bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Celebrate Year One?</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Your first anniversary sets the tone for every anniversary to come. Make it unforgettable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8" onClick={() => setIsBookingOpen(true)}>
              <Calendar className="mr-2 h-5 w-5" /> Book Your Celebration
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
