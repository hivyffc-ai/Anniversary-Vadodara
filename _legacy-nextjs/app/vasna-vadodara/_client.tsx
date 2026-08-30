'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Home, Users, Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function VasnaAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const vasnaHighlights = [
    {
      icon: Home,
      title: "Residential Paradise",
      description: "Serving Vasna's peaceful residential communities and housing societies"
    },
    {
      icon: Users,
      title: "Family-Focused",
      description: "Understanding Vasna's family-oriented lifestyle and values"
    },
    {
      icon: Sparkles,
      title: "Modern Celebrations",
      description: "Contemporary anniversary experiences for Vasna's young couples"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Accommodating Vasna's working professionals with varied schedules"
    }
  ];

  const vasnaReasons = [
    "Serving Vasna's growing community for 8+ years",
    "Perfect for both traditional and modern celebrations",
    "Home decoration across all Vasna societies",
    "Budget-conscious packages without compromise",
    "Understanding of joint family dynamics",
    "Quick booking for last-minute celebrations"
  ];

  const nearbyLandmarks = [
    { name: "Vasna Bus Stand", distance: "5 min" },
    { name: "Vasna Road", distance: "3 min" },
    { name: "Sama-Savli Road", distance: "8 min" },
    { name: "Akota", distance: "10 min" },
    { name: "Old Padra Road", distance: "12 min" },
    { name: "Alkapuri", distance: "18 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Cozy Home Celebration",
      description: "Transform your Vasna home into a romantic paradise with complete decoration",
      price: "Starting ₹3,499",
      popular: true
    },
    {
      title: "Private Venue Dinner",
      description: "Escape to our romantic venue just minutes from Vasna",
      price: "Starting ₹4,999",
      popular: true
    },
    {
      title: "Joint Family Package",
      description: "Anniversary celebration that includes the whole family - Vasna style!",
      price: "Starting ₹7,999",
      popular: false
    },
    {
      title: "Terrace Candlelight",
      description: "Romantic terrace setup at your Vasna home with dinner",
      price: "Starting ₹4,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Parul & Chirag Patel",
      location: "Vasna Society",
      review: "Living in Vasna with joint family, we wanted privacy for our anniversary. They decorated our terrace beautifully - parents were impressed too!",
      rating: 5
    },
    {
      name: "Nidhi & Ravi Shah",
      location: "Vasna Road",
      review: "We're a young couple in Vasna. The venue was close, affordable, and so romantic. Exactly what we needed!",
      rating: 5
    },
    {
      name: "Hetal & Mehul Desai",
      location: "Near Vasna Bus Stand",
      review: "Our 15th anniversary was celebrated with the whole family. They managed everything perfectly - kids loved it, we loved it!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Vasna, Vadodara?",
      answer: "Our celebration venues are just 8-12 minutes from Vasna Road and Vasna Bus Stand area. Easy access makes it convenient for all Vasna residents."
    },
    {
      question: "Do you offer home decoration in Vasna?",
      answer: "Yes! Home decoration is very popular in Vasna. We transform living rooms, bedrooms, terraces, or any space you choose. Our team brings complete setup and handles cleanup too."
    },
    {
      question: "Can you arrange celebrations for joint families?",
      answer: "Absolutely! Vasna is known for its joint family culture. Our 'Joint Family Package' accommodates parents, kids, and extended family while keeping the romantic focus on the couple."
    },
    {
      question: "What's your most affordable package for Vasna couples?",
      answer: "Our home decoration package starts at just ₹3,499 and includes balloons, fairy lights, flower decoration, anniversary banner, and small cake. Perfect for Vasna's budget-conscious couples."
    },
    {
      question: "Do you offer services for young couples in Vasna?",
      answer: "Yes! Many young couples in Vasna's new societies choose us. We offer trendy, Instagram-worthy setups, contemporary decorations, and modern themes that young couples love."
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
            <span className="text-rose-600 font-medium">Vasna</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-rose-500 to-pink-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Proudly Serving Vasna, Vadodara
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Vasna, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vasna — where families thrive and love grows stronger each day. From cozy home celebrations to romantic venue experiences, we bring perfect anniversary moments to this beloved residential neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Vasna Celebration
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
                <MapPin className="h-4 w-4" /> 8 min from Vasna
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.8★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 300+ Vasna Families
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vasna Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Vasna Families
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand Vasna's family values and residential charm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vasnaHighlights.map((highlight, index) => (
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
              Anniversary Ideas for Vasna Couples
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-rose-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-600 text-white">Popular in Vasna</Badge>
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
            <Badge className="mb-4 bg-rose-100 text-rose-700">Convenient Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Vasna Landmarks
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

      {/* Why Vasna Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Family Values</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Vasna Families Trust Us
              </h2>
              <p className="text-white/90 mb-8">
                Vasna represents the best of family life in Vadodara. We honor those values with celebrations that bring joy to couples and families alike.
              </p>
              <ul className="space-y-3">
                {vasnaReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['🏠', '👨‍👩‍👧‍👦', '💕', '🎂'][i-1]}</span>
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
              What Vasna Families Say
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
              Anniversary Packages for Vasna
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 0 ? 'ring-2 ring-rose-500' : ''}`}>
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-rose-600 text-white">Vasna Favorite</Badge>
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
              Questions from Vasna Residents
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
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Celebrate Your Vasna Love Story
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 300+ happy Vasna families who celebrated with us
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

