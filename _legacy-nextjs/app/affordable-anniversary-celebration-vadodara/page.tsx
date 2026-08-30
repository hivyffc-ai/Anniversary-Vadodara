import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Users, IndianRupee, Wallet, Sparkles, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affordable Anniversary Celebration Vadodara | Budget-Friendly Packages',
  description: 'Celebrate your anniversary on a budget in Vadodara. Beautiful celebrations from just ₹1,999. Romantic setups, candlelight dinners & more without breaking the bank. Call +91 7487888730.',
  keywords: 'affordable anniversary celebration vadodara, budget anniversary party, cheap anniversary packages, low cost anniversary celebration',
  openGraph: {
    title: 'Affordable Anniversary Celebration in Vadodara',
    description: 'Beautiful celebrations don\'t have to be expensive. Budget-friendly packages from ₹1,999.',
    type: 'website',
  },
  alternates: {
    canonical: '/affordable-anniversary-celebration-vadodara',
  },
};

const affordablePhilosophy = {
  title: "Romance Isn't About Money",
  points: [
    "Love doesn't have a price tag",
    "Thoughtfulness matters more than expense",
    "Simple celebrations can be deeply meaningful",
    "We believe every couple deserves a beautiful anniversary"
  ]
};

const budgetPackages = [
  {
    name: "Sweet & Simple",
    price: "₹1,999",
    savings: "Save 40%",
    includes: [
      "Decorated corner setup",
      "Heart balloons",
      "LED candles",
      "Small anniversary cake",
      "2 mocktails",
      "Basic photos (5)"
    ],
    bestFor: "Tight budget, big love"
  },
  {
    name: "Budget Romantic",
    price: "₹3,499",
    savings: "Save 35%",
    includes: [
      "Semi-private table setup",
      "Balloon & flower décor",
      "2-course dinner for 2",
      "Anniversary cake",
      "Rose petals decoration",
      "Professional photos (10)",
      "Background music"
    ],
    bestFor: "Most popular budget choice",
    popular: true
  },
  {
    name: "Value Celebration",
    price: "₹5,999",
    savings: "Save 30%",
    includes: [
      "Private corner booking",
      "Full romantic décor",
      "3-course dinner for 2",
      "Designer mini cake",
      "Fresh flowers",
      "Professional photoshoot (15)",
      "Live acoustic (15 min)",
      "Champagne toast"
    ],
    bestFor: "Best value for experience"
  }
];

const budgetTips = [
  { tip: "Book Weekdays", saving: "15-20%", description: "Tuesday to Thursday prices are lower than weekends" },
  { tip: "Afternoon Slots", saving: "10-15%", description: "Lunch celebrations cost less than dinner timings" },
  { tip: "Skip Photography", saving: "₹1,000-2,000", description: "Use your own phone — today's cameras are excellent" },
  { tip: "DIY Add-ons", saving: "₹500-1,000", description: "Bring your own playlist, love letters, small gifts" },
  { tip: "Smaller Cake", saving: "₹300-500", description: "Cupcake or mini cake instead of full cake" },
  { tip: "Off-Season Dates", saving: "20-25%", description: "Avoid Valentine's week, long weekends" }
];

const affordableIdeas = [
  { idea: "Home Candlelight Dinner", cost: "₹999 setup", description: "We decorate, you cook — romantic and personal" },
  { idea: "Sunrise/Sunset Picnic", cost: "₹1,499", description: "Decorated outdoor spot with breakfast/snacks" },
  { idea: "Room Decoration Only", cost: "₹1,999", description: "Transform your bedroom; order dinner separately" },
  { idea: "Budget Café Setup", cost: "₹2,499", description: "Decorated corner at a café with cake" },
  { idea: "Movie Night Special", cost: "₹1,799", description: "Home setup with projector, snacks, décor" },
  { idea: "Cooking Together Date", cost: "₹1,299", description: "Ingredient kit + recipe card + décor for home cooking session" }
];

const whatYouStillGet = [
  "Real romantic décor (not cheap-looking)",
  "Professional service quality",
  "Clean, well-maintained venue",
  "Polite, attentive staff",
  "Tasty, quality food",
  "Memorable experience",
  "Photos to treasure",
  "Genuine celebration vibes"
];

const smartSpending = {
  title: "Where to Spend, Where to Save",
  spend: [
    { item: "Décor", reason: "Creates the atmosphere; worth prioritizing" },
    { item: "Food Quality", reason: "Bad food ruins the experience" },
    { item: "Private Space", reason: "Romance needs some privacy" }
  ],
  save: [
    { item: "Duration", reason: "2 hours can be as special as 4" },
    { item: "Fancy Drinks", reason: "Mocktails can be as romantic as champagne" },
    { item: "Elaborate Cake", reason: "A small cake celebrates just as well" }
  ]
};

const studentSpecial = {
  title: "Student & Young Couple Special",
  price: "₹1,499",
  note: "Valid with college ID",
  includes: [
    "Decorated table for 2",
    "Heart balloons",
    "2 mocktails + snacks",
    "Small cake slice",
    "5 mobile photos",
    "1.5-hour slot"
  ]
};

const faqs = [
  {
    question: "Is cheap celebration really romantic?",
    answer: "Absolutely! Romance is about intention, not expense. A thoughtfully planned ₹2,000 celebration can be more meaningful than a careless ₹20,000 one. We focus on creating genuine romantic experiences regardless of budget."
  },
  {
    question: "What's the cheapest option you offer?",
    answer: "Our most affordable package is ₹1,999 for a decorated setup with basic elements. For students with college ID, we offer a special ₹1,499 package. You can also opt for home decoration only starting at ₹999."
  },
  {
    question: "Do budget packages look 'budget'?",
    answer: "Not at all. We use the same quality décor and professional approach for all packages. Budget packages have fewer elements, not cheaper quality. Your celebration will look beautiful and feel special."
  },
  {
    question: "Can I customize a budget package?",
    answer: "Yes! We can mix and match elements to fit your budget. Tell us what matters most to you (décor, food, photos, music) and we'll prioritize accordingly."
  },
  {
    question: "Are there hidden costs?",
    answer: "No hidden costs — ever. The price you see includes setup, service, and cleanup. We'll tell you upfront if anything isn't included. We don't believe in surprise charges."
  },
  {
    question: "How do you keep costs low?",
    answer: "We've optimized our operations, have bulk vendor relationships, and offer weekday/off-peak discounts. We pass these savings to you while maintaining quality."
  }
];

export default function AffordableAnniversaryCelebrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-700 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Wallet className="w-5 h-5 text-emerald-200" />
              <span className="text-sm font-medium text-emerald-200">Budget-Friendly</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Affordable Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-emerald-200 mb-4 max-w-3xl mx-auto">
              Beautiful Celebrations Without Breaking the Bank
            </p>
            <p className="text-lg text-emerald-100/80 mb-8 max-w-2xl mx-auto">
              Your love story deserves celebration — at any budget. Romantic experiences from just ₹1,999. No compromise on quality, just smart pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Get Budget Quote
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I'm looking for an affordable anniversary celebration package"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{affordablePhilosophy.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {affordablePhilosophy.points.map((point, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-emerald-200">
                  <p className="text-emerald-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Budget-Friendly Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Romantic celebrations priced for real budgets
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {budgetPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white ring-2 ring-emerald-300'
                    : 'bg-emerald-50 border border-emerald-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-emerald-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    BEST VALUE
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-emerald-800'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.popular ? 'text-emerald-200' : 'text-emerald-600'}`}>
                  {pkg.bestFor}
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-emerald-600'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm px-2 py-1 rounded ${pkg.popular ? 'bg-white/20 text-white' : 'bg-emerald-200 text-emerald-700'}`}>
                    {pkg.savings}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-emerald-200' : 'text-emerald-500'}`} />
                      <span className={pkg.popular ? 'text-emerald-100' : 'text-emerald-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I'm interested in the "${pkg.name}" budget package (${pkg.price})`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Special */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{studentSpecial.title}</h2>
            <p className="text-emerald-200 mb-6">{studentSpecial.note}</p>
            <div className="text-5xl font-bold mb-8">{studentSpecial.price}</div>
            <div className="flex flex-wrap justify-center gap-3">
              {studentSpecial.includes.map((item, index) => (
                <span key={index} className="bg-white/20 px-4 py-2 rounded-full text-sm">{item}</span>
              ))}
            </div>
            <a
              href="https://wa.me/917487888730?text=Hi! I'm a student and interested in your ₹1,499 special package"
              className="inline-block mt-8 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all"
            >
              Book Student Special
            </a>
          </div>
        </div>
      </section>

      {/* Budget Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <IndianRupee className="w-10 h-10 mx-auto mb-4 text-emerald-600" />
            Budget-Saving Tips
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How to maximize romance while minimizing spend
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {budgetTips.map((item, index) => (
              <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-emerald-800">{item.tip}</h3>
                  <span className="bg-emerald-200 text-emerald-700 text-xs px-2 py-1 rounded-full">{item.saving}</span>
                </div>
                <p className="text-emerald-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable Ideas */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Creative Budget Ideas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {affordableIdeas.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-emerald-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-emerald-800">{item.idea}</h3>
                  <span className="text-emerald-600 font-semibold">{item.cost}</span>
                </div>
                <p className="text-emerald-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Still Get */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            What You Still Get
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Budget doesn't mean compromise on these essentials
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {whatYouStillGet.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-emerald-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Spending */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {smartSpending.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-emerald-600 text-white rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-6">Worth Spending On</h3>
              <div className="space-y-4">
                {smartSpending.spend.map((item, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-1">{item.item}</h4>
                    <p className="text-emerald-200 text-sm">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-emerald-200">
              <h3 className="font-bold text-xl mb-6 text-emerald-800">Can Save On</h3>
              <div className="space-y-4">
                {smartSpending.save.map((item, index) => (
                  <div key={index} className="bg-emerald-50 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald-800 mb-1">{item.item}</h4>
                    <p className="text-emerald-600 text-sm">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Budget Celebration FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <h3 className="font-bold text-lg mb-3 text-emerald-800">{faq.question}</h3>
                <p className="text-emerald-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Love Doesn't Cost a Fortune
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let us help you celebrate your anniversary beautifully, affordably, and memorably. Everyone deserves a romantic celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I need an affordable anniversary celebration package"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Get Budget Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
