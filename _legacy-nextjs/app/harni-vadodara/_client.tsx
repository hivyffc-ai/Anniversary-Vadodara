'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Plane, Home, Users, Building2, Car, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function HarniAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const harniHighlights = [
    {
      icon: Plane,
      title: "Airport Adjacent",
      description: "Perfect for travel-loving couples and fly-in celebrations"
    },
    {
      icon: Building2,
      title: "Growing Township",
      description: "Serving Harni's rapidly developing residential areas"
    },
    {
      icon: Home,
      title: "New Families",
      description: "Catering to young couples in new housing societies"
    },
    {
      icon: Globe,
      title: "NRI Friendly",
      description: "Special services for NRI families visiting Vadodara"
    }
  ];

  const harniReasons = [
    "Close to Vadodara Airport for NRI guests",
    "Understanding of young couple needs",
    "Modern apartment celebration experts",
    "Quick setup and professional service",
    "Flexible timing for travel schedules",
    "Premium yet affordable packages"
  ];

  const nearbyLandmarks = [
    { name: "Vadodara Airport", distance: "5 min" },
    { name: "Harni Road", distance: "3 min" },
    { name: "Sama", distance: "8 min" },
    { name: "Gorwa", distance: "12 min" },
    { name: "Waghodia Road", distance: "10 min" },
    { name: "PDPU", distance: "15 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Welcome Home Anniversary",
      description: "Surprise your NRI partner or guest with a celebration right from the airport",
      price: "Starting ₹5,499",
      popular: true
    },
    {
      title: "New Home, New Memories",
      description: "Celebrate your anniversary in your new Harni apartment or house",
      price: "Starting ₹4,499",
      popular: true
    },
    {
      title: "Travel Theme Romance",
      description: "Aviation-inspired decoration for travel-loving couples",
      price: "Starting ₹5,999",
      popular: false
    },
    {
      title: "Modern Minimalist",
      description: "Clean, contemporary setup for Harni's modern apartments",
      price: "Starting ₹3,999",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Prerna & Amit Joshi",
      location: "Near Harni Airport",
      review: "My husband was returning from US after 3 months. They arranged an airport pickup surprise and our home was decorated beautifully. He was in tears of joy!",
      rating: 5
    },
    {
      name: "Swati & Dhruv Bhatt",
      location: "Harni Township",
      review: "We just moved to our new flat in Harni. They helped us celebrate our first anniversary in our new home. The modern decor matched our apartment perfectly!",
      rating: 5
    },
    {
      name: "Komal & Raj Patel",
      location: "Harni Road",
      review: "The travel-theme anniversary was so creative! Passport invites, luggage tag place cards, and mini airplane decorations. Unique and perfect for us globetrotters!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Can you coordinate celebrations with airport arrivals?",
      answer: "Absolutely! We specialize in coordinating with flight timings. We track flights, set up your home while you're at the airport, and everything is ready when you arrive. Perfect for NRI reunions and surprise welcomes."
    },
    {
      question: "Do you serve the new townships in Harni?",
      answer: "Yes! We serve all Harni areas including new townships, societies on Harni Road, areas near the airport, and extending towards Sama. We're familiar with all the new developments."
    },
    {
      question: "What's special for NRI couples?",
      answer: "We understand NRI families often have limited time in India. We offer quick-setup packages, coordinate with family members for surprises, and can arrange celebrations matching international standards."
    },
    {
      question: "Can you do airport pickup decorations?",
      answer: "Yes! We arrange decorated car pickups from Vadodara Airport, banner surprises at arrivals, and coordinate the entire journey from airport to decorated home."
    },
    {
      question: "What about new construction areas?",
      answer: "Harni has many under-construction areas. We're experienced with navigation challenges and can reach even the newest societies. Just share location pin and we'll be there."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-cyan-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-cyan-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-cyan-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-cyan-600 font-medium">Harni</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-500 to-cyan-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              ✈️ Serving Harni - Gateway to Vadodara
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Harni, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Where arrivals become celebrations! Harni's proximity to the airport makes it perfect for NRI families and travel-loving couples. Let us make your homecoming unforgettable!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-cyan-600 hover:bg-cyan-50 text-lg px-8 py-6"
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
                <Plane className="h-4 w-4" /> 5 min from Airport
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 350+ Celebrations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Harni Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Harni's Dynamic Community
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {harniHighlights.map((highlight, index) => (
              <Card key={index} className="border-cyan-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-cyan-600" />
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
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">Special Ideas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unique Harni Celebration Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cyan-600 text-white">Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-cyan-600 text-cyan-600" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">Strategic Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Harni Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-cyan-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-cyan-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-cyan-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">NRI Specialists</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Harni Trusts Us
              </h2>
              <p className="text-white/90 mb-8">
                Harni's unique mix of NRI families, airport travelers, and young homeowners needs a service that understands their lifestyle. We get it!
              </p>
              <ul className="space-y-3">
                {harniReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">{['✈️', '🏠', '🌏', '💙'][i-1]}</span>
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
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Harni Celebration Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-cyan-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-cyan-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Packages for Harni
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-cyan-600 text-white">Best Seller</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-cyan-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700"
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
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Harni Celebration FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-cyan-100">
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
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Land Into Love! ✈️❤️
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 350+ Harni couples who made arrivals memorable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-cyan-50"
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

