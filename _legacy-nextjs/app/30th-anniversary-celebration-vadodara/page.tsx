import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Users, Gem, Gift, Crown } from 'lucide-react';
import { packages, formatPrice } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: '30th Anniversary Celebration Vadodara | Pearl Anniversary Party',
  description: 'Celebrate your 30th Pearl Anniversary in Vadodara. Three decades of love deserves a luminous celebration. Premium packages & elegant venues. Call +91 7487888730.',
  keywords: '30th anniversary celebration vadodara, pearl anniversary, 30 years wedding anniversary, thirtieth anniversary party',
  openGraph: {
    title: '30th Pearl Anniversary Celebration in Vadodara',
    description: 'Three decades of rare beauty. Celebrate your pearl anniversary with elegance.',
    type: 'website',
  },
  alternates: {
    canonical: '/30th-anniversary-celebration-vadodara',
  },
};

const pearlSignificance = {
  years: 30,
  traditionalGift: "Pearl",
  modernGift: "Diamond",
  flower: "Lily",
  color: "White/Ivory",
  meaning: "Pearls are created over time, layer by layer, from a tiny grain of sand. Similarly, a 30-year marriage is built through countless moments, experiences, and memories — transforming something ordinary into something precious and rare."
};

const threeDecadeMilestones = [
  { milestone: "10,950+ Days", context: "Of partnership" },
  { milestone: "30 Diwalis", context: "Celebrated together" },
  { milestone: "Children Married", context: "Perhaps grandchildren" },
  { milestone: "Career Journeys", context: "Started and completed" },
  { milestone: "Health Challenges", context: "Faced together" },
  { milestone: "Love Deepened", context: "From romance to devotion" }
];

const pearlDecorElements = [
  "White and ivory color palette",
  "Pearl string decorations",
  "Elegant lily arrangements",
  "Soft pearl lighting",
  "30-year photo journey wall",
  "Luxurious fabric draping",
  "Silver accents",
  "Candle centerpieces",
  "Shell and pearl table décor"
];

const celebrationIdeas = [
  {
    idea: "Pearl Gifting Ceremony",
    description: "Children and grandchildren present pearls (real or symbolic) representing qualities of your marriage — wisdom, patience, beauty"
  },
  {
    idea: "Three Decades Journey Video",
    description: "A professionally produced video dividing your story into three decades, with photos, music, and narration"
  },
  {
    idea: "Memory Jar Reading",
    description: "Family members write their favorite memories of you as a couple. Read them aloud during celebration"
  },
  {
    idea: "Renew Your Vows in White",
    description: "A beautiful vow renewal ceremony with both wearing white/ivory — symbolic of 30 pure years"
  },
  {
    idea: "Family Heritage Speeches",
    description: "Children and grandchildren share how your marriage has influenced their lives and values"
  }
];

const generationReflection = {
  title: "A Love That Spans Generations",
  points: [
    "Your children grew up watching your love",
    "Your grandchildren are learning from it",
    "Your marriage is a family legacy",
    "30 years = wisdom, patience, and devotion"
  ]
};

const faqs = [
  {
    question: "Why is the 30th anniversary called Pearl?",
    answer: "Pearls symbolize wisdom, beauty, and rarity — all qualities of a 30-year marriage. Like a pearl that forms over time, your relationship has developed something precious through years of shared experiences."
  },
  {
    question: "What does the modern gift of diamond represent?",
    answer: "Diamond for the 30th anniversary represents the strength and brilliance of a long-lasting marriage. It's one of the hardest substances, symbolizing an unbreakable bond."
  },
  {
    question: "Should grandchildren be involved?",
    answer: "Absolutely! If you have grandchildren, involving them makes the celebration even more special. They represent the continuation of your love story and can participate in ceremonies, performances, or simply be present."
  },
  {
    question: "Is 30 years considered a major milestone?",
    answer: "Yes, definitely. 30 years is three decades — a significant achievement that many celebrate with family and close friends. It's often marked with larger celebrations than typical anniversaries."
  },
  {
    question: "What's the best time of year to celebrate?",
    answer: "Your actual anniversary date is meaningful, but many couples choose pleasant weather months (October-February in Vadodara) for outdoor or larger celebrations with elderly family members."
  }
];

export default function ThirtiethAnniversaryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-100 text-slate-800 py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full mb-6 border border-gray-200">
              <Gem className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Pearl Anniversary</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              30th Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Three Decades of Rare Beauty
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              Like a pearl formed through time and patience, your 30-year marriage is something rare and precious. Celebrate this luminous milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all"
              >
                <Phone className="w-5 h-5" />
                Plan 30th Anniversary
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We're celebrating our 30th Pearl anniversary and want something elegant"
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
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-3xl p-8 md:p-12 border border-gray-200">
              <div className="text-center mb-8">
                <div className="text-8xl font-bold text-slate-600">{pearlSignificance.years}</div>
                <div className="text-xl text-slate-500">Years Together</div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Traditional Gift</div>
                  <div className="font-bold text-slate-700">{pearlSignificance.traditionalGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Modern Gift</div>
                  <div className="font-bold text-slate-700">{pearlSignificance.modernGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Flower</div>
                  <div className="font-bold text-slate-700">{pearlSignificance.flower}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Color</div>
                  <div className="font-bold text-slate-700">{pearlSignificance.color}</div>
                </div>
              </div>
              
              <p className="text-center text-slate-600 italic text-lg">
                "{pearlSignificance.meaning}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Decade Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Three Decades Together
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {threeDecadeMilestones.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <h3 className="font-bold text-2xl text-slate-700 mb-2">{item.milestone}</h3>
                <p className="text-slate-500">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generation Reflection */}
      <section className="py-16 bg-gradient-to-br from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Crown className="w-12 h-12 mx-auto mb-6 text-gray-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{generationReflection.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {generationReflection.points.map((point, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <p className="text-gray-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            30th Anniversary Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our romantic celebration packages
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all group h-full">
                  <div className="text-3xl mb-2">{pkg.emoji}</div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 text-slate-800 group-hover:text-slate-600 line-clamp-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mb-2 line-clamp-2 hidden md:block">
                    {pkg.shortDescription}
                  </p>
                  <div className="text-lg md:text-2xl font-bold text-slate-700">
                    {formatPrice(pkg.price)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {pkg.cakeIncluded ? '🎂 Cake included' : '🎂 +₹500'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/packages" className="inline-block bg-slate-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all">
              View All Package Details
            </Link>
          </div>
        </div>
      </section>

      {/* Décor Elements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Pearl-Inspired Décor
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {pearlDecorElements.map((item, index) => (
                <div key={index} className="bg-white shadow-sm px-6 py-3 rounded-full border border-gray-200 text-slate-600">
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
            30th Anniversary Ideas
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {celebrationIdeas.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-xl text-slate-700 mb-2">{item.idea}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            30th Anniversary FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-slate-700">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Gem className="w-16 h-16 text-slate-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Celebrate Your Pearl Years
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Three decades of love, growth, and devotion deserve a celebration as luminous as a pearl. Let us help you honor this precious milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We want to plan our 30th anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Plan 30th Anniversary
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
