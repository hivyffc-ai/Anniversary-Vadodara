import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Diamond, Star, Heart, Users, Camera, Clock, Gift, Sparkles, Calendar } from 'lucide-react';
import { packages, formatPrice } from '@/lib/anniversary-config';

export const metadata: Metadata = {
  title: '10th Anniversary Celebration Vadodara | Tin & Aluminum Anniversary Party',
  description: 'Celebrate your 10th wedding anniversary (Tin Anniversary) in Vadodara. A decade of love deserves a special celebration. Premium venues & packages. Call +91 7487888730.',
  keywords: '10th anniversary celebration vadodara, tin anniversary, 10 years wedding anniversary, decade anniversary party vadodara',
  openGraph: {
    title: '10th Tin Anniversary Celebration in Vadodara',
    description: 'A decade of love, a lifetime of memories. Celebrate 10 beautiful years together with us.',
    type: 'website',
  },
  alternates: {
    canonical: '/10th-anniversary-celebration-vadodara',
  },
};

const decadeSignificance = {
  years: 10,
  traditionalGift: "Tin or Aluminum",
  modernGift: "Diamond Jewelry",
  flower: "Daffodil",
  meaning: "Tin represents durability and flexibility — like your marriage that has bent but never broken through 10 years of life's challenges. Modern gift of diamonds symbolizes how you've polished each other into brilliance."
};

const decadeMilestones = [
  { year: 1, title: "The Beginning", description: "First home, first arguments, first making up" },
  { year: 2, title: "Finding Rhythm", description: "Learning each other's habits, building routines" },
  { year: 3, title: "Deeper Connection", description: "Moving past honeymoon phase into real partnership" },
  { year: 5, title: "Halfway Milestone", description: "Wood anniversary — roots growing strong" },
  { year: 7, title: "The Itch Year", description: "Survived the myth, came out stronger" },
  { year: 10, title: "A Full Decade", description: "Tin/Diamond — flexible, unbreakable, brilliant" }
];

const celebrationIdeas = [
  {
    title: "10 Course Tasting Menu",
    description: "A culinary journey with 10 courses — each representing a year of your marriage with dishes that hold meaning to your story",
    highlight: "Unique dining experience"
  },
  {
    title: "Decade Photo Wall",
    description: "A stunning display featuring photos from each year — watching yourselves grow together over 3,650 days",
    highlight: "Visual memory lane"
  },
  {
    title: "10 Things I Love About You",
    description: "Each partner presents 10 reasons they love the other — emotional, fun, and unforgettable",
    highlight: "Heartfelt moment"
  },
  {
    title: "Video Messages from 10 People",
    description: "Collect video messages from 10 important people in your lives — family and friends sharing their perspective on your love",
    highlight: "Surprise tearjerker"
  },
  {
    title: "Time Capsule: 2016-2026",
    description: "Create a capsule with items from your first year and open it together — plus add items for the next decade",
    highlight: "Past meets future"
  }
];

const tenYearStats = [
  { number: "3,650", label: "Days Together" },
  { number: "87,600", label: "Hours of Love" },
  { number: "10", label: "New Year's Kisses" },
  { number: "20", label: "Diwalis Celebrated" },
  { number: "Countless", label: "Cups of Chai Shared" }
];

const faqs = [
  {
    question: "What is the 10th anniversary traditionally called?",
    answer: "The 10th anniversary is traditionally called the 'Tin Anniversary' or 'Aluminum Anniversary.' These metals symbolize the flexibility and durability needed to sustain a decade of marriage. The modern gift is diamond jewelry, representing how your relationship has become brilliant and precious over time."
  },
  {
    question: "How can we make our 10th anniversary celebration unique?",
    answer: "Focus on the theme of '10' — 10 guests who've been most important, 10 photos from each year, 10-course dinner, gifts with 10 items. We can help create a decade-themed celebration that's personal and meaningful to your journey."
  },
  {
    question: "Should we invite guests or keep it intimate for 10th anniversary?",
    answer: "Both work beautifully! Many couples prefer an intimate celebration for 10th, saving grand parties for 25th or 50th. However, if you love celebrations, a party with your closest 20-30 people can be wonderful. We offer packages for both."
  },
  {
    question: "What's a good surprise element for a 10th anniversary?",
    answer: "Popular surprises include: video compilation from friends/family, recreating your first date, arranging a call with someone far away, renewing vows privately, or revealing a gift you've been secretly planning (like a trip or jewelry)."
  },
  {
    question: "How far in advance should we book for 10th anniversary?",
    answer: "For intimate dinners, 1-2 weeks is usually fine. For parties with guests, we recommend 3-4 weeks minimum. Peak seasons (November-February) may need earlier booking."
  }
];

export default function TenthAnniversaryCelebrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Diamond className="w-5 h-5" />
              <span className="text-sm font-medium">Tin Anniversary | Modern: Diamond</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              10th Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-4 max-w-3xl mx-auto">
              A Decade of Love. 3,650 Days of Togetherness.
            </p>
            <p className="text-lg text-amber-200 mb-8 max-w-2xl mx-auto">
              Ten years ago you said "I do." Today, you're still choosing each other. That's worth celebrating in a big way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Celebrate Your Decade
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! We're celebrating our 10th wedding anniversary and would like to plan something special"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Year Stats */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {tenYearStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600">{stat.number}</div>
                <div className="text-sm text-amber-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decade Significance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Meaning of 10 Years
            </h2>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-200">
              <div className="text-center mb-8">
                <div className="text-8xl font-bold text-amber-600 mb-2">{decadeSignificance.years}</div>
                <div className="text-xl text-amber-700">Years of Marriage</div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Traditional Gift</div>
                  <div className="font-bold text-amber-800">{decadeSignificance.traditionalGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Modern Gift</div>
                  <div className="font-bold text-amber-800">{decadeSignificance.modernGift}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Flower</div>
                  <div className="font-bold text-amber-800">{decadeSignificance.flower}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-amber-600 mb-1">Symbol</div>
                  <div className="font-bold text-amber-800">Durability & Brilliance</div>
                </div>
              </div>
              
              <p className="text-center text-amber-700 italic text-lg">
                "{decadeSignificance.meaning}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decade Milestones Timeline */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your Journey Through a Decade
          </h2>
          <p className="text-amber-700 text-center mb-12 max-w-2xl mx-auto">
            Every couple's decade looks different, but these milestones resonate with many
          </p>
          
          <div className="max-w-3xl mx-auto">
            {decadeMilestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${
                    milestone.year === 10 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-white border-2 border-amber-300 text-amber-600'
                  }`}>
                    {milestone.year}
                  </div>
                  {index < decadeMilestones.length - 1 && (
                    <div className="w-0.5 h-full bg-amber-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="font-bold text-lg text-amber-800">{milestone.title}</h3>
                  <p className="text-amber-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebration Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            10th Anniversary Celebration Packages
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

      {/* Celebration Ideas */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Creative Ways to Celebrate a Decade
          </h2>
          <p className="text-amber-700 text-center mb-12 max-w-2xl mx-auto">
            Ideas that embrace the "10" theme and make your celebration unforgettable
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {celebrationIdeas.map((idea, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-xs font-bold text-amber-600 mb-2 uppercase">{idea.highlight}</div>
                <h3 className="font-bold text-xl mb-3 text-amber-800">{idea.title}</h3>
                <p className="text-amber-700 text-sm">{idea.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Section: Letter to Your Decade */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Letter to Your First Decade
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
              <p className="text-lg leading-relaxed text-amber-50 italic">
                "Dear Us from 10 years ago,<br/><br/>
                You had no idea what you were getting into, did you? The late nights, the early mornings, the disagreements about whose turn it is to do the dishes. But also — the inside jokes no one else understands, the comfort of knowing someone's always in your corner, the way 'home' became a person instead of a place.<br/><br/>
                You made it. Not just survived, but thrived. And the best part? This is just the beginning.<br/><br/>
                Love, Us — 10 years wiser"
              </p>
            </div>
            <p className="mt-6 text-amber-200">
              Want to include a similar letter reading in your celebration? We can help make it special.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            10th Anniversary FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-amber-800">{faq.question}</h3>
                <p className="text-amber-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">💎</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-800">
              Ready to Celebrate Your Perfect 10?
            </h2>
            <p className="text-amber-700 text-lg mb-8">
              A decade deserves more than just a dinner out. Let us create a celebration that honors every day of your 10-year journey.
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
                href="https://wa.me/917487888730?text=Hi! We're celebrating our 10th anniversary and want to make it special"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Plan Our Decade Party
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
