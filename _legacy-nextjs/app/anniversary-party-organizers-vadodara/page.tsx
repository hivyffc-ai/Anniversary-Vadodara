import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Heart, Clock, Users, Briefcase, CheckCircle, Calendar, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anniversary Party Organizers Vadodara | Professional Event Planners',
  description: 'Professional anniversary party organizers in Vadodara. Complete planning, vendor coordination & execution. Stress-free celebrations. Call +91 7487888730 for consultation.',
  keywords: 'anniversary party organizers vadodara, anniversary event planners, professional party planners, anniversary celebration organizers',
  openGraph: {
    title: 'Anniversary Party Organizers in Vadodara',
    description: 'Professional planners who handle everything. You celebrate, we organize.',
    type: 'website',
  },
  alternates: {
    canonical: '/anniversary-party-organizers-vadodara',
  },
};

const whyHireOrganizer = [
  { reason: "Save Time", description: "We handle 50+ vendor calls, you handle zero" },
  { reason: "Save Stress", description: "No last-minute panics or forgotten details" },
  { reason: "Better Pricing", description: "Our vendor relationships mean better rates for you" },
  { reason: "Professional Quality", description: "Events that look polished, not DIY" },
  { reason: "Creative Ideas", description: "Fresh concepts you wouldn't think of" },
  { reason: "Problem Solving", description: "When things go wrong, we fix them invisibly" }
];

const whatWeHandle = [
  { task: "Venue Selection & Booking", description: "Finding the perfect space for your celebration" },
  { task: "Theme Development", description: "Creating a cohesive visual and experiential concept" },
  { task: "Décor Design & Setup", description: "From planning to installation and cleanup" },
  { task: "Catering Coordination", description: "Menu planning, vendor selection, service management" },
  { task: "Entertainment Booking", description: "Music, performers, activities, and more" },
  { task: "Photography & Video", description: "Professional coverage of your celebration" },
  { task: "Guest Management", description: "Invitations, RSVPs, seating, and coordination" },
  { task: "Day-of Coordination", description: "Running the event so you can enjoy it" }
];

const packages = [
  {
    name: "Coordination Only",
    price: "₹7,999",
    bestFor: "You've planned, we execute",
    includes: [
      "Day-of coordination",
      "Vendor timeline management",
      "Setup supervision",
      "Guest coordination",
      "Emergency problem-solving",
      "Cleanup oversight"
    ]
  },
  {
    name: "Partial Planning",
    price: "₹19,999",
    bestFor: "You decide, we handle vendors",
    includes: [
      "Venue shortlisting & booking",
      "Vendor recommendations",
      "Contract negotiations",
      "Timeline creation",
      "Full day-of coordination",
      "Décor setup management",
      "Catering coordination"
    ],
    popular: true
  },
  {
    name: "Full Planning",
    price: "₹39,999",
    bestFor: "Turn-key celebration",
    includes: [
      "Complete concept development",
      "All vendor sourcing & booking",
      "Custom theme design",
      "Budget management",
      "Guest list management",
      "Invitation design",
      "Full event execution",
      "Post-event cleanup"
    ]
  }
];

const planningProcess = [
  { step: 1, title: "Discovery Call", description: "We understand your vision, preferences, and budget", duration: "30 min" },
  { step: 2, title: "Concept Proposal", description: "We present theme options, venue choices, and cost estimates", duration: "3-5 days" },
  { step: 3, title: "Approval & Booking", description: "You select preferences, we confirm all vendors", duration: "1 week" },
  { step: 4, title: "Detailed Planning", description: "Menu finalization, décor details, timeline creation", duration: "2-4 weeks" },
  { step: 5, title: "Final Walkthrough", description: "Review all details, answer questions, address concerns", duration: "3-5 days before" },
  { step: 6, title: "Event Execution", description: "We handle everything on the day; you enjoy your anniversary", duration: "Event day" }
];

const eventTypes = [
  { type: "Intimate Dinner", guests: "2-10", typical: "₹15,000 - ₹40,000" },
  { type: "Family Gathering", guests: "15-40", typical: "₹40,000 - ₹1,00,000" },
  { type: "Grand Celebration", guests: "50-100", typical: "₹1,00,000 - ₹3,00,000" },
  { type: "Milestone Event (25th/50th)", guests: "75-200", typical: "₹2,00,000 - ₹5,00,000+" }
];

const clientGuarantees = [
  "No hidden fees — complete transparency in all costs",
  "Regular progress updates throughout planning",
  "Single point of contact for all queries",
  "Backup plans for every critical element",
  "On-time vendor arrivals or immediate alternatives",
  "Post-event feedback and photo delivery"
];

const ourStrengths = [
  { strength: "Local Expertise", detail: "We know Vadodara's best vendors, venues, and hidden gems" },
  { strength: "Vendor Network", detail: "100+ trusted vendors across all categories" },
  { strength: "Creative Team", detail: "Designers, coordinators, and specialists on staff" },
  { strength: "Problem Solvers", detail: "Years of experience handling unexpected situations" },
  { strength: "Budget Conscious", detail: "We maximize impact within your budget" },
  { strength: "Personal Touch", detail: "Every event is customized, never templated" }
];

const faqs = [
  {
    question: "How far in advance should I book an organizer?",
    answer: "Ideally 4-8 weeks for full planning, 2-3 weeks for partial planning, and 1 week minimum for day-of coordination. Larger events need more lead time. For milestone anniversaries (25th, 50th), 2-3 months is recommended."
  },
  {
    question: "Do I still have creative control?",
    answer: "Absolutely! We present options, you make decisions. Our job is to execute your vision, not impose ours. We guide and suggest, but final choices are always yours."
  },
  {
    question: "What if I already have some vendors booked?",
    answer: "That's perfect! Choose our 'Coordination Only' or 'Partial Planning' packages. We'll integrate your existing bookings into the overall plan and fill the gaps."
  },
  {
    question: "How do you handle payments to vendors?",
    answer: "We can either coordinate payments directly to vendors (you pay them, we manage timing), or include vendor costs in our package for a single-invoice convenience."
  },
  {
    question: "What happens if a vendor doesn't show up?",
    answer: "Every critical element has a backup plan. Our vendor relationships and local knowledge mean we can quickly arrange alternatives. In our years of operations, we've never left a client stranded."
  },
  {
    question: "Can you work within a tight budget?",
    answer: "Yes! Budget transparency is key to our planning. We prioritize spending on high-impact elements and find creative solutions for others. We'll never recommend something outside your budget without discussion."
  }
];

export default function AnniversaryPartyOrganizersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-violet-600 to-indigo-800 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-5 h-5 text-indigo-200" />
              <span className="text-sm font-medium text-indigo-200">Professional Organizers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anniversary Party Organizers in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 mb-4 max-w-3xl mx-auto">
              You Celebrate. We Organize.
            </p>
            <p className="text-lg text-indigo-100/80 mb-8 max-w-2xl mx-auto">
              Professional event planners who handle every detail — from venue to vendors to execution. Your only job? Show up and enjoy your anniversary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Free Consultation
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to hire professional organizers for my anniversary party"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Organizer */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Hire Professional Organizers?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Your anniversary should be stress-free, not a project to manage
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyHireOrganizer.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100">
                <CheckCircle className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="font-bold text-lg text-indigo-800 mb-2">{item.reason}</h3>
                <p className="text-indigo-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Handle For You
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whatWeHandle.map((item, index) => (
              <div key={index} className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="font-bold text-indigo-800 mb-2">{item.task}</h3>
                <p className="text-indigo-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Organizer Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose your level of involvement (or lack thereof)
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-indigo-600 to-violet-700 text-white ring-2 ring-indigo-300'
                    : 'bg-white border border-indigo-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-indigo-800'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.popular ? 'text-indigo-200' : 'text-indigo-600'}`}>
                  {pkg.bestFor}
                </p>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-indigo-700'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.popular ? 'text-indigo-300' : 'text-indigo-500'}`} />
                      <span className={pkg.popular ? 'text-indigo-100' : 'text-indigo-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/917487888730?text=Hi! I'm interested in the "${pkg.name}" organizer package for my anniversary`}
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Calendar className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
            Our Planning Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {planningProcess.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  {index < planningProcess.length - 1 && (
                    <div className="w-px h-16 bg-indigo-200 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-bold text-xl text-indigo-800">{step.title}</h3>
                    <span className="text-indigo-500 text-sm">{step.duration}</span>
                  </div>
                  <p className="text-indigo-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Events We Organize
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-indigo-100">
                <h3 className="font-bold text-indigo-800 mb-2">{event.type}</h3>
                <div className="text-indigo-600 mb-2">{event.guests} guests</div>
                <div className="text-indigo-500 text-sm">Typical: {event.typical}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ourStrengths.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl text-white mb-2">{item.strength}</h3>
                <p className="text-indigo-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Shield className="w-10 h-10 text-indigo-600" />
              <h2 className="text-3xl font-bold text-indigo-800">Our Client Guarantees</h2>
            </div>
            
            <div className="space-y-4">
              {clientGuarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-4 bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <span className="text-indigo-800">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-indigo-100">
                <h3 className="font-bold text-lg mb-3 text-indigo-800">{faq.question}</h3>
                <p className="text-indigo-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Plan Your Anniversary
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Your anniversary deserves professional attention. Let us handle the stress while you focus on celebrating your love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=Hi! I want to hire professional organizers for my anniversary"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Start Planning
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
