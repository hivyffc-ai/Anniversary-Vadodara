'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Calendar, Building2, Stethoscope, GraduationCap, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, formatPrice } from '@/lib/anniversary-config';

export default function KarelibaugAnniversaryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const karelibaugHighlights = [
    {
      icon: Stethoscope,
      title: "Medical Hub Proximity",
      description: "Near Sterling Hospital and healthcare centers - convenient for medical professionals"
    },
    {
      icon: GraduationCap,
      title: "Educational Corridor",
      description: "Close to schools and colleges - perfect for teacher couples and educators"
    },
    {
      icon: Building2,
      title: "Established Neighborhood",
      description: "Serving Karelibaug's well-established families for over 15 years"
    },
    {
      icon: ShoppingBag,
      title: "Commercial Access",
      description: "Easy reach from Karelibaug's shopping areas and business centers"
    }
  ];

  const karelibaugReasons = [
    "15+ years trusted by Karelibaug's elite families",
    "Special packages for doctors and medical staff",
    "Flexible scheduling for teacher couples",
    "Premium quality matching Karelibaug standards",
    "Home decoration in all Karelibaug societies",
    "Last-minute bookings accepted for emergencies"
  ];

  const nearbyLandmarks = [
    { name: "Sterling Hospital", distance: "5 min" },
    { name: "Karelibaug Circle", distance: "6 min" },
    { name: "Productivity Road", distance: "8 min" },
    { name: "Jetalpur Road", distance: "10 min" },
    { name: "Old Padra Road", distance: "12 min" },
    { name: "Alkapuri", distance: "15 min" }
  ];

  const celebrationIdeas = [
    {
      title: "Doctor's Night Off",
      description: "Special late-night packages (8 PM - 12 AM) for medical professionals",
      price: "Starting ₹5,999",
      popular: true
    },
    {
      title: "Premium Rooftop Dinner",
      description: "Exclusive rooftop setting matching Karelibaug's sophisticated taste",
      price: "Starting ₹6,499",
      popular: true
    },
    {
      title: "Educator's Special",
      description: "Weekend celebration packages for Karelibaug's teaching community",
      price: "Starting ₹4,999",
      popular: false
    },
    {
      title: "Silver Generation Package",
      description: "Specially designed for Karelibaug's senior couples celebrating golden years",
      price: "Starting ₹5,499",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Neha & Dr. Vivek Desai",
      location: "Near Sterling Hospital",
      review: "As doctors with crazy schedules, finding time is hard. They arranged our anniversary at 10 PM and it was perfect! Finally, a service that understands us.",
      rating: 5
    },
    {
      name: "Shobhna & Jayesh Mehta",
      location: "Karelibaug Society",
      review: "We've lived in Karelibaug for 30 years. For our 25th anniversary, they created magic on our terrace. The quality was outstanding!",
      rating: 5
    },
    {
      name: "Varsha & Nilesh Shah",
      location: "Karelibaug Main Road",
      review: "My husband is a principal, I'm a teacher. They gave us the perfect Sunday celebration - relaxed, romantic, and so thoughtfully done.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is your venue from Karelibaug, Vadodara?",
      answer: "Our celebration venues are just 8-12 minutes from Karelibaug Circle and Sterling Hospital area. We're easily accessible via Productivity Road, making it convenient for all Karelibaug residents."
    },
    {
      question: "Do you have special packages for medical professionals?",
      answer: "Yes! We understand doctors, nurses, and medical staff have unpredictable schedules. We offer late-night packages (8 PM - 12 AM), last-minute bookings, and flexible rescheduling at no extra charge."
    },
    {
      question: "What makes your service popular among Karelibaug families?",
      answer: "Karelibaug is known for its educated, established families. We match that standard with premium quality decorations, gourmet food options, sophisticated ambiance, and attention to detail that Karelibaug residents appreciate."
    },
    {
      question: "Can you arrange celebrations for senior couples?",
      answer: "Absolutely! We have a 'Silver Generation Package' designed for couples celebrating 25th, 30th, 40th, or 50th anniversaries. Includes comfortable seating, familiar cuisines, earlier timing options, and family photo sessions."
    },
    {
      question: "Do you serve the entire Karelibaug area?",
      answer: "Yes! We provide services across all of Karelibaug - from societies near Sterling Hospital to homes on Productivity Road, Jetalpur Road, and connecting areas. Home decoration and venue celebrations both available."
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
            <span className="text-rose-600 font-medium">Karelibaug</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📍 Serving Karelibaug's Distinguished Families
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Anniversary Celebration in Karelibaug, Vadodara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Karelibaug — home to Vadodara's doctors, educators, and established families. From Sterling Hospital area to the peaceful residential lanes, we bring refined anniversary celebrations worthy of this prestigious neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Karelibaug Celebration
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
                <MapPin className="h-4 w-4" /> 5 min from Sterling Hospital
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" /> 4.9★ Rating
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" /> 300+ Karelibaug Families
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Karelibaug Couples Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Karelibaug's Elite
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand Karelibaug's high standards and deliver accordingly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {karelibaugHighlights.map((highlight, index) => (
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
            <Badge className="mb-4 bg-rose-100 text-rose-700">Tailored Experiences</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Anniversary Ideas for Karelibaug Couples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium experiences for Karelibaug's discerning families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <Card key={index} className={`relative overflow-hidden ${idea.popular ? 'ring-2 ring-rose-500' : ''}`}>
                {idea.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-600 text-white">Karelibaug Favorite</Badge>
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
            <Badge className="mb-4 bg-rose-100 text-rose-700">Prime Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Distance from Karelibaug Landmarks
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

      {/* Why Karelibaug Trusts Us */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Trusted Excellence</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Karelibaug's Best Choose Us
              </h2>
              <p className="text-white/90 mb-8">
                For 15 years, we've been the trusted choice for Karelibaug's most distinguished families. Doctors, teachers, business owners - they all know that quality matters, and we deliver nothing less.
              </p>
              <ul className="space-y-3">
                {karelibaugReasons.map((reason, index) => (
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
                  <span className="text-6xl">{['🩺', '💕', '🎓', '🌹'][i-1]}</span>
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
              What Karelibaug Families Say
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
              Anniversary Packages for Karelibaug
            </h2>
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
              Questions from Karelibaug Residents
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
            Celebrate Your Karelibaug Love Story
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 300+ distinguished Karelibaug families who've trusted us
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

