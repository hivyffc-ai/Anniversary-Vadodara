import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Flame, Utensils, Wine, Music, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Candlelight Anniversary Dinner Vadodara | Romantic Dining Experience',
  description: 'Book a romantic candlelight anniversary dinner in Vadodara. Private setup, gourmet cuisine, soft music & intimate ambiance. Premium packages from ₹2,999. Call +91 7487888730.',
  keywords: 'candlelight anniversary dinner vadodara, romantic dinner for anniversary, anniversary candlelight dining, private anniversary dinner',
  openGraph: {
    title: 'Candlelight Anniversary Dinner in Vadodara',
    description: 'An intimate dining experience bathed in soft candlelight. Perfect for anniversary celebrations.',
    type: 'website',
  },
  alternates: {
    canonical: '/candlelight-anniversary-dinner-vadodara',
  },
};

const candlelightMagic = {
  title: "Why Candlelight?",
  reasons: [
    { reason: "Soft, Flattering Light", detail: "Candlelight makes everyone look more beautiful — it's warm and gentle" },
    { reason: "Intimate Atmosphere", detail: "The soft glow creates a cocoon of privacy even in shared spaces" },
    { reason: "No Phone Distractions", detail: "The ambiance encourages putting phones away and being present" },
    { reason: "Slows Time Down", detail: "Everything feels more deliberate and meaningful by candlelight" },
    { reason: "Romantic Tradition", detail: "Candlelight dinners have been a symbol of romance for centuries" }
  ]
};

const dinnerPackages = [
  {
    name: "Candlelit Charm",
    price: "₹2,999",
    duration: "2 hours",
    includes: [
      "Private candlelit table",
      "3-course dinner for 2",
      "Welcome mocktails",
      "Rose petals décor",
      "Soft background music",
      "Mini anniversary cake"
    ]
  },
  {
    name: "Romantic Glow",
    price: "₹5,499",
    duration: "3 hours",
    includes: [
      "Exclusive decorated corner",
      "5-course gourmet dinner",
      "Welcome champagne/mocktails",
      "Elaborate candlelit setup",
      "Live acoustic music (30 min)",
      "Anniversary cake",
      "Professional photos (10)",
      "Single red rose"
    ],
    popular: true
  },
  {
    name: "Eternal Flame",
    price: "₹9,999",
    duration: "4 hours",
    includes: [
      "Private dining room",
      "Multi-course fine dining",
      "Premium beverages",
      "Luxury candlelit décor",
      "Live violinist (1 hour)",
      "Designer anniversary cake",
      "Full photography session",
      "Rose bouquet",
      "Personalized menu cards",
      "Keepsake candle gift"
    ]
  }
];

const menuHighlights = {
  appetizers: ["Mushroom Bruschetta", "Paneer Tikka Platter", "Soup of the Day"],
  mains: ["Grilled Cottage Cheese Steak", "Butter Garlic Pasta", "Mixed Vegetable Risotto", "Paneer Lababdar"],
  desserts: ["Chocolate Lava Cake", "Tiramisu", "Gulab Jamun with Ice Cream", "Fresh Fruit Tart"]
};

const atmosphereElements = [
  "Dozens of flickering candles",
  "Rose petals scattered artfully",
  "Soft instrumental music",
  "Dimmed ambient lighting",
  "Fresh flower centerpiece",
  "Premium table linens",
  "Crystal glassware",
  "Personal butler service"
];

const perfectFor = [
  { occasion: "First Anniversary", why: "Recreate the magic of your dating days" },
  { occasion: "Milestone Years", why: "A quiet, intimate way to celebrate decades together" },
  { occasion: "Make-Up Anniversary", why: "If you missed the actual date, this makes it special" },
  { occasion: "Surprise Celebration", why: "Easy to organize secretly as a romantic surprise" },
  { occasion: "Just Because", why: "Every anniversary deserves romance, big or small" }
];

const candlelightTips = [
  { tip: "Dress Up", detail: "Even if it's your 20th anniversary, dress like it's your first date" },
  { tip: "No Phones", detail: "Put devices away and be fully present with each other" },
  { tip: "Share Stories", detail: "Talk about your favorite memories from the past year" },
  { tip: "Leave the Kids", detail: "This is your time — arrange for babysitting" },
  { tip: "Extend the Evening", detail: "Don't rush home; take a walk or drive after dinner" }
];

const faqs = [
  {
    question: "What is included in a candlelight dinner setup?",
    answer: "Our candlelight dinners include a private or semi-private table decorated with candles, rose petals, flowers, and soft lighting. You'll receive a multi-course meal, background music, and depending on the package, photography and live music."
  },
  {
    question: "Can we customize the menu for dietary restrictions?",
    answer: "Absolutely! We can accommodate vegetarian, Jain, gluten-free, or any other dietary requirements. Please let us know in advance so we can prepare a suitable menu."
  },
  {
    question: "Is it completely private?",
    answer: "Our basic package offers a decorated private corner in our venue. Our premium packages include a fully private room where you'll have complete privacy for your celebration."
  },
  {
    question: "Can we add surprises during dinner?",
    answer: "Yes! We can arrange surprise gifts, a special dessert presentation, a surprise video montage, or even a musician to serenade your partner mid-dinner."
  },
  {
    question: "What's the best time for candlelight dinner?",
    answer: "Evening between 7-8 PM is ideal as natural light fades and the candlelit ambiance becomes more magical. However, we can accommodate your preferred timing."
  },
  {
    question: "Do you serve alcohol?",
    answer: "We offer premium mocktails and non-alcoholic beverages. For alcohol, please check our specific policies when booking, as it varies by venue and event."
  }
];

export default function CandlelightAnniversaryDinnerPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-rose-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Flame className="w-5 h-5 text-amber-300" />
              <span className="text-sm font-medium text-amber-200">Romantic Dining</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Candlelight Anniversary Dinner in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-4 max-w-3xl mx-auto">
              Where Flames Flicker & Hearts Connect
            </p>
            <p className="text-lg text-amber-100/80 mb-8 max-w-2xl mx-auto">
              An intimate evening bathed in the warm glow of candlelight. Fine dining, soft music, and just the two of you — the perfect anniversary setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-amber-950 px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-all"
              >
                <Phone className="w-5 h-5" />
                Reserve Your Table
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to book a candlelight anniversary dinner"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Candlelight */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {candlelightMagic.title}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            There's something magical about candlelight that technology can never replicate
          </p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candlelightMagic.reasons.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                <Flame className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-lg text-amber-800 mb-2">{item.reason}</h3>
                <p className="text-amber-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Candlelight Dinner Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose your level of romance
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dinnerPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-amber-700 to-orange-800 text-white ring-2 ring-amber-300'
                    : 'bg-amber-50 border border-amber-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST ROMANTIC
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-amber-800'}`}>
                  {pkg.name}
                </h3>
                <div className={`flex items-center gap-2 mb-4 text-sm ${pkg.popular ? 'text-amber-200' : 'text-amber-600'}`}>
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </div>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-amber-700'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Flame className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-amber-300' : 'text-amber-500'}`} />
                      <span className={pkg.popular ? 'text-amber-100' : 'text-amber-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I want to book the "${pkg.name}" candlelight dinner package`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-amber-700 hover:bg-amber-50'
                      : 'bg-amber-700 text-white hover:bg-amber-800'
                  }`}
                >
                  Book This Experience
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-gradient-to-br from-amber-800 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Utensils className="w-10 h-10 mx-auto mb-4 text-amber-300" />
            Sample Menu
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-xl mb-4 text-amber-300">Appetizers</h3>
              <ul className="space-y-2">
                {menuHighlights.appetizers.map((item, index) => (
                  <li key={index} className="text-amber-100">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-amber-300">Main Course</h3>
              <ul className="space-y-2">
                {menuHighlights.mains.map((item, index) => (
                  <li key={index} className="text-amber-100">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-amber-300">Desserts</h3>
              <ul className="space-y-2">
                {menuHighlights.desserts.map((item, index) => (
                  <li key={index} className="text-amber-100">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-center text-amber-200 mt-8 text-sm">
            * Menu can be customized based on your preferences and dietary requirements
          </p>
        </div>
      </section>

      {/* Atmosphere Elements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            The Atmosphere
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {atmosphereElements.map((item, index) => (
                <div key={index} className="bg-amber-50 px-6 py-3 rounded-full border border-amber-200 text-amber-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Perfect For Every Anniversary
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {perfectFor.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 shadow-sm">
                <div className="md:w-1/3">
                  <h3 className="font-bold text-lg text-amber-800">{item.occasion}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-amber-700">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Make It Unforgettable
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {candlelightTips.map((item, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h3 className="font-bold text-lg text-amber-800 mb-2">{item.tip}</h3>
                <p className="text-amber-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Candlelight Dinner FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-amber-800">{faq.question}</h3>
                <p className="text-amber-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Flame className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Light the Spark Tonight
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Sometimes the best anniversaries are the simple ones — just you, your partner, flickering candles, and a beautiful meal. Let us set the scene.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to plan a candlelight anniversary dinner"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book Candlelight Dinner
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
