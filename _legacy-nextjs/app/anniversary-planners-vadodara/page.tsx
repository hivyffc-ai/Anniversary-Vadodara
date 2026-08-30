import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Clock, Users, Star, CheckCircle, Heart, Award, Sparkles, Gift, Camera, Music, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anniversary Planners in Vadodara | Expert Event Planning Services',
  description: 'Hire professional anniversary planners in Vadodara. From intimate dinners to grand celebrations, we handle every detail. 500+ successful events. Call +91 7487888730.',
  keywords: 'anniversary planners vadodara, anniversary event planners, professional anniversary planning, anniversary organizers vadodara',
  openGraph: {
    title: 'Professional Anniversary Planners in Vadodara',
    description: 'Expert anniversary planning services with end-to-end coordination. Let us create your perfect celebration.',
    type: 'website',
  },
  alternates: {
    canonical: '/anniversary-planners-vadodara',
  },
};

const planningPackages = [
  {
    name: "Essential Planning",
    price: "₹4,999",
    description: "Perfect for couples who want guidance",
    features: [
      "2 consultation sessions",
      "Venue suggestions",
      "Basic decoration setup",
      "Cake arrangement",
      "Photography tips guide"
    ],
    popular: false
  },
  {
    name: "Complete Care",
    price: "₹12,999",
    description: "Our most loved package",
    features: [
      "Unlimited consultations",
      "Venue booking assistance",
      "Premium decorations",
      "Customized menu planning",
      "Professional photography",
      "Live music arrangement",
      "Day-of coordination"
    ],
    popular: true
  },
  {
    name: "Luxury Experience",
    price: "₹24,999",
    description: "For milestone celebrations",
    features: [
      "Dedicated planner assigned",
      "Exclusive venue options",
      "Designer decorations",
      "Multi-course gourmet dinner",
      "Professional photo + video",
      "Live entertainment",
      "Full event management",
      "Guest coordination",
      "Surprise elements included"
    ],
    popular: false
  }
];

const planningProcess = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We learn about your love story, preferences, and vision for the celebration",
    duration: "30 mins"
  },
  {
    step: 2,
    title: "Concept Creation",
    description: "Our team designs a unique concept tailored to your relationship",
    duration: "2-3 days"
  },
  {
    step: 3,
    title: "Planning & Booking",
    description: "We handle all vendor coordination, bookings, and logistics",
    duration: "1-2 weeks"
  },
  {
    step: 4,
    title: "Final Review",
    description: "Walk through every detail together before the big day",
    duration: "1 hour"
  },
  {
    step: 5,
    title: "Event Day",
    description: "Relax and enjoy while we manage everything behind the scenes",
    duration: "Your special day"
  }
];

const servicesIncluded = [
  { icon: Calendar, title: "Date Selection", description: "Help choosing the perfect date considering weather, availability, and significance" },
  { icon: Gift, title: "Gift Curation", description: "Personalized gift recommendations and arrangement services" },
  { icon: Camera, title: "Photography", description: "Professional photographers to capture every precious moment" },
  { icon: Music, title: "Entertainment", description: "Live musicians, DJs, or curated playlists for your event" },
  { icon: Utensils, title: "Catering", description: "Menu planning and premium catering services" },
  { icon: Sparkles, title: "Decorations", description: "Themed decorations that tell your love story" }
];

const clientStories = [
  {
    couple: "Rajesh & Priya",
    anniversary: "25th Anniversary",
    story: "They wanted to recreate their wedding day. We sourced their original wedding invitation design, found the same flower varieties, and even tracked down the musician who played at their reception. The look on Priya's face when she walked in was priceless.",
    highlight: "Recreated original wedding atmosphere"
  },
  {
    couple: "Amit & Sneha",
    anniversary: "10th Anniversary",
    story: "A surprise party for Sneha planned entirely by Amit. The challenge? She's incredibly observant. We created a fake 'work dinner' scenario and coordinated with 50 guests in secret. The surprise was a complete success!",
    highlight: "50-guest surprise party"
  },
  {
    couple: "Vikram & Meera",
    anniversary: "1st Anniversary",
    story: "Being new parents, they couldn't go out. We transformed their terrace into a starlit dining space while they put the baby to sleep. A gourmet dinner, fairy lights, and a video montage of their first year together.",
    highlight: "Home transformation for new parents"
  }
];

const faqs = [
  {
    question: "How early should we book anniversary planners?",
    answer: "For the best experience, we recommend booking 3-4 weeks in advance. However, we've successfully planned celebrations with just 3-5 days notice for last-minute requests. Peak seasons (November-February) require earlier booking."
  },
  {
    question: "What's included in your planning services?",
    answer: "Our services cover consultation, concept design, vendor coordination, decoration setup, catering arrangements, entertainment booking, photography, day-of coordination, and cleanup. The exact inclusions depend on your chosen package."
  },
  {
    question: "Can you plan a surprise celebration?",
    answer: "Absolutely! We specialize in surprise planning. We create cover stories, coordinate with friends and family secretly, and have backup plans ready. About 40% of our celebrations are surprises."
  },
  {
    question: "What if we have a limited budget?",
    answer: "We work with all budgets starting from ₹4,999. Our Essential package is perfect for budget-conscious couples who want professional guidance. We're transparent about costs and help prioritize what matters most to you."
  },
  {
    question: "Do you handle destination anniversaries?",
    answer: "While our primary venue is in Vadodara, we can plan destination elements. We've coordinated celebrations that include weekend getaways, hotel bookings, and activities across Gujarat."
  },
  {
    question: "What makes your planning different from DIY?",
    answer: "With 500+ celebrations under our belt, we know what works. We have vendor relationships for better pricing, backup solutions for any issues, and the experience to handle unexpected situations. Most importantly, you get to actually enjoy your anniversary instead of managing logistics."
  }
];

export default function AnniversaryPlannersVadodaraPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">500+ Celebrations Planned Successfully</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Anniversary Planners in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-3xl mx-auto">
              From the first spark of an idea to the last guest leaving happy — we orchestrate every moment of your anniversary celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I need help planning our anniversary celebration in Vadodara"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Planners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why Couples Hire Us Instead of Planning Themselves
            </h2>
            <p className="text-gray-600 text-center mb-12 text-lg">
              You could spend weeks coordinating vendors, or spend that time actually enjoying your anniversary
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-4 text-gray-400">DIY Planning</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Hours researching vendors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Coordinating multiple bookings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Stress about things going wrong
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Managing everything on the day
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    No backup plans
                  </li>
                </ul>
              </div>
              
              <div className="bg-rose-50 p-6 rounded-2xl border-2 border-rose-200">
                <h3 className="font-bold text-xl mb-4 text-rose-600">With Our Planners</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    One point of contact for everything
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Trusted vendor network with better rates
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Professional coordination
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    You just show up and enjoy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Backup solutions always ready
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Anniversary Planning Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the level of involvement that fits your needs — from guidance to full management
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {planningPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-rose-600 to-pink-600 text-white transform scale-105'
                    : 'bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-rose-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-4 ${pkg.popular ? 'text-rose-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-rose-600'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-rose-200' : 'text-green-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I'm interested in the ${pkg.name} package for anniversary planning`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-rose-600 hover:bg-rose-50'
                      : 'bg-rose-600 text-white hover:bg-rose-700'
                  }`}
                >
                  Choose This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Planning Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From your first call to the final dance — here's how we create magic
          </p>
          
          <div className="max-w-4xl mx-auto">
            {planningProcess.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  {index < planningProcess.length - 1 && (
                    <div className="w-0.5 h-full bg-rose-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <span className="text-sm bg-rose-100 text-rose-600 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Handle For You
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {servicesIncluded.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <service.icon className="w-10 h-10 text-rose-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real Celebrations We've Planned
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every couple has a unique story — here's how we brought some of them to life
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clientStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                  <span className="text-sm text-rose-600 font-medium">{story.anniversary}</span>
                </div>
                <h3 className="font-bold text-xl mb-3">{story.couple}</h3>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <div className="bg-rose-100 text-rose-700 text-sm px-3 py-2 rounded-lg inline-block">
                  ✨ {story.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-rose-200">Celebrations Planned</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
              <div className="text-rose-200">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-rose-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">7+</div>
              <div className="text-rose-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Questions About Our Planning Services
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Plan Your Perfect Anniversary Together
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Book a free 30-minute consultation call. We'll discuss your vision, preferences, and how we can make your anniversary unforgettable.
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
                href="https://wa.me/917487888730?text=Hi! I'd like to book a free consultation for anniversary planning"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Free Consultation on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
