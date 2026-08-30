import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Users, Crown, Diamond, Gem, Sparkles, Wine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Anniversary Celebration Vadodara | Premium Anniversary Party',
  description: 'Experience a luxury anniversary celebration in Vadodara. Premium venues, fine dining, designer décor & world-class service. Exclusive packages from ₹49,999. Call +91 7487888730.',
  keywords: 'luxury anniversary celebration vadodara, premium anniversary party, high-end anniversary venue, exclusive anniversary celebration',
  openGraph: {
    title: 'Luxury Anniversary Celebration in Vadodara',
    description: 'The finest anniversary experience in Vadodara. Where every detail speaks of elegance.',
    type: 'website',
  },
  alternates: {
    canonical: '/luxury-anniversary-celebration-vadodara',
  },
};

const luxuryPhilosophy = {
  title: "What Makes It Luxury?",
  tagline: "Luxury isn't about price — it's about experience",
  principles: [
    { aspect: "Attention to Detail", description: "Every element is curated, from napkin folds to lighting temperatures" },
    { aspect: "Premium Materials", description: "Real flowers, fine linens, crystal glassware, imported décor" },
    { aspect: "Exceptional Service", description: "Dedicated team anticipating your needs before you ask" },
    { aspect: "Exclusive Access", description: "VIP treatment, private spaces, personalized experiences" },
    { aspect: "Memorable Moments", description: "Surprises, touches, and details you'll remember forever" }
  ]
};

const luxuryPackages = [
  {
    name: "Platinum Experience",
    price: "₹49,999",
    duration: "6 hours",
    guests: "Up to 30 guests",
    includes: [
      "Premium private venue",
      "Designer anniversary décor",
      "Welcome champagne/mocktails",
      "5-course gourmet dinner",
      "Live classical musician",
      "Professional photography",
      "Luxury anniversary cake",
      "Dedicated event manager",
      "Valet parking for guests"
    ]
  },
  {
    name: "Diamond Grandeur",
    price: "₹89,999",
    duration: "8 hours",
    guests: "Up to 75 guests",
    includes: [
      "Luxury venue with VIP access",
      "International-style décor theme",
      "Full beverage service",
      "Multi-course fine dining",
      "Live band (3 pieces)",
      "Photo + cinematic video",
      "Designer cake + dessert bar",
      "Complete event management",
      "Luxury gift hampers for couple",
      "Guest favors included"
    ],
    popular: true
  },
  {
    name: "Royal Celebration",
    price: "₹1,49,999+",
    duration: "Full day",
    guests: "Up to 150 guests",
    includes: [
      "Premium venue exclusive booking",
      "Bespoke theme design",
      "Celebrity chef experience",
      "Premium bar service",
      "Live entertainment ensemble",
      "Multi-camera video production",
      "Fireworks/drone show option",
      "Complete guest management",
      "Transportation arrangement",
      "Overnight stay for couple",
      "Personalized luxury gifts"
    ]
  }
];

const luxuryTouches = [
  "Fresh imported flowers from Holland",
  "Hand-calligraphed place cards",
  "Personalized menu cards",
  "Premium table linens",
  "Crystal centerpieces",
  "Designer napkin rings",
  "Mood lighting design",
  "Fragrance curation for venue",
  "Live floral installation",
  "Premium cutlery and crockery",
  "Welcome gift boxes for guests",
  "Personalized anniversary logo"
];

const gourmetExperience = {
  title: "The Culinary Journey",
  description: "Our luxury celebrations feature curated menus designed by experienced chefs",
  highlights: [
    { course: "Amuse-Bouche", description: "Chef's signature opening bite" },
    { course: "Appetizer Selection", description: "Global cuisine small plates" },
    { course: "Soup/Palate Cleanser", description: "Seasonal fresh preparation" },
    { course: "Main Course", description: "Choice of international cuisines" },
    { course: "Dessert Presentation", description: "Artfully plated sweet finale" },
    { course: "Petit Fours", description: "With coffee/chai service" }
  ]
};

const entertainmentOptions = [
  { option: "Classical Musicians", description: "Violin, piano, flute duos or trios" },
  { option: "Live Band", description: "Jazz, retro, or contemporary covers" },
  { option: "DJ Experience", description: "High-end sound and lighting" },
  { option: "Dance Performers", description: "Classical, Bollywood, or contemporary" },
  { option: "Memory Video", description: "Professionally produced love story" },
  { option: "Fireworks Display", description: "Grand finale moment" }
];

const whyLuxury = [
  { reason: "Milestone Anniversaries", detail: "25th, 50th, or significant years deserve extraordinary celebrations" },
  { reason: "Status & Standing", detail: "When your celebration reflects your position and taste" },
  { reason: "Once-in-a-Lifetime", detail: "Some celebrations happen only once — they should be perfect" },
  { reason: "Impressing Guests", detail: "When your guest list includes influential people" },
  { reason: "Making Up", detail: "If you've missed earlier anniversaries, go all out this time" },
  { reason: "Pure Love", detail: "Because your partner deserves nothing but the best" }
];

const testimonialHighlight = {
  quote: "We've attended celebrations at 5-star hotels in Mumbai and Delhi. This was better. The personal attention, the customization, the way they anticipated our needs — truly world-class.",
  couple: "The Patels",
  occasion: "40th Anniversary, 80 guests"
};

const faqs = [
  {
    question: "What's included in a luxury anniversary celebration?",
    answer: "Everything from premium venue booking, designer décor, gourmet catering, professional photography and videography, live entertainment, event management, and personalized touches that make your celebration unique. Every detail is curated for excellence."
  },
  {
    question: "How far in advance should we book?",
    answer: "For luxury celebrations, we recommend booking at least 6-8 weeks in advance. This allows time for vendor coordination, custom décor creation, and proper planning. Premium dates (weekends, festive periods) need even earlier booking."
  },
  {
    question: "Can you recreate a specific theme or destination?",
    answer: "Yes! Our design team can create themed experiences — Paris café, Mediterranean terrace, Rajasthani royal, Japanese garden, or any concept you envision. We source materials and elements to bring your vision to life."
  },
  {
    question: "What about dietary requirements for fine dining?",
    answer: "Our chefs are experienced in catering to diverse dietary needs — Jain, gluten-free, vegan, or any specific requirements. We ensure the luxury experience is maintained while accommodating all needs."
  },
  {
    question: "Is the pricing all-inclusive?",
    answer: "Our quoted packages are comprehensive. We'll provide a detailed breakdown during consultation so you know exactly what's included. Any additions or customizations are quoted separately and transparently."
  },
  {
    question: "Can you arrange luxury transportation?",
    answer: "Absolutely. We can coordinate premium car rentals, vintage vehicle hire, or even helicopter arrival for ultra-luxury celebrations. Transportation can be arranged for the couple or all guests."
  }
];

export default function LuxuryAnniversaryCelebrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-950 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
              <Crown className="w-5 h-5 text-amber-300" />
              <span className="text-sm font-medium text-amber-200">Luxury Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Luxury Anniversary Celebration in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-4 max-w-3xl mx-auto">
              Where Elegance Meets Celebration
            </p>
            <p className="text-lg text-amber-100/80 mb-8 max-w-2xl mx-auto">
              For couples who expect the extraordinary. Premium venues, impeccable service, designer experiences — an anniversary celebration worthy of your love story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 text-amber-950 px-8 py-4 rounded-full font-semibold hover:bg-amber-300 transition-all"
              >
                <Phone className="w-5 h-5" />
                Plan Luxury Celebration
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to plan a luxury anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Philosophy */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {luxuryPhilosophy.title}
          </h2>
          <p className="text-amber-700 text-center mb-12 max-w-2xl mx-auto italic">
            {luxuryPhilosophy.tagline}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {luxuryPhilosophy.principles.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                <Diamond className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="font-bold text-lg text-amber-800 mb-2">{item.aspect}</h3>
                <p className="text-amber-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Luxury Celebration Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each package is a complete luxury experience
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {luxuryPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-amber-800 to-amber-900 text-white ring-2 ring-amber-400'
                    : 'bg-amber-50 border border-amber-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST EXCLUSIVE
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-amber-800'}`}>
                  {pkg.name}
                </h3>
                <div className={`flex items-center gap-4 mb-4 text-sm ${pkg.popular ? 'text-amber-200' : 'text-amber-600'}`}>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {pkg.guests}
                  </span>
                </div>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-amber-700'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Crown className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-amber-300' : 'text-amber-500'}`} />
                      <span className={pkg.popular ? 'text-amber-100' : 'text-amber-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I'm interested in the "${pkg.name}" luxury anniversary package`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-amber-400 text-amber-900 hover:bg-amber-300'
                      : 'bg-amber-800 text-white hover:bg-amber-900'
                  }`}
                >
                  Request Consultation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Touches */}
      <section className="py-16 bg-gradient-to-br from-amber-800 to-amber-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-amber-300" />
            Signature Luxury Touches
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {luxuryTouches.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-amber-400/30 text-amber-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gourmet Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wine className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{gourmetExperience.title}</h2>
              <p className="text-gray-600">{gourmetExperience.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gourmetExperience.highlights.map((item, index) => (
                <div key={index} className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <h3 className="font-bold text-amber-800 mb-2">{item.course}</h3>
                  <p className="text-amber-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Options */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Entertainment & Experiences
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainmentOptions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                <h3 className="font-bold text-amber-800 mb-2">{item.option}</h3>
                <p className="text-amber-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-amber-400 mb-6">"</div>
            <p className="text-xl md:text-2xl italic text-amber-100 mb-6">
              {testimonialHighlight.quote}
            </p>
            <div className="text-amber-300 font-semibold">{testimonialHighlight.couple}</div>
            <div className="text-amber-400 text-sm">{testimonialHighlight.occasion}</div>
          </div>
        </div>
      </section>

      {/* Why Luxury */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            When to Choose Luxury
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {whyLuxury.map((item, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6 flex flex-col md:flex-row gap-4 border border-amber-100">
                <div className="md:w-1/3">
                  <h3 className="font-bold text-lg text-amber-800">{item.reason}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-amber-700">{item.detail}</p>
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
            Luxury Celebration FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
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
            <Crown className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Love Deserves the Best
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Don't settle for ordinary. Create an anniversary celebration that matches the extraordinary love you share. Let us design a luxury experience you'll remember forever.
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
                href="https://wa.me/917487888730?text=Hi! I want to discuss a luxury anniversary celebration"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book Luxury Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
