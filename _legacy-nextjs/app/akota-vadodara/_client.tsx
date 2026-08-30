'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart, Calendar, ArrowRight, Sparkles, GraduationCap, Home, Users, Bike } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function AkotaAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const akotaHighlights = [
    {
      icon: GraduationCap,
      title: "Near MS University Area",
      description: "Perfect location for academic couples from the university neighborhood"
    },
    {
      icon: Home,
      title: "Family-Friendly Celebrations",
      description: "Akota's residential charm reflected in our warm, intimate celebration spaces"
    },
    {
      icon: Users,
      title: "Community Favorite",
      description: "Trusted by Akota's close-knit community for over a decade"
    },
    {
      icon: Bike,
      title: "Easy Commute",
      description: "Quick 10-minute ride from Akota Stadium and surrounding areas"
    }
  ];

  const akotaReasons = [
    "10+ years of serving Akota's beautiful families",
    "Understanding of Akota's cultural values and traditions",
    "Budget-friendly options for young Akota couples",
    "Premium services for established Akota residents",
    "Home decoration available across all Akota societies",
    "Weekend and weekday flexible booking for Akota residents"
  ];

  const nearbyLandmarks = [
    { name: "Akota Stadium", distance: "8 min" },
    { name: "MS University", distance: "12 min" },
    { name: "Akota Garden", distance: "6 min" },
    { name: "Kala Ghoda Circle", distance: "10 min" },
    { name: "Dandia Bazaar", distance: "15 min" },
    { name: "Kamatibaug", distance: "18 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Intimate Garden Dinner",
      description: "A peaceful garden setting perfect for Akota couples who love nature and tranquility",
      price: "Starting ₹4,499",
      popular: true
    },
    {
      title: "Rooftop Stargazing Date",
      description: "Away from Akota's busy streets, enjoy dinner under the stars with city views",
      price: "Starting ₹5,499",
      popular: true
    },
    {
      title: "Home Anniversary Decoration",
      description: "Transform your Akota home into a romantic paradise - we come to you!",
      price: "Starting ₹3,999",
      popular: false
    },
    {
      title: "Couple Photoshoot Package",
      description: "Capture your love story with professional photography near Akota's scenic spots",
      price: "Starting ₹6,999",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sneha & Vikram Joshi",
      location: "Akota Stadium Road",
      review: "We've lived in Akota for 20 years. For our anniversary, we wanted something close yet special. This team delivered beyond expectations!",
      rating: 5
    },
    {
      name: "Nisha & Amit Trivedi",
      location: "Near Akota Garden",
      review: "As a young couple from Akota, budget was important. They gave us a magical candlelight dinner without breaking the bank.",
      rating: 5
    },
    {
      name: "Bhavna & Suresh Patel",
      location: "Old Akota",
      review: "Our 30th anniversary was celebrated beautifully. The team understood our traditional values perfectly. Highly recommend for Akota families!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Akota, Vadodara?",
      answer: "Our celebration venues are conveniently located just 10-12 minutes from central Akota area, including Akota Stadium Road, Akota Garden, and Old Akota neighborhoods. Easy access via main Akota roads."
    },
    {
      question: "Do you provide home decoration services in Akota?",
      answer: "Yes! We offer complete home decoration services throughout Akota - from apartments near Akota Stadium to bungalows in Old Akota. Our team brings all supplies and transforms your space beautifully."
    },
    {
      question: "What's special about your service for Akota residents?",
      answer: "We've been serving Akota families for over a decade. We understand the area's blend of traditional values and modern tastes. Our packages cater to both budget-conscious young couples and those seeking premium experiences."
    },
    {
      question: "Can you arrange anniversary surprises in Akota?",
      answer: "Absolutely! We specialize in surprise setups. Whether it's decorating your Akota home while your partner is away, or arranging a secret venue celebration, we handle all the planning discreetly."
    },
    {
      question: "What packages work best for Akota couples?",
      answer: "For Akota's diverse community, we recommend our Classic Package (₹4,999) for intimate celebrations, Premium Package (₹6,999) for special milestones, and Home Decoration (₹3,999) for convenience."
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
            <span className="text-rose-600 font-medium">Akota</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Serving Akota, Vadodara Since 2010
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Akota, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Akota — where families grow and love flourishes. From the peaceful lanes near Akota Garden to the vibrant community around Akota Stadium, we bring romantic anniversary celebrations to your beloved neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Akota Celebration
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
                <MapPin className="h-4 w-4" /> 10 min from Akota Stadium
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.8★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 400+ Akota Families
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Akota Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Akota Families
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've grown alongside Akota's community, understanding what makes each celebration special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {akotaHighlights.map((highlight, index) => (
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

      {/* Celebration Ideas for Akota */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Celebration Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Akota Couples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thoughtfully designed experiences for Akota's diverse community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-rose-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-600 text-white">Popular in Akota</Badge>
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
            <Badge className="mb-4 bg-rose-100 text-rose-700">Easy Access</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Akota Landmarks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conveniently located near all major Akota points
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

      {/* Why Akota Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Community Trust</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Akota Families Choose Us Year After Year
              </h2>
              <p className="text-white/90 mb-8">
                Akota is known for its strong family bonds and community spirit. We've been honored to be part of countless anniversary celebrations here, understanding the unique blend of tradition and warmth that defines this neighborhood.
              </p>
              <ul className="space-y-3">
                {akotaReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['🏠', '💕', '🎊', '🌸'][i-1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from Akota */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Akota Families Say
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
              Anniversary Packages for Akota
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Options for every Akota family's needs and budget
            </p>
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
                    Book for Akota
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
              Questions from Akota Residents
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
            Celebrate Your Love Story in Akota
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of happy Akota families who've trusted us with their special moments
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

