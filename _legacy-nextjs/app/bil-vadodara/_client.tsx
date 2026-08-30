'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, TreePine, Home, Flower2, Sun, Mountain, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function BilAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const bilHighlights = [
    {
      icon: TreePine,
      title: "Green & Serene",
      description: "Bil's natural beauty creates the perfect romantic backdrop"
    },
    {
      icon: Home,
      title: "Village Charm",
      description: "Traditional warmth combined with modern celebration styles"
    },
    {
      icon: Flower2,
      title: "Open Spaces",
      description: "Beautiful outdoor setups amidst Bil's peaceful surroundings"
    },
    {
      icon: Sun,
      title: "Nature Romance",
      description: "Unique garden and farmhouse celebration options"
    }
  ];

  const bilReasons = [
    "Understanding Bil's peaceful, nature-loving community",
    "Beautiful outdoor garden setups available",
    "Farmhouse style celebrations",
    "Budget-friendly yet premium quality",
    "Traditional meets modern themes",
    "Quick reach to all Bil areas"
  ];

  const nearbyLandmarks = [
    { name: "Bil Village", distance: "2 min" },
    { name: "Bil Road", distance: "3 min" },
    { name: "Vadodara City", distance: "15 min" },
    { name: "Ajwa Road", distance: "12 min" },
    { name: "Sama", distance: "10 min" },
    { name: "Waghodia Road", distance: "18 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Garden Romance",
      description: "Open-air celebration in Bil's beautiful green spaces with fairy lights and natural decor",
      price: "Starting ₹4,999",
      popular: true
    },
    {
      title: "Farmhouse Retreat",
      description: "Private farmhouse setting with rustic decorations and intimate ambiance",
      price: "Starting ₹6,999",
      popular: true
    },
    {
      title: "Sunset Celebration",
      description: "Timed perfectly for Bil's beautiful sunset views - magical golden hour romance",
      price: "Starting ₹5,499",
      popular: false
    },
    {
      title: "Cozy Home Setup",
      description: "Romantic home decoration with Bil's traditional touch",
      price: "Starting ₹3,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Meera & Prakash Solanki",
      location: "Bil Village",
      review: "They transformed our courtyard into a fairyland! The garden setup with fairy lights under the stars was absolutely magical. Our village neighbors were so impressed!",
      rating: 5
    },
    {
      name: "Bhavna & Kiran Patel",
      location: "Near Bil Road",
      review: "Living in Bil, we thought we'd have to go to city for a good anniversary celebration. Wrong! They brought the celebration to us - even better than city setups!",
      rating: 5
    },
    {
      name: "Dipali & Suresh Vasava",
      location: "Bil Area",
      review: "The farmhouse decoration was perfect - rustic yet romantic. They understood our preference for nature-themed celebration perfectly.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you really serve Bil area in Vadodara?",
      answer: "Absolutely! Bil is one of our favorite areas to serve because of its natural beauty and peaceful environment. Our team reaches Bil Village and surrounding areas within 20-25 minutes from city center."
    },
    {
      question: "Can you do outdoor celebrations in Bil?",
      answer: "Yes! Bil's greatest advantage is the availability of open spaces. We specialize in garden setups, courtyard decorations, and even farmhouse celebrations. The natural greenery adds to the romantic ambiance."
    },
    {
      question: "What makes Bil celebrations special?",
      answer: "Bil offers what city areas can't - peace, greenery, and space. We create unique outdoor setups with fairy lights, floral arrangements, and natural elements that look stunning against Bil's green backdrop."
    },
    {
      question: "Are farmhouse celebrations available?",
      answer: "Yes, we have partnerships with several farmhouses near Bil. Whether you want a rustic setup or a premium glamping-style celebration, we can arrange it with full decoration and catering."
    },
    {
      question: "Is the pricing higher for Bil area?",
      answer: "Not at all! Our standard pricing applies to Bil. In fact, outdoor celebrations often cost less than city venues. We just add a nominal travel charge for locations beyond 15km from city center."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-green-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-green-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-green-600 font-medium">Bil</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🌿 Serving Bil - Vadodara's Green Paradise
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Bil, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Where nature kisses romance! Bil's serene landscapes and open spaces make it perfect for couples who love the outdoors. Experience anniversary celebrations amidst greenery, fresh air, and starlit skies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Nature Celebration
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
                <MapPin className="h-4 w-4" /> Bil Village Area
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 250+ Celebrations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bil Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Made for Bil's Natural Beauty
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bilHighlights.map((highlight, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-7 w-7 text-green-600" />
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
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Outdoor Specials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unique Celebrations for Bil Couples
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-green-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">Bil Favorite</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">{idea.price}</span>
                    <Button variant="outline" className="border-green-600 text-green-600" onClick={() => setIsBookingOpen(true)}>
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
            <Badge className="mb-4 bg-green-100 text-green-700">Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distances from Bil Area
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{landmark.name}</p>
                <p className="text-green-600 text-sm">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Nature Lovers</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Bil Couples Love Us
              </h2>
              <p className="text-white/90 mb-8">
                Bil's charm lies in its connection with nature. We create celebrations that embrace this beauty - outdoor setups, natural decorations, and ambiance that complements Bil's serene environment.
              </p>
              <ul className="space-y-3">
                {bilReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">{['🌿', '🌸', '✨', '💚'][i-1]}</span>
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
            <Badge className="mb-4 bg-green-100 text-green-700">Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bil Love Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-green-100">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-green-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Packages for Bil
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.slice(0, 3).map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-green-600 text-white">Best Seller</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">{formatPrice(pkg.price)}</div>
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
                    className="w-full mt-6 bg-green-600 hover:bg-green-700"
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
            <Badge className="mb-4 bg-green-100 text-green-700">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Bil Area
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-green-100">
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Celebrate Under the Stars in Bil! 🌿✨
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 250+ couples who chose nature's embrace for their special day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-green-50"
              onClick={() => setIsBookingOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Nature Celebration
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

