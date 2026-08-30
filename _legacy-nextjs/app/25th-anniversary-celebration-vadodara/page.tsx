import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Crown, Star, Heart, Users, Camera, Music, Utensils, Gift, Sparkles } from 'lucide-react';
import { packages, formatPrice } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: '25th Silver Jubilee Anniversary Celebration Vadodara | Silver Anniversary Venues',
  description: 'Celebrate your 25th Silver Jubilee Anniversary in Vadodara with grandeur. Premium silver-themed decorations, elegant venues & complete milestone celebration packages. Call +91 7487888730.',
  keywords: '25th anniversary celebration vadodara, silver jubilee anniversary, silver anniversary vadodara, 25 years wedding anniversary',
  openGraph: {
    title: '25th Silver Jubilee Anniversary Celebration in Vadodara',
    description: 'A quarter century of love deserves a celebration in silver. Premium venues and packages for your silver jubilee.',
    type: 'website',
  },
  alternates: {
    canonical: '/25th-anniversary-celebration-vadodara',
  },
};

const silverJubileeSignificance = {
  years: 25,
  traditionalGift: "Silver",
  modernGift: "Silver",
  gemstone: "Silver Jubilee (no specific gem)",
  flower: "Iris",
  meaning: "Silver represents radiance and brilliance — like your love that has shone bright for 25 years. It symbolizes purity, clarity, and the precious nature of enduring love."
};

const decorationElements = [
  { element: "Silver Balloon Cascade", description: "Metallic silver balloons with white accents creating elegant arches" },
  { element: "Crystal Centerpieces", description: "Silver candelabras with crystal accents on every table" },
  { element: "25 Years Photo Timeline", description: "A visual journey through 25 years displayed beautifully" },
  { element: "Silver Backdrop", description: "Shimmering silver backdrop with '25 Years' in elegant typography" },
  { element: "Memory Lane Setup", description: "Photo gallery showcasing your journey from wedding to now" },
  { element: "Silver Entrance Arch", description: "Grand silver arch welcoming guests to the celebration" }
];

const celebrationIdeas = [
  {
    idea: "Renew Your Vows",
    description: "After 25 years, stand together again and renew your commitment. We arrange everything from the mandap to the pheras — a beautiful second beginning.",
    emotional: true
  },
  {
    idea: "25 Years Video Documentary",
    description: "We compile photos, videos, and voice messages from family and friends into a professionally edited documentary of your love story.",
    emotional: true
  },
  {
    idea: "Silver Anniversary Trip Reveal",
    description: "Surprise your partner with a destination reveal during the party — tickets to their dream location as a 25-year gift.",
    emotional: false
  },
  {
    idea: "Children's Tribute Performance",
    description: "Coordinate with your kids (and grandkids!) for a surprise dance, speech, or musical performance dedicated to you.",
    emotional: true
  },
  {
    idea: "Recreate Your Wedding",
    description: "Same songs, same menu, same vows — but 25 years wiser and more in love. We help recreate key elements from your original wedding.",
    emotional: true
  }
];

const milestoneActivities = [
  "Toast by children and grandchildren",
  "Silver cake cutting ceremony",
  "First dance to 'your song'",
  "Memory book signing by guests",
  "Time capsule to open at 50th",
  "Video messages from guests unable to attend"
];

const faqs = [
  {
    question: "Why is 25th anniversary called Silver Jubilee?",
    answer: "The term 'Silver Jubilee' comes from the tradition of associating precious metals with milestone anniversaries. Silver, being valuable yet attainable, perfectly represents 25 years — a significant achievement that sets the foundation for even more precious milestones like Gold (50 years)."
  },
  {
    question: "How many guests can your venue accommodate for a silver jubilee?",
    answer: "Our venue can accommodate from intimate gatherings of 25 guests to grand celebrations of 150+ guests. For larger events, we can arrange additional space or recommend partner venues that maintain our quality standards."
  },
  {
    question: "What's included in the silver theme decorations?",
    answer: "Our silver theme includes metallic silver balloons, silver and white draping, crystal centerpieces, silver table runners, '25' numerals, photo displays with silver frames, silver backdrop with your names, and optional silver confetti for celebrations."
  },
  {
    question: "Can you arrange for a vow renewal ceremony?",
    answer: "Absolutely! Vow renewal is one of the most touching silver jubilee traditions. We can arrange everything from a simple ceremony with just your family to a full traditional setup with mandap, pandit, and all rituals."
  },
  {
    question: "What's the best time of year for a 25th anniversary celebration?",
    answer: "Many couples prefer celebrating on their actual anniversary date. However, October to February offers the most pleasant weather in Vadodara for outdoor or semi-outdoor celebrations. We can make any date special regardless of season."
  },
  {
    question: "How do you make a 25th anniversary different from regular parties?",
    answer: "We focus on the journey, not just the day. Photo timelines, memory activities, tribute speeches, and symbolic elements (silver gifts, vow renewal) make this distinctly a milestone celebration, not just another party."
  }
];

export default function SilverAnniversaryCelebrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Crown className="w-5 h-5 text-slate-300" />
              <span className="text-sm font-medium">Silver Jubilee Celebrations</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              25th Silver Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
              A Quarter Century of Love Deserves Silver & Splendor
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              25 years of marriage, thousands of shared moments, countless memories. Celebrate this magnificent milestone with the grandeur it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all"
              >
                <Phone className="w-5 h-5" />
                Plan Silver Jubilee
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We're celebrating our 25th Silver Jubilee Anniversary and need help planning the celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Significance of Silver */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12 border border-slate-200">
              <div className="text-center mb-8">
                <div className="text-7xl font-bold text-slate-600 mb-2">{silverJubileeSignificance.years}</div>
                <div className="text-xl text-slate-500">Years of Marriage</div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Traditional Gift</div>
                  <div className="font-bold text-slate-700">{silverJubileeSignificance.traditionalGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Modern Gift</div>
                  <div className="font-bold text-slate-700">{silverJubileeSignificance.modernGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Flower</div>
                  <div className="font-bold text-slate-700">{silverJubileeSignificance.flower}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Symbol</div>
                  <div className="font-bold text-slate-700">Radiance & Purity</div>
                </div>
              </div>
              
              <p className="text-center text-slate-600 italic text-lg">
                "{silverJubileeSignificance.meaning}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Packages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            25th Anniversary Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our romantic celebration packages
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all group h-full">
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

      {/* Silver Decoration Elements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Silver Theme Decoration Elements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every detail shimmers with silver elegance
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {decorationElements.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100">
                <Sparkles className="w-8 h-8 text-slate-500 mb-3" />
                <h3 className="font-bold text-lg mb-2">{item.element}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebration Ideas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Making Your 25th Unforgettable
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ideas that turn a celebration into a cherished memory
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {celebrationIdeas.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">{item.idea}</h3>
                    {item.emotional && (
                      <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                    )}
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Activities */}
      <section className="py-16 bg-gradient-to-br from-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Activities for Your Silver Celebration
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {milestoneActivities.map((activity, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Silver Jubilee Celebration FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Crown className="w-16 h-16 text-slate-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Celebrate 25 Silver Years in Style
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              A quarter century of love, laughter, and togetherness. Let us help you honor this magnificent milestone with the celebration it deserves.
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
                href="https://wa.me/917487888730?text=Hi! We want to plan our 25th Silver Jubilee Anniversary celebration in Vadodara"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Plan Silver Jubilee
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
