import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, MapPin, Clock, Users, Utensils, Music, Camera, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Anniversary Places in Vadodara | Top Anniversary Venues 2024',
  description: 'Discover the best places to celebrate your anniversary in Vadodara. Top venues, restaurants, rooftops & romantic spots. Expert recommendations. Call +91 7487888730.',
  keywords: 'best anniversary places vadodara, top anniversary venues, best romantic places vadodara, anniversary celebration spots',
  openGraph: {
    title: 'Best Anniversary Places in Vadodara',
    description: 'Curated list of the best venues and spots for anniversary celebrations in Vadodara.',
    type: 'website',
  },
  alternates: {
    canonical: '/best-anniversary-places-vadodara',
  },
};

const venueCategories = [
  {
    category: "Romantic Restaurants",
    icon: "🍽️",
    description: "Intimate dining with great ambiance",
    count: "15+ options"
  },
  {
    category: "Rooftop Venues",
    icon: "🌆",
    description: "City views under the stars",
    count: "8+ options"
  },
  {
    category: "Private Event Spaces",
    icon: "🎉",
    description: "Exclusive venues for larger celebrations",
    count: "10+ options"
  },
  {
    category: "Garden & Outdoor",
    icon: "🌳",
    description: "Natural settings for celebrations",
    count: "12+ options"
  },
  {
    category: "Luxury Hotels",
    icon: "⭐",
    description: "Premium experiences with full service",
    count: "6+ options"
  },
  {
    category: "Unique Experiences",
    icon: "✨",
    description: "Memorable non-traditional spots",
    count: "5+ options"
  }
];

const topPicks = [
  {
    name: "Friends Factory Anniversary Venue",
    type: "Private Celebration Space",
    highlight: "Dedicated anniversary setups",
    location: "Multiple Vadodara locations",
    priceRange: "₹2,999 - ₹49,999",
    bestFor: "Complete anniversary experiences with décor, food, and entertainment",
    features: ["Private spaces", "Custom décor", "Professional photography", "Live music options"],
    rating: 4.9
  },
  {
    name: "Rooftop Garden Terrace",
    type: "Open-Air Venue",
    highlight: "Starlit celebrations",
    location: "Alkapuri area",
    priceRange: "₹5,000 - ₹25,000",
    bestFor: "Evening celebrations with city views",
    features: ["Panoramic views", "Weather backup", "Catering available", "Decoration options"],
    rating: 4.7
  },
  {
    name: "Lakeside Garden Venue",
    type: "Outdoor Setting",
    highlight: "Natural beauty",
    location: "Near Ajwa Road",
    priceRange: "₹8,000 - ₹40,000",
    bestFor: "Large family gatherings in nature",
    features: ["Lake views", "Expansive lawns", "Photography spots", "Parking space"],
    rating: 4.6
  },
  {
    name: "Heritage Restaurant",
    type: "Fine Dining",
    highlight: "Elegant atmosphere",
    location: "Old City area",
    priceRange: "₹3,000 - ₹8,000 (dinner for 2)",
    bestFor: "Intimate couple dinners",
    features: ["Historic décor", "Private corners", "Multi-cuisine", "Anniversary specials"],
    rating: 4.5
  }
];

const byOccasion = [
  {
    occasion: "First Anniversary",
    recommendation: "Intimate candlelight dinner at a romantic restaurant",
    budget: "₹2,000 - ₹5,000"
  },
  {
    occasion: "5th Anniversary",
    recommendation: "Private garden party with close friends and family",
    budget: "₹15,000 - ₹30,000"
  },
  {
    occasion: "10th Anniversary",
    recommendation: "Rooftop celebration with live music",
    budget: "₹25,000 - ₹50,000"
  },
  {
    occasion: "25th Silver Jubilee",
    recommendation: "Grand celebration at premium venue",
    budget: "₹50,000 - ₹1,50,000"
  },
  {
    occasion: "50th Golden Jubilee",
    recommendation: "Legacy celebration with complete event management",
    budget: "₹1,00,000+"
  }
];

const whatToLookFor = [
  { factor: "Privacy Options", why: "Romance needs some exclusivity from other diners/guests" },
  { factor: "Decoration Policy", why: "Some venues allow custom décor, others don't" },
  { factor: "Food Quality", why: "Anniversary celebration needs great food, not just ambiance" },
  { factor: "Photography Friendly", why: "Good lighting and backgrounds for memorable photos" },
  { factor: "Music/Entertainment", why: "Can you play your own music or have live performances?" },
  { factor: "Parking & Access", why: "Especially important for elderly guests or larger groups" }
];

const byBudget = [
  {
    budget: "Under ₹5,000",
    options: [
      "Decorated café corner with cake",
      "Home setup with professional décor",
      "Budget-friendly restaurant with ambiance"
    ]
  },
  {
    budget: "₹5,000 - ₹15,000",
    options: [
      "Private dining room at restaurant",
      "Semi-private rooftop setup",
      "Small garden party setup"
    ]
  },
  {
    budget: "₹15,000 - ₹40,000",
    options: [
      "Exclusive venue booking",
      "Complete rooftop experience",
      "Boutique hotel celebration"
    ]
  },
  {
    budget: "₹40,000+",
    options: [
      "Luxury venue with full service",
      "Premium hotel celebration package",
      "Destination experience within Gujarat"
    ]
  }
];

const avoidPlaces = [
  { avoid: "Food Court Restaurants", reason: "Too noisy, no privacy, difficult to decorate" },
  { avoid: "Busy Mall Eateries", reason: "Interruptions, crowded, not romantic" },
  { avoid: "Random Parks", reason: "No facilities, security concerns, weather issues" },
  { avoid: "Budget Hotels", reason: "Poor service, limited options, often disappointing" },
  { avoid: "New/Untested Venues", reason: "Unpredictable quality for your special day" }
];

const seasonalConsiderations = [
  { season: "October - February", tip: "Best weather; outdoor venues perfect. Book early — peak season." },
  { season: "March - April", tip: "Warm evenings; choose air-conditioned or evening outdoor options." },
  { season: "May - June", tip: "Hot season; indoor or well-cooled venues only. Fewer crowds." },
  { season: "July - September", tip: "Monsoon; indoor venues recommended. Beautiful rain views from covered rooftops." }
];

const faqs = [
  {
    question: "What's the best place for a first anniversary?",
    answer: "For first anniversaries, intimate settings work best — a candlelight dinner at a romantic restaurant or a private decorated setup at a café. Budget ₹2,000-5,000. The focus should be on togetherness rather than grand scale."
  },
  {
    question: "Where can I have a private anniversary celebration?",
    answer: "Friends Factory offers completely private spaces for anniversary celebrations. Other options include private dining rooms at select restaurants, exclusive rooftop bookings, or garden venue reservations."
  },
  {
    question: "What's the best anniversary venue for a large family?",
    answer: "For 50+ guests, consider garden venues, farmhouses, or event halls with catering options. Budget ₹30,000-1,00,000 depending on scale. Book 3-4 weeks in advance for weekend dates."
  },
  {
    question: "Are there good anniversary venues near [area]?",
    answer: "We have venue options across Vadodara — Alkapuri, Akota, Fatehgunj, Manjalpur, Ajwa Road, and other areas. Contact us with your preferred location, and we'll recommend the best nearby options."
  },
  {
    question: "Can you help me choose the right venue?",
    answer: "Absolutely! That's our specialty. Tell us your budget, guest count, vibe you want, and any specific requirements. We'll recommend 2-3 perfect options and can even arrange site visits."
  }
];

export default function BestAnniversaryPlacesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-700 via-purple-600 to-violet-800 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-violet-200" />
              <span className="text-sm font-medium text-violet-200">Venue Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Anniversary Places in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-violet-200 mb-4 max-w-3xl mx-auto">
              Find Your Perfect Celebration Spot
            </p>
            <p className="text-lg text-violet-100/80 mb-8 max-w-2xl mx-auto">
              Your comprehensive guide to the best venues, restaurants, and spaces for anniversary celebrations in Vadodara — for every budget and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 px-8 py-4 rounded-full font-semibold hover:bg-violet-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Get Recommendations
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I'm looking for the best anniversary place in Vadodara"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Categories */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Types of Anniversary Venues
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {venueCategories.map((cat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-violet-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-bold text-lg text-violet-800 mb-2">{cat.category}</h3>
                <p className="text-violet-600 text-sm mb-2">{cat.description}</p>
                <span className="text-violet-500 text-sm">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Star className="w-10 h-10 mx-auto mb-4 text-violet-600" />
            Our Top Recommendations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Venues we personally recommend for anniversary celebrations
          </p>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {topPicks.map((venue, index) => (
              <div key={index} className="bg-violet-50 rounded-2xl p-8 border border-violet-100">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-xl text-violet-800">{venue.name}</h3>
                      <div className="flex items-center gap-1 bg-violet-200 px-2 py-0.5 rounded text-violet-700 text-sm">
                        <Star className="w-3 h-3 fill-current" />
                        {venue.rating}
                      </div>
                    </div>
                    <p className="text-violet-600 text-sm mb-3">{venue.type} • {venue.location}</p>
                    <p className="text-violet-700 mb-4">{venue.bestFor}</p>
                    <div className="flex flex-wrap gap-2">
                      {venue.features.map((feature, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-violet-600 text-sm border border-violet-200">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className="text-violet-600 font-semibold">{venue.priceRange}</div>
                    <p className="text-violet-500 text-sm italic">{venue.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Occasion */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Best Venues by Anniversary Year
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {byOccasion.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-violet-100 flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-1/4">
                  <h3 className="font-bold text-violet-800">{item.occasion}</h3>
                </div>
                <div className="md:w-2/4">
                  <p className="text-violet-700">{item.recommendation}</p>
                </div>
                <div className="md:w-1/4 md:text-right">
                  <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-sm">{item.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What to Look For in a Venue
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatToLookFor.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl text-white mb-2">{item.factor}</h3>
                <p className="text-violet-200">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Budget */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Venues by Budget
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {byBudget.map((item, index) => (
              <div key={index} className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                <h3 className="font-bold text-lg text-violet-700 mb-4">{item.budget}</h3>
                <ul className="space-y-2">
                  {item.options.map((option, i) => (
                    <li key={i} className="flex items-start gap-2 text-violet-600 text-sm">
                      <Sparkles className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places to Avoid */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Places to Avoid for Anniversaries
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {avoidPlaces.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-start gap-4 border border-red-100">
                <div className="text-red-500 text-xl">✗</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.avoid}</h3>
                  <p className="text-gray-600 text-sm">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Seasonal Venue Tips
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {seasonalConsiderations.map((item, index) => (
              <div key={index} className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                <h3 className="font-bold text-violet-800 mb-2">{item.season}</h3>
                <p className="text-violet-700">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Venue Selection FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-violet-100">
                <h3 className="font-bold text-lg mb-3 text-violet-800">{faq.question}</h3>
                <p className="text-violet-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-16 h-16 text-violet-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let Us Find Your Perfect Venue
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Not sure which place is right for you? Tell us your requirements, and we'll recommend the best options — or handle everything through our complete celebration packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I need help finding the best anniversary venue in Vadodara"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Get Venue Suggestions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
