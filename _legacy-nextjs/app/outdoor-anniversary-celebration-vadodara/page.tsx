import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Users, TreePine, Sun, Cloud, Leaf, Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Anniversary Celebration Vadodara | Garden & Open Air Venues',
  description: 'Celebrate your anniversary outdoors in Vadodara. Beautiful gardens, open-air venues, natural settings. Fresh air & freedom. Packages from ₹8,999. Call +91 7487888730.',
  keywords: 'outdoor anniversary celebration vadodara, garden anniversary party, open air anniversary venue, nature anniversary celebration',
  openGraph: {
    title: 'Outdoor Anniversary Celebration in Vadodara',
    description: 'Celebrate under the open sky. Gardens, lawns, and beautiful outdoor venues.',
    type: 'website',
  },
  alternates: {
    canonical: '/outdoor-anniversary-celebration-vadodara',
  },
};

const outdoorBenefits = [
  { benefit: "Fresh Air", description: "No stuffy halls — breathe easy while you celebrate" },
  { benefit: "Natural Light", description: "The best photos happen in natural outdoor lighting" },
  { benefit: "Space to Move", description: "Room for games, activities, and children to play" },
  { benefit: "Sunset Moments", description: "Nothing matches celebrating as the sun sets" },
  { benefit: "Nature's Décor", description: "Trees, flowers, and greenery add natural beauty" },
  { benefit: "Versatility", description: "From intimate picnics to grand garden parties" }
];

const outdoorVenueTypes = [
  {
    type: "Garden Lawns",
    capacity: "25-100 guests",
    bestFor: "Traditional anniversary gatherings",
    features: ["Manicured green lawns", "Natural shade", "Flexible setups", "Photography backdrops"]
  },
  {
    type: "Farmhouse Spaces",
    capacity: "30-150 guests",
    bestFor: "Relaxed, rustic celebrations",
    features: ["Country atmosphere", "Ample parking", "Night-sky views", "Bonfire options"]
  },
  {
    type: "Rooftop Gardens",
    capacity: "15-50 guests",
    bestFor: "City views with greenery",
    features: ["Urban panoramas", "Planted terraces", "Weather protection", "Evening ambiance"]
  },
  {
    type: "Poolside Venues",
    capacity: "20-60 guests",
    bestFor: "Summer celebrations",
    features: ["Water elements", "Deck seating", "Cool atmosphere", "Tropical vibes"]
  }
];

const packages = [
  {
    name: "Garden Charm",
    price: "₹8,999",
    duration: "3 hours",
    guests: "Up to 20 guests",
    includes: [
      "Garden lawn booking",
      "Natural décor setup",
      "Outdoor seating arrangement",
      "Tea/snacks service",
      "Anniversary cake",
      "Basic photography (10 photos)"
    ]
  },
  {
    name: "Nature's Embrace",
    price: "₹22,999",
    duration: "5 hours",
    guests: "Up to 50 guests",
    includes: [
      "Premium outdoor venue",
      "Garden-themed décor",
      "Welcome drinks + dinner buffet",
      "Designer outdoor cake",
      "Professional photography",
      "Fairy light decoration",
      "Outdoor sound system",
      "Event coordination"
    ],
    popular: true
  },
  {
    name: "Grand Outdoor",
    price: "₹44,999",
    duration: "8 hours",
    guests: "Up to 100 guests",
    includes: [
      "Exclusive outdoor venue",
      "Elaborate nature décor",
      "Complete catering service",
      "Photo + video coverage",
      "Live acoustic music",
      "Bonfire/fire pit (seasonal)",
      "Full event management",
      "Backup weather arrangement"
    ]
  }
];

const seasonalGuide = [
  { season: "October - February", rating: "Perfect", description: "Cool, pleasant weather ideal for outdoor celebrations" },
  { season: "March - April", rating: "Good", description: "Warm evenings; morning/evening events recommended" },
  { season: "May - June", rating: "Hot", description: "Evening-only events with cooling arrangements" },
  { season: "July - September", rating: "Monsoon", description: "Covered outdoor options available; backup plans needed" }
];

const outdoorDecorIdeas = [
  "Fairy lights strung through trees",
  "Flower arches and floral installations",
  "Rustic wooden furniture",
  "Lantern pathways",
  "Floating candles in water features",
  "Draped fabric canopies",
  "Potted plants and greenery",
  "Nature-inspired table settings",
  "Garden parasols for shade"
];

const outdoorActivities = [
  { activity: "Evening Sunset Photography", description: "Capture golden hour portraits in natural light" },
  { activity: "Garden Games", description: "Set up lawn games for guests of all ages" },
  { activity: "Bonfire Circle", description: "Gather around for stories and songs under the stars" },
  { activity: "Live Outdoor Concert", description: "Acoustic performances in the open air" },
  { activity: "Sky Lantern Release", description: "Release wishes into the evening sky together" }
];

const weatherBackup = {
  title: "Weather Backup Plan",
  points: [
    "Premium packages include tent/canopy backup",
    "Real-time weather monitoring",
    "Indoor venue option at same location",
    "Full refund policy for extreme weather",
    "Rescheduling flexibility"
  ]
};

const faqs = [
  {
    question: "What happens if it rains on our anniversary date?",
    answer: "We always have a backup plan. Premium packages include covered tent options at the same venue. We monitor weather 48 hours ahead and inform you of any concerns. You can also choose to reschedule at no extra cost."
  },
  {
    question: "Are outdoor venues available year-round?",
    answer: "Yes, but comfort varies by season. October to February is ideal. Summer events are best scheduled for evenings with cooling arrangements. Monsoon season requires covered outdoor or indoor backup options."
  },
  {
    question: "What about mosquitoes and insects?",
    answer: "We use professional-grade repellent systems and citronella arrangements in all outdoor setups. For evening events, we ensure proper pest control measures are in place."
  },
  {
    question: "Can we have an outdoor anniversary dinner for just two?",
    answer: "Absolutely! We offer intimate garden setups for couples — a private table under the stars with candles, flowers, and a romantic dinner service."
  },
  {
    question: "Is outdoor sound/music allowed?",
    answer: "Yes, within municipal regulations. We ensure appropriate volume levels and timings. For late-night events, we use directional speakers to minimize disturbance."
  },
  {
    question: "What about elderly guests in outdoor settings?",
    answer: "We arrange comfortable seating, shade, and easy access. Covered areas are available for those who need protection from sun or breeze. We can also arrange fans/coolers for summer events."
  }
];

export default function OutdoorAnniversaryCelebrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-emerald-600 to-green-800 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <TreePine className="w-5 h-5 text-green-200" />
              <span className="text-sm font-medium text-green-200">Open Air Celebrations</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Outdoor Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-green-200 mb-4 max-w-3xl mx-auto">
              Where Nature Becomes Your Venue
            </p>
            <p className="text-lg text-green-100/80 mb-8 max-w-2xl mx-auto">
              Celebrate your love under the open sky. Beautiful gardens, lush lawns, and nature's embrace create the perfect backdrop for your anniversary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-green-400 text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-green-300 transition-all"
              >
                <Phone className="w-5 h-5" />
                Book Outdoor Venue
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to plan an outdoor anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Celebrate Outdoors?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            There's something magical about celebrating in nature
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {outdoorBenefits.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <Leaf className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-lg text-green-800 mb-2">{item.benefit}</h3>
                <p className="text-green-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Outdoor Venue Options
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {outdoorVenueTypes.map((venue, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-xl text-green-800">{venue.type}</h3>
                  <span className="bg-green-200 text-green-700 text-xs px-3 py-1 rounded-full">{venue.capacity}</span>
                </div>
                <p className="text-green-700 mb-4">Best for: {venue.bestFor}</p>
                <ul className="space-y-2">
                  {venue.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-green-700 text-sm">
                      <TreePine className="w-4 h-4 text-green-500" />
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
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Outdoor Celebration Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Fresh air and beautiful memories
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-green-600 to-emerald-700 text-white ring-2 ring-green-300'
                    : 'bg-white border border-green-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    BEST VALUE
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-green-800'}`}>
                  {pkg.name}
                </h3>
                <div className={`flex items-center gap-4 mb-4 text-sm ${pkg.popular ? 'text-green-200' : 'text-green-600'}`}>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {pkg.guests}
                  </span>
                </div>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-green-700'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Leaf className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={pkg.popular ? 'text-green-100' : 'text-green-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I'm interested in the "${pkg.name}" outdoor anniversary package`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-green-700 hover:bg-green-50'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <Sun className="w-10 h-10 mx-auto mb-4 text-green-600" />
            Best Time for Outdoor Celebrations
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {seasonalGuide.map((item, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 flex flex-col md:flex-row gap-4 items-center border border-green-100">
                <div className="md:w-1/4">
                  <h3 className="font-bold text-green-800">{item.season}</h3>
                </div>
                <div className="md:w-1/4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.rating === 'Perfect' ? 'bg-green-200 text-green-800' :
                    item.rating === 'Good' ? 'bg-yellow-200 text-yellow-800' :
                    item.rating === 'Hot' ? 'bg-orange-200 text-orange-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    {item.rating}
                  </span>
                </div>
                <div className="md:w-1/2">
                  <p className="text-green-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Décor Ideas */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Outdoor Décor Ideas
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {outdoorDecorIdeas.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 text-green-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Outdoor Anniversary Activities
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {outdoorActivities.map((item, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 flex flex-col md:flex-row gap-4 border border-green-100">
                <div className="md:w-1/3">
                  <h3 className="font-bold text-lg text-green-800">{item.activity}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-green-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Backup */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">{weatherBackup.title}</h2>
            </div>
            <ul className="space-y-3">
              {weatherBackup.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-green-700">
                  <Wind className="w-5 h-5 text-green-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Outdoor Celebration FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-lg mb-3 text-green-800">{faq.question}</h3>
                <p className="text-green-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TreePine className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Celebrate in Nature's Embrace
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Fresh air, beautiful surroundings, and the people you love. Let us create an outdoor anniversary celebration you'll treasure forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to plan an outdoor anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book Outdoor Venue
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
