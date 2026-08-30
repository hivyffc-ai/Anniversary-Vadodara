import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Diamond, Star, Heart, Clock, Users, Sparkles, Gift } from 'lucide-react';
import { packages, formatPrice } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: '15th Anniversary Celebration Vadodara | Crystal Anniversary Party',
  description: 'Celebrate your 15th Crystal Anniversary in Vadodara. Fifteen years of clarity and brilliance deserves a sparkling celebration. Premium packages available. Call +91 7487888730.',
  keywords: '15th anniversary celebration vadodara, crystal anniversary, 15 years wedding anniversary, fifteenth anniversary party',
  openGraph: {
    title: '15th Crystal Anniversary Celebration in Vadodara',
    description: 'Fifteen years of crystal-clear love. Celebrate with the brilliance your marriage deserves.',
    type: 'website',
  },
  alternates: {
    canonical: '/15th-anniversary-celebration-vadodara',
  },
};

const crystalSignificance = {
  years: 15,
  traditionalGift: "Crystal",
  modernGift: "Watches",
  flower: "Rose",
  meaning: "Crystal represents clarity, transparency, and the light that passes through your relationship. After 15 years, couples have weathered challenges and emerged with crystal-clear understanding of each other. Like crystal, your bond is both delicate and enduring."
};

const fifteenYearAchievements = [
  "5,475 days of choosing each other",
  "Countless compromises and make-ups",
  "Kids growing up watching your love",
  "Building a home full of memories",
  "Becoming each other's safe space",
  "15 anniversaries already celebrated"
];

const crystalDecorElements = [
  "Crystal chandeliers and hanging lights",
  "Sparkling crystal centerpieces",
  "Reflective mirror and glass accents",
  "Clear balloon installations",
  "Silver and white color palette",
  "Crystal candle holders",
  "Prism light effects",
  "Glittering table runners"
];

const celebrationIdeas = [
  {
    idea: "15 Roses Ceremony",
    description: "Present your partner with 15 roses — one for each year, each with a memory attached"
  },
  {
    idea: "Crystal Champagne Toast",
    description: "Toast from matching crystal glasses that become your keepsake for future anniversaries"
  },
  {
    idea: "Photo Crystal",
    description: "We create a 3D crystal with your photo etched inside — a stunning keepsake"
  },
  {
    idea: "15 Year Message Jar",
    description: "Collect 15 wishes from friends and family to read during celebration"
  },
  {
    idea: "Light Prism Ceremony",
    description: "A meaningful moment where light passing through crystal symbolizes your unified life"
  }
];

const faqs = [
  {
    question: "Why is the 15th anniversary called Crystal?",
    answer: "Crystal represents the clarity and transparency that develops in a marriage after 15 years. Like crystal that refracts light into beautiful colors, your relationship has developed depth and brilliance through shared experiences."
  },
  {
    question: "How do you incorporate the crystal theme?",
    answer: "We use crystal chandeliers, sparkling centerpieces, prism effects, clear balloon arrangements, and reflective surfaces. Colors are silver, white, and clear with lots of sparkle and shine."
  },
  {
    question: "Is 15 years significant enough for a party?",
    answer: "Absolutely! 15 years is when couples often feel they've truly 'figured it out.' It's worth celebrating before the major milestones of 25 and 50. Many couples invite close family for this one."
  },
  {
    question: "What's a good surprise for a 15th anniversary?",
    answer: "Crystal-themed gifts work beautifully: personalized crystal frames, watches (modern gift), crystal jewelry, or experiences like a spa day. The 3D photo crystal is always a hit."
  },
  {
    question: "Can we do this with teenage kids present?",
    answer: "Yes! Many 15th anniversary couples have teens. We can include them in appropriate activities while still making the celebration romantic. Kids can help with speeches or presentations."
  }
];

export default function CrystalAnniversaryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-white text-slate-800 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full mb-6">
              <Diamond className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-slate-600">Crystal Anniversary</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-blue-600 to-slate-700 bg-clip-text text-transparent">
              15th Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Fifteen Years of Crystal-Clear Love
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              Like crystal that catches light and sparkles, your 15-year marriage has developed depth, clarity, and undeniable brilliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Plan Crystal Anniversary
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We're celebrating our 15th anniversary and want a crystal-themed celebration"
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
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-slate-200">
              <div className="text-center mb-8">
                <Diamond className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <div className="text-7xl font-bold text-slate-700">{crystalSignificance.years}</div>
                <div className="text-xl text-slate-500">Years of Marriage</div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Traditional Gift</div>
                  <div className="font-bold text-slate-700">{crystalSignificance.traditionalGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Modern Gift</div>
                  <div className="font-bold text-slate-700">{crystalSignificance.modernGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Flower</div>
                  <div className="font-bold text-slate-700">{crystalSignificance.flower}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Symbol</div>
                  <div className="font-bold text-slate-700">Clarity & Light</div>
                </div>
              </div>
              
              <p className="text-center text-slate-600 italic text-lg">
                "{crystalSignificance.meaning}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Year Achievements */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What 15 Years Really Means
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {fifteenYearAchievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
                  <Sparkles className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-700">{achievement}</span>
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
            15th Anniversary Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our romantic celebration packages
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all group h-full">
                  <div className="text-3xl mb-2">{pkg.emoji}</div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 text-slate-800 group-hover:text-blue-600 line-clamp-2">
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
            <Link href="/packages" className="inline-block bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all">
              View All Package Details
            </Link>
          </div>
        </div>
      </section>

      {/* Crystal Décor */}
      <section className="py-16 bg-gradient-to-br from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Crystal Theme Décor
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {crystalDecorElements.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Sparkles className="w-4 h-4 inline-block mr-2 text-blue-300" />
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
            Crystal Anniversary Ideas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {celebrationIdeas.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-slate-800">{item.idea}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            15th Anniversary FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-slate-800">{faq.question}</h3>
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
            <Diamond className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Make Your 15th Sparkle
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Fifteen years of love deserves a celebration that shines. Let us create your crystal-clear perfect anniversary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We want to plan our 15th Crystal Anniversary"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Plan Crystal Celebration
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
