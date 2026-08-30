import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Users, Lock, Shield, Eye, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Anniversary Celebration Vadodara | Exclusive Private Venues',
  description: 'Book a completely private anniversary celebration in Vadodara. No strangers, no interruptions — just you and your loved ones. Exclusive venues starting ₹9,999. Call +91 7487888730.',
  keywords: 'private anniversary celebration vadodara, exclusive anniversary venue, private party space vadodara, intimate anniversary celebration',
  openGraph: {
    title: 'Private Anniversary Celebration in Vadodara',
    description: 'Complete privacy for your special day. Exclusive venues with no other guests.',
    type: 'website',
  },
  alternates: {
    canonical: '/private-anniversary-celebration-vadodara',
  },
};

const privacyBenefits = [
  { benefit: "No Strangers", description: "The entire venue is yours — no other parties or diners around" },
  { benefit: "Speak Freely", description: "Share speeches, inside jokes, and emotional moments without feeling watched" },
  { benefit: "Control the Music", description: "Play your songs, at your volume, on your schedule" },
  { benefit: "Move Freely", description: "Dance, play games, or just relax without self-consciousness" },
  { benefit: "Photo Freedom", description: "Take pictures anywhere without worrying about background people" },
  { benefit: "Kids Welcome", description: "Let children run around without disturbing other guests" }
];

const privateVenueTypes = [
  {
    type: "Private Dining Room",
    capacity: "2-12 guests",
    bestFor: "Intimate couple dinners or close family",
    features: ["Dedicated service staff", "Customizable décor", "Private entrance option", "Sound isolation"]
  },
  {
    type: "Exclusive Party Hall",
    capacity: "20-50 guests",
    bestFor: "Extended family gatherings",
    features: ["Full event management", "Audio-visual setup", "Catering kitchen access", "Multiple seating arrangements"]
  },
  {
    type: "Premium Private Terrace",
    capacity: "15-40 guests",
    bestFor: "Open-air celebrations with privacy",
    features: ["Covered/open options", "City views", "Weather protection available", "Outdoor décor possibilities"]
  },
  {
    type: "Luxury Private Suite",
    capacity: "2-8 guests",
    bestFor: "Ultra-intimate celebrations",
    features: ["Premium furnishings", "Personal butler", "Custom ambiance control", "Extended hours available"]
  }
];

const packages = [
  {
    name: "Private Intimate",
    price: "₹9,999",
    duration: "3 hours",
    guests: "Up to 8 guests",
    includes: [
      "Private dining room booking",
      "Basic décor setup",
      "3-course meal",
      "Anniversary cake",
      "Background music",
      "Dedicated service staff"
    ]
  },
  {
    name: "Private Premium",
    price: "₹24,999",
    duration: "5 hours",
    guests: "Up to 30 guests",
    includes: [
      "Exclusive party area",
      "Full anniversary décor",
      "Welcome drinks + buffet dinner",
      "Designer cake",
      "DJ/music system access",
      "Professional photography",
      "Event coordinator"
    ],
    popular: true
  },
  {
    name: "Private Luxury",
    price: "₹49,999",
    duration: "8 hours",
    guests: "Up to 50 guests",
    includes: [
      "Premium private venue",
      "Luxury décor + theme setup",
      "Complete catering service",
      "Photo + video coverage",
      "Live entertainment",
      "Valet parking",
      "Full event management",
      "Premium gift hampers"
    ]
  }
];

const privacyGuarantees = [
  "No other events in the same venue during your booking",
  "Dedicated entrance for your guests",
  "Staff assigned exclusively to your celebration",
  "No walk-in access to your space",
  "Sound barriers for complete privacy",
  "Option to restrict photography in common areas"
];

const idealFor = [
  { scenario: "Second Marriage Anniversary", why: "When you want to celebrate without public attention" },
  { scenario: "Large Age Gap Couples", why: "Celebrate your love without judgmental onlookers" },
  { scenario: "Inter-Religion Celebrations", why: "Blend traditions freely in a private setting" },
  { scenario: "Surprise Parties", why: "Easier to keep the surprise without public visibility" },
  { scenario: "Emotional Milestones", why: "Like 50th anniversaries where tears and emotions flow freely" },
  { scenario: "Shy Couples", why: "Celebrate authentically without performance anxiety" }
];

const addOnServices = [
  { service: "Private Chef Experience", price: "₹5,000", description: "Chef cooks and serves at your table" },
  { service: "Extended Hours", price: "₹3,000/hr", description: "Keep celebrating beyond package time" },
  { service: "Live Music (Duo)", price: "₹7,500", description: "Private performance just for you" },
  { service: "Photo Session", price: "₹4,500", description: "30-minute professional couple shoot" },
  { service: "Memory Video", price: "₹6,000", description: "Same-day edited highlights reel" }
];

const faqs = [
  {
    question: "What does 'completely private' mean exactly?",
    answer: "It means the space is exclusively yours during your booking. No other parties, no other diners, no random hotel guests walking through. The venue, décor, and staff are dedicated solely to your celebration."
  },
  {
    question: "Can we bring our own decorations?",
    answer: "Absolutely! You're welcome to add personal touches. We can also incorporate your items into our professional décor setup for a cohesive look."
  },
  {
    question: "Is outside food allowed?",
    answer: "For larger packages, we generally prefer to handle all catering for quality control. However, you may bring special items like a family recipe or dietary-specific food. Please discuss with us."
  },
  {
    question: "Can we play our own playlist?",
    answer: "Yes! We have audio systems where you can connect your phone or laptop. Play your wedding songs, your favorite playlist, or anything that makes the evening special."
  },
  {
    question: "What if we need the space for longer?",
    answer: "We offer extended hours at ₹3,000 per hour, subject to availability. Let us know in advance, and we'll do our best to accommodate."
  },
  {
    question: "Are children allowed in private venues?",
    answer: "Definitely! Private venues are perfect for families with children as kids can move around freely without disturbing anyone. We can arrange kid-friendly food and activities too."
  }
];

export default function PrivateAnniversaryCelebrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Lock className="w-5 h-5 text-slate-300" />
              <span className="text-sm font-medium text-slate-300">Exclusive Privacy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Private Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
              Your Celebration. Your Rules. Your Privacy.
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Not everyone wants an audience. Some moments are meant to be shared only with those who matter most. We provide completely private spaces for your anniversary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all"
              >
                <Phone className="w-5 h-5" />
                Book Private Venue
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want a completely private anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Privacy Matters */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Private?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Privacy isn't about hiding — it's about freedom
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {privacyBenefits.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <Lock className="w-8 h-8 text-slate-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-800 mb-2">{item.benefit}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Private Venue Options
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {privateVenueTypes.map((venue, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-xl text-slate-800">{venue.type}</h3>
                  <span className="bg-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full">{venue.capacity}</span>
                </div>
                <p className="text-slate-600 mb-4">Best for: {venue.bestFor}</p>
                <ul className="space-y-2">
                  {venue.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                      <Shield className="w-4 h-4 text-slate-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Private Celebration Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete privacy at every budget level
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-slate-800 to-gray-900 text-white ring-2 ring-slate-500'
                    : 'bg-white border border-slate-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-slate-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST BOOKED
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-800'}`}>
                  {pkg.name}
                </h3>
                <div className={`flex items-center gap-4 mb-4 text-sm ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {pkg.guests}
                  </span>
                </div>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-slate-700'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Lock className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`} />
                      <span className={pkg.popular ? 'text-slate-200' : 'text-slate-600'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I'm interested in the "${pkg.name}" private celebration package`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-slate-800 hover:bg-slate-100'
                      : 'bg-slate-800 text-white hover:bg-slate-900'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Guarantees */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Privacy Guarantee
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {privacyGuarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <Shield className="w-5 h-5 text-slate-300 flex-shrink-0 mt-1" />
                  <span className="text-slate-200">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Private Celebrations Are Ideal For
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {idealFor.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 flex flex-col md:flex-row gap-4 border border-slate-100">
                <div className="md:w-1/3">
                  <h3 className="font-bold text-lg text-slate-800">{item.scenario}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-600">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Enhance Your Private Event
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-slate-800">{item.service}</h3>
                  <span className="text-slate-600 font-semibold">{item.price}</span>
                </div>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Private Celebration FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-lg mb-3 text-slate-800">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="w-16 h-16 text-slate-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Private Celebration Awaits
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Some love stories are meant to be celebrated privately. Book an exclusive venue where the only audience is the people who truly matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-900 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to book a private anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book Private Venue
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
