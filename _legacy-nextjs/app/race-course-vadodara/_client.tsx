'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Trophy, Trees, Sunrise, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function RaceCourseAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const raceCourseHighlights = [
    {
      icon: Trophy,
      title: "Premium Location",
      description: "One of Vadodara's most prestigious addresses - your celebration matches the standard"
    },
    {
      icon: Trees,
      title: "Green Surroundings",
      description: "Near the famous Race Course garden - nature meets romance"
    },
    {
      icon: Sunrise,
      title: "Morning Celebrations",
      description: "Special sunrise anniversary packages for health-conscious couples"
    },
    {
      icon: Coffee,
      title: "Café Culture",
      description: "Near Race Course's trendy cafés - perfect for modern couples"
    }
  ];

  const raceCourseReasons = [
    "Matching Race Course's premium lifestyle standards",
    "Morning, evening, and night celebration options",
    "Near popular jogging and walking tracks",
    "Premium décor befitting Race Course residents",
    "Couples-only private venues",
    "High-end photography packages available"
  ];

  const nearbyLandmarks = [
    { name: "Race Course Circle", distance: "3 min" },
    { name: "Race Course Garden", distance: "5 min" },
    { name: "Fatehgunj", distance: "8 min" },
    { name: "Ajwa Road", distance: "10 min" },
    { name: "Productivity Road", distance: "12 min" },
    { name: "Alkapuri", distance: "15 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Sunrise Anniversary Date",
      description: "Early morning celebration (6-9 AM) for fitness-loving Race Course couples",
      price: "Starting ₹4,999",
      popular: true
    },
    {
      title: "Premium Rooftop Evening",
      description: "Sophisticated dinner experience matching Race Course's upscale vibe",
      price: "Starting ₹6,999",
      popular: true
    },
    {
      title: "Garden Romance Setup",
      description: "Outdoor celebration inspired by Race Course's beautiful greenery",
      price: "Starting ₹5,499",
      popular: false
    },
    {
      title: "Fitness Couple Package",
      description: "Healthy menu options + celebration for health-conscious couples",
      price: "Starting ₹5,999",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priyanka & Rohit Kapoor",
      location: "Race Course Circle",
      review: "We jog at Race Course every morning. For our anniversary, they arranged a beautiful sunrise setup! So unique and perfect for us.",
      rating: 5
    },
    {
      name: "Snehal & Amit Thakkar",
      location: "Near Race Course Garden",
      review: "Living in Race Course area, we have high standards. This team exceeded them. The rooftop dinner was absolutely premium quality.",
      rating: 5
    },
    {
      name: "Kavya & Dhruv Patel",
      location: "Race Course Road",
      review: "Modern, classy, and exactly what Race Course couples want. They understood our aesthetic perfectly. Highly recommend!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Race Course area?",
      answer: "Our venues are just 5-10 minutes from Race Course Circle and Garden. Very convenient access via Race Course Road and connecting lanes."
    },
    {
      question: "Do you offer morning celebration packages?",
      answer: "Yes! Our 'Sunrise Anniversary' package (6-9 AM) is very popular with Race Course's health-conscious couples. Includes morning setup, healthy breakfast, fresh juices, and romantic ambiance."
    },
    {
      question: "What makes your service suitable for Race Course residents?",
      answer: "Race Course is one of Vadodara's most premium localities. We match that with sophisticated décor, premium food options, elegant venues, and attention to detail that Race Course residents expect."
    },
    {
      question: "Can you arrange outdoor celebrations near Race Course Garden?",
      answer: "While we can't set up inside the public garden, our venues offer beautiful outdoor spaces with similar greenery and ambiance. We also do home terrace/garden setups for Race Course residents."
    },
    {
      question: "Do you have healthy menu options?",
      answer: "Absolutely! Our 'Fitness Couple Package' includes healthy, nutritious menu options - salads, grilled items, fresh juices, and sugar-free desserts. Perfect for Race Course's fitness-focused couples."
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
            <span className="text-rose-600 font-medium">Race Course</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Serving Race Course - Vadodara's Premium Address
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Race Course, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Race Course — where Vadodara's elite live amidst greenery and sophistication. From morning jogs to evening strolls, your love story deserves a celebration as premium as your address.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Race Course Celebration
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
                <MapPin className="h-4 w-4" /> 5 min from Race Course
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> Premium Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Race Course Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Service for Race Course
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Matching the sophistication that Race Course residents expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {raceCourseHighlights.map((highlight, index) => (
              <Card key={index} className="border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-emerald-600" />
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
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Celebration Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Race Course Couples
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-emerald-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-600 text-white">Race Course Favorite</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-emerald-600 text-emerald-600" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Prime Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Race Course Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-emerald-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-emerald-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Race Course Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Premium Quality</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Race Course Chooses Us
              </h2>
              <p className="text-white/90 mb-8">
                Race Course is synonymous with premium living. We bring that same standard to your anniversary celebration - sophisticated, healthy, and perfectly executed.
              </p>
              <ul className="space-y-3">
                {raceCourseReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['🏆', '🌿', '💕', '🌅'][i-1]}</span>
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
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Race Course Couples Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-emerald-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-emerald-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Packages for Race Course
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-emerald-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700"
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
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions from Race Course Residents
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-emerald-100">
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Celebrate Your Race Course Love Story
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Premium celebrations for Vadodara's most premium address
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-emerald-50"
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

