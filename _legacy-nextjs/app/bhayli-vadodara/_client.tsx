'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Building2, TreePine, Users, Car, Home, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function BhayliAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const bhayliHighlights = [
    { icon: Building2, title: "Emerging Township", description: "Serving Bhayli's growing young professional community" },
    { icon: TreePine, title: "Peaceful Suburb", description: "Away from city chaos - perfect for intimate celebrations" },
    { icon: Home, title: "New Developments", description: "Modern apartments and villas with great spaces" },
    { icon: Car, title: "Highway Access", description: "Easy connectivity via Vadodara-Halol Highway" }
  ];

  const bhayliReasons = [
    "Understanding Bhayli's young couples",
    "Quick reach via highway",
    "Modern apartment decoration experts",
    "Villa and bungalow packages",
    "Budget to premium options",
    "Outdoor celebration possibilities"
  ];

  const nearbyLandmarks = [
    { name: "Bhayli Village", distance: "2 min" },
    { name: "Vadodara-Halol Highway", distance: "5 min" },
    { name: "Sevasi", distance: "8 min" },
    { name: "Gotri", distance: "15 min" },
    { name: "Waghodia Road", distance: "12 min" },
    { name: "Vadodara City", distance: "20 min" }
  ];

  const celebrationIdeas = [
    { title: "Villa Romance", description: "Exclusive celebration in Bhayli's beautiful villas with garden setup", price: "Starting ₹6,999", popular: true },
    { title: "New Nest Celebration", description: "First anniversary in your new Bhayli apartment", price: "Starting ₹4,499", popular: true },
    { title: "Poolside Party", description: "Villa pool side romantic dinner under stars", price: "Starting ₹8,999", popular: false },
    { title: "Suburban Retreat", description: "Peaceful celebration away from city hustle", price: "Starting ₹5,499", popular: false }
  ];

  const testimonials = [
    { name: "Pooja & Vivek Kumar", location: "Bhayli Township", review: "We chose Bhayli for the peace and quiet. They created a beautiful garden dinner in our villa compound. So romantic with just us under the stars!", rating: 5 },
    { name: "Riya & Harsh Patel", location: "Near Bhayli", review: "Moving to Bhayli from city was the best decision. They understood our modern tastes and created a minimalist yet elegant anniversary setup.", rating: 5 },
    { name: "Anita & Rohit Sharma", location: "Bhayli Road", review: "The poolside dinner arrangement was straight out of a resort! Floating candles, fairy lights - felt like we were in Bali!", rating: 5 }
  ];

  const faqs = [
    { question: "Do you travel to Bhayli for celebrations?", answer: "Absolutely! Bhayli is well-connected via the Vadodara-Halol Highway. We reach within 30 minutes from city center and serve the entire Bhayli region including new townships and villages." },
    { question: "What's special about Bhayli celebrations?", answer: "Bhayli offers what city can't - space, peace, and nature. We create outdoor celebrations, garden dinners, and poolside parties that are impossible in crowded city areas." },
    { question: "Do you work with Bhayli villas?", answer: "Yes! Bhayli has many beautiful villas with gardens and pools. We specialize in transforming these spaces into romantic celebration venues." },
    { question: "Is there extra charge for Bhayli?", answer: "We add a nominal travel charge of ₹500-1000 for Bhayli depending on exact location. This covers our team's transportation and equipment logistics." },
    { question: "Can you arrange weekend getaway celebrations?", answer: "Yes! Many couples book us for weekend celebrations in Bhayli resorts and farmstays. We coordinate with the property and handle all decoration." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      <div className="bg-emerald-50 py-4"><div className="container mx-auto px-4"><nav className="flex items-center gap-2 text-sm flex-wrap"><Link href="/" className="text-gray-500 hover:text-emerald-600">Home</Link><ChevronRight className="h-4 w-4 text-gray-400" /><Link href="/areas" className="text-gray-500 hover:text-emerald-600">Areas</Link><ChevronRight className="h-4 w-4 text-gray-400" /><span className="text-emerald-600 font-medium">Bhayli</span></nav></div></div>

      <section className="bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">🏘️ Serving Bhayli - Peaceful Suburban Life</Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Anniversary Celebration in Bhayli, Vadodara</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Where peace meets romance! Bhayli's serene suburbs and beautiful villas create the perfect escape for couples seeking intimate, unforgettable celebrations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Celebration</Button>
              <a href={`tel:${siteConfig.phone}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><Phone className="mr-2 h-5 w-5" />{siteConfig.phone}</Button></a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MapPin className="h-4 w-4" /> Bhayli Township</span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="h-4 w-4" /> 4.9★ Rating</span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="h-4 w-4" /> 200+ Celebrations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-emerald-100 text-emerald-700">Why Choose Us</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Bhayli Living</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{bhayliHighlights.map((h, i) => (<Card key={i} className="border-emerald-100 hover:shadow-lg"><CardContent className="p-6 text-center"><div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><h.icon className="h-7 w-7 text-emerald-600" /></div><h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-emerald-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-emerald-100 text-emerald-700">Exclusive Options</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bhayli Celebration Packages</h2></div><div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{celebrationIdeas.map((idea, i) => (<Card key={i} className={`relative ${idea.popular ? 'ring-2 ring-emerald-500' : ''}`}>{idea.popular && <div className="absolute top-4 right-4"><Badge className="bg-emerald-600 text-white">Popular</Badge></div>}<CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3><p className="text-gray-600 mb-4">{idea.description}</p><div className="flex items-center justify-between"><span className="text-emerald-600 font-semibold">{idea.price}</span><Button variant="outline" className="border-emerald-600 text-emerald-600" onClick={() => setIsBookingOpen(true)}>Book</Button></div></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-emerald-100 text-emerald-700">Location</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distance from Bhayli</h2></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">{nearbyLandmarks.map((l, i) => (<div key={i} className="bg-emerald-50 rounded-lg p-4 text-center"><MapPin className="h-6 w-6 text-emerald-600 mx-auto mb-2" /><p className="font-medium text-gray-900 text-sm">{l.name}</p><p className="text-emerald-600 text-sm">{l.distance}</p></div>))}</div></div></section>

      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><Badge className="mb-4 bg-white/20 text-white border-white/30">Suburban Experts</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Why Bhayli Loves Us</h2><ul className="space-y-3">{bhayliReasons.map((r, i) => (<li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-emerald-300 mt-0.5" /><span>{r}</span></li>))}</ul></div><div className="grid grid-cols-2 gap-4">{['🏘️', '🌿', '🏊', '💚'].map((e, i) => (<div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-6xl">{e}</div>))}</div></div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-emerald-100 text-emerald-700">Reviews</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bhayli Love Stories</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{testimonials.map((t, i) => (<Card key={i} className="border-emerald-100"><CardContent className="p-6"><div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div><p className="text-gray-600 mb-4 italic">"{t.review}"</p><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-emerald-600">{t.location}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-emerald-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-emerald-100 text-emerald-700">Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Anniversary Packages</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{packages.slice(0, 3).map((pkg, i) => (<Card key={i} className={`relative ${i === 1 ? 'ring-2 ring-emerald-500 scale-105' : ''}`}>{i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-emerald-600 text-white">Popular</Badge></div>}<CardHeader className="text-center pb-2"><CardTitle className="text-xl">{pkg.name}</CardTitle><div className="text-3xl font-bold text-emerald-600">{formatPrice(pkg.price)}</div></CardHeader><CardContent><ul className="space-y-2">{pkg.features.slice(0, 6).map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>{f}</span></li>))}</ul><Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsBookingOpen(true)}>Book</Button></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-emerald-100 text-emerald-700">FAQs</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bhayli Questions</h2></div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((f, i) => (<Card key={i} className="border-emerald-100"><CardContent className="p-6"><h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3><p className="text-gray-600">{f.answer}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">Escape to Romance! 🏘️❤️</h2><p className="text-xl text-white/90 mb-8">Join 200+ Bhayli couples</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Now</Button><a href={`https://wa.me/${siteConfig.whatsapp}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</Button></a></div></div></section>

      <FFCFooter /><FFCWhatsAppFloat /><FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}

