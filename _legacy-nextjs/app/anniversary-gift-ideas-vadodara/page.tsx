import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Gift, Clock, Sparkles, Camera, Music, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anniversary Gift Ideas Vadodara | Unique Anniversary Gifts',
  description: 'Find the perfect anniversary gift in Vadodara. Unique experiences, personalized gifts & romantic surprises. From ₹999 to luxury packages. Call +91 7487888730.',
  keywords: 'anniversary gift ideas vadodara, unique anniversary gifts, romantic anniversary gifts, anniversary surprise gifts',
  openGraph: {
    title: 'Anniversary Gift Ideas in Vadodara',
    description: 'Beyond flowers and chocolates. Unique and meaningful anniversary gift experiences.',
    type: 'website',
  },
  alternates: {
    canonical: '/anniversary-gift-ideas-vadodara',
  },
};

const giftPhilosophy = {
  title: "Gifts That Mean Something",
  tagline: "The best gifts aren't things — they're experiences and memories",
  principles: [
    { aspect: "Personal", description: "Gifts that show you know your partner deeply" },
    { aspect: "Experiential", description: "Moments together matter more than objects" },
    { aspect: "Thoughtful", description: "The thought behind it matters most" },
    { aspect: "Memorable", description: "Creates stories you'll tell for years" }
  ]
};

const giftByBudget = [
  {
    range: "Under ₹2,000",
    ideas: [
      { gift: "Surprise Video Message Compilation", description: "Friends and family send video wishes — we compile them" },
      { gift: "Anniversary Love Letter Box", description: "Handwritten letters in a beautiful keepsake box" },
      { gift: "Couple Photo Frame with Memories", description: "Custom frame with your favorite photos" },
      { gift: "Romantic Home Dinner Setup", description: "We set up your home for a candlelit dinner" }
    ]
  },
  {
    range: "₹2,000 - ₹5,000",
    ideas: [
      { gift: "Candlelight Dinner Experience", description: "Romantic dinner at our venue with décor" },
      { gift: "Couple Photoshoot Session", description: "Professional 30-minute couple photography" },
      { gift: "Customized Anniversary Video", description: "Professionally edited memory video" },
      { gift: "Surprise Breakfast in Bed Setup", description: "We arrange the surprise, you enjoy the moment" }
    ]
  },
  {
    range: "₹5,000 - ₹15,000",
    ideas: [
      { gift: "Private Rooftop Dinner", description: "Exclusive rooftop experience under the stars" },
      { gift: "Couple Spa Experience", description: "Relaxing spa day together" },
      { gift: "Adventure Activity Date", description: "Hot air balloon, paragliding, or similar experience" },
      { gift: "Private Concert/Performance", description: "Musician performs just for you" }
    ]
  },
  {
    range: "₹15,000+",
    ideas: [
      { gift: "Weekend Getaway Package", description: "Arranged travel to nearby romantic destination" },
      { gift: "Luxury Celebration Experience", description: "Complete anniversary celebration package" },
      { gift: "Surprise Party Organization", description: "We plan and execute a secret celebration" },
      { gift: "Custom Memory Book Creation", description: "Professional scrapbook of your journey" }
    ]
  }
];

const giftByYear = [
  { year: "1st (Paper)", ideas: ["Love letter collection", "Custom illustration of your story", "Tickets to future events"] },
  { year: "5th (Wood)", ideas: ["Wooden photo frame", "Tree planting experience", "Wooden keepsake box"] },
  { year: "10th (Tin/Diamond)", ideas: ["Jewelry piece", "Memory time capsule", "Decade photo album"] },
  { year: "15th (Crystal)", ideas: ["Crystal décor piece", "Premium glassware set", "Crystal jewelry"] },
  { year: "25th (Silver)", ideas: ["Silver jewelry", "Silver-themed celebration", "Personalized silver item"] },
  { year: "50th (Gold)", ideas: ["Gold jewelry", "Grand celebration", "Family heritage book"] }
];

const experienceGifts = [
  {
    experience: "Surprise Candlelight Dinner",
    price: "From ₹2,999",
    description: "We set up everything — your partner walks into a romantic surprise",
    includes: ["Decorated table", "3-course meal", "Anniversary cake", "Rose petals"]
  },
  {
    experience: "Memory Video Creation",
    price: "From ₹3,499",
    description: "Professional video compiled from your photos and videos with music",
    includes: ["Photo collection from you", "Professional editing", "Music selection", "Same-day delivery option"]
  },
  {
    experience: "Private Photo Session",
    price: "From ₹4,999",
    description: "Professional couple photoshoot at scenic location",
    includes: ["1-hour session", "Professional photographer", "20 edited photos", "Optional locations"]
  },
  {
    experience: "Surprise Room Decoration",
    price: "From ₹2,499",
    description: "We transform their bedroom or living space while they're out",
    includes: ["Balloon arrangement", "Flowers & petals", "Fairy lights", "Love notes"]
  }
];

const forHim = [
  { gift: "Gadget + Dinner Date", description: "His wishlist item paired with a romantic evening" },
  { gift: "Sports/Concert Tickets + Staycation", description: "Experience he loves plus quality time together" },
  { gift: "Grooming Experience", description: "Premium salon service + couple activity" },
  { gift: "Surprise Video from Loved Ones", description: "Messages from friends and family compiled" },
  { gift: "Adventure Experience", description: "Skydiving, go-karting, or similar thrill" }
];

const forHer = [
  { gift: "Spa Day + Candlelight Dinner", description: "Relaxation followed by romance" },
  { gift: "Jewelry + Surprise Proposal Recreation", description: "Relive the proposal moment with new sparkle" },
  { gift: "Weekend Getaway Surprise", description: "Pack her bags secretly, reveal the destination" },
  { gift: "Professional Photoshoot", description: "Make her feel like a star for a day" },
  { gift: "Handwritten Memory Book", description: "Your love story in your handwriting" }
];

const lastMinuteGifts = [
  { gift: "Same-Day Video Message Compilation", price: "₹1,499", turnaround: "4-6 hours" },
  { gift: "Rush Room Decoration", price: "₹3,999", turnaround: "3-4 hours" },
  { gift: "Emergency Flower Delivery", price: "₹999+", turnaround: "2 hours" },
  { gift: "Quick Candlelight Setup", price: "₹4,999", turnaround: "Same evening" }
];

const giftMistakesToAvoid = [
  { mistake: "Generic Gifts", why: "Perfume/watch without thought shows no effort" },
  { mistake: "Forgetting Completely", why: "Worse than a bad gift — shows you don't care" },
  { mistake: "Making It About You", why: "A gift you want isn't a gift for them" },
  { mistake: "Going Too Practical", why: "An anniversary isn't the time for kitchen appliances" },
  { mistake: "Last-Year Repeat", why: "Same restaurant, same gift = no effort" }
];

const faqs = [
  {
    question: "What if I don't know what my partner wants?",
    answer: "Think about experiences they've mentioned wanting, things they've pointed out, or activities they enjoy. When in doubt, experiential gifts like dinners, getaways, or personalized memories work universally well."
  },
  {
    question: "Are experience gifts better than physical gifts?",
    answer: "Studies show experiences create longer-lasting happiness than objects. However, a combination works best — a thoughtful physical gift paired with a meaningful experience."
  },
  {
    question: "How do I plan a surprise gift?",
    answer: "We specialize in surprise execution. You tell us what you want, we coordinate everything — from distracting your partner to setting up the surprise. Your role is just to bring them to the location."
  },
  {
    question: "What's the most popular anniversary gift?",
    answer: "Candlelight dinner experiences are our most requested gift. They're romantic, memorable, and show effort without being overly expensive. Add a personalized touch like a memory video or surprise décor."
  },
  {
    question: "Can you help with last-minute gifts?",
    answer: "Yes! We have same-day options for room decorations, flower deliveries, video compilations, and dinner setups. Call us early on the day, and we'll do our best to save your anniversary."
  }
];

export default function AnniversaryGiftIdeasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 via-pink-500 to-rose-700 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Gift className="w-5 h-5 text-rose-200" />
              <span className="text-sm font-medium text-rose-200">Gift Ideas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Gift Ideas in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-rose-200 mb-4 max-w-3xl mx-auto">
              Beyond Flowers. Beyond Ordinary.
            </p>
            <p className="text-lg text-rose-100/80 mb-8 max-w-2xl mx-auto">
              Find the perfect gift that says "I love you" in a way that's meaningful, personal, and unforgettable. From experiences to surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Get Gift Advice
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I need help finding the perfect anniversary gift"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Philosophy */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {giftPhilosophy.title}
          </h2>
          <p className="text-rose-600 text-center mb-12 italic">
            {giftPhilosophy.tagline}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {giftPhilosophy.principles.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-rose-100">
                <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-rose-800 mb-2">{item.aspect}</h3>
                <p className="text-rose-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift By Budget */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Gifts By Budget
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {giftByBudget.map((budget, index) => (
              <div key={index} className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
                <h3 className="font-bold text-xl text-rose-700 mb-6">{budget.range}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {budget.ideas.map((idea, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-rose-100">
                      <h4 className="font-semibold text-rose-800 mb-2">{idea.gift}</h4>
                      <p className="text-rose-600 text-sm">{idea.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Gifts */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-rose-200" />
            Experience Gift Packages
          </h2>
          <p className="text-rose-200 text-center mb-12">
            Ready-to-book gift experiences we can arrange for you
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experienceGifts.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl text-white">{exp.experience}</h3>
                  <span className="bg-white text-rose-600 text-sm px-3 py-1 rounded-full font-semibold">{exp.price}</span>
                </div>
                <p className="text-rose-100 mb-4">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-rose-200 text-sm">
                      <Star className="w-3 h-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gifts By Year */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Traditional Anniversary Gift Guide
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {giftByYear.map((item, index) => (
              <div key={index} className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-lg text-rose-700 mb-4">{item.year}</h3>
                <ul className="space-y-2">
                  {item.ideas.map((idea, i) => (
                    <li key={i} className="flex items-center gap-2 text-rose-600 text-sm">
                      <Gift className="w-4 h-4 text-rose-400" />
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Him / For Her */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-rose-800 mb-6">Gift Ideas For Him</h2>
              <div className="space-y-4">
                {forHim.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-rose-100">
                    <h3 className="font-semibold text-rose-700 mb-1">{item.gift}</h3>
                    <p className="text-rose-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rose-800 mb-6">Gift Ideas For Her</h2>
              <div className="space-y-4">
                {forHer.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-rose-100">
                    <h3 className="font-semibold text-rose-700 mb-1">{item.gift}</h3>
                    <p className="text-rose-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Minute */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Clock className="w-10 h-10 mx-auto mb-4 text-rose-500" />
            Last-Minute Gift Rescue
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Forgot? We've got you. Same-day options available.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {lastMinuteGifts.map((item, index) => (
              <div key={index} className="bg-rose-50 rounded-xl p-6 text-center border border-rose-100">
                <h3 className="font-bold text-rose-800 mb-2">{item.gift}</h3>
                <div className="text-2xl font-bold text-rose-600 mb-2">{item.price}</div>
                <div className="text-rose-500 text-sm">{item.turnaround}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes to Avoid */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Gift Mistakes to Avoid
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {giftMistakesToAvoid.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex gap-4 items-start border border-rose-100">
                <div className="text-rose-500 text-2xl">✗</div>
                <div>
                  <h3 className="font-bold text-rose-800 mb-1">{item.mistake}</h3>
                  <p className="text-rose-600">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Gift Selection FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-lg mb-3 text-rose-800">{faq.question}</h3>
                <p className="text-rose-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Gift className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Not sure what gift will make their heart skip? Call us — we've helped hundreds of couples find the perfect way to say "I love you."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I need help finding the perfect anniversary gift"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Get Gift Ideas
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
