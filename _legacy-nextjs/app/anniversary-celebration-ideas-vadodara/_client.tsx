'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, Check, ChevronRight,
  Heart, Calendar, Gift, ArrowRight, Camera,
  Lightbulb, Star, Sparkles, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, vadodaraAreas, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

export default function AnniversaryCelebrationIdeasVadodara() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const celebrationIdeas = [
    {
      category: "Romantic",
      ideas: [
        { title: "Candlelight Dinner Date", desc: "Classic never fails — private table, candles, roses, gourmet food", difficulty: "Easy" },
        { title: "Rooftop Stargazing Dinner", desc: "Dine under the stars with fairy lights and a telescope", difficulty: "Special" },
        { title: "Recreate Your First Date", desc: "Go back to where it all started with a modern twist", difficulty: "Personal" }
      ]
    },
    {
      category: "Surprise",
      ideas: [
        { title: "Surprise Room Transformation", desc: "Come home to a fully decorated room setup", difficulty: "WOW Factor" },
        { title: "Flash Mob Proposal Renewal", desc: "For milestone anniversaries — surprise them big!", difficulty: "Grand" },
        { title: "Treasure Hunt Adventure", desc: "Clues leading to the final celebration spot", difficulty: "Creative" }
      ]
    },
    {
      category: "Meaningful",
      ideas: [
        { title: "Memory Lane Evening", desc: "Photos, videos, and mementos from your journey together", difficulty: "Emotional" },
        { title: "Vow Renewal Ceremony", desc: "Say \"I do\" again in an intimate setting", difficulty: "Heartfelt" },
        { title: "Time Capsule Opening", desc: "Open letters you wrote to your future selves", difficulty: "Nostalgic" }
      ]
    },
    {
      category: "Adventurous",
      ideas: [
        { title: "Sunrise Breakfast Date", desc: "Start the day together watching the sun rise", difficulty: "Early Bird" },
        { title: "Couple's Photoshoot Day", desc: "Professional photos at your favorite spots", difficulty: "Memorable" },
        { title: "Cook Together Experience", desc: "Chef-guided cooking followed by your own meal", difficulty: "Interactive" }
      ]
    }
  ];

  const budgetIdeas = [
    { budget: "Under ₹2,000", ideas: "Handwritten love letter, homemade dinner, stargazing, photo collage" },
    { budget: "₹2,000 - ₹5,000", ideas: "Basic candlelight dinner, balloon decoration, cake and flowers" },
    { budget: "₹5,000 - ₹10,000", ideas: "Premium decoration, multi-course dinner, professional photos" },
    { budget: "Above ₹10,000", ideas: "Luxury celebration, elaborate setup, gifts, full experience" }
  ];

  const monthByMonth = [
    { month: "January", idea: "New Year New Love — Start fresh with a cozy indoor celebration" },
    { month: "February", idea: "Valentine's Month — Double the romance with anniversary + V-Day vibes" },
    { month: "March", idea: "Spring Romance — Floral themes, garden setups, fresh beginnings" },
    { month: "April", idea: "Summer Starts — Rooftop evening or sunrise celebration" },
    { month: "October", idea: "Festive Season — Diwali-themed anniversary with lights and sparkle" },
    { month: "December", idea: "Year End Special — Christmas vibes, cozy setups, holiday magic" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Anniversary Celebration Ideas</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-500 via-rose-500 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">💡</div>
          <div className="absolute bottom-10 right-10 text-9xl">💝</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              💡 Inspiration Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Celebration Ideas in Vadodara
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stuck on how to celebrate? We&apos;ve got you covered! From simple romantic gestures 
              to grand surprises, explore our curated collection of anniversary celebration 
              ideas perfect for couples in Vadodara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Let&apos;s Plan Together
              </Button>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I need help with anniversary celebration ideas.`}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Personalized Ideas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every couple is unique, and so should be your anniversary celebration. Whether 
              you&apos;re a hopeless romantic, an adventure seeker, or someone who values 
              meaningful moments over grand gestures — there&apos;s a perfect celebration style 
              for you. Explore our ideas below!
            </p>
          </div>
        </div>
      </section>

      {/* Celebration Ideas by Category */}
      {celebrationIdeas.map((cat, catIndex) => (
        <section key={catIndex} className={`py-16 ${catIndex % 2 === 0 ? 'bg-rose-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-rose-100 text-rose-700">
                  {cat.category === "Romantic" && "💕"}
                  {cat.category === "Surprise" && "🎁"}
                  {cat.category === "Meaningful" && "💝"}
                  {cat.category === "Adventurous" && "✨"}
                  {" "}{cat.category} Ideas
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {cat.category} Anniversary Celebrations
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {cat.ideas.map((idea, i) => (
                  <Card key={i} className="border-rose-100 hover:shadow-lg transition-all h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{idea.title}</CardTitle>
                        <Badge className="bg-rose-100 text-rose-700 text-xs">{idea.difficulty}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{idea.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Ideas by Budget */}
      <section className="py-20 bg-gradient-to-br from-rose-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white text-rose-700">💰 By Budget</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ideas for Every Budget
              </h2>
              <p className="text-gray-600">Love doesn&apos;t need a price tag, but here&apos;s what you can do at different budgets</p>
            </div>
            
            <div className="space-y-4">
              {budgetIdeas.map((item, i) => (
                <Card key={i} className="border-rose-200">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <Badge className="w-fit bg-rose-500 text-white px-4 py-2">{item.budget}</Badge>
                      <p className="text-gray-700">{item.ideas}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Ideas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><Clock className="w-3 h-3 mr-1 inline" /> Seasonal</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Seasonal Anniversary Ideas
              </h2>
              <p className="text-gray-600">Make the most of the season your anniversary falls in</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {monthByMonth.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-rose-50 rounded-xl">
                  <div className="w-24 flex-shrink-0">
                    <Badge className="bg-rose-500 text-white w-full justify-center">{item.month}</Badge>
                  </div>
                  <p className="text-gray-700 text-sm">{item.idea}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700"><Lightbulb className="w-3 h-3 mr-1 inline" /> Pro Tips</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Anniversary Celebration Tips
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Plan Ahead", desc: "Book venues and services at least 1-2 weeks in advance, especially for weekends" },
                { title: "Personal > Expensive", desc: "A thoughtful handwritten letter means more than an expensive gift" },
                { title: "Capture the Moments", desc: "Arrange for photos or videos — you'll cherish them forever" },
                { title: "Include Their Love Language", desc: "Quality time? Acts of service? Gifts? Plan around what they value" },
                { title: "Element of Surprise", desc: "Even small surprises create big memories" },
                { title: "Unplug Together", desc: "Put phones away and be fully present with each other" }
              ].map((tip, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{tip.title}</h3>
                    <p className="text-sm text-gray-600">{tip.desc}</p>
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
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Camera className="w-3 h-3 mr-1 inline" /> Inspiration</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ideas Brought to Life
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
                <Image src={src} alt={`Anniversary idea ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700"><Gift className="w-3 h-3 mr-1 inline" /> Ready-Made</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Don&apos;t Want to Plan? We&apos;ve Got Packages!
            </h2>
            <p className="text-gray-600">Let us handle everything while you enjoy</p>
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
                  <Button className="w-full bg-rose-500 hover:bg-rose-600" onClick={() => setIsBookingOpen(true)}>
                    Book Now <ArrowRight className="ml-2 w-4 h-4" />
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
                { q: "How do I choose the right celebration idea?", a: "Think about your partner's personality. Do they love surprises or prefer predictable plans? Are they introverted or love socializing? Match the celebration to their style." },
                { q: "Can you help me execute any of these ideas?", a: "Absolutely! That's what we're here for. Share your idea with us, and we'll help you plan and execute it perfectly." },
                { q: "What if my anniversary is on a weekday?", a: "Weekdays can be even more special! Consider an after-work surprise dinner or a midnight celebration when the date changes." },
                { q: "How do I keep the surprise a secret?", a: "Book through WhatsApp during work hours, pay from a personal account, and use a simple excuse like 'dinner plans' to bring them over." },
                { q: "What's the best anniversary gift alongside the celebration?", a: "Something personal always wins — a heartfelt letter, a photo album, or something related to their interests. The celebration itself is already a gift!" }
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
          <h2 className="text-2xl font-bold text-center mb-8">Explore More Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {anniversaryKeywords.filter(k => k.slug !== 'anniversary-celebration-ideas-vadodara').slice(0, 10).map((kw, i) => (
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
          <h2 className="text-2xl font-bold text-center mb-4">Serving All of Vadodara</h2>
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
      <section className="py-20 bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Found Your Perfect Idea?</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring it to life! Share your vision with us and we&apos;ll make it happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8" onClick={() => setIsBookingOpen(true)}>
              <Heart className="mr-2 h-5 w-5" /> Let&apos;s Plan Together
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
