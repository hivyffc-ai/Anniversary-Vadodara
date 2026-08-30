'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Building, Plane, TreePine, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function SamaAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const samaHighlights = [
    {
      icon: Plane,
      title: "Airport Proximity",
      description: "Near Vadodara Airport - perfect for couples with travel schedules"
    },
    {
      icon: Building,
      title: "Growing Township",
      description: "Serving Sama's rapidly developing residential communities"
    },
    {
      icon: TreePine,
      title: "Open Spaces",
      description: "Inspired by Sama's greenery and open landscapes"
    },
    {
      icon: Car,
      title: "Easy Access",
      description: "Well-connected via Sama-Savli Road and Ring Road"
    }
  ];

  const samaReasons = [
    "Understanding Sama's mix of old and new residents",
    "Airport pickup/drop coordination available",
    "Serving both traditional and modern celebrations",
    "Knowledge of all Sama societies and landmarks",
    "Flexible timing for frequent travelers",
    "Quick setup for surprise celebrations"
  ];

  const nearbyLandmarks = [
    { name: "Vadodara Airport", distance: "8 min" },
    { name: "Sama-Savli Road", distance: "3 min" },
    { name: "Sama Circle", distance: "5 min" },
    { name: "IOCL Township", distance: "10 min" },
    { name: "Vasna Road", distance: "12 min" },
    { name: "Ring Road", distance: "6 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Pre-Flight Surprise",
      description: "Quick romantic celebration before catching a flight from Vadodara Airport",
      price: "Starting ₹3,999",
      popular: true
    },
    {
      title: "Garden Anniversary Setup",
      description: "Outdoor celebration capturing Sama's open, green ambiance",
      price: "Starting ₹5,499",
      popular: true
    },
    {
      title: "Welcome Home Anniversary",
      description: "Surprise your partner returning from travel with decorated home",
      price: "Starting ₹4,499",
      popular: false
    },
    {
      title: "Weekend Retreat",
      description: "Extended celebration package for Sama couples wanting quality time",
      price: "Starting ₹6,999",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Meena & Anil Sharma",
      location: "Sama-Savli Road",
      review: "My husband travels frequently. They arranged a beautiful surprise when he returned for our anniversary. The coordination with his flight timing was perfect!",
      rating: 5
    },
    {
      name: "Priya & Kartik Joshi",
      location: "Near IOCL Township",
      review: "Living in Sama's new society, we didn't know many services here. This team exceeded our expectations with their quality and professionalism.",
      rating: 5
    },
    {
      name: "Falguni & Bharat Patel",
      location: "Old Sama Village",
      review: "We're from old Sama family. They respected our traditions while making it modern and romantic. Beautiful blend!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Sama area?",
      answer: "Our venues are just 10-15 minutes from Sama Circle and Sama-Savli Road. Excellent connectivity via Ring Road makes it easily accessible for all Sama residents."
    },
    {
      question: "Can you coordinate celebrations with flight schedules?",
      answer: "Yes! Being close to Vadodara Airport, we often coordinate celebrations with travel schedules. Whether it's a quick pre-flight celebration or a surprise for a returning partner, we handle the timing perfectly."
    },
    {
      question: "Do you serve both old Sama village and new societies?",
      answer: "Absolutely! We serve all of Sama - from traditional families in the old village area to young couples in new townships and societies. Our packages adapt to different preferences."
    },
    {
      question: "What if my partner's flight is delayed?",
      answer: "We understand travel uncertainties! For 'Welcome Home' packages, we offer flexible timing at no extra charge. Just update us about flight status and we'll adjust the setup accordingly."
    },
    {
      question: "Do you provide home decoration in Sama?",
      answer: "Yes! We provide complete home decoration services across all Sama areas - societies, apartments, independent houses, and even farmhouses in the outskirts."
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
            <span className="text-rose-600 font-medium">Sama</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 via-blue-600 to-sky-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Serving Sama - Near Vadodara Airport
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Sama, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sama — where tradition meets modernity, where families grow and love stories take flight. From the historic village to new townships near the airport, we bring beautiful anniversary celebrations to every corner of Sama.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-sky-600 hover:bg-sky-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Sama Celebration
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
                <Plane className="h-4 w-4" /> 8 min from Airport
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.8★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 250+ Sama Couples
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sama Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sky-100 text-sky-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Sama Residents
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {samaHighlights.map((highlight, index) => (
              <Card key={index} className="border-sky-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-sky-600" />
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
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sky-100 text-sky-700">Celebration Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Sama Couples
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-sky-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-sky-600 text-white">Popular in Sama</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sky-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-sky-600 text-sky-600" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-sky-100 text-sky-700">Strategic Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Sama Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-sky-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-sky-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-sky-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sama Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Local Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Sama Chooses Us
              </h2>
              <p className="text-white/90 mb-8">
                Sama is evolving, growing, and becoming one of Vadodara's most desirable areas. We've been part of this journey, serving both longtime residents and newcomers with equal care.
              </p>
              <ul className="space-y-3">
                {samaReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['✈️', '🏡', '💑', '🌳'][i-1]}</span>
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
            <Badge className="mb-4 bg-sky-100 text-sky-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sama Families Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-sky-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-sky-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sky-100 text-sky-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Packages for Sama
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-sky-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-sky-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-sky-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-sky-600 hover:bg-sky-700"
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
            <Badge className="mb-4 bg-sky-100 text-sky-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions from Sama Residents
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-sky-100">
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
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Sama Love Story Awaits
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 250+ happy Sama couples who celebrated with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-sky-600 hover:bg-sky-50"
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

