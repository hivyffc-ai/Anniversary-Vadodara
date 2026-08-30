import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Eye, EyeOff, Clock, Users, MapPin, Gift, Camera, Music, Cake, Star, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Surprise Anniversary Party Vadodara | Secret Planning Experts',
  description: 'Plan the perfect surprise anniversary party in Vadodara. Secret coordination, guest management & stunning reveals. We keep secrets better than best friends! Call +91 7487888730.',
  keywords: 'surprise anniversary party vadodara, secret anniversary planning, surprise party ideas vadodara, anniversary surprise organizers',
  openGraph: {
    title: 'Surprise Anniversary Party Vadodara | We Keep Secrets Well',
    description: 'Expert surprise party planning with secret guest coordination. Your partner will never suspect a thing!',
    type: 'website',
  },
  alternates: {
    canonical: '/surprise-anniversary-party-vadodara',
  },
};

const secretKeepingStrategies = [
  {
    strategy: "The Decoy Event",
    description: "We create a believable fake event — a 'work dinner' or 'friend's birthday' — complete with details your partner might verify",
    successRate: "95% effective"
  },
  {
    strategy: "Trusted Ally Network",
    description: "We identify and coordinate with your most trustworthy friends/family who can help maintain the cover story",
    successRate: "100% coordination"
  },
  {
    strategy: "Separate Communication Channels",
    description: "All planning happens through dedicated channels — no accidental notification pop-ups or suspicious emails",
    successRate: "Zero leaks"
  },
  {
    strategy: "Timing Diversions",
    description: "Activities planned to keep your partner busy while we set up — spa appointments, shopping trips, etc.",
    successRate: "98% successful"
  }
];

const surprisePartyTypes = [
  {
    name: "Intimate Ambush",
    guests: "Just you two + maybe 5 close ones",
    setup: "Your partner walks into what they think is a normal dinner, but...",
    revealMoment: "Lights dim, their favorite song plays, and you're standing there with flowers",
    idealFor: "Couples who prefer private moments"
  },
  {
    name: "Flash Celebration",
    guests: "15-25 close friends and family",
    setup: "Everyone hides, lights off, your partner suspects nothing",
    revealMoment: "Classic 'SURPRISE!' with confetti cannons and cheering crowd",
    idealFor: "Social butterflies who love attention"
  },
  {
    name: "Grand Reveal Party",
    guests: "50+ guests from all walks of life",
    setup: "Multiple decoy activities lead to the main venue",
    revealMoment: "Video montage plays on big screen as guests gather around",
    idealFor: "Milestone anniversaries (25th, 50th)"
  }
];

const planningTimeline = [
  { weeks: "4-6 weeks before", tasks: ["Initial secret consultation", "Guest list creation", "Venue booking", "Date confirmation"] },
  { weeks: "3 weeks before", tasks: ["Secret invitations sent", "Decoy event planned", "Vendor bookings", "Menu selection"] },
  { weeks: "2 weeks before", tasks: ["RSVP tracking", "Decoration finalization", "Photography briefing", "Backup plans ready"] },
  { weeks: "1 week before", tasks: ["Final guest count", "Timeline rehearsal", "Communication protocol set", "Diversion activities booked"] },
  { weeks: "Day before", tasks: ["Venue decoration", "Final vendor confirmations", "Guest arrival times shared", "Decoy story reinforced"] },
  { weeks: "The Big Day", tasks: ["Early setup", "Partner diversion active", "Guests arrive quietly", "THE SURPRISE!"] }
];

const commonMistakes = [
  {
    mistake: "Leaving planning evidence around",
    solution: "We use code names, separate apps, and encrypted communication for all planning"
  },
  {
    mistake: "Too many people knowing",
    solution: "Information shared on need-to-know basis. Guests get minimal details until closer to the date"
  },
  {
    mistake: "Unrealistic timelines",
    solution: "We build in buffer time for every element — nothing rushed means nothing suspicious"
  },
  {
    mistake: "Partner getting suspicious from behavior changes",
    solution: "We coach you on acting naturally and provide believable cover stories"
  }
];

const faqs = [
  {
    question: "How do you keep the surprise a secret?",
    answer: "We use dedicated communication channels, code names, and carefully planned cover stories. We also limit information sharing — even vendors only know what they need to. In 7+ years, we've never had a surprise ruined."
  },
  {
    question: "What if my partner directly asks about plans?",
    answer: "We prepare you with a believable decoy plan. You'll have a full cover story — maybe a 'work dinner' or 'friend's small gathering' — with enough details to sound genuine without raising suspicion."
  },
  {
    question: "How do you coordinate with guests secretly?",
    answer: "We create a private group with trusted guests, share instructions in phases, and provide clear dos and don'ts. Guests receive a brief on social media silence and communication protocols."
  },
  {
    question: "What if something goes wrong on the day?",
    answer: "We always have Plans B, C, and D ready. Different reveal moments prepared, backup activities to stall if needed, and a crisis management protocol that keeps everything smooth."
  },
  {
    question: "Can you arrange surprise within surprise?",
    answer: "Absolutely! We specialize in layered surprises — maybe they think it's a small dinner, then the party, then a special guest appears, then a video message from far-away family. Multiple wow moments!"
  },
  {
    question: "What's the minimum planning time needed?",
    answer: "For intimate surprises (under 10 guests), we can work with 1 week. For larger parties, 3-4 weeks minimum is recommended. More time means more elaborate surprises possible."
  }
];

export default function SurpriseAnniversaryPartyVadodaraPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <EyeOff className="w-5 h-5" />
              <span className="text-sm font-medium">Secret Planning Mode: Activated</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Surprise Anniversary Party Planning in Vadodara
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 mb-4 max-w-3xl mx-auto">
              They won't see it coming. But they'll never forget it.
            </p>
            <p className="text-lg text-rose-200 mb-8 max-w-2xl mx-auto">
              Expert secret coordination, guest management, and picture-perfect reveal moments — we've planned 200+ surprises that stayed surprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Start Secret Planning
              </a>
              <a
                href="https://wa.me/917487888730?text=🤫 Hi! I want to plan a surprise anniversary party. Can we discuss in secret?"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Secret Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Secret Keeping Strategies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Keep Your Surprise a Secret
              </h2>
              <p className="text-gray-600 text-lg">
                Our secret-keeping methods have a 100% success rate. Here's our playbook:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {secretKeepingStrategies.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border-l-4 border-rose-500">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl">{item.strategy}</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                      {item.successRate}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Surprise Party Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Surprise Style
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From intimate ambushes to grand reveals — pick the surprise intensity
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {surprisePartyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-rose-600 mb-2">{type.name}</h3>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{type.guests}</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase mb-1">The Setup</div>
                    <p className="text-gray-600 text-sm">{type.setup}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase mb-1">The Reveal</div>
                    <p className="text-gray-600 text-sm">{type.revealMoment}</p>
                  </div>
                </div>
                
                <div className="bg-rose-50 text-rose-700 text-sm px-4 py-2 rounded-lg">
                  <strong>Ideal for:</strong> {type.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Secret Planning Timeline
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How we orchestrate the perfect surprise over weeks — without a single leak
          </p>
          
          <div className="max-w-4xl mx-auto">
            {planningTimeline.map((phase, index) => (
              <div key={index} className="flex gap-6 mb-6 last:mb-0">
                <div className="w-32 flex-shrink-0 text-right">
                  <div className="font-bold text-rose-600">{phase.weeks}</div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-rose-600 rounded-full absolute -left-2 top-1"></div>
                  {index < planningTimeline.length - 1 && (
                    <div className="w-0.5 bg-rose-200 absolute left-0 top-5 bottom-0 -mb-6 h-full"></div>
                  )}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-4 ml-4">
                  <div className="flex flex-wrap gap-2">
                    {phase.tasks.map((task, tIndex) => (
                      <span key={tIndex} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Reveal Moment */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Reveal Moment 🎉
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              This is what all the secret planning leads to. Here's how we make it unforgettable:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">📸</div>
                <h3 className="font-bold text-xl mb-2">Reaction Capture</h3>
                <p className="text-rose-100">Photographers positioned to catch the exact moment of realization — the shock, the tears, the pure joy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🎵</div>
                <h3 className="font-bold text-xl mb-2">Dramatic Soundtrack</h3>
                <p className="text-rose-100">Their song starts playing at the perfect moment, building atmosphere before the reveal</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🎊</div>
                <h3 className="font-bold text-xl mb-2">Confetti Cannon Moment</h3>
                <p className="text-rose-100">Perfectly timed confetti explosion that marks the transition from surprise to celebration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold text-xl mb-2">Guest Reveal Order</h3>
                <p className="text-rose-100">Strategic positioning so they see close family first, then friends — maximum emotional impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <AlertTriangle className="w-10 h-10 text-amber-500 inline-block mr-2 -mt-1" />
              Mistakes That Ruin Surprises
            </h2>
            <p className="text-gray-600 text-center mb-12">
              And exactly how we prevent each one
            </p>
            
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-2 text-red-500 font-bold mb-2">
                      <span className="text-xl">✗</span>
                      {item.mistake}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="flex items-start gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{item.solution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Surprise Party Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From small secret dinners to grand surprise celebrations
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">Sweet Surprise</h3>
              <p className="text-gray-500 text-sm mb-4">For 2-10 guests</p>
              <div className="text-3xl font-bold text-rose-600 mb-4">₹9,999</div>
              <ul className="space-y-2 text-gray-600 text-sm mb-6">
                <li>✓ Private decorated space</li>
                <li>✓ Surprise coordination</li>
                <li>✓ Basic decorations</li>
                <li>✓ Cake arrangement</li>
                <li>✓ 1-hour event support</li>
              </ul>
              <a href="https://wa.me/917487888730?text=Hi! I want to plan a Sweet Surprise party for my partner's anniversary" className="block text-center bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700 transition-all">
                Plan This Surprise
              </a>
            </div>
            
            <div className="border-2 border-rose-500 rounded-2xl p-6 relative bg-rose-50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Grand Surprise</h3>
              <p className="text-gray-500 text-sm mb-4">For 15-30 guests</p>
              <div className="text-3xl font-bold text-rose-600 mb-4">₹24,999</div>
              <ul className="space-y-2 text-gray-600 text-sm mb-6">
                <li>✓ Full venue decoration</li>
                <li>✓ Guest coordination & invites</li>
                <li>✓ Professional photography</li>
                <li>✓ Custom cake</li>
                <li>✓ Catering arrangements</li>
                <li>✓ Music/DJ setup</li>
                <li>✓ Full event management</li>
              </ul>
              <a href="https://wa.me/917487888730?text=Hi! I want to plan a Grand Surprise party for our anniversary" className="block text-center bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700 transition-all">
                Plan This Surprise
              </a>
            </div>
            
            <div className="border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">Mega Celebration</h3>
              <p className="text-gray-500 text-sm mb-4">For 50+ guests</p>
              <div className="text-3xl font-bold text-rose-600 mb-4">₹49,999+</div>
              <ul className="space-y-2 text-gray-600 text-sm mb-6">
                <li>✓ Premium venue setup</li>
                <li>✓ Complete guest management</li>
                <li>✓ Photo + video coverage</li>
                <li>✓ Designer cake</li>
                <li>✓ Full catering service</li>
                <li>✓ Live entertainment</li>
                <li>✓ Multiple surprise elements</li>
                <li>✓ Dedicated event manager</li>
              </ul>
              <a href="https://wa.me/917487888730?text=Hi! I want to plan a Mega Celebration surprise for a milestone anniversary" className="block text-center bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700 transition-all">
                Plan This Surprise
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Surprise Planning FAQs
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
            <div className="text-6xl mb-6">🤫</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Plan the Ultimate Surprise?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Start a secret conversation with us. We'll discuss everything through secure channels — your partner will never know what's coming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917487888730"
                className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Secret Call: +91 7487888730
              </a>
              <a
                href="https://wa.me/917487888730?text=🤫 I want to plan a surprise anniversary party. Let's discuss secretly!"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Start Secret Planning
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
