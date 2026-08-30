import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Sparkles, Flame, Music, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Romantic Anniversary Setup Vadodara | Surprise Decoration Service',
  description: 'Get a beautiful romantic anniversary setup in Vadodara. Balloons, candles, flowers, fairy lights & personalized décor. Home or venue setups from ₹1,999. Call +91 7487888730.',
  keywords: 'romantic anniversary setup vadodara, anniversary decoration, surprise setup for anniversary, romantic room decoration',
  openGraph: {
    title: 'Romantic Anniversary Setup in Vadodara',
    description: 'Transform any space into a romantic haven. Surprise setups that make hearts melt.',
    type: 'website',
  },
  alternates: {
    canonical: '/romantic-anniversary-setup-vadodara',
  },
};

const setupTypes = [
  {
    type: "Bedroom Romantic Setup",
    bestFor: "Intimate couples celebration",
    elements: ["Rose petals on bed", "Fairy light canopy", "Balloon hearts", "Scented candles", "Romantic playlist setup"],
    price: "From ₹1,999"
  },
  {
    type: "Living Room Transform",
    bestFor: "Home anniversary dinner",
    elements: ["Balloon arch/wall", "Floor cushion seating", "Candlelit ambiance", "Photo display", "Dinner table setup"],
    price: "From ₹3,499"
  },
  {
    type: "Terrace/Balcony Setup",
    bestFor: "Open-air romance",
    elements: ["Fairy light ceiling", "Floor seating arrangement", "Lantern décor", "Stargazing setup", "Cushions & rugs"],
    price: "From ₹4,999"
  },
  {
    type: "Venue Setup",
    bestFor: "Professional celebrations",
    elements: ["Full area décor", "Stage/focal point", "Themed elements", "Photo booth area", "Guest seating"],
    price: "From ₹9,999"
  }
];

const packages = [
  {
    name: "Simple Romance",
    price: "₹1,999",
    includes: [
      "Heart balloon arrangement",
      "Rose petals spread",
      "10 LED candles",
      "Love banner",
      "Basic fairy lights",
      "Setup & cleanup"
    ]
  },
  {
    name: "Dreamy Delight",
    price: "₹3,999",
    includes: [
      "Balloon arch/heart wall",
      "Premium rose petals",
      "20+ candles arrangement",
      "Fairy light curtain",
      "Personalized photo display",
      "Anniversary banner",
      "Flower vase arrangements",
      "Setup & cleanup"
    ],
    popular: true
  },
  {
    name: "Ultimate Romance",
    price: "₹7,999",
    includes: [
      "Complete room transformation",
      "Premium balloon installation",
      "Fresh flower arrangements",
      "Extensive fairy lights",
      "Memory photo wall",
      "Scented candle setting",
      "Romantic playlist setup",
      "Add-on: Breakfast in bed option",
      "Setup & cleanup"
    ]
  }
];

const decorElements = {
  balloons: ["Heart-shaped foil balloons", "Balloon arches", "Balloon bouquets", "Ceiling balloon clouds", "LED balloons"],
  lighting: ["Fairy light curtains", "LED candles", "String light ceiling", "Lanterns", "Neon signs"],
  flowers: ["Rose petals", "Fresh flower arrangements", "Flower backdrops", "Flower letters", "Garlands"],
  personal: ["Photo displays", "Custom banners", "Memory boards", "Love letters display", "Timeline photos"]
};

const romanticTouches = [
  { touch: "Scented Candles", description: "Vanilla, rose, or lavender fragrances to set the mood" },
  { touch: "Music Setup", description: "Bluetooth speaker with your love songs playlist ready" },
  { touch: "Champagne/Mocktail", description: "Chilled beverages waiting for your toast" },
  { touch: "Love Notes", description: "Hidden notes around the room for discovery" },
  { touch: "Memory Photo Wall", description: "Your journey together displayed beautifully" },
  { touch: "Breakfast Setup", description: "Morning-after romantic breakfast arranged" }
];

const surpriseProcess = [
  { step: 1, title: "Share Your Vision", description: "Tell us about your partner, preferences, and the space" },
  { step: 2, title: "Plan the Distraction", description: "We help you keep your partner away during setup" },
  { step: 3, title: "We Set Up", description: "Our team transforms the space in 2-3 hours" },
  { step: 4, title: "Reveal & Enjoy", description: "Bring your partner in for the magical reveal" },
  { step: 5, title: "We Clean Up", description: "Next day cleanup included in all packages" }
];

const locationOptions = [
  { location: "Your Home", description: "Bedroom, living room, or terrace", additionalCost: "Included" },
  { location: "Hotel Room", description: "We coordinate with hotel staff", additionalCost: "+₹500" },
  { location: "Outdoor Space", description: "Gardens, rooftops (weather permitting)", additionalCost: "+₹1,000" },
  { location: "Our Venue", description: "Private romantic space booking", additionalCost: "Venue fee" }
];

const addOns = [
  { addon: "Cake Delivery", price: "₹499+", description: "Designer anniversary cake" },
  { addon: "Flower Bouquet", price: "₹799+", description: "Fresh red roses bouquet" },
  { addon: "Photographer", price: "₹2,499", description: "1-hour professional shoot" },
  { addon: "Breakfast Setup", price: "₹1,499", description: "Romantic morning breakfast" },
  { addon: "Live Musician", price: "₹3,999", description: "30-min private performance" },
  { addon: "Video Recording", price: "₹1,999", description: "Capture the surprise reveal" }
];

const popularThemes = [
  { theme: "Classic Red Romance", colors: "Red, white, gold", vibe: "Traditional romantic" },
  { theme: "Pink Princess", colors: "Pink, rose gold, white", vibe: "Feminine & elegant" },
  { theme: "Midnight Magic", colors: "Black, gold, fairy lights", vibe: "Mysterious & romantic" },
  { theme: "Garden of Love", colors: "Green, white, peach", vibe: "Natural & fresh" },
  { theme: "Vintage Romance", colors: "Cream, dusty rose, gold", vibe: "Elegant & timeless" }
];

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Most setups take 2-3 hours. We'll arrive while your partner is away (work, shopping trip, etc.) and transform the space before they return."
  },
  {
    question: "Can you set up in a hotel room?",
    answer: "Yes! We regularly coordinate with hotels. We just need 2-3 hours access to the room. Some hotels require prior permission — we can guide you through this."
  },
  {
    question: "What if my partner comes home early?",
    answer: "We recommend having a backup plan (friend/family member to stall them). We work quickly, and our team can adapt to shorter timelines if needed."
  },
  {
    question: "Do you clean up afterwards?",
    answer: "Yes! Cleanup is included in all packages. We return the next day (or same night after midnight, if preferred) to remove everything."
  },
  {
    question: "Can I customize the décor?",
    answer: "Absolutely! We can incorporate specific colors, photos, inside jokes, favorite flowers, or any personal elements you want. Custom requests may have additional costs."
  },
  {
    question: "What if I need a last-minute setup?",
    answer: "We can do same-day setups with 4-6 hours notice, subject to team availability. Last-minute bookings may have a rush fee of ₹500-1,000."
  }
];

export default function RomanticAnniversarySetupPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 via-pink-500 to-rose-700 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-rose-200" />
              <span className="text-sm font-medium text-rose-200">Romantic Setups</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Romantic Anniversary Setup in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-rose-200 mb-4 max-w-3xl mx-auto">
              Transform Any Space Into a Love Story
            </p>
            <p className="text-lg text-rose-100/80 mb-8 max-w-2xl mx-auto">
              Surprise your partner with a beautifully decorated space — bedroom, living room, or any venue. Balloons, candles, flowers, and magic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Book Setup Now
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want a romantic anniversary setup surprise"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Types */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Types of Romantic Setups
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {setupTypes.map((setup, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-rose-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-rose-800">{setup.type}</h3>
                  <span className="bg-rose-100 text-rose-600 text-sm px-3 py-1 rounded-full">{setup.price}</span>
                </div>
                <p className="text-rose-600 mb-4 text-sm">Best for: {setup.bestFor}</p>
                <ul className="space-y-2">
                  {setup.elements.map((element, i) => (
                    <li key={i} className="flex items-center gap-2 text-rose-700 text-sm">
                      <Heart className="w-4 h-4 text-rose-400" />
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Setup Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete setup including décor, installation, and cleanup
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-rose-500 to-pink-600 text-white ring-2 ring-rose-300'
                    : 'bg-rose-50 border border-rose-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-rose-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${pkg.popular ? 'text-white' : 'text-rose-800'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-rose-600'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-rose-200' : 'text-rose-400'}`} />
                      <span className={pkg.popular ? 'text-rose-100' : 'text-rose-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I want the "${pkg.name}" romantic setup package`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-rose-600 hover:bg-rose-50'
                      : 'bg-rose-600 text-white hover:bg-rose-700'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Décor Elements */}
      <section className="py-16 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Décor Elements We Use
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="font-bold text-xl mb-4 text-rose-200">Balloons</h3>
              <ul className="space-y-2">
                {decorElements.balloons.map((item, index) => (
                  <li key={index} className="text-rose-100">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-rose-200">Lighting</h3>
              <ul className="space-y-2">
                {decorElements.lighting.map((item, index) => (
                  <li key={index} className="text-rose-100">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-rose-200">Flowers</h3>
              <ul className="space-y-2">
                {decorElements.flowers.map((item, index) => (
                  <li key={index} className="text-rose-100">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-rose-200">Personal Touches</h3>
              <ul className="space-y-2">
                {decorElements.personal.map((item, index) => (
                  <li key={index} className="text-rose-100">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Romantic Touches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Flame className="w-10 h-10 mx-auto mb-4 text-rose-500" />
            Extra Romantic Touches
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {romanticTouches.map((item, index) => (
              <div key={index} className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-rose-800 mb-2">{item.touch}</h3>
                <p className="text-rose-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surprise Process */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Execute Your Surprise
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {surpriseProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-rose-800 mb-2">{step.title}</h3>
                  <p className="text-rose-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Where Can We Set Up?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {locationOptions.map((loc, index) => (
              <div key={index} className="bg-rose-50 rounded-xl p-6 text-center border border-rose-100">
                <h3 className="font-bold text-rose-800 mb-2">{loc.location}</h3>
                <p className="text-rose-700 text-sm mb-2">{loc.description}</p>
                <span className="text-rose-500 text-sm">{loc.additionalCost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Add-On Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-rose-100 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-rose-800 mb-1">{item.addon}</h3>
                  <p className="text-rose-600 text-sm">{item.description}</p>
                </div>
                <span className="bg-rose-100 text-rose-600 text-sm px-3 py-1 rounded-full font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Themes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Themes
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {popularThemes.map((item, index) => (
              <div key={index} className="bg-rose-50 rounded-xl p-6 text-center border border-rose-100">
                <h3 className="font-bold text-rose-800 mb-2">{item.theme}</h3>
                <p className="text-rose-600 text-sm mb-1">{item.colors}</p>
                <p className="text-rose-500 text-xs">{item.vibe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Setup FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-lg mb-3 text-rose-800">{faq.question}</h3>
                <p className="text-rose-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Create a Magical Surprise
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Imagine their face when they walk into a beautifully decorated space, filled with love and romance. Let us make that moment happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to book a romantic anniversary setup"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book Romantic Setup
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
