'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Train, Landmark, ShoppingCart, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function SayagigunjAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const sayagigunjHighlights = [
    {
      icon: Train,
      title: "Railway Station Proximity",
      description: "Perfect for couples commuting via Vadodara Junction - celebrate before heading home"
    },
    {
      icon: Landmark,
      title: "Cultural Hub",
      description: "Near Baroda Museum, Sayaji Baug - blend of heritage and romance for your special day"
    },
    {
      icon: ShoppingCart,
      title: "Central Shopping District",
      description: "Quick access from Sayajigunj's busy shopping streets and commercial areas"
    },
    {
      icon: Briefcase,
      title: "Corporate Couples",
      description: "Ideal for working professionals from Sayajigunj's many offices and businesses"
    }
  ];

  const sayagigunjReasons = [
    "Located minutes from Vadodara Railway Station",
    "Perfect after-work celebration packages",
    "Understanding Sayajigunj's urban professional lifestyle",
    "Quick setups for spontaneous celebrations",
    "Premium experiences near heritage landmarks",
    "Trusted by Sayajigunj businesses for corporate anniversaries"
  ];

  const nearbyLandmarks = [
    { name: "Vadodara Junction", distance: "8 min" },
    { name: "Sayaji Baug", distance: "5 min" },
    { name: "Baroda Museum", distance: "6 min" },
    { name: "Mandvi Gate", distance: "10 min" },
    { name: "Lehripura Gate", distance: "12 min" },
    { name: "Dandia Bazaar", distance: "7 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Heritage Evening Dinner",
      description: "Romantic dinner with views inspired by Sayajigunj's cultural heritage and Sayaji Baug's charm",
      price: "Starting ₹5,499",
      popular: true
    },
    {
      title: "After-Office Surprise",
      description: "Perfect 6-10 PM celebration for Sayajigunj's busy professionals",
      price: "Starting ₹4,499",
      popular: true
    },
    {
      title: "Weekend Heritage Trail",
      description: "Anniversary celebration combined with Sayaji Baug gardens and museum visit",
      price: "Starting ₹6,999",
      popular: false
    },
    {
      title: "Corporate Anniversary",
      description: "Special packages for celebrating work anniversaries and milestones",
      price: "Starting ₹7,999",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Ruchi & Ketan Shah",
      location: "Near Vadodara Junction",
      review: "We both work in Sayajigunj and wanted something close yet special. The venue was perfect - we celebrated and made it home easily!",
      rating: 5
    },
    {
      name: "Meghna & Parth Desai",
      location: "Sayajigunj Society",
      review: "Living near Sayaji Baug, we've seen many celebrations. But ours was truly magical - they understood our love for Vadodara's heritage.",
      rating: 5
    },
    {
      name: "Sonal & Vijay Mehta",
      location: "Lehripura Area",
      review: "My husband travels from Vadodara station daily. They arranged a surprise right when he came home from work - timing was perfect!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Sayajigunj and Vadodara Railway Station?",
      answer: "Our celebration venues are just 8-12 minutes from Vadodara Junction and central Sayajigunj. Very convenient for couples who commute via train or work in the Sayajigunj commercial area."
    },
    {
      question: "Do you offer packages for working couples from Sayajigunj?",
      answer: "Absolutely! We have special 'After-Office' packages from 6 PM - 10 PM, perfect for Sayajigunj's working professionals. No need to take a day off - come directly after work for a beautiful celebration."
    },
    {
      question: "Can you combine anniversary celebrations with Sayaji Baug visits?",
      answer: "Yes! Our 'Weekend Heritage Trail' package includes romantic dinner followed by a private setup in or near Sayaji Baug (where permitted). It's perfect for couples who love Vadodara's heritage."
    },
    {
      question: "What makes your service popular in Sayajigunj?",
      answer: "Sayajigunj is Vadodara's heart - busy, cultural, and full of love stories. We match that energy with quick setups, heritage-inspired decor options, and flexible timing for the area's dynamic couples."
    },
    {
      question: "Do you provide home decoration in Sayajigunj apartments?",
      answer: "Yes! We serve all Sayajigunj societies, from apartments near the station to homes in residential lanes. Our team brings complete decoration materials and handles setup/cleanup."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-rose-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-rose-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Sayajigunj</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-rose-600 to-pink-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Serving Sayajigunj - Vadodara's Cultural Heart
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Sayajigunj, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sayajigunj — where Vadodara's heritage meets modern love stories. From the historic Sayaji Baug to the bustling railway station area, we bring romantic anniversary celebrations to the city's most iconic neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Sayajigunj Celebration
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
                <MapPin className="h-4 w-4" /> 8 min from Railway Station
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 450+ Sayajigunj Couples
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sayajigunj Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Sayajigunj Lifestyle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand Sayajigunj's unique blend of heritage, commerce, and modern life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sayagigunjHighlights.map((highlight, index) => (
              <Card key={index} className="border-rose-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-rose-600" />
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
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Celebration Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Sayajigunj Couples
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-rose-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-600 text-white">Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-rose-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-rose-100 text-rose-700">Central Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Sayajigunj Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-rose-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-rose-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sayajigunj Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-rose-700 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Heritage & Trust</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Sayajigunj Chooses Us
              </h2>
              <p className="text-white/90 mb-8">
                Sayajigunj is where Vadodara's heart beats - from the majestic Sayaji Baug to the busy railway junction. We've been honored to be part of countless love stories in this historic neighborhood.
              </p>
              <ul className="space-y-3">
                {sayagigunjReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['🏛️', '💕', '🚂', '🌳'][i-1]}</span>
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
            <Badge className="mb-4 bg-rose-100 text-rose-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sayajigunj Couples Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-rose-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-rose-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Packages for Sayajigunj
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-rose-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-rose-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-rose-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-rose-600 hover:bg-rose-700"
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
            <Badge className="mb-4 bg-rose-100 text-rose-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions from Sayajigunj Residents
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-rose-100">
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
      <section className="py-16 bg-gradient-to-r from-rose-700 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Celebrate Your Love in Sayajigunj
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 450+ happy couples from Sayajigunj who celebrated with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-rose-600 hover:bg-rose-50"
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

