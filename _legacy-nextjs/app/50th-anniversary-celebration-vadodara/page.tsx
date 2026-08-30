import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Crown, Star, Heart, Users, Camera, Music, Gift, Sparkles, Award } from 'lucide-react';
import { packages, formatPrice } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: '50th Golden Anniversary Celebration Vadodara | Golden Jubilee Party Venues',
  description: 'Celebrate 50 years of marriage with a grand Golden Anniversary celebration in Vadodara. Premium gold-themed venues, complete family event packages. Call +91 7487888730.',
  keywords: '50th anniversary celebration vadodara, golden anniversary, golden jubilee party, 50 years wedding anniversary vadodara',
  openGraph: {
    title: '50th Golden Anniversary Celebration in Vadodara',
    description: 'Half a century of love deserves a celebration in gold. Grand venues and packages for your golden jubilee.',
    type: 'website',
  },
  alternates: {
    canonical: '/50th-anniversary-celebration-vadodara',
  },
};

const goldenJubileeSignificance = {
  years: 50,
  traditionalGift: "Gold",
  modernGift: "Gold",
  flower: "Yellow Roses & Violets",
  meaning: "Gold represents the most precious achievement in marriage — 50 years of shared life, unwavering commitment, and a love that has only grown more valuable with time. Like gold, your love has proven timeless and invaluable."
};

const decadesJourney = [
  { decade: "1st Decade", years: "1-10", description: "Building the foundation, starting a family, learning to be 'we'" },
  { decade: "2nd Decade", years: "11-20", description: "Raising children, career growth, becoming partners in every sense" },
  { decade: "3rd Decade", years: "21-30", description: "Silver years, watching children grow, rediscovering each other" },
  { decade: "4th Decade", years: "31-40", description: "Empty nest adventures, grandchildren, deeper appreciation" },
  { decade: "5th Decade", years: "41-50", description: "Golden years, legacy, the reward of lifelong partnership" }
];

const goldenDecorElements = [
  "Gold balloon arches and cascades",
  "50-year photo gallery with gold frames",
  "Golden throne seating for couple",
  "Gold table runners and centerpieces",
  "Golden backdrop with names and date",
  "Gold confetti and streamers",
  "Golden candelabras",
  "Memory lane walkway",
  "Family tree display",
  "Golden draping throughout venue"
];

const ceremonyIdeas = [
  {
    name: "Vow Renewal Ceremony",
    description: "Recreate the magic of your wedding day. Full traditional setup with mandap, pheras, and all rituals — this time with your children, grandchildren, and decades of love watching.",
    emotional: true
  },
  {
    name: "Golden Crown Ceremony",
    description: "Children and grandchildren crown the couple as the king and queen of the family, symbolizing their role as the foundation of the family.",
    emotional: true
  },
  {
    name: "50 Blessings Collection",
    description: "Collect one blessing or memory from 50 people — family, friends, neighbors. Read them aloud during the celebration.",
    emotional: true
  },
  {
    name: "Through the Decades Video",
    description: "A professionally edited documentary featuring photos, videos, and interviews from children and grandchildren about what the couple means to them.",
    emotional: true
  },
  {
    name: "Recreation of Wedding Photo",
    description: "Recreate your original wedding photo — same pose, 50 years later. Displayed side by side for an emotional comparison.",
    emotional: true
  }
];

const specialConsiderations = [
  {
    concern: "Elderly Guest Comfort",
    solution: "Ground-floor venue, comfortable seating with backrests, accessible washrooms, climate control, first-aid on standby"
  },
  {
    concern: "Dietary Needs",
    solution: "Soft food options, low-spice items, diabetic-friendly desserts, traditional favorites prepared with health in mind"
  },
  {
    concern: "Timing & Pacing",
    solution: "Events paced to avoid fatigue, rest areas available, shorter ceremony options, flexible timing"
  },
  {
    concern: "Family Coordination",
    solution: "Dedicated coordinator for family, transportation assistance for out-of-town guests, accommodation recommendations"
  }
];

const faqs = [
  {
    question: "How do we plan a 50th anniversary with guests from different cities?",
    answer: "We can help coordinate everything! We provide guest list management, digital invitations, accommodation suggestions near our venue, and even transportation coordination. Our team has experience managing large family gatherings with guests from across India and abroad."
  },
  {
    question: "What's appropriate for a 50th anniversary celebration in Indian culture?",
    answer: "Traditional elements like vow renewal (pheras), aarti, ashirwad ceremony from elders, and family blessings are popular. We blend these with modern celebration elements. The couple often wears wedding-like attire again — saree/sherwani in gold tones."
  },
  {
    question: "How do we involve grandchildren in the celebration?",
    answer: "Popular ideas include: grandchildren doing a choreographed dance, presenting a 'This Is Your Life' presentation, crowning ceremony, singing songs, reading their own messages, and helping with cake cutting."
  },
  {
    question: "Can you help with vow renewal arrangements?",
    answer: "Absolutely! We can arrange the full setup — mandap, pandit, sacred fire, flowers, and all traditional requirements. Many couples choose a simplified version with just pheras and blessing, which we can also arrange."
  },
  {
    question: "What if the elderly couple has health limitations?",
    answer: "We design the entire event keeping their comfort first. Seating is arranged so they don't need to move much. Events come to them. We ensure wheelchair accessibility, comfortable seating, and pace the event to prevent fatigue."
  },
  {
    question: "How do we create a meaningful program that doesn't drag?",
    answer: "We curate a program with emotional high points spread throughout. Welcome, photo viewing, ceremony, meal, speeches (limited to 3-5 key people), entertainment, cake, and blessing. Total duration typically 4-5 hours with natural breaks."
  }
];

export default function GoldenAnniversaryCelebrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-700 via-amber-600 to-yellow-800 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Crown className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Golden Jubilee Celebrations</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              50th Golden Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-yellow-200 mb-4 max-w-3xl mx-auto">
              Half a Century of Love. A Lifetime of Memories.
            </p>
            <p className="text-lg text-yellow-300 mb-8 max-w-2xl mx-auto">
              50 years. 18,250 days. One incredible journey. Honor the couple who showed the world what forever looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-yellow-700 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Plan Golden Jubilee
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We're planning our parents'/grandparents' 50th Golden Anniversary celebration"
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
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-yellow-200">
              <div className="text-center mb-8">
                <div className="text-8xl font-bold text-yellow-600 mb-2">{goldenJubileeSignificance.years}</div>
                <div className="text-xl text-yellow-700">Years of Marriage</div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-sm text-yellow-600 mb-1">Traditional Gift</div>
                  <div className="font-bold text-yellow-800">{goldenJubileeSignificance.traditionalGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-yellow-600 mb-1">Modern Gift</div>
                  <div className="font-bold text-yellow-800">{goldenJubileeSignificance.modernGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-yellow-600 mb-1">Flowers</div>
                  <div className="font-bold text-yellow-800">{goldenJubileeSignificance.flower}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-yellow-600 mb-1">Symbol</div>
                  <div className="font-bold text-yellow-800">Timeless Precious</div>
                </div>
              </div>
              
              <p className="text-center text-yellow-700 italic text-lg">
                "{goldenJubileeSignificance.meaning}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Decades Journey */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Journey of 50 Years
          </h2>
          <p className="text-yellow-700 text-center mb-12 max-w-2xl mx-auto">
            Every decade brought its own joys, challenges, and growth
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {decadesJourney.map((decade, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center font-bold ${
                    index === 4 ? 'bg-yellow-500 text-white' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-yellow-800 mb-1">{decade.decade}</h3>
                  <p className="text-xs text-yellow-600 mb-2">Years {decade.years}</p>
                  <p className="text-xs text-yellow-700">{decade.description}</p>
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
            50th Anniversary Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our romantic celebration packages
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all group h-full">
                  <div className="text-3xl mb-2">{pkg.emoji}</div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 text-yellow-800 group-hover:text-yellow-600 line-clamp-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs md:text-sm text-yellow-600 mb-2 line-clamp-2 hidden md:block">
                    {pkg.shortDescription}
                  </p>
                  <div className="text-lg md:text-2xl font-bold text-yellow-700">
                    {formatPrice(pkg.price)}
                  </div>
                  <div className="text-xs text-yellow-500 mt-1">
                    {pkg.cakeIncluded ? '🎂 Cake included' : '🎂 +₹500'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/packages" className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-all">
              View All Package Details
            </Link>
          </div>
        </div>
      </section>

      {/* Ceremony Ideas */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Meaningful Ceremony Ideas
          </h2>
          <p className="text-yellow-700 text-center mb-12 max-w-2xl mx-auto">
            Make the celebration as special as 50 years deserve
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {ceremonyIdeas.map((idea, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl text-yellow-800">{idea.name}</h3>
                    {idea.emotional && <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />}
                  </div>
                  <p className="text-yellow-700">{idea.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decoration Elements */}
      <section className="py-16 bg-gradient-to-br from-yellow-600 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Golden Theme Decoration
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {goldenDecorElements.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            We Think of Everything
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Golden anniversaries need special attention to detail
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialConsiderations.map((item, index) => (
              <div key={index} className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-3">{item.concern}</h3>
                <p className="text-yellow-700 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Golden Anniversary FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-yellow-800">{faq.question}</h3>
                <p className="text-yellow-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Honor 50 Golden Years of Love
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              They've spent half a century building a life, a family, and a legacy. Let us help you give them the golden celebration they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We want to plan a 50th Golden Anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Plan Golden Jubilee
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
