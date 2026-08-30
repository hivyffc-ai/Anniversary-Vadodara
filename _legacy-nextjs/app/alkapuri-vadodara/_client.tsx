'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart, Calendar, ArrowRight, Sparkles, Crown, Building2, TreePine, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function AlkapuriAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const alkapuriHighlights = [
    {
      icon: Crown,
      title: "Premium Location Convenience",
      description: "Just 12 minutes from Alkapuri's prime residential areas to our exclusive celebration venues"
    },
    {
      icon: Building2,
      title: "Close to Major Landmarks",
      description: "Near Inorbit Mall, Sayaji Garden, and major Alkapuri roads for easy accessibility"
    },
    {
      icon: TreePine,
      title: "Nature Meets Luxury",
      description: "Escape busy Alkapuri streets to peaceful rooftop and garden celebration spaces"
    },
    {
      icon: Car,
      title: "Free Parking Available",
      description: "Complimentary parking for Alkapuri couples visiting our venues"
    }
  ];

  const alkapuriReasons = [
    "Only celebration service offering pickup from Alkapuri area",
    "Special packages designed for Alkapuri's elite couples",
    "15+ years serving families from Alkapuri locality",
    "Customized decorations matching Alkapuri's sophisticated taste",
    "Flexible timing for busy Alkapuri professionals",
    "Premium quality matching Alkapuri's upscale lifestyle"
  ];

  const nearbyLandmarks = [
    { name: "Inorbit Mall", distance: "10 min" },
    { name: "Sayaji Garden", distance: "8 min" },
    { name: "Alkapuri Club", distance: "12 min" },
    { name: "VMSS Hospital", distance: "15 min" },
    { name: "Laxmi Vilas Palace", distance: "18 min" },
    { name: "Vadodara Railway Station", distance: "20 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Rooftop Candlelight Dinner",
      description: "Escape the bustling Alkapuri area to a serene rooftop under the stars with panoramic city views",
      price: "Starting ₹4,999",
      popular: true
    },
    {
      title: "Private Glass House Romance",
      description: "Climate-controlled glass dome celebration perfect for Alkapuri's discerning couples",
      price: "Starting ₹6,499",
      popular: true
    },
    {
      title: "Garden Anniversary Setup",
      description: "Lush green outdoor celebration away from Alkapuri's concrete landscape",
      price: "Starting ₹5,499",
      popular: false
    },
    {
      title: "Surprise Party Package",
      description: "We plan everything while you focus on your work in Alkapuri's business district",
      price: "Starting ₹7,999",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priya & Ankit Sharma",
      location: "Alkapuri Society",
      review: "Living in Alkapuri, we wanted something special for our 5th anniversary. The rooftop venue was just 15 minutes away and the setup was breathtaking!",
      rating: 5
    },
    {
      name: "Dr. Meera & Rajesh Patel",
      location: "Alkapuri Road",
      review: "As busy professionals from Alkapuri, we needed a hassle-free celebration. They handled everything perfectly - from decoration to cake to dinner!",
      rating: 5
    },
    {
      name: "Kavita & Nilesh Desai",
      location: "Near Inorbit Mall",
      review: "Our 25th silver jubilee celebration was magical. The team understood our taste as Alkapuri residents and delivered premium quality.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Alkapuri, Vadodara?",
      answer: "Our celebration venues are located just 12-15 minutes drive from central Alkapuri area. We're easily accessible via Productivity Road and Alkapuri main roads. We also offer complimentary pickup service for Alkapuri residents."
    },
    {
      question: "Do you offer home decoration services in Alkapuri?",
      answer: "Yes! We provide complete home decoration services across all Alkapuri societies and apartments. Our team can transform your Alkapuri home into a romantic anniversary venue with balloons, flowers, lights, and themed decorations."
    },
    {
      question: "What makes your service popular among Alkapuri couples?",
      answer: "Alkapuri is home to Vadodara's most discerning families. We match that expectation with premium quality decorations, gourmet dining options, professional photography, and personalized attention that Alkapuri residents appreciate."
    },
    {
      question: "Can you arrange late-night celebrations for Alkapuri working couples?",
      answer: "Absolutely! We understand Alkapuri has many working professionals. We offer flexible timing including late evening setups (7 PM to 11 PM) and even midnight surprise arrangements for your convenience."
    },
    {
      question: "What's included in your anniversary packages for Alkapuri area?",
      answer: "Our packages include venue access, romantic decoration, candlelight dinner for two, anniversary cake, soft beverages, photography session, and background music. Premium packages add flowers, gifts, and extended hours."
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
            <span className="text-rose-600 font-medium">Alkapuri</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Proudly Serving Alkapuri, Vadodara
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Alkapuri, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Alkapuri's most loved couples deserve extraordinary celebrations. From the prestigious lanes near Inorbit Mall to the serene corners of Sayaji Garden area — we bring premium anniversary experiences to Vadodara's elite neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Alkapuri Celebration
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
                <MapPin className="h-4 w-4" /> 12 min from Alkapuri
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 500+ Alkapuri Couples
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Alkapuri Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Alkapuri Residents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the refined taste of Alkapuri's prestigious community and deliver celebrations that match your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alkapuriHighlights.map((highlight, index) => (
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

      {/* Celebration Ideas for Alkapuri */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Celebration Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Alkapuri Couples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated experiences perfect for couples living in Alkapuri and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-rose-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-600 text-white">Popular in Alkapuri</Badge>
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
              Distance from Alkapuri Landmarks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our venue is easily accessible from all major points in Alkapuri
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

      {/* Why Alkapuri Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Trusted by Alkapuri</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Alkapuri Families Trust Us for Anniversaries
              </h2>
              <p className="text-white/90 mb-8">
                For over 15 years, we've been the preferred choice for anniversary celebrations among Alkapuri's most respected families. Our commitment to excellence matches the high standards of this prestigious neighborhood.
              </p>
              <ul className="space-y-3">
                {alkapuriReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['💑', '🎂', '🌹', '✨'][i-1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from Alkapuri */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Alkapuri Couples Say
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
              Anniversary Packages for Alkapuri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Special pricing for our Alkapuri neighbors
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
                    Book for Alkapuri
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
              Questions from Alkapuri Residents
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
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Celebrate Your Anniversary?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ happy couples from Alkapuri who celebrated their special day with us
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

