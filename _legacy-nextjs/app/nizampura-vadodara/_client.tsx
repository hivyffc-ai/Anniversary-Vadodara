'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Building2, ShoppingBag, Users, Coffee, Landmark, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function NizampuraAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const nizampuraHighlights = [
    {
      icon: Landmark,
      title: "Historic Heritage",
      description: "Celebrating in one of Vadodara's most historic and culturally rich areas"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Serving Nizampura's wonderful mix of traditional and modern families"
    },
    {
      icon: ShoppingBag,
      title: "Commercial Hub",
      description: "Conveniently located near markets and shopping areas"
    },
    {
      icon: Coffee,
      title: "Foodie Paradise",
      description: "Famous for street food and traditional eateries"
    }
  ];

  const nizampuraReasons = [
    "Deep understanding of Nizampura's cultural values",
    "Traditional yet modern celebration setups",
    "Serving the area for years with trust",
    "Affordable packages for middle-class families",
    "Both home and venue celebrations",
    "Respecting traditional sensibilities"
  ];

  const nearbyLandmarks = [
    { name: "Nizampura Main Road", distance: "2 min" },
    { name: "Panigate", distance: "5 min" },
    { name: "Raopura", distance: "7 min" },
    { name: "Mandvi", distance: "8 min" },
    { name: "Sayajigunj", distance: "10 min" },
    { name: "Dandia Bazaar", distance: "6 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Heritage Romance",
      description: "Classic celebration blending Nizampura's traditional charm with romantic elements",
      price: "Starting ₹4,499",
      popular: true
    },
    {
      title: "Traditional Anniversary",
      description: "For couples who love tradition - includes puja setup, traditional flowers, and rituals",
      price: "Starting ₹3,999",
      popular: true
    },
    {
      title: "Home Sweet Home",
      description: "Transform your Nizampura home into a celebration venue",
      price: "Starting ₹3,499",
      popular: false
    },
    {
      title: "Modern Elegance",
      description: "Contemporary setup for Nizampura's younger generation",
      price: "Starting ₹5,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Fatima & Rashid Shaikh",
      location: "Nizampura",
      review: "They understood our cultural preferences perfectly. The decoration was beautiful yet appropriate for our joint family. Everyone appreciated the thoughtful setup.",
      rating: 5
    },
    {
      name: "Pushpa & Ramesh Agrawal",
      location: "Near Panigate",
      review: "25th anniversary celebration was perfect! They included traditional elements like flowers and rangoli along with modern balloon decoration. Best of both worlds!",
      rating: 5
    },
    {
      name: "Nisha & Vinod Patel",
      location: "Nizampura Road",
      review: "Our small flat looked like a mini wedding venue! The team worked within our space constraints and budget, still making it look premium.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you serve the entire Nizampura area?",
      answer: "Yes! We serve all of Nizampura including main road, internal societies, Panigate side, and areas extending towards Raopura and Mandvi. Our team knows Nizampura's lanes well."
    },
    {
      question: "Can you do traditional anniversary celebrations?",
      answer: "Absolutely! Nizampura has deep cultural roots. We offer packages that include puja thali, traditional flowers like mogra and genda, rangoli setup, and can coordinate with local priests if needed."
    },
    {
      question: "What about space constraints in old buildings?",
      answer: "Nizampura has many older buildings with smaller rooms. Our team excels at maximizing small spaces - we use wall decorations, ceiling drapes, and smart layouts to create stunning setups even in compact areas."
    },
    {
      question: "Are your celebrations family-appropriate?",
      answer: "Yes! We understand Nizampura's family-oriented values. Our setups are elegant and sophisticated, perfect for celebrations where grandparents, children, and extended family are present."
    },
    {
      question: "What's the parking situation for your team?",
      answer: "Our team is experienced with Nizampura's parking challenges. We use two-wheelers for internal lanes and coordinate timing to minimize any inconvenience. We handle logistics efficiently."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-orange-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-orange-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-orange-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-orange-600 font-medium">Nizampura</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-amber-500 to-orange-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🏛️ Serving Nizampura - Heart of Old Vadodara
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Nizampura, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Where tradition meets celebration! Nizampura's rich heritage and warm community deserve anniversary celebrations that honor both culture and romance. Let us create your perfect blend of traditional values and modern love!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Nizampura Celebration
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
                <MapPin className="h-4 w-4" /> Central Nizampura
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.8★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 500+ Celebrations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nizampura Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Nizampura's Community
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nizampuraHighlights.map((highlight, index) => (
              <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-orange-600" />
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
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Our Specials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Celebration Options for Nizampura
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600 text-white">Local Favorite</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-orange-600 text-orange-600" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-orange-100 text-orange-700">Central Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Nizampura Landmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-orange-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Trusted Choice</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Nizampura Trusts Us
              </h2>
              <p className="text-white/90 mb-8">
                Nizampura values tradition, family, and authentic relationships. We bring these values to every celebration - respectful service, quality within budget, and decorations that make families proud.
              </p>
              <ul className="space-y-3">
                {nizampuraReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-200 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">{['🏛️', '🌺', '👨‍👩‍👧‍👦', '💝'][i-1]}</span>
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
            <Badge className="mb-4 bg-orange-100 text-orange-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nizampura Family Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-orange-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-orange-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packages for Nizampura Families
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-orange-600 text-white">Family Choice</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-orange-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-orange-600 hover:bg-orange-700"
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
            <Badge className="mb-4 bg-orange-100 text-orange-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Nizampura Service
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-orange-100">
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tradition + Romance = Perfect Anniversary! 🏛️❤️
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ Nizampura families who trust us with their celebrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50"
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

