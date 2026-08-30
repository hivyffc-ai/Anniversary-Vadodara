'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Building2, Factory, Users, Briefcase, Home, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function OldPadraRoadAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const oldPadraRoadHighlights = [
    {
      icon: Factory,
      title: "Industrial Heritage",
      description: "Serving families connected to Old Padra Road's industrial legacy"
    },
    {
      icon: Users,
      title: "Working Class Pride",
      description: "Honest, hardworking families deserve premium celebrations"
    },
    {
      icon: Home,
      title: "Established Colonies",
      description: "Catering to Old Padra Road's well-settled residential communities"
    },
    {
      icon: Briefcase,
      title: "Professional Couples",
      description: "Special packages for working professionals with busy schedules"
    }
  ];

  const oldPadraRoadReasons = [
    "Serving Old Padra Road for many years",
    "Budget-conscious premium packages",
    "Flexible timing for working couples",
    "Home decoration specialists",
    "Quick service from nearby base",
    "Understanding of local community values"
  ];

  const nearbyLandmarks = [
    { name: "Old Padra Road Main", distance: "3 min" },
    { name: "Padra GIDC", distance: "8 min" },
    { name: "Manjalpur", distance: "10 min" },
    { name: "Makarpura", distance: "12 min" },
    { name: "Vadodara City", distance: "15 min" },
    { name: "Padra Town", distance: "20 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Working Class Romance",
      description: "Premium celebration at honest prices - because hardworking couples deserve the best",
      price: "Starting ₹3,499",
      popular: true
    },
    {
      title: "Sunday Special",
      description: "Extra special package for your weekly off - complete relaxation and romance",
      price: "Starting ₹4,499",
      popular: true
    },
    {
      title: "After-Shift Surprise",
      description: "Come home to a romantic setup after your work shift - we handle everything",
      price: "Starting ₹3,999",
      popular: false
    },
    {
      title: "Colony Celebration",
      description: "Celebrate with neighbors and friends - community-style anniversary party",
      price: "Starting ₹5,999",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Geeta & Mahesh Thakor",
      location: "Old Padra Road",
      review: "Both of us work in factories. They understood our tight budget and created something beautiful for our 10th anniversary. Our children were so happy!",
      rating: 5
    },
    {
      name: "Sunita & Ramnik Parmar",
      location: "Near GIDC",
      review: "After 20 years of marriage, this was our first proper celebration. They made it memorable within our budget. Very respectful and understanding team.",
      rating: 5
    },
    {
      name: "Kavita & Dinesh Solanki",
      location: "Old Padra Road Colony",
      review: "They set up everything while we were at work. Came home to beautiful decoration and candlelight dinner ready! So thoughtful!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you serve the Old Padra Road industrial area?",
      answer: "Yes! We actively serve all of Old Padra Road including the GIDC areas, residential colonies, and areas extending towards Padra. Our team is familiar with the entire stretch."
    },
    {
      question: "Are your packages affordable for middle-class families?",
      answer: "Absolutely! We believe every couple deserves a beautiful anniversary. Our packages start from ₹3,499 and we never compromise on quality. We offer value-for-money celebrations."
    },
    {
      question: "Can you set up while we're at work?",
      answer: "Yes! Many Old Padra Road couples work long hours. Give us your home keys or coordinate with a family member - we'll set up everything so you come home to a surprise."
    },
    {
      question: "What about shift workers with odd timings?",
      answer: "We understand industrial work schedules. Whether you need early morning setup or late night celebration, we accommodate your shift patterns. Just let us know your timing."
    },
    {
      question: "Do you offer EMI or payment plans?",
      answer: "For celebrations above ₹5,000, we offer convenient payment options. Pay 50% advance and balance after the celebration. We want to make celebrations accessible to all."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-slate-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-slate-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-slate-700 font-medium">Old Padra Road</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🏭 Serving Old Padra Road - Industrial Heart
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Old Padra Road, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Hardworking hands, loving hearts! Old Padra Road's dedicated workers and families deserve celebrations as special as their commitment to each other. Premium romance at honest prices!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-slate-700 hover:bg-slate-50 text-lg px-8 py-6"
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
                <MapPin className="h-4 w-4" /> Old Padra Road
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.8★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 300+ Celebrations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Old Padra Road Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding Old Padra Road Families
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oldPadraRoadHighlights.map((highlight, index) => (
              <Card key={index} className="border-slate-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-slate-600" />
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
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-700">Value Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Celebrations for Working Families
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-slate-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-slate-700 text-white">Best Value</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-slate-600 text-slate-700" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-slate-100 text-slate-700">Easy Access</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Old Padra Road Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-slate-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-slate-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Honest Service</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Old Padra Road Trusts Us
              </h2>
              <p className="text-white/90 mb-8">
                Old Padra Road is built on hard work and honest values. We mirror these values - no hidden costs, quality service, and genuine care for every celebration.
              </p>
              <ul className="space-y-3">
                {oldPadraRoadReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['🏭', '👷', '❤️', '🎉'][i-1]}</span>
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
            <Badge className="mb-4 bg-slate-100 text-slate-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Old Padra Road Family Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable Anniversary Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-slate-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-slate-700 text-white">Value Choice</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-slate-700">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-slate-700 hover:bg-slate-800"
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
            <Badge className="mb-4 bg-slate-100 text-slate-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-slate-100">
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
      <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            You Work Hard. Celebrate Harder! 🏭❤️
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 300+ Old Padra Road families who celebrated with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-slate-700 hover:bg-slate-50"
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

