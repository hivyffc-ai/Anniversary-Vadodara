'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, TreePine, Sparkles, Crown, Wine, Building2, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function ElloraParkAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const elloraHighlights = [
    {
      icon: TreePine,
      title: "Green Serenity",
      description: "Ellora Park's lush greenery provides perfect romantic backdrop"
    },
    {
      icon: Crown,
      title: "Premium Living",
      description: "Sophisticated celebrations for Ellora Park's elite community"
    },
    {
      icon: Building2,
      title: "Upscale Residences",
      description: "Tailored services for luxury apartments and bungalows"
    },
    {
      icon: Gem,
      title: "Exclusive Setups",
      description: "Designer decorations that match Ellora Park's aesthetic"
    }
  ];

  const elloraReasons = [
    "Premium quality matching Ellora Park standards",
    "Discreet, professional service",
    "Designer themes and luxury materials",
    "Flexible timing for busy professionals",
    "Champagne & gourmet options available",
    "Personalized attention to every detail"
  ];

  const nearbyLandmarks = [
    { name: "Ellora Park Garden", distance: "2 min" },
    { name: "Race Course Road", distance: "5 min" },
    { name: "Akota", distance: "6 min" },
    { name: "Alkapuri", distance: "10 min" },
    { name: "Fatehgunj", distance: "8 min" },
    { name: "Sayaji Hospital", distance: "7 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Park View Romance",
      description: "Celebrate with the beautiful view of Ellora Park's greenery as your backdrop",
      price: "Starting ₹7,999",
      popular: true
    },
    {
      title: "Luxury Suite Experience",
      description: "Transform your premium apartment into a 5-star romantic retreat",
      price: "Starting ₹9,999",
      popular: true
    },
    {
      title: "Garden Party Elite",
      description: "Exclusive celebration in Ellora Park's serene garden settings",
      price: "Starting ₹11,999",
      popular: false
    },
    {
      title: "Intimate Elegance",
      description: "Subtle, sophisticated setup for private couple celebrations",
      price: "Starting ₹6,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priti & Rajiv Kapoor",
      location: "Ellora Park Bungalows",
      review: "They matched our home's aesthetic perfectly. The all-white roses and champagne setup was exactly what we wanted for our crystal anniversary!",
      rating: 5
    },
    {
      name: "Shruti & Anand Desai",
      location: "Ellora Park Apartments",
      review: "Living in a premium apartment, we were particular about quality. Their attention to detail was impressive - from crystal vases to premium chocolates!",
      rating: 5
    },
    {
      name: "Kavya & Nikhil Mehta",
      location: "Near Ellora Park",
      review: "The garden setup overlooking the park was breathtaking! Professional service, punctual team, and decorator-level quality.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you provide premium services for Ellora Park area?",
      answer: "Yes! Ellora Park is known for its affluent, quality-conscious residents. We offer premium packages with designer decorations, imported flowers, luxury materials, and gourmet dining options specifically for this area."
    },
    {
      question: "Can you match our home's interior aesthetic?",
      answer: "Absolutely! Before any celebration, we do a brief consultation to understand your home's theme - whether it's contemporary minimalist, classic elegant, or modern luxe. Our setups complement your existing decor."
    },
    {
      question: "What premium add-ons do you offer?",
      answer: "We offer champagne/wine arrangements, imported chocolates, premium flower varieties (imported roses, orchids, lilies), live music arrangements, personal chef services, and professional photography."
    },
    {
      question: "How discreet is your service?",
      answer: "Very! We understand privacy is important in premium localities. Our team arrives in unmarked vehicles, sets up discreetly, and maintains complete confidentiality about our clients."
    },
    {
      question: "Can you arrange celebrations in the actual Ellora Park garden?",
      answer: "Yes, with proper permissions. We've done several sunset celebrations and morning anniversaries in Ellora Park's beautiful gardens. We handle all logistics and ensure a pristine setup."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-teal-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-teal-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-teal-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-teal-600 font-medium">Ellora Park</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🌳 Serving Ellora Park - Premium Residential Oasis
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Ellora Park, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Where luxury meets love! Ellora Park's serene greens and premium residences deserve nothing less than world-class anniversary celebrations. Experience elegance that matches your refined lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-teal-700 hover:bg-teal-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Premium Celebration
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
                <MapPin className="h-4 w-4" /> 2 min from Ellora Park Garden
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 5.0★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 200+ Elite Celebrations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ellora Park Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crafted for Ellora Park's Elegance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elloraHighlights.map((highlight, index) => (
              <Card key={index} className="border-teal-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-teal-600" />
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
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700">Luxury Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Celebration Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-teal-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-teal-600 text-white">Premium Choice</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-teal-600 text-teal-600" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-teal-100 text-teal-700">Prime Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Ellora Park Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-teal-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-teal-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-teal-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-teal-700 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Elite Experience</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Ellora Park Chooses Us
              </h2>
              <p className="text-white/90 mb-8">
                Ellora Park residents appreciate quality, discretion, and elegance. We deliver celebrations that reflect these values - refined, beautiful, and memorable.
              </p>
              <ul className="space-y-3">
                {elloraReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-300 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">{['🌳', '💎', '🍾', '🌹'][i-1]}</span>
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
            <Badge className="mb-4 bg-teal-100 text-teal-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ellora Park Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-teal-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-teal-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Packages for Ellora Park
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-teal-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-teal-600 text-white">Most Loved</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-teal-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-teal-600 hover:bg-teal-700"
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
            <Badge className="mb-4 bg-teal-100 text-teal-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions from Ellora Park Residents
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-teal-100">
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
      <section className="py-16 bg-gradient-to-r from-teal-700 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elegance Deserves Elegance! 🌳💎
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 200+ elite Ellora Park couples who chose premium celebrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => setIsBookingOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Premium Experience
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

