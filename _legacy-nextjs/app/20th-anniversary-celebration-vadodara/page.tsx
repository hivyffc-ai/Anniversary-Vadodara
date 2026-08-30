import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Users, Sparkles, Gift, Award } from 'lucide-react';
import { packages, formatPrice } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: '20th Anniversary Celebration Vadodara | China Anniversary Party',
  description: 'Celebrate your 20th China Anniversary in Vadodara. Two decades of love deserves an elegant celebration. Premium packages & beautiful venues. Call +91 7487888730.',
  keywords: '20th anniversary celebration vadodara, china anniversary, 20 years wedding anniversary, twentieth anniversary party',
  openGraph: {
    title: '20th China Anniversary Celebration in Vadodara',
    description: 'Two decades of delicate beauty and strength. Celebrate your china anniversary in style.',
    type: 'website',
  },
  alternates: {
    canonical: '/20th-anniversary-celebration-vadodara',
  },
};

const chinaSignificance = {
  years: 20,
  traditionalGift: "China (Porcelain)",
  modernGift: "Platinum",
  flower: "Day Lily",
  meaning: "China represents both beauty and durability. Like fine porcelain, your 20-year marriage is delicately beautiful yet surprisingly strong. It takes skill and care to maintain, and the result is something precious and valuable."
};

const twoDecadeHighlights = [
  { highlight: "7,300 Days", description: "Of waking up next to each other" },
  { highlight: "20 Karwa Chauths", description: "Fasting and praying for each other" },
  { highlight: "Children Grown", description: "From babies to young adults" },
  { highlight: "Career Peaks", description: "Supporting each other's growth" },
  { highlight: "Home Built", description: "From a house to a lifetime of memories" },
  { highlight: "Love Evolved", description: "From passion to deep partnership" }
];

const decorElements = [
  "White and gold color scheme",
  "Elegant floral arrangements",
  "Fine china-inspired centerpieces",
  "Soft candlelit ambiance",
  "20-year photo timeline display",
  "Delicate fabric draping",
  "Golden accents throughout",
  "Classical elegant touches"
];

const celebrationIdeas = [
  {
    idea: "20 Candles Ceremony",
    description: "Light 20 candles together, each representing a year — share a memory as you light each one"
  },
  {
    idea: "Then vs Now Photo Display",
    description: "Side-by-side comparison photos: wedding day and today, first home and current home"
  },
  {
    idea: "Two Decades Video Journey",
    description: "A professionally edited video covering 20 years with photos, clips, and music from each era"
  },
  {
    idea: "Renew Your Vows",
    description: "After 20 years, your vows mean more than ever. A simple ceremony with just family"
  },
  {
    idea: "Letters to Each Other",
    description: "Write and read letters to each other about what 20 years has meant"
  }
];

const faqs = [
  {
    question: "Why is the 20th anniversary called China?",
    answer: "Fine china (porcelain) represents the delicate yet durable nature of a 20-year marriage. Like porcelain, it requires care and attention to maintain its beauty, and the result is something both beautiful and resilient."
  },
  {
    question: "What does platinum (modern gift) represent?",
    answer: "Platinum is one of the most precious and durable metals, symbolizing the rare and valuable nature of a 20-year relationship. It doesn't tarnish, just like a strong marriage that has stood the test of time."
  },
  {
    question: "Is 20 years a big celebration milestone?",
    answer: "Yes! 20 years is significant — it's a generation of love. Many couples choose to celebrate with close family and friends, as it marks two full decades of commitment."
  },
  {
    question: "Should we include our grown children?",
    answer: "Many couples do! Your children have witnessed your entire journey together. They can give speeches, share memories, or simply be present to honor your achievement."
  },
  {
    question: "What's the best way to commemorate 20 years?",
    answer: "Popular ideas include renewing vows, creating a memory book or video, taking a special trip, upgrading wedding rings, or hosting a celebration with those who've been part of your journey."
  }
];

export default function TwentiethAnniversaryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-100 via-white to-amber-50 text-slate-800 py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full mb-6 border border-amber-200">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">China Anniversary</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              20th Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Two Decades of Delicate Strength
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              Like fine china — beautiful, elegant, and stronger than it looks. Twenty years of marriage is a masterpiece worth celebrating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Plan 20th Anniversary
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We're celebrating our 20th anniversary and want something elegant"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-amber-200">
              <div className="text-center mb-8">
                <div className="text-8xl font-bold text-amber-600">{chinaSignificance.years}</div>
                <div className="text-xl text-amber-700">Years of Marriage</div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Traditional Gift</div>
                  <div className="font-bold text-amber-800">{chinaSignificance.traditionalGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Modern Gift</div>
                  <div className="font-bold text-amber-800">{chinaSignificance.modernGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Flower</div>
                  <div className="font-bold text-amber-800">{chinaSignificance.flower}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Symbol</div>
                  <div className="font-bold text-amber-800">Beauty & Durability</div>
                </div>
              </div>
              
              <p className="text-center text-amber-700 italic text-lg">
                "{chinaSignificance.meaning}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Decade Highlights */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What 20 Years Looks Like
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {twoDecadeHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <h3 className="font-bold text-2xl text-amber-600 mb-2">{item.highlight}</h3>
                <p className="text-amber-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            20th Anniversary Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our romantic celebration packages
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all group h-full">
                  <div className="text-3xl mb-2">{pkg.emoji}</div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 text-amber-800 group-hover:text-amber-600 line-clamp-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs md:text-sm text-amber-600 mb-2 line-clamp-2 hidden md:block">
                    {pkg.shortDescription}
                  </p>
                  <div className="text-lg md:text-2xl font-bold text-amber-700">
                    {formatPrice(pkg.price)}
                  </div>
                  <div className="text-xs text-amber-500 mt-1">
                    {pkg.cakeIncluded ? '🎂 Cake included' : '🎂 +₹500'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/packages" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all">
              View All Package Details
            </Link>
          </div>
        </div>
      </section>

      {/* Décor Elements */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Elegant China-Inspired Décor
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {decorElements.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Ideas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            20th Anniversary Ideas
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {celebrationIdeas.map((item, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-amber-800 mb-2">{item.idea}</h3>
                  <p className="text-amber-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            20th Anniversary FAQs
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
            <Award className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Celebrate 20 Beautiful Years
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Two decades of love, laughter, and life together. Let us create an elegant celebration worthy of your milestone.
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
                href="https://wa.me/917487888730?text=Hi! We want to plan our 20th anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Plan 20th Anniversary
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
