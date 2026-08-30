'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Building2, ShoppingCart, Car, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function GotriAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const gotriHighlights = [
    {
      icon: Building2,
      title: "Booming Locality",
      description: "Serving Gotri's rapidly growing residential and commercial zones"
    },
    {
      icon: ShoppingCart,
      title: "Near Shopping Hubs",
      description: "Close to malls, markets, and entertainment centers"
    },
    {
      icon: Car,
      title: "NH8 Connectivity",
      description: "Excellent access via National Highway makes us easily reachable"
    },
    {
      icon: Sparkles,
      title: "Modern Vibes",
      description: "Contemporary celebration styles for Gotri's young, dynamic couples"
    }
  ];

  const gotriReasons = [
    "Understanding Gotri's modern, upwardly mobile community",
    "Trendy Instagram-worthy setups",
    "Close to major Gotri landmarks",
    "Weekend packages for busy professionals",
    "Both budget and premium options",
    "Quick bookings for spontaneous celebrations"
  ];

  const nearbyLandmarks = [
    { name: "Gotri Circle", distance: "5 min" },
    { name: "Gotri Road", distance: "3 min" },
    { name: "Sevasi Road", distance: "8 min" },
    { name: "NH8 Highway", distance: "6 min" },
    { name: "Waghodia Road", distance: "10 min" },
    { name: "VIP Road", distance: "12 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Insta-Perfect Setup",
      description: "Trendy, photo-worthy anniversary decoration that Gotri's social media savvy couples love",
      price: "Starting ₹4,999",
      popular: true
    },
    {
      title: "Rooftop City Lights",
      description: "Evening celebration with views of Gotri's growing skyline",
      price: "Starting ₹5,999",
      popular: true
    },
    {
      title: "Home Transformation",
      description: "Turn your Gotri apartment into a romantic paradise",
      price: "Starting ₹3,999",
      popular: false
    },
    {
      title: "Date Night Special",
      description: "Quick 3-hour romantic celebration for Gotri's busy couples",
      price: "Starting ₹3,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Kruti & Rohan Mehta",
      location: "Gotri Society",
      review: "We wanted something Instagram-worthy for our 2nd anniversary. The balloon arch and neon signs were perfect! Got so many likes on our reel!",
      rating: 5
    },
    {
      name: "Payal & Jayesh Shah",
      location: "Near Gotri Circle",
      review: "Living in Gotri's new apartments, space is limited. They transformed our small balcony into the most romantic spot. So creative!",
      rating: 5
    },
    {
      name: "Simran & Amit Patel",
      location: "Gotri Road",
      review: "Both of us work in corporates with no time. They handled everything - just showed up and had an amazing anniversary!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Gotri, Vadodara?",
      answer: "Our celebration venues are just 8-12 minutes from Gotri Circle and Gotri Road. Excellent NH8 connectivity makes it super convenient for all Gotri residents."
    },
    {
      question: "Do you cater to Gotri's young, modern couples?",
      answer: "Absolutely! Gotri has many young professionals and newlyweds. We specialize in trendy, Instagram-worthy setups with neon signs, balloon arches, modern themes, and photo-booth style decorations."
    },
    {
      question: "What about small apartment decorations?",
      answer: "We're experts at maximizing small spaces! Many Gotri couples live in apartments with limited space. Our team creatively transforms balconies, small living rooms, and compact bedrooms into romantic spaces."
    },
    {
      question: "Do you have quick packages for busy professionals?",
      answer: "Yes! Our 'Date Night Special' is designed for Gotri's corporate couples. It's a focused 3-hour celebration with everything included - setup, dinner, and cleanup. Perfect for busy weekday evenings."
    },
    {
      question: "Can you do last-minute bookings?",
      answer: "We understand spontaneous romance! Subject to availability, we accept same-day bookings for Gotri residents. Just call us and we'll do our best to accommodate."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-violet-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-violet-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-violet-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-violet-600 font-medium">Gotri</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Serving Gotri - Vadodara's Rising Star
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Gotri, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Gotri — where young dreams meet new beginnings. This dynamic, fast-growing neighborhood deserves celebrations as vibrant and modern as its residents. Let us make your anniversary Instagram-perfect!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-violet-600 hover:bg-violet-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Gotri Celebration
              </Button>
              <a href={`tel:${siteConfig.phone}`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.phone}
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4" /> 5 min from Gotri Circle
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 400+ Gotri Couples
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gotri Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Made for Gotri's Vibe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gotriHighlights.map((highlight, index) => (
              <Card key={index} className="border-violet-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Celebration Ideas */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Trendy Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Gotri Couples
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-violet-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-violet-600 text-white">Gotri Favorite</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-violet-600 text-violet-600" onClick={() => setIsBookingOpen(true)}>
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Distance from Landmarks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Great Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Gotri Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-violet-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-violet-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-violet-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gotri Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Modern & Trendy</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Gotri Loves Us
              </h2>
              <p className="text-white/90 mb-8">
                Gotri is young, ambitious, and always on-trend. We match that energy with contemporary setups, quick service, and Instagram-worthy celebrations.
              </p>
              <ul className="space-y-3">
                {gotriReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">{['📸', '🎈', '💜', '✨'][i-1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Gotri Couples Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-violet-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-violet-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Packages for Gotri
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-violet-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-violet-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-violet-600">{formatPrice(pkg.price)}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.slice(0, 6).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-violet-600 hover:bg-violet-700"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions from Gotri Residents
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-violet-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Make Your Gotri Anniversary Viral! 📸
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 400+ happy Gotri couples who got the perfect celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-violet-600 hover:bg-violet-50"
              onClick={() => setIsBookingOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Now
            </Button>
            <a href={`https://wa.me/${siteConfig.whatsapp}`}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
      <FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}

