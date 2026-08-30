'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Factory, Building2, Train, Users, Briefcase, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function MakarpuraAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const makarpuraHighlights = [
    { icon: Factory, title: "GIDC Hub", description: "Serving Makarpura's large industrial community" },
    { icon: Train, title: "Railway Connection", description: "Near Makarpura railway station for easy access" },
    { icon: Building2, title: "Historic Area", description: "One of Vadodara's established industrial zones" },
    { icon: Users, title: "Working Community", description: "Understanding the needs of working families" }
  ];

  const makarpuraReasons = ["Serving Makarpura GIDC for years", "Budget-friendly quality packages", "Shift-flexible timing options", "Home and venue celebrations", "Quick response time", "Trusted by local community"];

  const nearbyLandmarks = [
    { name: "Makarpura GIDC", distance: "3 min" }, { name: "Makarpura Station", distance: "5 min" }, { name: "Old Padra Road", distance: "8 min" },
    { name: "Manjalpur", distance: "10 min" }, { name: "Chhani", distance: "12 min" }, { name: "Vadodara City", distance: "15 min" }
  ];

  const celebrationIdeas = [
    { title: "Factory Worker Special", description: "Quality celebration designed for hardworking families at honest prices", price: "Starting ₹3,499", popular: true },
    { title: "After-Shift Romance", description: "Complete setup ready when you return from work", price: "Starting ₹3,999", popular: true },
    { title: "Weekend Bonanza", description: "Extended celebration for your off day with family", price: "Starting ₹5,499", popular: false },
    { title: "Simple & Sweet", description: "Basic but beautiful celebration for budget-conscious couples", price: "Starting ₹2,999", popular: false }
  ];

  const testimonials = [
    { name: "Sunita & Mahesh Rathod", location: "Makarpura GIDC", review: "We work different shifts. They understood and set everything up perfectly. Came home to the most beautiful surprise!", rating: 5 },
    { name: "Kamla & Dinesh Parmar", location: "Near Makarpura Station", review: "For ₹4000 they created magic! Our small room looked like a hotel. Neighbors came to see the decoration!", rating: 5 },
    { name: "Rekha & Suresh Thakor", location: "Makarpura Road", review: "25 years of marriage and first proper celebration. They respected our budget and created beautiful memories!", rating: 5 }
  ];

  const faqs = [
    { question: "Do you serve Makarpura GIDC area?", answer: "Yes! We've been serving Makarpura GIDC, station area, and surrounding residential colonies for years. Our team knows the area well and reaches quickly." },
    { question: "What's your cheapest package?", answer: "Our 'Simple & Sweet' package starts at just ₹2,999 with basic but quality decoration. Perfect for couples who want a special celebration without spending much." },
    { question: "Can you work around factory shift timings?", answer: "Absolutely! Most Makarpura families work in factories. We coordinate with your shift timing - setup before you return, early morning celebrations, late night surprises - we're flexible." },
    { question: "Do you offer EMI or installments?", answer: "Yes, for packages above ₹5000, we offer easy payment options. Pay 40% advance and rest in installments. We want everyone to celebrate!" },
    { question: "What if we have very small space?", answer: "Makarpura has many compact homes. We're experts at small-space decoration using wall hangings, ceiling drapes, and smart layouts that look beautiful even in 10x10 rooms." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      <div className="bg-stone-50 py-4"><div className="container mx-auto px-4"><nav className="flex items-center gap-2 text-sm flex-wrap"><Link href="/" className="text-gray-500 hover:text-stone-600">Home</Link><ChevronRight className="h-4 w-4 text-gray-400" /><Link href="/areas" className="text-gray-500 hover:text-stone-600">Areas</Link><ChevronRight className="h-4 w-4 text-gray-400" /><span className="text-stone-700 font-medium">Makarpura</span></nav></div></div>

      <section className="bg-gradient-to-br from-stone-700 via-stone-600 to-stone-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">🏭 Serving Makarpura - Industrial Legacy</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Anniversary Celebration in Makarpura, Vadodara</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Celebrating Makarpura's hardworking spirit! Quality anniversary celebrations at prices that respect your budget and honor your hard work.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-stone-700 hover:bg-stone-50 text-lg px-8 py-6" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Celebration</Button>
            <a href={`tel:${siteConfig.phone}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><Phone className="mr-2 h-5 w-5" />{siteConfig.phone}</Button></a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MapPin className="h-4 w-4" /> Makarpura GIDC</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="h-4 w-4" /> 4.8★ Rating</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="h-4 w-4" /> 400+ Celebrations</span>
          </div>
        </div></div>
      </section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-stone-100 text-stone-700">Why Choose Us</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Made for Makarpura</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{makarpuraHighlights.map((h, i) => (<Card key={i} className="border-stone-100 hover:shadow-lg"><CardContent className="p-6 text-center"><div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4"><h.icon className="h-7 w-7 text-stone-600" /></div><h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-stone-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-stone-100 text-stone-700">Affordable Options</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Makarpura Specials</h2></div><div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{celebrationIdeas.map((idea, i) => (<Card key={i} className={`relative ${idea.popular ? 'ring-2 ring-stone-500' : ''}`}>{idea.popular && <div className="absolute top-4 right-4"><Badge className="bg-stone-700 text-white">Best Value</Badge></div>}<CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3><p className="text-gray-600 mb-4">{idea.description}</p><div className="flex items-center justify-between"><span className="text-stone-700 font-semibold">{idea.price}</span><Button variant="outline" className="border-stone-600 text-stone-700" onClick={() => setIsBookingOpen(true)}>Book</Button></div></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-stone-100 text-stone-700">Location</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distances from Makarpura</h2></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">{nearbyLandmarks.map((l, i) => (<div key={i} className="bg-stone-50 rounded-lg p-4 text-center"><MapPin className="h-6 w-6 text-stone-600 mx-auto mb-2" /><p className="font-medium text-gray-900 text-sm">{l.name}</p><p className="text-stone-600 text-sm">{l.distance}</p></div>))}</div></div></section>

      <section className="py-16 bg-gradient-to-br from-stone-700 to-stone-800 text-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><Badge className="mb-4 bg-white/20 text-white border-white/30">Local Trust</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Why Makarpura Trusts Us</h2><ul className="space-y-3">{makarpuraReasons.map((r, i) => (<li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-green-400 mt-0.5" /><span>{r}</span></li>))}</ul></div><div className="grid grid-cols-2 gap-4">{['🏭', '🚂', '❤️', '🎊'].map((e, i) => (<div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-6xl">{e}</div>))}</div></div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-stone-100 text-stone-700">Reviews</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Makarpura Stories</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{testimonials.map((t, i) => (<Card key={i} className="border-stone-100"><CardContent className="p-6"><div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div><p className="text-gray-600 mb-4 italic">"{t.review}"</p><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-stone-600">{t.location}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-stone-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-stone-100 text-stone-700">Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Budget-Friendly Packages</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{packages.slice(0, 3).map((pkg, i) => (<Card key={i} className={`relative ${i === 0 ? 'ring-2 ring-stone-500 scale-105' : ''}`}>{i === 0 && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-stone-700 text-white">Budget Pick</Badge></div>}<CardHeader className="text-center pb-2"><CardTitle className="text-xl">{pkg.name}</CardTitle><div className="text-3xl font-bold text-stone-700">{formatPrice(pkg.price)}</div></CardHeader><CardContent><ul className="space-y-2">{pkg.features.slice(0, 6).map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>{f}</span></li>))}</ul><Button className="w-full mt-6 bg-stone-700 hover:bg-stone-800" onClick={() => setIsBookingOpen(true)}>Book</Button></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-stone-100 text-stone-700">FAQs</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Makarpura FAQs</h2></div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((f, i) => (<Card key={i} className="border-stone-100"><CardContent className="p-6"><h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3><p className="text-gray-600">{f.answer}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-gradient-to-r from-stone-700 to-stone-800 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">Your Hard Work Deserves Celebration! 🏭❤️</h2><p className="text-xl text-white/90 mb-8">Join 400+ Makarpura families</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-white text-stone-700 hover:bg-stone-50" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Now</Button><a href={`https://wa.me/${siteConfig.whatsapp}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</Button></a></div></div></section>

      <FFCFooter /><FFCWhatsAppFloat /><FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}

