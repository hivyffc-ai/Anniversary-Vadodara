'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Factory, Home, Building2, Users, Car, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function ChhaniAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const chhaniHighlights = [
    { icon: Factory, title: "Industrial Hub", description: "Serving Chhani's hardworking industrial community" },
    { icon: Home, title: "Mixed Living", description: "From worker housing to new townships" },
    { icon: Users, title: "Community Spirit", description: "Strong neighborhood bonds and celebrations" },
    { icon: Briefcase, title: "Working Families", description: "Flexible timing for shift workers" }
  ];

  const chhaniReasons = ["Understanding industrial area schedules", "Budget-friendly premium packages", "Quick setup for time-constrained couples", "Both intimate and community celebrations", "Flexible payment options", "Serving Chhani for years"];

  const nearbyLandmarks = [
    { name: "Chhani GIDC", distance: "3 min" }, { name: "Chhani Road", distance: "2 min" }, { name: "Vadodara City", distance: "12 min" },
    { name: "Tarsali", distance: "8 min" }, { name: "Makarpura", distance: "10 min" }, { name: "NH8", distance: "15 min" }
  ];

  const celebrationIdeas = [
    { title: "Hardworking Love", description: "Premium celebration at working-class prices - you deserve the best", price: "Starting ₹3,499", popular: true },
    { title: "Shift-Friendly Setup", description: "We set up before you return from work - come home to surprise", price: "Starting ₹3,999", popular: true },
    { title: "Community Celebration", description: "Share your joy with neighbors - extended celebration", price: "Starting ₹5,499", popular: false },
    { title: "Weekend Getaway Feel", description: "Transform your Chhani home into a romantic retreat", price: "Starting ₹4,499", popular: false }
  ];

  const testimonials = [
    { name: "Lata & Ramesh Thakor", location: "Chhani GIDC", review: "We both work in factories with different shifts. They coordinated perfectly and set everything up between our timings. So thoughtful!", rating: 5 },
    { name: "Meera & Sunil Patel", location: "Chhani Road", review: "After 15 years of marriage and hard work, we finally celebrated properly. They made us feel special without burning our savings!", rating: 5 },
    { name: "Geeta & Prakash Vasava", location: "Near Chhani", review: "Our whole society was impressed! They did a small gathering decoration that was affordable but looked expensive!", rating: 5 }
  ];

  const faqs = [
    { question: "Do you serve the Chhani industrial area?", answer: "Yes! We actively serve all of Chhani including GIDC area, Chhani Road, worker colonies, and new residential developments. We understand the area and its working-class community." },
    { question: "What about shift worker schedules?", answer: "We're flexible! Whether you need morning setup, evening celebration, or coordination between different shift timings, we accommodate. Many Chhani couples have odd schedules - we get it." },
    { question: "Are your packages affordable for workers?", answer: "Absolutely! Our Chhani packages start at ₹3,499 with no compromise on quality. We believe everyone deserves a beautiful celebration regardless of budget." },
    { question: "Can you do setup while we're at work?", answer: "Yes! Give us access (through family member or neighbor) and we'll have everything ready when you return. Perfect for surprise celebrations." },
    { question: "What about payment flexibility?", answer: "We offer easy payment options. Pay 30% advance and balance after celebration. For regular customers, even more flexible arrangements possible." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      <div className="bg-zinc-50 py-4"><div className="container mx-auto px-4"><nav className="flex items-center gap-2 text-sm flex-wrap"><Link href="/" className="text-gray-500 hover:text-zinc-600">Home</Link><ChevronRight className="h-4 w-4 text-gray-400" /><Link href="/areas" className="text-gray-500 hover:text-zinc-600">Areas</Link><ChevronRight className="h-4 w-4 text-gray-400" /><span className="text-zinc-700 font-medium">Chhani</span></nav></div></div>

      <section className="bg-gradient-to-br from-zinc-700 via-slate-600 to-zinc-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">🏭 Serving Chhani - Industrial Heart</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Anniversary Celebration in Chhani, Vadodara</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Hard work deserves celebration! Chhani's dedicated workers and their families deserve premium anniversary experiences at honest prices.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zinc-700 hover:bg-zinc-50 text-lg px-8 py-6" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Celebration</Button>
            <a href={`tel:${siteConfig.phone}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><Phone className="mr-2 h-5 w-5" />{siteConfig.phone}</Button></a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MapPin className="h-4 w-4" /> Chhani Area</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="h-4 w-4" /> 4.8★ Rating</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="h-4 w-4" /> 350+ Celebrations</span>
          </div>
        </div></div>
      </section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-zinc-100 text-zinc-700">Why Choose Us</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Understanding Chhani</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{chhaniHighlights.map((h, i) => (<Card key={i} className="border-zinc-100 hover:shadow-lg"><CardContent className="p-6 text-center"><div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4"><h.icon className="h-7 w-7 text-zinc-600" /></div><h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-zinc-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-zinc-100 text-zinc-700">Value Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chhani Celebrations</h2></div><div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{celebrationIdeas.map((idea, i) => (<Card key={i} className={`relative ${idea.popular ? 'ring-2 ring-zinc-500' : ''}`}>{idea.popular && <div className="absolute top-4 right-4"><Badge className="bg-zinc-700 text-white">Best Value</Badge></div>}<CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3><p className="text-gray-600 mb-4">{idea.description}</p><div className="flex items-center justify-between"><span className="text-zinc-700 font-semibold">{idea.price}</span><Button variant="outline" className="border-zinc-600 text-zinc-700" onClick={() => setIsBookingOpen(true)}>Book</Button></div></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-zinc-100 text-zinc-700">Location</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distances from Chhani</h2></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">{nearbyLandmarks.map((l, i) => (<div key={i} className="bg-zinc-50 rounded-lg p-4 text-center"><MapPin className="h-6 w-6 text-zinc-600 mx-auto mb-2" /><p className="font-medium text-gray-900 text-sm">{l.name}</p><p className="text-zinc-600 text-sm">{l.distance}</p></div>))}</div></div></section>

      <section className="py-16 bg-gradient-to-br from-zinc-700 to-slate-800 text-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><Badge className="mb-4 bg-white/20 text-white border-white/30">Honest Service</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Why Chhani Trusts Us</h2><ul className="space-y-3">{chhaniReasons.map((r, i) => (<li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-green-400 mt-0.5" /><span>{r}</span></li>))}</ul></div><div className="grid grid-cols-2 gap-4">{['🏭', '👷', '❤️', '🎉'].map((e, i) => (<div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-6xl">{e}</div>))}</div></div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-zinc-100 text-zinc-700">Reviews</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chhani Stories</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{testimonials.map((t, i) => (<Card key={i} className="border-zinc-100"><CardContent className="p-6"><div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div><p className="text-gray-600 mb-4 italic">"{t.review}"</p><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-zinc-600">{t.location}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-zinc-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-zinc-100 text-zinc-700">Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Affordable Packages</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{packages.slice(0, 3).map((pkg, i) => (<Card key={i} className={`relative ${i === 1 ? 'ring-2 ring-zinc-500 scale-105' : ''}`}>{i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-zinc-700 text-white">Value Pick</Badge></div>}<CardHeader className="text-center pb-2"><CardTitle className="text-xl">{pkg.name}</CardTitle><div className="text-3xl font-bold text-zinc-700">{formatPrice(pkg.price)}</div></CardHeader><CardContent><ul className="space-y-2">{pkg.features.slice(0, 6).map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>{f}</span></li>))}</ul><Button className="w-full mt-6 bg-zinc-700 hover:bg-zinc-800" onClick={() => setIsBookingOpen(true)}>Book</Button></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-zinc-100 text-zinc-700">FAQs</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chhani FAQs</h2></div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((f, i) => (<Card key={i} className="border-zinc-100"><CardContent className="p-6"><h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3><p className="text-gray-600">{f.answer}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-gradient-to-r from-zinc-700 to-slate-800 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">You Earn It, You Deserve It! 🏭❤️</h2><p className="text-xl text-white/90 mb-8">Join 350+ Chhani families</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-white text-zinc-700 hover:bg-zinc-50" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Now</Button><a href={`https://wa.me/${siteConfig.whatsapp}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</Button></a></div></div></section>

      <FFCFooter /><FFCWhatsAppFloat /><FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}

