'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Home, Building2, Users, TreePine, Car, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function TandaljaAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const tandaljaHighlights = [
    { icon: Home, title: "Spacious Living", description: "Larger homes mean grander celebration possibilities" },
    { icon: Building2, title: "Growing Township", description: "Modern societies with amenities for celebrations" },
    { icon: Users, title: "Family Area", description: "Joint families and multi-generational celebrations" },
    { icon: TreePine, title: "Green Surroundings", description: "Open spaces for outdoor celebration options" }
  ];

  const tandaljaReasons = [
    "Experience with Tandalja's spacious homes",
    "Society clubhouse celebration experts",
    "Garden party specialists",
    "Multi-generation family packages",
    "Both traditional and modern themes",
    "Budget-friendly to luxury options"
  ];

  const nearbyLandmarks = [
    { name: "Tandalja Road", distance: "2 min" },
    { name: "Subhanpura", distance: "5 min" },
    { name: "Vasna Road", distance: "7 min" },
    { name: "Akota", distance: "8 min" },
    { name: "Gotri", distance: "12 min" },
    { name: "Race Course", distance: "10 min" }
  ];

  const celebrationIdeas = [
    { title: "Garden Party Celebration", description: "Use Tandalja's open spaces for beautiful outdoor anniversary", price: "Starting ₹5,499", popular: true },
    { title: "Clubhouse Celebration", description: "Book your society clubhouse with our complete decoration", price: "Starting ₹6,999", popular: true },
    { title: "Spacious Home Setup", description: "Transform your large Tandalja home into celebration venue", price: "Starting ₹4,499", popular: false },
    { title: "Joint Family Special", description: "Inclusive celebration for multi-generation families", price: "Starting ₹5,999", popular: false }
  ];

  const testimonials = [
    { name: "Meera & Suresh Patel", location: "Tandalja Society", review: "We have a big house and they used every space creatively. Living room, terrace, even garden - everything looked coordinated and beautiful!", rating: 5 },
    { name: "Jyoti & Ramesh Desai", location: "Tandalja Road", review: "Booked our society clubhouse and they decorated it like a mini wedding venue. All our neighbors were impressed!", rating: 5 },
    { name: "Nirmala & Prakash Shah", location: "Near Tandalja", review: "With parents and in-laws, we needed something family-friendly yet romantic. They balanced it perfectly with separate zones for couple and family.", rating: 5 }
  ];

  const faqs = [
    { question: "Do you serve Tandalja area?", answer: "Yes! We serve all of Tandalja including main road societies, internal townships, and areas towards Subhanpura and Vasna. We know the area well." },
    { question: "Can you do clubhouse celebrations?", answer: "Absolutely! We've decorated many society clubhouses in Tandalja. We coordinate with society management, handle all setup, and ensure no damage to the premises." },
    { question: "What about garden or terrace parties?", answer: "Tandalja homes often have gardens and terraces. We specialize in outdoor setups with fairy lights, drapes, and weather-appropriate decorations." },
    { question: "Do you have joint family packages?", answer: "Yes! Many Tandalja families are joint families. We create celebrations with couple-focused zones and family-inclusive areas so everyone enjoys." },
    { question: "What's included for large home decoration?", answer: "For spacious Tandalja homes, we do living room, bedroom, entrance, and can extend to terrace and garden. Price varies based on areas covered." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      <div className="bg-lime-50 py-4"><div className="container mx-auto px-4"><nav className="flex items-center gap-2 text-sm flex-wrap"><Link href="/" className="text-gray-500 hover:text-lime-600">Home</Link><ChevronRight className="h-4 w-4 text-gray-400" /><Link href="/areas" className="text-gray-500 hover:text-lime-600">Areas</Link><ChevronRight className="h-4 w-4 text-gray-400" /><span className="text-lime-600 font-medium">Tandalja</span></nav></div></div>

      <section className="bg-gradient-to-br from-lime-600 via-green-500 to-lime-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">🏡 Serving Tandalja - Spacious Living</Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Anniversary Celebration in Tandalja, Vadodara</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Where big homes mean bigger celebrations! Tandalja's spacious residences and beautiful gardens are perfect for grand anniversary celebrations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-lime-600 hover:bg-lime-50 text-lg px-8 py-6" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Celebration</Button>
              <a href={`tel:${siteConfig.phone}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><Phone className="mr-2 h-5 w-5" />{siteConfig.phone}</Button></a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MapPin className="h-4 w-4" /> Tandalja Area</span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="h-4 w-4" /> 4.8★ Rating</span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="h-4 w-4" /> 300+ Celebrations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-lime-100 text-lime-700">Why Choose Us</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Tandalja Homes</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{tandaljaHighlights.map((h, i) => (<Card key={i} className="border-lime-100 hover:shadow-lg transition-shadow"><CardContent className="p-6 text-center"><div className="w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4"><h.icon className="h-7 w-7 text-lime-600" /></div><h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-lime-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-lime-100 text-lime-700">Celebration Ideas</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tandalja Style Celebrations</h2></div><div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{celebrationIdeas.map((idea, i) => (<Card key={i} className={`relative ${idea.popular ? 'ring-2 ring-lime-500' : ''}`}>{idea.popular && <div className="absolute top-4 right-4"><Badge className="bg-lime-600 text-white">Popular</Badge></div>}<CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3><p className="text-gray-600 mb-4">{idea.description}</p><div className="flex items-center justify-between"><span className="text-lime-600 font-semibold">{idea.price}</span><Button variant="outline" className="border-lime-600 text-lime-600" onClick={() => setIsBookingOpen(true)}>Book</Button></div></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-lime-100 text-lime-700">Location</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distance from Tandalja</h2></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">{nearbyLandmarks.map((l, i) => (<div key={i} className="bg-lime-50 rounded-lg p-4 text-center"><MapPin className="h-6 w-6 text-lime-600 mx-auto mb-2" /><p className="font-medium text-gray-900 text-sm">{l.name}</p><p className="text-lime-600 text-sm">{l.distance}</p></div>))}</div></div></section>

      <section className="py-16 bg-gradient-to-br from-lime-600 to-green-600 text-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><Badge className="mb-4 bg-white/20 text-white border-white/30">Local Experts</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Why Tandalja Trusts Us</h2><ul className="space-y-3">{tandaljaReasons.map((r, i) => (<li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-lime-300 mt-0.5" /><span>{r}</span></li>))}</ul></div><div className="grid grid-cols-2 gap-4">{['🏡', '🌳', '👨‍👩‍👧‍👦', '💚'].map((e, i) => (<div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-6xl">{e}</div>))}</div></div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-lime-100 text-lime-700">Reviews</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tandalja Love Stories</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{testimonials.map((t, i) => (<Card key={i} className="border-lime-100"><CardContent className="p-6"><div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div><p className="text-gray-600 mb-4 italic">"{t.review}"</p><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-lime-600">{t.location}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-lime-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-lime-100 text-lime-700">Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Anniversary Packages</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{packages.slice(0, 3).map((pkg, i) => (<Card key={i} className={`relative ${i === 1 ? 'ring-2 ring-lime-500 scale-105' : ''}`}>{i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-lime-600 text-white">Popular</Badge></div>}<CardHeader className="text-center pb-2"><CardTitle className="text-xl">{pkg.name}</CardTitle><div className="text-3xl font-bold text-lime-600">{formatPrice(pkg.price)}</div></CardHeader><CardContent><ul className="space-y-2">{pkg.features.slice(0, 6).map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>{f}</span></li>))}</ul><Button className="w-full mt-6 bg-lime-600 hover:bg-lime-700" onClick={() => setIsBookingOpen(true)}>Book Now</Button></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-lime-100 text-lime-700">FAQs</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2></div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((f, i) => (<Card key={i} className="border-lime-100"><CardContent className="p-6"><h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3><p className="text-gray-600">{f.answer}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-gradient-to-r from-lime-600 to-green-600 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">Big Home, Bigger Celebration! 🏡❤️</h2><p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join 300+ Tandalja families</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-white text-lime-600 hover:bg-lime-50" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Now</Button><a href={`https://wa.me/${siteConfig.whatsapp}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</Button></a></div></div></section>

      <FFCFooter /><FFCWhatsAppFloat /><FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}

