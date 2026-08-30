'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart, Calendar, ArrowRight, Sparkles, ShoppingBag, Building, Coffee, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function FatehgunjAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const fatehgunjHighlights = [
    {
      icon: ShoppingBag,
      title: "Central Market Location",
      description: "Quick access from Fatehgunj's bustling commercial heart and shopping areas"
    },
    {
      icon: Building,
      title: "Heritage Neighborhood",
      description: "Serving Fatehgunj's historic community with modern celebration experiences"
    },
    {
      icon: Coffee,
      title: "Café Culture Connect",
      description: "Understanding Fatehgunj's vibrant food and café scene for perfect pairings"
    },
    {
      icon: Utensils,
      title: "Culinary Excellence",
      description: "Multi-cuisine options reflecting Fatehgunj's diverse food heritage"
    }
  ];

  const fatehgunjReasons = [
    "Serving Fatehgunj's diverse community for 12+ years",
    "Understanding of Fatehgunj's multicultural celebrations",
    "Quick setup for busy Fatehgunj business owners",
    "Afternoon to late-night timing flexibility",
    "Special packages for Fatehgunj's young couples",
    "Premium options for established Fatehgunj families"
  ];

  const nearbyLandmarks = [
    { name: "Fatehgunj Main Road", distance: "5 min" },
    { name: "Navrachana School", distance: "8 min" },
    { name: "Ajwa Road Junction", distance: "10 min" },
    { name: "Race Course Circle", distance: "12 min" },
    { name: "Sayajigunj", distance: "15 min" },
    { name: "Old Padra Road", distance: "18 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Rooftop Romance Dinner",
      description: "Leave the busy Fatehgunj streets behind for a peaceful rooftop celebration with stunning views",
      price: "Starting ₹4,999",
      popular: true
    },
    {
      title: "Glass House Experience",
      description: "A unique enclosed garden experience - perfect escape from Fatehgunj's vibrant energy",
      price: "Starting ₹6,499",
      popular: true
    },
    {
      title: "After-Work Anniversary",
      description: "Special 6 PM - 10 PM packages for Fatehgunj's hardworking couples",
      price: "Starting ₹4,499",
      popular: false
    },
    {
      title: "Sunday Brunch Anniversary",
      description: "Weekend morning celebrations for Fatehgunj families who love leisurely starts",
      price: "Starting ₹5,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Zarina & Farhan Sheikh",
      location: "Fatehgunj Main Road",
      review: "Our shop keeps us busy all day in Fatehgunj market. They arranged everything for our 10th anniversary - we just showed up! Perfect for business owners.",
      rating: 5
    },
    {
      name: "Heena & Kiran Patel",
      location: "Near Navrachana",
      review: "Living in Fatehgunj, we wanted something different from the usual restaurant dinner. The rooftop candlelight experience was magical!",
      rating: 5
    },
    {
      name: "Priti & Mahesh Sharma",
      location: "Fatehgunj Society",
      review: "They decorated our Fatehgunj apartment so beautifully for our surprise anniversary. My wife was in tears! Excellent service.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How close is your venue to Fatehgunj, Vadodara?",
      answer: "Our celebration venues are just 10-15 minutes from Fatehgunj Main Road and surrounding areas. We're accessible via Race Course Road and Productivity Road, making it convenient for all Fatehgunj residents."
    },
    {
      question: "Do you offer services for Fatehgunj's business community?",
      answer: "Absolutely! We understand Fatehgunj is a busy commercial hub. We offer flexible timing, quick setups, and complete planning services so business owners can focus on work while we handle the celebration."
    },
    {
      question: "Can you accommodate multicultural celebrations?",
      answer: "Yes! Fatehgunj's diverse community is special to us. We customize decorations, food, and themes to match various cultural preferences - be it Gujarati, Muslim, Marwari, or any other community celebrations."
    },
    {
      question: "What's your most popular package in Fatehgunj?",
      answer: "The 'After-Work Anniversary' package is very popular among Fatehgunj couples. It's scheduled from 6 PM - 10 PM, perfect for those who work in the area and want to celebrate without taking a day off."
    },
    {
      question: "Do you provide home decoration in Fatehgunj apartments?",
      answer: "Yes! We serve all Fatehgunj societies and apartment complexes. Our team arrives with complete setup including balloons, flowers, lights, and themed decorations. We handle setup and cleanup too."
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
            <span className="text-rose-600 font-medium">Fatehgunj</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 via-red-600 to-rose-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Serving Fatehgunj, Vadodara's Vibrant Heart
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Fatehgunj, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Fatehgunj — where commerce meets culture, where traditions thrive alongside modernity. From the bustling main road to peaceful residential pockets, we bring romantic anniversary celebrations to this vibrant neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Fatehgunj Celebration
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
                <MapPin className="h-4 w-4" /> 10 min from Fatehgunj
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 350+ Fatehgunj Couples
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fatehgunj Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Fatehgunj's Lifestyle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the unique rhythm of Fatehgunj — busy days, close-knit community, and appreciation for quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fatehgunjHighlights.map((highlight, index) => (
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

      {/* Celebration Ideas for Fatehgunj */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Celebration Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Fatehgunj Couples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiences crafted for Fatehgunj's hardworking, fun-loving couples
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-rose-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-600 text-white">Fatehgunj Favorite</Badge>
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
              Distance from Fatehgunj Landmarks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Easily reachable from anywhere in Fatehgunj
            </p>
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

      {/* Why Fatehgunj Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Local Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Fatehgunj Chooses Us for Anniversaries
              </h2>
              <p className="text-white/90 mb-8">
                Fatehgunj is a neighborhood that values hard work, family, and celebration. We've been part of this community's special moments for over a decade, understanding what makes each celebration here unique.
              </p>
              <ul className="space-y-3">
                {fatehgunjReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['🛍️', '💝', '🎉', '🌟'][i-1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from Fatehgunj */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Fatehgunj Couples Say
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
              Anniversary Packages for Fatehgunj
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Value-packed options for Fatehgunj's practical couples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-rose-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-rose-600 text-white">Best Value</Badge>
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
                    Book for Fatehgunj
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
              Questions from Fatehgunj Residents
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
      <section className="py-16 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Fatehgunj Love Story Deserves the Best
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 350+ happy couples from Fatehgunj who celebrated their anniversary with us
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

