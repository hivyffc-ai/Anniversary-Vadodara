'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, TreePine, Home, Building2, Sun, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function SevasiAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const sevasiHighlights = [
    { icon: TreePine, title: "Resort Vibes", description: "Farmhouses and resorts for exclusive celebrations" },
    { icon: Sun, title: "Open Skies", description: "Perfect weather for outdoor romantic setups" },
    { icon: Building2, title: "Growing Area", description: "New townships with modern amenities" },
    { icon: Home, title: "Village Charm", description: "Traditional warmth with modern comfort" }
  ];

  const sevasiReasons = ["Farmhouse and resort specialists", "Outdoor celebration experts", "Day and night packages", "Affordable destination-feel celebrations", "Quick setup at any location", "Natural backdrop decorations"];

  const nearbyLandmarks = [
    { name: "Sevasi Village", distance: "2 min" }, { name: "Bhayli", distance: "5 min" }, { name: "Gotri", distance: "10 min" },
    { name: "Waghodia Road", distance: "12 min" }, { name: "Vadodara City", distance: "18 min" }, { name: "NH8 Highway", distance: "8 min" }
  ];

  const celebrationIdeas = [
    { title: "Farmhouse Escape", description: "Full day anniversary celebration at Sevasi farmhouse with all arrangements", price: "Starting ₹9,999", popular: true },
    { title: "Sunset Romance", description: "Evening celebration timed perfectly with Sevasi's beautiful sunsets", price: "Starting ₹5,999", popular: true },
    { title: "Staycation Special", description: "Overnight romantic stay with decorated room and dinner", price: "Starting ₹11,999", popular: false },
    { title: "Nature Picnic", description: "Romantic picnic setup in Sevasi's green surroundings", price: "Starting ₹4,499", popular: false }
  ];

  const testimonials = [
    { name: "Shweta & Kunal Modi", location: "Sevasi Resort", review: "The farmhouse celebration was like a destination wedding anniversary! Complete privacy, beautiful setup, and amazing food. Worth every rupee!", rating: 5 },
    { name: "Priti & Manish Joshi", location: "Near Sevasi", review: "We wanted something different from regular hotel dinners. The outdoor sunset celebration they arranged was picture-perfect!", rating: 5 },
    { name: "Kavita & Rajesh Patel", location: "Sevasi", review: "The picnic setup was so cute! Blankets, fairy lights, cushions, and a gourmet basket. Felt like we were in a movie!", rating: 5 }
  ];

  const faqs = [
    { question: "Can you arrange farmhouse celebrations in Sevasi?", answer: "Yes! Sevasi is known for its farmhouses and resorts. We partner with several properties and can arrange exclusive celebrations with full decoration, catering, and privacy." },
    { question: "What makes Sevasi celebrations special?", answer: "Sevasi offers the destination-wedding feel without traveling far. Open spaces, natural beauty, privacy, and resort-like amenities - all just 20 minutes from Vadodara city." },
    { question: "Do you offer overnight packages?", answer: "Yes! Our Staycation Special includes decorated room, romantic dinner, breakfast, and activities. Perfect for couples wanting to extend the celebration." },
    { question: "What about weather concerns for outdoor celebrations?", answer: "We monitor weather closely. For monsoon months, we have covered outdoor options and indoor backups. All our setups are weather-appropriate." },
    { question: "Is Sevasi expensive for celebrations?", answer: "Not necessarily! While farmhouse packages are premium, our picnic and sunset celebrations start at ₹4,499 - giving you the Sevasi experience at budget-friendly prices." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      <div className="bg-yellow-50 py-4"><div className="container mx-auto px-4"><nav className="flex items-center gap-2 text-sm flex-wrap"><Link href="/" className="text-gray-500 hover:text-yellow-600">Home</Link><ChevronRight className="h-4 w-4 text-gray-400" /><Link href="/areas" className="text-gray-500 hover:text-yellow-600">Areas</Link><ChevronRight className="h-4 w-4 text-gray-400" /><span className="text-yellow-600 font-medium">Sevasi</span></nav></div></div>

      <section className="bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">🌅 Serving Sevasi - Resort Paradise</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Anniversary Celebration in Sevasi, Vadodara</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Destination vibes, local convenience! Sevasi's farmhouses and open skies create magical settings for unforgettable anniversary celebrations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50 text-lg px-8 py-6" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Celebration</Button>
            <a href={`tel:${siteConfig.phone}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><Phone className="mr-2 h-5 w-5" />{siteConfig.phone}</Button></a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MapPin className="h-4 w-4" /> Sevasi Area</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="h-4 w-4" /> 5.0★ Rating</span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="h-4 w-4" /> 180+ Celebrations</span>
          </div>
        </div></div>
      </section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-yellow-100 text-yellow-700">Why Choose Us</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Sevasi Getaways</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{sevasiHighlights.map((h, i) => (<Card key={i} className="border-yellow-100 hover:shadow-lg"><CardContent className="p-6 text-center"><div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4"><h.icon className="h-7 w-7 text-yellow-600" /></div><h3 className="font-semibold text-gray-900 mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-yellow-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-yellow-100 text-yellow-700">Destination Feel</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sevasi Celebration Packages</h2></div><div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{celebrationIdeas.map((idea, i) => (<Card key={i} className={`relative ${idea.popular ? 'ring-2 ring-yellow-500' : ''}`}>{idea.popular && <div className="absolute top-4 right-4"><Badge className="bg-yellow-600 text-white">Popular</Badge></div>}<CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3><p className="text-gray-600 mb-4">{idea.description}</p><div className="flex items-center justify-between"><span className="text-yellow-600 font-semibold">{idea.price}</span><Button variant="outline" className="border-yellow-600 text-yellow-600" onClick={() => setIsBookingOpen(true)}>Book</Button></div></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-yellow-100 text-yellow-700">Location</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Distances from Sevasi</h2></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">{nearbyLandmarks.map((l, i) => (<div key={i} className="bg-yellow-50 rounded-lg p-4 text-center"><MapPin className="h-6 w-6 text-yellow-600 mx-auto mb-2" /><p className="font-medium text-gray-900 text-sm">{l.name}</p><p className="text-yellow-600 text-sm">{l.distance}</p></div>))}</div></div></section>

      <section className="py-16 bg-gradient-to-br from-yellow-500 to-amber-600 text-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><Badge className="mb-4 bg-white/20 text-white border-white/30">Destination Experts</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Sevasi</h2><ul className="space-y-3">{sevasiReasons.map((r, i) => (<li key={i} className="flex items-start gap-3"><Check className="h-5 w-5 text-yellow-200 mt-0.5" /><span>{r}</span></li>))}</ul></div><div className="grid grid-cols-2 gap-4">{['🌅', '🏡', '🌻', '💛'].map((e, i) => (<div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-6xl">{e}</div>))}</div></div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-yellow-100 text-yellow-700">Reviews</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sevasi Stories</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{testimonials.map((t, i) => (<Card key={i} className="border-yellow-100"><CardContent className="p-6"><div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div><p className="text-gray-600 mb-4 italic">"{t.review}"</p><p className="font-semibold text-gray-900">{t.name}</p><p className="text-sm text-yellow-600">{t.location}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-yellow-50"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-yellow-100 text-yellow-700">Packages</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Anniversary Packages</h2></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{packages.slice(0, 3).map((pkg, i) => (<Card key={i} className={`relative ${i === 1 ? 'ring-2 ring-yellow-500 scale-105' : ''}`}>{i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge className="bg-yellow-600 text-white">Popular</Badge></div>}<CardHeader className="text-center pb-2"><CardTitle className="text-xl">{pkg.name}</CardTitle><div className="text-3xl font-bold text-yellow-600">{formatPrice(pkg.price)}</div></CardHeader><CardContent><ul className="space-y-2">{pkg.features.slice(0, 6).map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>{f}</span></li>))}</ul><Button className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700" onClick={() => setIsBookingOpen(true)}>Book</Button></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12"><Badge className="mb-4 bg-yellow-100 text-yellow-700">FAQs</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sevasi FAQs</h2></div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((f, i) => (<Card key={i} className="border-yellow-100"><CardContent className="p-6"><h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3><p className="text-gray-600">{f.answer}</p></CardContent></Card>))}</div></div></section>

      <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-600 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-4">Destination Romance Awaits! 🌅❤️</h2><p className="text-xl text-white/90 mb-8">Join 180+ couples who found paradise in Sevasi</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50" onClick={() => setIsBookingOpen(true)}><Calendar className="mr-2 h-5 w-5" />Book Now</Button><a href={`https://wa.me/${siteConfig.whatsapp}`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</Button></a></div></div></section>

      <FFCFooter /><FFCWhatsAppFloat /><FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}

