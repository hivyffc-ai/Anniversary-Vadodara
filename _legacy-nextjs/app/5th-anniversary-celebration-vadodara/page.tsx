import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, TreeDeciduous, Star, Heart, Clock, Users, Gift, Sparkles, Leaf } from 'lucide-react';
import { packages, formatPrice } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: '5th Anniversary Celebration Vadodara | Wood Anniversary Party Ideas',
  description: 'Celebrate your 5th Wood Anniversary in Vadodara. Five years of growing roots together deserves a special celebration. Unique wooden-themed décor & packages. Call +91 7487888730.',
  keywords: '5th anniversary celebration vadodara, wood anniversary, 5 years wedding anniversary, fifth anniversary party',
  openGraph: {
    title: '5th Wood Anniversary Celebration in Vadodara',
    description: 'Five years of putting down roots. Celebrate your wood anniversary with rustic elegance.',
    type: 'website',
  },
  alternates: {
    canonical: '/5th-anniversary-celebration-vadodara',
  },
};

const woodAnniversarySignificance = {
  years: 5,
  traditionalGift: "Wood",
  modernGift: "Silverware",
  flower: "Daisy",
  meaning: "Wood represents strength and the solid foundation you've built together. Like a tree, your marriage has put down roots, weathered storms, and grown stronger with each passing year. Five years marks the transition from newlyweds to established partners."
};

const fiveYearMilestones = [
  { year: 1, title: "Paper Year", achievement: "Survived the adjustment period" },
  { year: 2, title: "Cotton Year", achievement: "Woven your lives together" },
  { year: 3, title: "Leather Year", achievement: "Grown tougher together" },
  { year: 4, title: "Fruit/Flowers", achievement: "Your love blossomed" },
  { year: 5, title: "Wood Year", achievement: "Built a solid foundation" }
];

const woodThemedActivities = [
  {
    activity: "Tree Planting Ceremony",
    description: "Plant a sapling together during your celebration. Watch it grow as your marriage grows — a living symbol of your five years.",
    emotional: true
  },
  {
    activity: "Carve Your Initials",
    description: "Carve your initials into a wooden heart ornament. A timeless keepsake to hang in your home.",
    emotional: true
  },
  {
    activity: "Memory Branches",
    description: "Create a memory tree where guests hang their wishes and memories on wooden tags.",
    emotional: false
  },
  {
    activity: "5 Years in 5 Minutes Video",
    description: "We compile your photos from each year into a touching 5-minute video journey.",
    emotional: true
  },
  {
    activity: "Wooden Love Letters",
    description: "Write letters to each other, sealed in a wooden box to open on your 10th anniversary.",
    emotional: true
  }
];

const decorTheme = {
  colors: ["Warm browns", "Forest greens", "Cream whites", "Golden amber"],
  elements: ["Wooden crates", "Tree branch centerpieces", "Rustic lanterns", "Burlap accents", "Leaf garlands", "Wood slice décor"],
  ambiance: "Rustic elegance meets forest charm — think enchanted woodland dinner"
};

const giftIdeas = [
  { gift: "Custom wooden watch", forWho: "For Him" },
  { gift: "Wooden jewelry box", forWho: "For Her" },
  { gift: "Engraved cutting board", forWho: "For Your Kitchen" },
  { gift: "Wooden photo album", forWho: "For Memories" },
  { gift: "Personalized wooden map", forWho: "Of Your Journey" },
  { gift: "Tree planting donation", forWho: "For the Planet" }
];

const faqs = [
  {
    question: "What makes the 5th anniversary special?",
    answer: "The 5th anniversary is a significant milestone because it represents having built a solid foundation — like wood. You've moved past the 'figuring it out' phase into true partnership. It's often when couples feel they've really 'made it' as a married couple."
  },
  {
    question: "What does wood represent in a marriage?",
    answer: "Wood symbolizes strength, growth, and deep roots. Just like a tree that bends but doesn't break in storms, your marriage has shown flexibility and resilience over five years. Wood also represents the solid foundation you've built together."
  },
  {
    question: "How can we incorporate the wood theme?",
    answer: "We offer multiple wood-themed elements: rustic wooden décor, tree planting ceremonies, wooden keepsakes, carved initial ornaments, memory branch activities, and even desserts styled like tree rings!"
  },
  {
    question: "Is 5 years too early for a big celebration?",
    answer: "Not at all! While 25th and 50th are traditionally bigger, the 5-year mark is meaningful because you've built real history together. Whether intimate or with friends, celebrating shows you value your relationship milestone."
  },
  {
    question: "What if we have kids now? Can we include them?",
    answer: "Absolutely! Many couples at 5 years have young children. We can include family-friendly elements while still making it romantic. Kids can participate in activities like the tree planting or memory tree."
  },
  {
    question: "Can we do an outdoor/garden celebration?",
    answer: "Yes! The wood/nature theme works beautifully outdoors. Depending on season, we can arrange garden celebrations with natural elements. Monsoon and extreme summer might need indoor options with outdoor vibes."
  }
];

export default function FifthAnniversaryCelebrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <TreeDeciduous className="w-5 h-5" />
              <span className="text-sm font-medium">Wood Anniversary</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              5th Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-4 max-w-3xl mx-auto">
              Five Years of Growing Together, Rooted in Love
            </p>
            <p className="text-lg text-amber-300 mb-8 max-w-2xl mx-auto">
              Like a tree that's grown strong over five seasons, your marriage has put down deep roots. Celebrate the solid foundation you've built together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-800 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Celebrate 5 Years
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We're celebrating our 5th wedding anniversary and want something special"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Year Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Five Year Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-5 gap-2 md:gap-4">
              {fiveYearMilestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-3 flex items-center justify-center font-bold ${
                    milestone.year === 5 
                      ? 'bg-amber-600 text-white text-xl md:text-2xl' 
                      : 'bg-amber-100 text-amber-700 text-lg md:text-xl'
                  }`}>
                    {milestone.year}
                  </div>
                  <h3 className="font-bold text-amber-800 text-xs md:text-sm mb-1">{milestone.title}</h3>
                  <p className="text-xs text-amber-600 hidden md:block">{milestone.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-amber-200 shadow-sm">
              <div className="flex items-center justify-center gap-4 mb-8">
                <TreeDeciduous className="w-16 h-16 text-amber-600" />
                <div className="text-left">
                  <div className="text-6xl font-bold text-amber-700">{woodAnniversarySignificance.years}</div>
                  <div className="text-amber-600">Years Together</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Traditional Gift</div>
                  <div className="font-bold text-amber-800">{woodAnniversarySignificance.traditionalGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Modern Gift</div>
                  <div className="font-bold text-amber-800">{woodAnniversarySignificance.modernGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Flower</div>
                  <div className="font-bold text-amber-800">{woodAnniversarySignificance.flower}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Symbol</div>
                  <div className="font-bold text-amber-800">Strength & Roots</div>
                </div>
              </div>
              
              <p className="text-center text-amber-700 italic text-lg">
                "{woodAnniversarySignificance.meaning}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            5th Anniversary Packages
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
            <Link href="/packages" className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all">
              View All Package Details
            </Link>
          </div>
        </div>
      </section>

      {/* Wood-Themed Activities */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Wood Anniversary Activities
          </h2>
          <p className="text-amber-700 text-center mb-12 max-w-2xl mx-auto">
            Unique experiences that embrace the wood theme
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {woodThemedActivities.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl text-amber-800">{item.activity}</h3>
                    {item.emotional && <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />}
                  </div>
                  <p className="text-amber-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Décor Theme */}
      <section className="py-16 bg-gradient-to-br from-amber-700 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Rustic Woodland Décor Theme
            </h2>
            <p className="text-amber-200 mb-8 text-lg italic">"{decorTheme.ambiance}"</p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-bold text-xl mb-4">Color Palette</h3>
                <div className="flex flex-wrap gap-2">
                  {decorTheme.colors.map((color, i) => (
                    <span key={i} className="bg-white/10 px-4 py-2 rounded-full text-sm">{color}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Décor Elements</h3>
                <div className="flex flex-wrap gap-2">
                  {decorTheme.elements.map((element, i) => (
                    <span key={i} className="bg-white/10 px-4 py-2 rounded-full text-sm">{element}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Ideas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wood Anniversary Gift Ideas
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {giftIdeas.map((item, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6 text-center">
                <Gift className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-amber-800 mb-1">{item.gift}</h3>
                <p className="text-amber-600 text-sm">{item.forWho}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            5th Anniversary FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
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
            <TreeDeciduous className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Celebrate Five Strong Years
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              You've built something solid together. Let us help you celebrate the roots you've grown and the branches yet to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We want to plan our 5th anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Plan Wood Anniversary
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
