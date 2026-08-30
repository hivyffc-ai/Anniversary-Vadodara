'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Factory, Home, Users, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function ManjalpurAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const manjalpurHighlights = [
    {
      icon: Factory,
      title: "Industrial Hub Access",
      description: "Convenient for couples working in Manjalpur's industrial estate and GIDC area"
    },
    {
      icon: Home,
      title: "Growing Residential Area",
      description: "Serving Manjalpur's expanding family communities and new societies"
    },
    {
      icon: Users,
      title: "Middle-Class Values",
      description: "Packages designed with Manjalpur's hardworking families in mind"
    },
    {
      icon: Wallet,
      title: "Budget-Friendly Options",
      description: "Quality celebrations that respect your budget - no compromises"
    }
  ];

  const manjalpurReasons = [
    "10+ years serving Manjalpur's growing community",
    "Budget-friendly packages without quality compromise",
    "Understanding of working-class couple schedules",
    "Weekend special rates for Manjalpur residents",
    "Home decoration across all Manjalpur societies",
    "Flexible payment options available"
  ];

  const nearbyLandmarks = [
    { name: "Manjalpur GIDC", distance: "8 min" },
    { name: "Manjalpur Chokdi", distance: "5 min" },
    { name: "Tarsali Road", distance: "10 min" },
    { name: "Makarpura Road", distance: "12 min" },
    { name: "Manjalpur Garden", distance: "6 min" },
    { name: "Sama-Savli Road", distance: "15 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Weekend Getaway Dinner",
      description: "Escape Manjalpur's industrial buzz for a peaceful rooftop celebration",
      price: "Starting ₹3,999",
      popular: true
    },
    {
      title: "Budget Romance Package",
      description: "Complete anniversary experience designed for Manjalpur's value-conscious couples",
      price: "Starting ₹2,999",
      popular: true
    },
    {
      title: "Home Celebration Setup",
      description: "Transform your Manjalpur home into a romantic paradise",
      price: "Starting ₹2,499",
      popular: false
    },
    {
      title: "Sunday Special",
      description: "Extra discounts for Sunday celebrations - Manjalpur's day off!",
      price: "Starting ₹3,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Geeta & Ramesh Kumar",
      location: "Manjalpur GIDC Area",
      review: "We work in GIDC and don't get much time. They arranged everything on a Sunday and the price was very reasonable. Perfect for Manjalpur families!",
      rating: 5
    },
    {
      name: "Priya & Sunil Parmar",
      location: "Manjalpur Society",
      review: "I was worried about budget, but they gave us such beautiful decoration and dinner in affordable price. My wife was so happy!",
      rating: 5
    },
    {
      name: "Komal & Bharat Patel",
      location: "Near Manjalpur Chokdi",
      review: "Our 10th anniversary was special thanks to this team. They understand Manjalpur people - good quality, fair price, no nonsense!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Manjalpur, Vadodara?",
      answer: "Our celebration venues are just 10-15 minutes from Manjalpur Chokdi and GIDC area. Easy access via Tarsali Road and Makarpura Road makes it convenient for all Manjalpur residents."
    },
    {
      question: "Do you have affordable packages for Manjalpur families?",
      answer: "Yes! We specifically designed budget-friendly packages keeping Manjalpur's working families in mind. Our packages start from just ₹2,999 with no hidden costs. Quality celebration doesn't have to be expensive."
    },
    {
      question: "Can you work around factory shift timings?",
      answer: "Absolutely! We understand many Manjalpur couples work in shifts at GIDC. We offer flexible timing including early morning setups, afternoon celebrations, and late evening packages to match your schedule."
    },
    {
      question: "Do you offer EMI or payment plans?",
      answer: "Yes, for premium packages we offer easy payment plans. We want every Manjalpur couple to celebrate their anniversary beautifully, regardless of immediate budget constraints."
    },
    {
      question: "What's included in the budget package?",
      answer: "Our budget package (₹2,999) includes: venue access for 3 hours, basic romantic decoration (balloons, fairy lights), candlelight table setup, dinner for two, anniversary cake (500g), and soft beverages."
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
            <span className="text-rose-600 font-medium">Manjalpur</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Proudly Serving Manjalpur, Vadodara
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Manjalpur, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Manjalpur — where hardworking families build beautiful lives together. From the industrial GIDC area to peaceful residential colonies, we bring affordable yet magical anniversary celebrations to every Manjalpur couple.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Manjalpur Celebration
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
                <MapPin className="h-4 w-4" /> 10 min from Manjalpur
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.8★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Wallet className="h-4 w-4" /> Budget-Friendly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Manjalpur Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Made for Manjalpur Families
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand Manjalpur's values - hard work, family, and smart spending.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manjalpurHighlights.map((highlight, index) => (
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
            <Badge className="mb-4 bg-rose-100 text-rose-700">Affordable Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Manjalpur Couples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quality celebrations that respect your hard-earned money
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-rose-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-600 text-white">Best Value</Badge>
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
              Distance from Manjalpur Landmarks
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

      {/* Why Manjalpur Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Value & Trust</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Manjalpur Trusts Us
              </h2>
              <p className="text-white/90 mb-8">
                Manjalpur's families work hard and deserve beautiful celebrations. We've been serving this community for over a decade, understanding what matters most - quality, value, and genuine care.
              </p>
              <ul className="space-y-3">
                {manjalpurReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['🏭', '💑', '🎂', '💝'][i-1]}</span>
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
              What Manjalpur Families Say
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
              Anniversary Packages for Manjalpur
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Honest pricing, no hidden costs - that's the Manjalpur way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 0 ? 'ring-2 ring-green-500' : ''}`}>
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-green-600 text-white">Best for Manjalpur</Badge>
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
              Questions from Manjalpur Residents
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
            Your Manjalpur Love Story Deserves Celebration
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Affordable packages starting ₹2,999 - because every love story matters
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

