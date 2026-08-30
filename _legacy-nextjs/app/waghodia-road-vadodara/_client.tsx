'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, GraduationCap, Home, Users, BookOpen, Sparkles, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function WaghodiaRoadAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const waghodiaHighlights = [
    {
      icon: GraduationCap,
      title: "Near PDPU & Universities",
      description: "Serving faculty, students & young professionals from nearby campuses"
    },
    {
      icon: Home,
      title: "Residential Harmony",
      description: "Perfect for the peaceful, family-oriented Waghodia Road community"
    },
    {
      icon: Users,
      title: "Mixed Community",
      description: "Celebrating with locals, students, and working professionals alike"
    },
    {
      icon: BookOpen,
      title: "Academic Vibes",
      description: "Special packages for researcher couples and academic celebrations"
    }
  ];

  const waghodiaReasons = [
    "Understanding Waghodia Road's academic community",
    "Budget-friendly for student couples",
    "Premium options for professors & faculty",
    "Weekday special rates for working professionals",
    "Quick service for time-strapped researchers",
    "Family-inclusive celebration packages"
  ];

  const nearbyLandmarks = [
    { name: "PDPU Campus", distance: "8 min" },
    { name: "Waghodia Crossroads", distance: "3 min" },
    { name: "MSU Baroda", distance: "15 min" },
    { name: "Gotri Road", distance: "10 min" },
    { name: "Pratap Nagar", distance: "12 min" },
    { name: "Maneja", distance: "7 min" }
  ];

  const celebrationIdeas = [
    {
      title: "PhD Couple Special",
      description: "For academic couples - includes thesis completion props, books decoration, brainy romantic setup",
      price: "Starting ₹4,499",
      popular: true
    },
    {
      title: "Campus Romance",
      description: "Perfect for young couples who met in college - nostalgic university-themed celebration",
      price: "Starting ₹3,999",
      popular: true
    },
    {
      title: "Faculty Elegant",
      description: "Sophisticated, classy celebration for professor and faculty couples",
      price: "Starting ₹6,999",
      popular: false
    },
    {
      title: "Budget Scholar",
      description: "Special student-friendly packages with quality celebration at minimal cost",
      price: "Starting ₹2,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya & Dr. Vinay Joshi",
      location: "PDPU Campus Area",
      review: "As professors, we appreciate attention to detail. The subtle elegance of their setup was perfect for our taste. Very refined and thoughtful decoration.",
      rating: 5
    },
    {
      name: "Khushi & Rahul Tiwari",
      location: "Waghodia Road",
      review: "We're both PhD students with tight budgets. Their Scholar package was amazing - quality romance without breaking the bank!",
      rating: 5
    },
    {
      name: "Ankita & Sanjay Mehta",
      location: "Near Maneja",
      review: "Living on Waghodia Road, we didn't expect such quality service so close to home. The home decoration was beautiful and the team was very professional.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you serve the Waghodia Road area in Vadodara?",
      answer: "Yes! We actively serve the entire Waghodia Road stretch including areas near PDPU campus, Maneja, and surrounding residential societies. Our team reaches within 15-20 minutes for any celebration."
    },
    {
      question: "Do you have special packages for students and researchers?",
      answer: "Absolutely! We understand the academic community around Waghodia Road. Our 'Budget Scholar' package starts at just ₹2,499, and our 'PhD Couple Special' includes fun academic-themed props and decorations."
    },
    {
      question: "What about faculty and professor celebrations?",
      answer: "Our 'Faculty Elegant' package is designed for sophisticated tastes - subtle, classy decorations without over-the-top elements. Perfect for professors and senior professionals."
    },
    {
      question: "Can you do celebrations in hostel common areas?",
      answer: "Yes, with proper permission from hostel management. We've done several surprise celebrations in university areas with appropriate permissions and discreet setups."
    },
    {
      question: "What's your timing flexibility for working couples?",
      answer: "We offer flexible timing! Many Waghodia Road couples are researchers with odd schedules. We accommodate late evening and weekend bookings at no extra charge."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-amber-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-amber-600 font-medium">Waghodia Road</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📚 Serving Waghodia Road - Academic Hub of Vadodara
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Waghodia Road, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Where knowledge meets love! Waghodia Road's vibrant mix of academics, researchers, and families deserves celebrations as thoughtful as they are. From student budgets to faculty elegance, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-amber-600 hover:bg-amber-50 text-lg px-8 py-6"
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
                <MapPin className="h-4 w-4" /> 8 min from PDPU
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.8★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 350+ Celebrations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Waghodia Road Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Waghodia Road's Community
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waghodiaHighlights.map((highlight, index) => (
              <Card key={index} className="border-amber-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-amber-600" />
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
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-700">Unique Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special Packages for Waghodia Road
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-amber-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white">Popular Here</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-amber-600 text-amber-600" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-amber-100 text-amber-700">Easy Access</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Waghodia Road Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-amber-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-amber-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Smart Choice</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Waghodia Road Trusts Us
              </h2>
              <p className="text-white/90 mb-8">
                From PhD students to professors, from young researchers to established academics - we understand the diverse community of Waghodia Road and customize every celebration accordingly.
              </p>
              <ul className="space-y-3">
                {waghodiaReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['📚', '❤️', '🎓', '✨'][i-1]}</span>
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
            <Badge className="mb-4 bg-amber-100 text-amber-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waghodia Road Love Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-amber-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-amber-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packages for Every Budget
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-amber-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-600 text-white">Best Value</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-amber-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-amber-600 hover:bg-amber-700"
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
            <Badge className="mb-4 bg-amber-100 text-amber-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-amber-100">
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
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Knowledge + Love = Perfect Anniversary! 📚❤️
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 350+ happy Waghodia Road couples
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-amber-50"
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

