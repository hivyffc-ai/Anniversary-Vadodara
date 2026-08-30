'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Home, Building, Trees, Users, Sparkles, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function TarsaliAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const tarsaliHighlights = [
    { icon: Home, title: "New Homes", description: "Serving Tarsali's growing residential community" },
    { icon: Building, title: "Society Living", description: "Expert in apartment & society decorations" },
    { icon: Trees, title: "Green Area", description: "Peaceful outskirts location advantage" },
    { icon: Users, title: "Young Families", description: "Understanding new couples & young parents" }
  ];

  const tarsaliReasons = ["Serving new Tarsali townships", "Young family specialists", "Society celebration experts", "Affordable quality packages", "Quick delivery time", "Growing with the community"];

  const nearbyLandmarks = [
    { name: "Tarsali Circle", distance: "3 min" }, { name: "New Societies", distance: "5 min" }, { name: "Tarsali-Vadsar Road", distance: "7 min" },
    { name: "Manjalpur", distance: "10 min" }, { name: "Makarpura", distance: "12 min" }, { name: "City Center", distance: "15 min" }
  ];

  const celebrationIdeas = [
    { title: "New Beginnings", description: "Perfect for couples celebrating in their new Tarsali home", price: "Starting ₹4,499", popular: true },
    { title: "First Anniversary", description: "Special package for newlyweds celebrating year one", price: "Starting ₹5,499", popular: true },
    { title: "Society Terrace", description: "Rooftop/terrace celebration in your apartment complex", price: "Starting ₹6,999", popular: false },
    { title: "Garden Romance", description: "Society garden celebration with romantic ambiance", price: "Starting ₹5,999", popular: false }
  ];

  const testimonials = [
    { name: "Pooja & Vivek Patel", location: "Shraddha Residency Tarsali", review: "Just moved to Tarsali. They made our first anniversary in new home so special! Neighbors were impressed with the decoration!", rating: 5 },
    { name: "Nidhi & Karan Shah", location: "Tarsali Township", review: "Young couple, limited budget. They gave us premium experience at affordable price. Our 2BHK looked like 5-star hotel!", rating: 5 },
    { name: "Shreya & Rohan Desai", location: "Near Tarsali Circle", review: "Society terrace celebration was amazing! They coordinated with security and management. Perfect evening!", rating: 5 }
  ];

  const faqs = [
    { question: "Do you cover all of Tarsali area?", answer: "Yes! We serve entire Tarsali including new townships, residential societies, Tarsali-Vadsar road, and all new construction areas. As Tarsali grows, we grow with it!" },
    { question: "Can you decorate small apartments?", answer: "Absolutely! Many Tarsali couples live in 1BHK or 2BHK apartments. We specialize in making small spaces look magical using smart layouts, vertical decorations, and space-efficient designs." },
    { question: "What about society permission?", answer: "We handle society coordination. Our team is experienced with apartment complex rules, security procedures, and common area bookings for terrace or garden celebrations." },
    { question: "Do you offer first anniversary specials?", answer: "Yes! Our 'First Anniversary' package is designed specially for newly married couples. Includes romantic elements perfect for celebrating year one together." },
    { question: "Any packages for new home celebrations?", answer: "Our 'New Beginnings' package is perfect for couples who recently moved to Tarsali. It includes housewarming elements along with anniversary celebration at special combined pricing." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      <div className="bg-orange-50 py-4"><div className="container mx-auto px-4"><nav className="flex items-center gap-2 text-sm flex-wrap"><Link href="/" className="text-gray-500 hover:text-orange-600">Home</Link><ChevronRight className="h-4 w-4 text-gray-400" /><Link href="/areas" className="text-gray-500 hover:text-orange-600">Areas</Link><ChevronRight className="h-4 w-4 text-gray-400" /><span className="text-orange-700 font-medium">Tarsali</span></nav></div></div>

      <section className="bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">🏠 Serving Tarsali - Growing Together</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Anniversary Celebration in Tarsali, Vadodara</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">New homes, new dreams, new celebrations! Tarsali's trusted anniversary celebration partner for young couples building their future together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Celebration</Button>
            <a href={`tel:${siteConfig.phone}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><Phone className="mr-2 h-5 w-5" />{siteConfig.phone}</Button></a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MapPin className="h-4 w-4" /> Tarsali Township</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="h-4 w-4" /> 4.8★ Rating</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="h-4 w-4" /> 300+ Celebrations</span>
          </div>
        </div></div>
      </section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-orange-100 text-orange-700">Why Choose Us</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Made for Tarsali</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{tarsaliHighlights.map((h, i) => (<Card key={i} className="border-orange-100 hover:shadow-lg"><CardContent className="p-6 text-center"><div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><h.icon className="h-7 w-7 text-orange-600" /></div><h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-orange-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-orange-100 text-orange-700">Special Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tarsali Celebrations</h2></div><div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{celebrationIdeas.map((idea, i) => (<Card key={i} className={`relative ${idea.popular ? 'ring-2 ring-orange-500' : ''}`}>{idea.popular && <div className="absolute top-4 right-4"><Badge className="bg-orange-600 text-white">Popular</Badge></div>}<CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3><p className="text-gray-600 mb-4">{idea.description}</p><div className="flex items-center justify-between"><span className="text-orange-700 font-semibold">{idea.price}</span><Button variant="outline" className="border-orange-600 text-orange-700" onClick={() => setIsBookingOpen(true)}>Book</Button></div></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-orange-100 text-orange-700">Location</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distances from Tarsali</h2></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">{nearbyLandmarks.map((l, i) => (<div key={i} className="bg-orange-50 rounded-lg p-4 text-center"><MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" /><p className="font-medium text-gray-900 text-sm">{l.name}</p><p className="text-orange-600 text-sm">{l.distance}</p></div>))}</div></div></section>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-600 text-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><Badge className="mb-4 bg-white/20 text-white border-white/30">Community Trust</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Why Tarsali Loves Us</h2><ul className="space-y-3">{tarsaliReasons.map((r, i) => (<li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-green-400 mt-0.5" /><span>{r}</span></li>))}</ul></div><div className="grid grid-cols-2 gap-4">{['🏠', '🌅', '❤️', '✨'].map((e, i) => (<div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-6xl">{e}</div>))}</div></div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-orange-100 text-orange-700">Reviews</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tarsali Love Stories</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{testimonials.map((t, i) => (<Card key={i} className="border-orange-100"><CardContent className="p-6"><div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div><p className="text-gray-600 mb-4 italic">"{t.review}"</p><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-orange-600">{t.location}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-orange-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-orange-100 text-orange-700">Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Young Family Packages</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{packages.slice(0, 3).map((pkg, i) => (<Card key={i} className={`relative ${i === 0 ? 'ring-2 ring-orange-500 scale-105' : ''}`}>{i === 0 && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-orange-600 text-white">Best for New Couples</Badge></div>}<CardHeader className="text-center pb-2"><CardTitle className="text-xl">{pkg.name}</CardTitle><div className="text-3xl font-bold text-orange-600">{formatPrice(pkg.price)}</div></CardHeader><CardContent><ul className="space-y-2">{pkg.features.slice(0, 6).map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>{f}</span></li>))}</ul><Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700" onClick={() => setIsBookingOpen(true)}>Book</Button></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-orange-100 text-orange-700">FAQs</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tarsali FAQs</h2></div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((f, i) => (<Card key={i} className="border-orange-100"><CardContent className="p-6"><h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3><p className="text-gray-600">{f.answer}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-500 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">New Home, New Memories! 🏠❤️</h2><p className="text-xl text-white/90 mb-8">Join 300+ Tarsali young couples</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Now</Button><a href={`https://wa.me/${siteConfig.whatsapp}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</Button></a></div></div></section>

      <FFCFooter /><FFCWhatsAppFloat /><FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}

