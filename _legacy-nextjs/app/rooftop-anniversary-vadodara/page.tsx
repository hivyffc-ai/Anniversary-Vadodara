import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Cloud, Moon, Sun, Wind, Umbrella, Camera, Music, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rooftop Anniversary Celebration Vadodara | Open-Air Romantic Venues',
  description: 'Celebrate your anniversary under the stars at premium rooftop venues in Vadodara. Stunning city views, open-air dining & magical evening setups. Book now: +91 7487888730.',
  keywords: 'rooftop anniversary vadodara, open air anniversary celebration, terrace anniversary dinner, skyline dining vadodara',
  openGraph: {
    title: 'Rooftop Anniversary Celebration in Vadodara',
    description: 'Dine under the stars with panoramic city views. The most romantic rooftop celebration in Vadodara.',
    type: 'website',
  },
  alternates: {
    canonical: '/rooftop-anniversary-vadodara',
  },
};

const rooftopExperiences = [
  {
    name: "Sunset Soirée",
    timing: "5:30 PM - 8:00 PM",
    description: "Watch the sky transform from blue to orange to pink while you dine",
    highlights: ["Golden hour photography", "Warm lighting transition", "Cooler temperatures"],
    idealFor: "Couples who appreciate nature's beauty"
  },
  {
    name: "Starlight Dinner",
    timing: "7:30 PM - 10:30 PM",
    description: "Dine under a canopy of stars with the city lights twinkling below",
    highlights: ["Star identification session", "Fairy light ambiance", "Night photography"],
    idealFor: "Romantics and dreamers",
    popular: true
  },
  {
    name: "Midnight Magic",
    timing: "9:30 PM - 12:30 AM",
    description: "The city quiets down, but your celebration is just beginning",
    highlights: ["Ultimate privacy", "Quiet intimacy", "Special late-night menu"],
    idealFor: "Night owls celebrating in style"
  }
];

const rooftopPackages = [
  {
    name: "Sky High Romance",
    price: "₹4,999",
    includes: [
      "Private rooftop corner",
      "Basic fairy light setup",
      "Candlelit dinner for 2",
      "2-course meal",
      "Background music",
      "2-hour slot"
    ]
  },
  {
    name: "Stars Aligned",
    price: "₹8,999",
    includes: [
      "Semi-private rooftop section",
      "Floral & fairy light decoration",
      "Welcome drinks",
      "3-course gourmet dinner",
      "Live acoustic music (45 mins)",
      "Anniversary cake",
      "Photo session (10 shots)",
      "3-hour slot"
    ],
    popular: true
  },
  {
    name: "Above the World",
    price: "₹14,999",
    includes: [
      "Full rooftop exclusivity",
      "Premium decoration setup",
      "Petal pathway + canopy",
      "Welcome champagne",
      "5-course chef's special",
      "Live music throughout",
      "Designer cake",
      "Professional photo + video",
      "Surprise elements",
      "4-hour slot",
      "Weather backup assured"
    ]
  }
];

const rooftopFeatures = [
  { feature: "Panoramic City Views", description: "360° views of Vadodara's skyline and landmarks" },
  { feature: "Open Sky Canopy", description: "Transparent canopy for stargazing without weather worry" },
  { feature: "Climate Control", description: "Misting fans for summer, heaters for winter evenings" },
  { feature: "Sound System", description: "Premium speakers for your personal playlist or live music" },
  { feature: "Photography Spots", description: "Multiple Instagram-worthy corners and backdrops" },
  { feature: "Private Elevator Access", description: "VIP entrance straight to your celebration" }
];

const weatherPolicy = {
  clear: "Full rooftop experience as planned",
  lightRain: "Covered section with rain sound ambiance",
  heavyRain: "Move to our indoor premium space with same decoration",
  extreme: "Reschedule for free to any date within 30 days"
};

const seasonalTips = [
  { season: "Winter (Nov-Feb)", tip: "Perfect rooftop weather! Book evening slots for comfortable temperatures around 18-22°C", recommended: true },
  { season: "Summer (Mar-Jun)", tip: "Opt for sunset or late night slots. We provide misting fans and cool beverages", recommended: false },
  { season: "Monsoon (Jul-Sep)", tip: "Our covered section lets you enjoy rain ambiance safely. Magical with the right mood!", recommended: false },
  { season: "Post-Monsoon (Oct)", tip: "Clear skies, mild weather — another excellent time for rooftop celebrations", recommended: true }
];

const faqs = [
  {
    question: "What happens if it rains on our rooftop anniversary?",
    answer: "We have a comprehensive weather policy. Light showers? We have a covered section with the same romantic setup. Heavy rain? We move to our equally beautiful indoor space at no extra charge. Extreme weather? Free rescheduling to any date within 30 days."
  },
  {
    question: "How private is the rooftop celebration?",
    answer: "It depends on your package. 'Sky High Romance' gives you a private corner. 'Stars Aligned' provides a semi-private section. 'Above the World' gives you the entire rooftop exclusively — no other guests, just you two."
  },
  {
    question: "Is the rooftop safe and accessible?",
    answer: "Absolutely. Our rooftop has proper railings, non-slip flooring, and adequate lighting. We have elevator access for convenience. For guests with mobility concerns, we ensure comfortable arrangements."
  },
  {
    question: "Can we bring our own decorations or cake?",
    answer: "You're welcome to bring personal items with sentimental value. For decorations and cake, we recommend using our services as we're familiar with the space and can set things up optimally. Outside cake is allowed with a small service charge."
  },
  {
    question: "What's the best time of year for rooftop anniversary?",
    answer: "October to February offers the best weather — clear skies, comfortable temperatures, and stunning stargazing conditions. However, monsoon rooftop dinners have their own magic if you enjoy rain ambiance!"
  },
  {
    question: "Can we extend our time on the rooftop?",
    answer: "Yes, based on availability. Extensions are charged at ₹1,500/hour for basic packages and ₹2,500/hour for premium packages. Let us know in advance if you anticipate needing more time."
  }
];

export default function RooftopAnniversaryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-800 text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-32 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-16 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-40 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-medium">Celebrate Under the Stars</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Rooftop Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 mb-4 max-w-3xl mx-auto">
              Where the City Lights Meet the Starlight
            </p>
            <p className="text-lg text-indigo-300 mb-8 max-w-2xl mx-auto">
              Rise above the ordinary. Celebrate your love with panoramic views, open skies, and an atmosphere that takes your breath away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Book Rooftop Experience
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to book a rooftop anniversary celebration in Vadodara"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rooftop Experiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Sky Experience
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different times, different vibes — all equally magical
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {rooftopExperiences.map((exp, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-6 ${
                  exp.popular 
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white' 
                    : 'bg-indigo-50 border border-indigo-100'
                }`}
              >
                {exp.popular && (
                  <div className="inline-block bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST ROMANTIC
                  </div>
                )}
                <div className="flex items-center gap-2 mb-3">
                  {index === 0 ? <Sun className={`w-6 h-6 ${exp.popular ? 'text-yellow-300' : 'text-orange-500'}`} /> : 
                   index === 1 ? <Moon className={`w-6 h-6 ${exp.popular ? 'text-yellow-200' : 'text-indigo-500'}`} /> :
                   <Star className={`w-6 h-6 ${exp.popular ? 'text-yellow-300' : 'text-indigo-500'}`} />}
                  <h3 className={`text-xl font-bold ${exp.popular ? 'text-white' : 'text-indigo-900'}`}>
                    {exp.name}
                  </h3>
                </div>
                <p className={`text-sm mb-2 ${exp.popular ? 'text-indigo-200' : 'text-indigo-600'}`}>
                  {exp.timing}
                </p>
                <p className={`mb-4 ${exp.popular ? 'text-indigo-100' : 'text-indigo-700'}`}>
                  {exp.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Star className={`w-4 h-4 ${exp.popular ? 'text-indigo-300' : 'text-indigo-400'}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-sm italic ${exp.popular ? 'text-indigo-200' : 'text-indigo-600'}`}>
                  Ideal for: {exp.idealFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Rooftop Anniversary Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From starlit corners to exclusive sky-high takeovers
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rooftopPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-indigo-700 to-purple-700 text-white ring-2 ring-indigo-300'
                    : 'bg-white border border-indigo-100'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    BEST VALUE
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${pkg.popular ? 'text-white' : 'text-indigo-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-indigo-600'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-indigo-300' : 'text-indigo-400'}`} />
                      <span className={pkg.popular ? 'text-indigo-100' : 'text-indigo-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I'm interested in the "${pkg.name}" rooftop package`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-indigo-700 hover:bg-indigo-50'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  Book This Experience
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooftop Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Rooftop Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rooftopFeatures.map((item, index) => (
              <div key={index} className="bg-indigo-50 rounded-xl p-6">
                <h3 className="font-bold text-indigo-900 mb-2">{item.feature}</h3>
                <p className="text-indigo-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Policy */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <Cloud className="w-10 h-10 inline-block mr-2 -mt-1" />
              Weather? We've Got You Covered
            </h2>
            <p className="text-indigo-200 text-center mb-12">
              Vadodara weather can be unpredictable. Our celebration isn't.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(weatherPolicy).map(([condition, policy], index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    {condition === 'clear' && <Sun className="w-6 h-6 text-yellow-300" />}
                    {condition === 'lightRain' && <Cloud className="w-6 h-6 text-blue-300" />}
                    {condition === 'heavyRain' && <Umbrella className="w-6 h-6 text-blue-400" />}
                    {condition === 'extreme' && <Wind className="w-6 h-6 text-gray-300" />}
                    <h3 className="font-bold capitalize">
                      {condition.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                  </div>
                  <p className="text-indigo-200">{policy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Best Time for Rooftop Romance
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {seasonalTips.map((item, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 ${
                  item.recommended ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold">{item.season}</h3>
                    {item.recommended && (
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">RECOMMENDED</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Rooftop Celebration FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-indigo-900">{faq.question}</h3>
                <p className="text-indigo-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Your Love to New Heights
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              There's something magical about celebrating above the world. Book your rooftop anniversary and create memories that touch the sky.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I'm interested in a rooftop anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
