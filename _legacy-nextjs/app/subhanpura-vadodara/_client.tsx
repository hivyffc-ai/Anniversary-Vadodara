'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Building2, Home, Users, Coffee, Utensils, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function SubhanpuraAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const subhanpuraHighlights = [
    {
      icon: Building2,
      title: "Urban Convenience",
      description: "Centrally located with easy access to restaurants and venues"
    },
    {
      icon: Home,
      title: "Mixed Residential",
      description: "Serving apartments, bungalows, and independent houses"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "From young professionals to established families"
    },
    {
      icon: Utensils,
      title: "Food Paradise",
      description: "Near Subhanpura's famous food and cafe culture"
    }
  ];

  const subhanpuraReasons = [
    "Central location means faster service",
    "Familiar with Subhanpura's lanes and societies",
    "Partnership with local cafes and restaurants",
    "Both home and venue celebrations",
    "Flexible packages for all budgets",
    "Multiple celebration options nearby"
  ];

  const nearbyLandmarks = [
    { name: "Subhanpura Circle", distance: "3 min" },
    { name: "Alkapuri", distance: "7 min" },
    { name: "Akota", distance: "6 min" },
    { name: "Gotri Road", distance: "10 min" },
    { name: "Race Course", distance: "8 min" },
    { name: "Vasna Road", distance: "5 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Cafe Hopping Anniversary",
      description: "Multi-cafe celebration experience through Subhanpura's trendy coffee spots",
      price: "Starting ₹4,999",
      popular: true
    },
    {
      title: "Foodie Couple Special",
      description: "Food tour style anniversary - sampling Subhanpura's best eateries",
      price: "Starting ₹5,499",
      popular: true
    },
    {
      title: "Cozy Home Romance",
      description: "Transform your Subhanpura home into a romantic wonderland",
      price: "Starting ₹3,999",
      popular: false
    },
    {
      title: "Terrace Under Stars",
      description: "Rooftop dinner date with Subhanpura skyline views",
      price: "Starting ₹5,999",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Neha & Karan Sharma",
      location: "Subhanpura Society",
      review: "The cafe-hopping idea was brilliant! We visited three of our favorite Subhanpura cafes with surprises at each. Such a unique anniversary!",
      rating: 5
    },
    {
      name: "Riddhi & Chirag Patel",
      location: "Near Subhanpura Circle",
      review: "Our small 1BHK flat became a magazine-worthy romantic setup! They maximized every inch of space beautifully.",
      rating: 5
    },
    {
      name: "Pooja & Vishal Desai",
      location: "Subhanpura Main Road",
      review: "Being foodies, the food tour anniversary was perfect! Professional coordination and every restaurant was surprised at our arrival. Loved it!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What makes Subhanpura celebrations unique?",
      answer: "Subhanpura's central location gives you options! We can do home celebrations, cafe experiences, restaurant dinners, or even food tours covering multiple spots. It's Vadodara's most versatile area for celebrations."
    },
    {
      question: "Do you partner with local Subhanpura restaurants?",
      answer: "Yes! We have partnerships with several popular cafes and restaurants in Subhanpura area. This allows us to pre-arrange surprises, special seating, and coordinated decorations at their venues."
    },
    {
      question: "Can you do multi-location celebrations?",
      answer: "Absolutely! Subhanpura's compact size is perfect for this. We've done celebrations spanning 3-4 locations - morning breakfast surprise, afternoon cafe date, and evening dinner - all within the area."
    },
    {
      question: "What about parking for your setup team?",
      answer: "Subhanpura can have parking challenges. Our team uses two-wheelers for quick access and we time our visits to avoid peak hours. We're very familiar with the area's layout."
    },
    {
      question: "Do you work with the cafes on Subhanpura Road?",
      answer: "Yes, most cafes on the main road and surrounding lanes. We coordinate with them for special decorations, reserved seating, and customized menu options for your anniversary."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-indigo-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-indigo-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-indigo-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-indigo-600 font-medium">Subhanpura</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-violet-500 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              ☕ Serving Subhanpura - Heart of Food & Fun
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Subhanpura, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Where foodies fall in love! Subhanpura's vibrant cafe culture and diverse food scene make it perfect for food-loving couples. Celebrate your anniversary through taste, surprise, and romance!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Celebration
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
                <MapPin className="h-4 w-4" /> Central Subhanpura
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 450+ Celebrations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Subhanpura Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Subhanpura's Vibe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subhanpuraHighlights.map((highlight, index) => (
              <Card key={index} className="border-indigo-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-indigo-600" />
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
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">Unique Ideas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subhanpura Style Celebrations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-600 text-white">Trending</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-indigo-600 text-indigo-600" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">Central Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Subhanpura Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-indigo-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Local Experts</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Subhanpura Loves Us
              </h2>
              <p className="text-white/90 mb-8">
                We know Subhanpura inside out - every cafe, every lane, every society. This local knowledge helps us create unique, personalized celebrations.
              </p>
              <ul className="space-y-3">
                {subhanpuraReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">{['☕', '🍕', '💜', '🎂'][i-1]}</span>
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
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subhanpura Love Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-indigo-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-indigo-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packages for Subhanpura Couples
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-indigo-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-indigo-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-indigo-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700"
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
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subhanpura Celebration Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-indigo-100">
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Food + Love = Perfect Anniversary! ☕❤️
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 450+ Subhanpura couples who celebrated with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-indigo-50"
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

