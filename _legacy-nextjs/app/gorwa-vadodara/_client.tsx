'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Atom, GraduationCap, Building2, Users, Briefcase, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function GorwaAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const gorwaHighlights = [
    { icon: Atom, title: "ONGC Community", description: "Proudly serving ONGC colony families for years" },
    { icon: GraduationCap, title: "MSU Proximity", description: "Near MS University for academic community" },
    { icon: Beaker, title: "Refinery Families", description: "Understanding professional schedules & needs" },
    { icon: Building2, title: "Colony Culture", description: "Experienced with ONGC & IOC colony celebrations" }
  ];

  const gorwaReasons = ["Trusted by ONGC colony residents", "Understanding of transferable job families", "Professional & punctual service", "Experience with colony regulations", "Premium yet value packages", "Family-oriented celebrations"];

  const nearbyLandmarks = [
    { name: "ONGC Colony", distance: "2 min" }, { name: "IOC Colony", distance: "5 min" }, { name: "MSU Faculty", distance: "7 min" },
    { name: "Refinery Gate", distance: "8 min" }, { name: "Makarpura Palace", distance: "10 min" }, { name: "Alkapuri", distance: "15 min" }
  ];

  const celebrationIdeas = [
    { title: "Colony Special", description: "Elegant celebration designed for ONGC/IOC colony homes", price: "Starting ₹5,499", popular: true },
    { title: "Professional's Choice", description: "Quick setup for busy scientists and engineers", price: "Starting ₹6,499", popular: true },
    { title: "Transfer Farewell", description: "Memorable celebration before posting transfer", price: "Starting ₹7,999", popular: false },
    { title: "Welcome Home", description: "Surprise setup for spouse returning from field posting", price: "Starting ₹5,999", popular: false }
  ];

  const testimonials = [
    { name: "Dr. Meera & Rajiv Sharma", location: "ONGC Colony Phase 2", review: "As ONGC family, we've moved many places but this celebration in Gorwa was unforgettable. They understood colony life perfectly!", rating: 5 },
    { name: "Priya & Ankit Desai", location: "IOC Colony", review: "My husband returns from offshore after 15 days. They created a beautiful homecoming surprise. He was so touched!", rating: 5 },
    { name: "Kavita & Sunil Joshi", location: "Near MSU", review: "Both working professionals. They coordinated perfectly with our hectic schedules. Worth every rupee!", rating: 5 }
  ];

  const faqs = [
    { question: "Do you understand ONGC colony rules?", answer: "Yes! We've worked extensively in ONGC and IOC colonies. We know about gate entry procedures, timing restrictions, and space considerations in colony flats. Our team coordinates smoothly with security." },
    { question: "Can you setup for surprise homecoming?", answer: "Absolutely! Many Gorwa families have members in field postings or offshore duties. We coordinate timing perfectly and can setup while they're traveling back." },
    { question: "What about transfers and farewell celebrations?", answer: "We offer special 'Transfer Farewell' packages with memory walls, photo collages of Vadodara memories, and elements that celebrate your time here before you move to next posting." },
    { question: "Do you offer weekday celebrations?", answer: "Yes! Understanding that oil & gas professionals have rotating offs, we're flexible with any day. Weekday bookings also get 10% discount." },
    { question: "Can you arrange for larger colony gatherings?", answer: "Yes, we do colony party setups for community celebrations, retirement parties, and group anniversaries. We can work with colony clubhouse or community hall." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      <div className="bg-blue-50 py-4"><div className="container mx-auto px-4"><nav className="flex items-center gap-2 text-sm flex-wrap"><Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link><ChevronRight className="h-4 w-4 text-gray-400" /><Link href="/areas" className="text-gray-500 hover:text-blue-600">Areas</Link><ChevronRight className="h-4 w-4 text-gray-400" /><span className="text-blue-700 font-medium">Gorwa</span></nav></div></div>

      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">⚛️ Serving Gorwa - ONGC Community</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Anniversary Celebration in Gorwa, Vadodara</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Celebrating the scientific spirit of Gorwa! Trusted by ONGC, IOC colony families and MSU community for creating precious moments.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Celebration</Button>
            <a href={`tel:${siteConfig.phone}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><Phone className="mr-2 h-5 w-5" />{siteConfig.phone}</Button></a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MapPin className="h-4 w-4" /> ONGC Colony Area</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="h-4 w-4" /> 4.9★ Rating</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="h-4 w-4" /> 350+ Celebrations</span>
          </div>
        </div></div>
      </section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-blue-100 text-blue-700">Why Choose Us</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Made for Gorwa Families</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{gorwaHighlights.map((h, i) => (<Card key={i} className="border-blue-100 hover:shadow-lg"><CardContent className="p-6 text-center"><div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><h.icon className="h-7 w-7 text-blue-600" /></div><h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-blue-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-blue-100 text-blue-700">Special Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gorwa Celebrations</h2></div><div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{celebrationIdeas.map((idea, i) => (<Card key={i} className={`relative ${idea.popular ? 'ring-2 ring-blue-500' : ''}`}>{idea.popular && <div className="absolute top-4 right-4"><Badge className="bg-blue-700 text-white">Popular</Badge></div>}<CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3><p className="text-gray-600 mb-4">{idea.description}</p><div className="flex items-center justify-between"><span className="text-blue-700 font-semibold">{idea.price}</span><Button variant="outline" className="border-blue-600 text-blue-700" onClick={() => setIsBookingOpen(true)}>Book</Button></div></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-blue-100 text-blue-700">Location</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distances from Gorwa</h2></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">{nearbyLandmarks.map((l, i) => (<div key={i} className="bg-blue-50 rounded-lg p-4 text-center"><MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" /><p className="font-medium text-gray-900 text-sm">{l.name}</p><p className="text-blue-600 text-sm">{l.distance}</p></div>))}</div></div></section>

      <section className="py-16 bg-gradient-to-br from-blue-700 to-indigo-800 text-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><Badge className="mb-4 bg-white/20 text-white border-white/30">Colony Trust</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Why Gorwa Families Choose Us</h2><ul className="space-y-3">{gorwaReasons.map((r, i) => (<li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-green-400 mt-0.5" /><span>{r}</span></li>))}</ul></div><div className="grid grid-cols-2 gap-4">{['⚛️', '🔬', '❤️', '🏠'].map((e, i) => (<div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-6xl">{e}</div>))}</div></div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-blue-100 text-blue-700">Reviews</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gorwa Love Stories</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{testimonials.map((t, i) => (<Card key={i} className="border-blue-100"><CardContent className="p-6"><div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div><p className="text-gray-600 mb-4 italic">"{t.review}"</p><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-blue-600">{t.location}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-blue-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-blue-100 text-blue-700">Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Quality Packages</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{packages.slice(0, 3).map((pkg, i) => (<Card key={i} className={`relative ${i === 1 ? 'ring-2 ring-blue-500 scale-105' : ''}`}>{i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-blue-700 text-white">Most Booked</Badge></div>}<CardHeader className="text-center pb-2"><CardTitle className="text-xl">{pkg.name}</CardTitle><div className="text-3xl font-bold text-blue-700">{formatPrice(pkg.price)}</div></CardHeader><CardContent><ul className="space-y-2">{pkg.features.slice(0, 6).map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>{f}</span></li>))}</ul><Button className="w-full mt-6 bg-blue-700 hover:bg-blue-800" onClick={() => setIsBookingOpen(true)}>Book</Button></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-blue-100 text-blue-700">FAQs</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Colony FAQs</h2></div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((f, i) => (<Card key={i} className="border-blue-100"><CardContent className="p-6"><h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3><p className="text-gray-600">{f.answer}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">Celebrate Your Scientific Love Story! ⚛️❤️</h2><p className="text-xl text-white/90 mb-8">Join 350+ Gorwa colony families</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Now</Button><a href={`https://wa.me/${siteConfig.whatsapp}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</Button></a></div></div></section>

      <FFCFooter /><FFCWhatsAppFloat /><FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}

