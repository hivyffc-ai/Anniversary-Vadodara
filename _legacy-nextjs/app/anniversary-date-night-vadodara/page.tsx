import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Moon, Star, Heart, Clock, MapPin, Utensils, Music, Camera, Sparkles, Wine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anniversary Date Night Vadodara | Romantic Evening for Couples',
  description: 'Plan the perfect anniversary date night in Vadodara. Candlelit dinners, live music, private setups & romantic ambiance. Make your evening unforgettable. Call +91 7487888730.',
  keywords: 'anniversary date night vadodara, romantic date night, couples date vadodara, anniversary evening celebration',
  openGraph: {
    title: 'Anniversary Date Night in Vadodara',
    description: 'An evening designed for just the two of you. Candlelight, cuisine, and connection.',
    type: 'website',
  },
  alternates: {
    canonical: '/anniversary-date-night-vadodara',
  },
};

const dateNightSlots = [
  {
    name: "Golden Hour Date",
    time: "5:00 PM - 7:30 PM",
    vibe: "Watch the sunset together",
    bestFor: "Couples who prefer early evenings",
    includes: ["Sunset viewing setup", "Tea/coffee with snacks", "Soft background music"],
    price: "₹2,999"
  },
  {
    name: "Classic Dinner Date",
    time: "7:00 PM - 10:00 PM",
    vibe: "Traditional romantic dinner",
    bestFor: "Most popular choice",
    includes: ["Candlelit table", "3-course dinner", "Wine/mocktails", "Live acoustic music"],
    price: "₹4,999",
    popular: true
  },
  {
    name: "Midnight Romance",
    time: "9:00 PM - 12:00 AM",
    vibe: "Under the stars experience",
    bestFor: "Night owls and dreamers",
    includes: ["Starlit terrace setup", "Late dinner", "Desserts & champagne", "Private playlist"],
    price: "₹5,999"
  }
];

const dateNightPackages = [
  {
    name: "Simply Us",
    price: "₹3,499",
    description: "Perfect for the uncomplicated romantics",
    includes: [
      "Private corner table",
      "Candlelight setup",
      "2-course dinner",
      "1 dessert to share",
      "Soft music playlist",
      "Rose for partner"
    ]
  },
  {
    name: "Sweep Me Away",
    price: "₹5,999",
    description: "When you want to impress",
    includes: [
      "Private decorated space",
      "Flower pathway entrance",
      "3-course gourmet dinner",
      "Wine/champagne",
      "Live musician (30 mins)",
      "Anniversary cake",
      "Professional photos (10)"
    ],
    popular: true
  },
  {
    name: "Unforgettable Night",
    price: "₹9,999",
    description: "The ultimate date night",
    includes: [
      "Exclusive rooftop setup",
      "Full venue decoration",
      "5-course tasting menu",
      "Premium beverages",
      "Live music throughout",
      "Designer cake",
      "Photo session (30 mins)",
      "Surprise gift arrangement",
      "Late checkout option"
    ]
  }
];

const romanticTouches = [
  { touch: "Petal Pathway", description: "Rose petals leading to your table", price: "₹499" },
  { touch: "Personal Playlist", description: "Your songs playing during dinner", price: "Free" },
  { touch: "Love Letter Service", description: "We deliver your handwritten letter mid-dinner", price: "₹299" },
  { touch: "Surprise Dessert Message", description: "Custom message on dessert plate", price: "₹399" },
  { touch: "Live Musician", description: "Guitarist/violinist for your table", price: "₹1,999/hour" },
  { touch: "Memory Polaroids", description: "Instant photos to take home", price: "₹599 (10 shots)" }
];

const conversationStarters = [
  "What's your favorite memory from our first year together?",
  "If we could live anywhere for a year, where would you choose?",
  "What's something I do that makes you feel loved?",
  "What dream should we work on together next year?",
  "What's the funniest thing that's happened to us?",
  "What would you say to yourself on our wedding day?"
];

const dateNightMenu = {
  starters: ["Bruschetta Trio", "Soup of the Day", "Paneer Tikka", "Stuffed Mushrooms"],
  mains: ["Grilled Cottage Cheese Steak", "Pasta in Rose Sauce", "Butter Garlic Prawns", "Vegetable Risotto"],
  desserts: ["Chocolate Fondant", "Tiramisu", "Gulab Jamun with Ice Cream", "Fresh Fruit Platter"]
};

const faqs = [
  {
    question: "Do I need to book in advance for anniversary date night?",
    answer: "We recommend booking at least 2-3 days in advance, especially for weekends and the popular 7-10 PM slot. Last-minute bookings are possible based on availability — just call or WhatsApp us."
  },
  {
    question: "Can I customize the menu for dietary restrictions?",
    answer: "Absolutely! We offer vegetarian, vegan, Jain, and gluten-free options. Just let us know your requirements when booking, and our chef will customize the menu accordingly."
  },
  {
    question: "Is the space truly private or shared with others?",
    answer: "We have both options. Our 'Simply Us' package uses a private corner in our main space. The premium packages ('Sweep Me Away' and 'Unforgettable Night') include completely private setups where it's just the two of you."
  },
  {
    question: "Can I bring my own wine or champagne?",
    answer: "Yes, we allow outside beverages with a small corkage fee. However, we also have a curated selection of wines if you'd prefer to choose from our collection."
  },
  {
    question: "What if I want to propose during the date night?",
    answer: "We love being part of proposals! Let us know in advance, and we'll coordinate the perfect moment — from having the ring in the dessert to arranging a musician to play 'your song' during the proposal."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we have free parking for all date night guests. For the 'Unforgettable Night' package, we offer valet parking service as well."
  }
];

export default function AnniversaryDateNightPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/stars-pattern.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Moon className="w-5 h-5" />
              <span className="text-sm font-medium">Evening Romance Awaits</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Date Night in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto">
              One Evening. Just the Two of You. Pure Magic.
            </p>
            <p className="text-lg text-purple-300 mb-8 max-w-2xl mx-auto">
              Forget the world outside. Tonight is about reconnecting, reminiscing, and falling in love all over again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Book Your Night
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to book an anniversary date night"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Time Slots */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Perfect Time
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each time slot offers a different romantic atmosphere
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {dateNightSlots.map((slot, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-6 ${
                  slot.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white' 
                    : 'bg-purple-50 border border-purple-100'
                }`}
              >
                {slot.popular && (
                  <div className="inline-block bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST BOOKED
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${slot.popular ? 'text-white' : 'text-purple-900'}`}>
                  {slot.name}
                </h3>
                <div className={`flex items-center gap-2 mb-3 ${slot.popular ? 'text-purple-200' : 'text-purple-600'}`}>
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{slot.time}</span>
                </div>
                <p className={`mb-4 italic ${slot.popular ? 'text-purple-200' : 'text-purple-700'}`}>
                  "{slot.vibe}"
                </p>
                <div className={`text-sm mb-4 ${slot.popular ? 'text-purple-100' : 'text-purple-600'}`}>
                  <strong>Best for:</strong> {slot.bestFor}
                </div>
                <ul className="space-y-2 mb-6">
                  {slot.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Star className={`w-4 h-4 ${slot.popular ? 'text-purple-300' : 'text-purple-400'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={`text-2xl font-bold ${slot.popular ? 'text-white' : 'text-purple-700'}`}>
                  {slot.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Date Night Packages */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Date Night Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From simple & sweet to absolutely unforgettable
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dateNightPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-purple-700 to-indigo-700 text-white ring-2 ring-purple-300'
                    : 'bg-white border border-purple-100'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    COUPLES' FAVORITE
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-purple-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-4 text-sm ${pkg.popular ? 'text-purple-200' : 'text-purple-600'}`}>
                  {pkg.description}
                </p>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-purple-700'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Heart className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-purple-300' : 'text-purple-400'}`} />
                      <span className={pkg.popular ? 'text-purple-100' : 'text-purple-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I want to book the "${pkg.name}" date night package`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-purple-700 hover:bg-purple-50'
                      : 'bg-purple-700 text-white hover:bg-purple-800'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Romantic Add-ons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Add Extra Romance
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Little touches that make big impressions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {romanticTouches.map((item, index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-purple-900 mb-1">{item.touch}</h3>
                  <p className="text-purple-600 text-sm">{item.description}</p>
                </div>
                <div className="text-purple-700 font-semibold text-sm whitespace-nowrap ml-4">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Starters */}
      <section className="py-16 bg-gradient-to-br from-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conversation Starters for Your Date Night
            </h2>
            <p className="text-purple-200 mb-8">
              Put away the phones and reconnect with these prompts
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {conversationStarters.map((question, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <span className="text-purple-200 text-sm">Question {index + 1}</span>
                  <p className="text-white font-medium mt-1">{question}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-purple-200 text-sm">
              We'll leave conversation cards at your table with more questions like these!
            </p>
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            A Taste of Our Date Night Menu
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Utensils className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-4 text-purple-900">Starters</h3>
              <ul className="space-y-2 text-purple-700">
                {dateNightMenu.starters.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Wine className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-4 text-purple-900">Main Course</h3>
              <ul className="space-y-2 text-purple-700">
                {dateNightMenu.mains.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Heart className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-4 text-purple-900">Desserts</h3>
              <ul className="space-y-2 text-purple-700">
                {dateNightMenu.desserts.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-500 text-sm">
            Menu items vary seasonally. Full menu shared upon booking.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Date Night FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-purple-900">{faq.question}</h3>
                <p className="text-purple-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Moon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a Night to Remember?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Put down the devices, step away from the routine, and give each other the gift of undivided attention. Book your anniversary date night today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-800 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to plan an anniversary date night in Vadodara"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
