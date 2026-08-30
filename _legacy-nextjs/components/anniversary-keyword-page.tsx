'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart, 
  Calendar, ArrowRight, Sparkles, Award, Shield, Users, Camera, Music, Cake,
  Wine, PartyPopper, Flower2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCBookingFormInner, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { ServiceKeyword, packages, vadodaraAreas, siteConfig, formatPrice, anniversaryKeywords, testimonials } from '@/lib/anniversary-config';
import { generateExpandedContent, generateFAQContent } from '@/lib/seo-content-engine';
import { generateBreadcrumbSchema, generateServiceSchema, buildKeywordBreadcrumbs } from '@/lib/schema-generator';

interface AnniversaryKeywordPageProps {
  keyword: ServiceKeyword;
}

// Gallery images for anniversary pages
const galleryImages = [
  { src: '/images/gallery/IMG_20251108_195907946.jpg', alt: 'Anniversary celebration setup' },
  { src: '/images/gallery/IMG_20251108_195914428.jpg', alt: 'Romantic anniversary decoration' },
  { src: '/images/gallery/IMG_20251117_201140680.jpg', alt: 'Anniversary dinner arrangement' },
  { src: '/images/gallery/IMG_20251126_195504828.jpg', alt: 'Candlelight anniversary celebration' },
  { src: '/images/gallery/IMG_20251126_195520782.jpg', alt: 'Rooftop anniversary venue' },
  { src: '/images/gallery/IMG_20251130_190628327.jpg', alt: 'Anniversary venue Vadodara' },
  { src: '/images/gallery/IMG_20251201_201429116.jpg', alt: 'Couple anniversary celebration' },
  { src: '/images/gallery/IMG-20250123-WA0014.jpg', alt: 'Anniversary surprise decoration' },
];

// Generate unique content based on keyword type
function getKeywordContent(keyword: ServiceKeyword) {
  const slug = keyword.slug;
  
  // Anniversary Year celebrations
  if (slug.includes('first-anniversary') || slug.includes('1st')) {
    return {
      emoji: "📜",
      yearName: "Paper Anniversary",
      yearsMarried: "1",
      intro: `Your first wedding anniversary marks one beautiful year of marriage — 365 days of love, laughter, and building a life together. The first anniversary is traditionally known as the "Paper Anniversary," symbolizing the blank page of your new life together.`,
      whySpecial: `The first anniversary holds a unique place in every couple's heart. It's your first milestone as a married couple, commemorating the day you said "I do." This celebration deserves something truly special — a romantic evening that reminds you both why you fell in love.`,
      celebrationTips: [
        "Exchange meaningful paper gifts like love letters or a custom photo book",
        "Recreate moments from your wedding day",
        "Book a private candlelight dinner for two",
        "Create a time capsule with memories from your first year",
        "Surprise your partner with an elegant decorated venue"
      ],
      perfectFor: ["Newlyweds", "Young Couples", "First-Time Anniversary Celebrators"],
      theme: "Paper & New Beginnings",
      traditionalGift: "Paper",
      modernGift: "Clock"
    };
  }
  
  if (slug.includes('5th-anniversary')) {
    return {
      emoji: "🪵",
      yearName: "Wood Anniversary",
      yearsMarried: "5",
      intro: `Five years of marriage is a remarkable achievement! Your 5th wedding anniversary, known as the "Wood Anniversary," represents the strength and solidity your relationship has developed — like the roots of a mighty tree, your love has grown deep and strong.`,
      whySpecial: `Half a decade together means you've weathered storms, celebrated victories, and built a foundation of trust and understanding. Your 5th anniversary deserves a celebration as solid and beautiful as your relationship.`,
      celebrationTips: [
        "Gift something meaningful made of wood",
        "Plant a tree together to symbolize your growing love",
        "Book a romantic getaway or staycation",
        "Enjoy a private celebration with elegant wooden accents in décor",
        "Create a photo slideshow of your five years together"
      ],
      perfectFor: ["Couples celebrating 5 years", "Partners with established relationships"],
      theme: "Wood, Strength & Growth",
      traditionalGift: "Wood",
      modernGift: "Silverware"
    };
  }
  
  if (slug.includes('10th-anniversary')) {
    return {
      emoji: "🥈",
      yearName: "Tin/Aluminum Anniversary",
      yearsMarried: "10",
      intro: `A decade of love! Your 10th wedding anniversary, the "Tin Anniversary," celebrates the flexibility and durability of your relationship. Like tin, your marriage has proven to be both strong and adaptable through ten years of life's journeys.`,
      whySpecial: `Ten years is a major milestone that deserves grand celebration. You've built a life together, created countless memories, and proven that your love stands the test of time. This celebration should honor the depth of your commitment.`,
      celebrationTips: [
        "Plan a surprise celebration for your partner",
        "Renew your vows in an intimate ceremony",
        "Book a luxury anniversary dinner experience",
        "Create a memory book of your decade together",
        "Gift something with tin/aluminum or a special piece of jewelry"
      ],
      perfectFor: ["Decade Milestone Celebrators", "Couples ready for grand celebrations"],
      theme: "Tin, Durability & Flexibility",
      traditionalGift: "Tin/Aluminum",
      modernGift: "Diamond Jewelry"
    };
  }
  
  if (slug.includes('15th-anniversary')) {
    return {
      emoji: "💎",
      yearName: "Crystal Anniversary",
      yearsMarried: "15",
      intro: `Fifteen years of marriage shine as brilliantly as crystal! Your 15th wedding anniversary, the "Crystal Anniversary," reflects the clarity and transparency that defines your relationship after fifteen beautiful years together.`,
      whySpecial: `Crystal symbolizes clarity, beauty, and light — qualities that describe a marriage that has matured over fifteen years. Your relationship sparkles with understanding, and this milestone deserves a celebration that's equally radiant.`,
      celebrationTips: [
        "Gift beautiful crystal glassware or décor",
        "Enjoy champagne in elegant crystal flutes",
        "Book a sparkling candlelight celebration",
        "Plan a romantic dinner with crystal-themed decorations",
        "Create a crystal memory keepsake"
      ],
      perfectFor: ["15-year milestone couples", "Those who appreciate elegance"],
      theme: "Crystal, Clarity & Light",
      traditionalGift: "Crystal",
      modernGift: "Watches"
    };
  }
  
  if (slug.includes('20th-anniversary')) {
    return {
      emoji: "🏺",
      yearName: "China Anniversary",
      yearsMarried: "20",
      intro: `Two decades of love! Your 20th wedding anniversary, the "China Anniversary," celebrates the elegance and beauty that comes with twenty years of nurturing your relationship. Like fine china, your marriage is both delicate and precious.`,
      whySpecial: `Twenty years together represents a lifetime of shared experiences, growth, and unwavering commitment. This platinum milestone deserves a celebration as refined and elegant as the bond you've built.`,
      celebrationTips: [
        "Enjoy an elegant dinner on fine china",
        "Book a premium anniversary celebration package",
        "Plan a second honeymoon or romantic getaway",
        "Gift fine china or porcelain items",
        "Host an intimate celebration with close family"
      ],
      perfectFor: ["20-year milestone couples", "Those celebrating two decades of love"],
      theme: "China, Elegance & Beauty",
      traditionalGift: "China",
      modernGift: "Platinum"
    };
  }
  
  if (slug.includes('25th-anniversary')) {
    return {
      emoji: "🥈",
      yearName: "Silver Anniversary",
      yearsMarried: "25",
      intro: `A quarter century of love! Your 25th Silver Anniversary is one of the most celebrated milestones in marriage. Silver represents the radiance and brilliance that your love has achieved over twenty-five wonderful years together.`,
      whySpecial: `The Silver Jubilee is a momentous occasion that few couples reach with such grace. Twenty-five years of partnership, friendship, and devotion deserve a celebration as precious as silver itself.`,
      celebrationTips: [
        "Exchange silver jewelry or keepsakes",
        "Plan a silver-themed celebration party",
        "Renew your wedding vows",
        "Book a luxury anniversary venue with silver decorations",
        "Create a photo journey of 25 years together",
        "Invite close friends and family for a silver jubilee party"
      ],
      perfectFor: ["Silver Jubilee Couples", "Those celebrating 25 glorious years"],
      theme: "Silver, Brilliance & Radiance",
      traditionalGift: "Silver",
      modernGift: "Silver"
    };
  }
  
  if (slug.includes('30th-anniversary')) {
    return {
      emoji: "🦪",
      yearName: "Pearl Anniversary",
      yearsMarried: "30",
      intro: `Thirty years of love, as precious as pearls! Your 30th Pearl Anniversary celebrates three decades of marriage that has been nurtured like a pearl — created layer by layer through years of patience, love, and dedication.`,
      whySpecial: `Pearls are formed through time and care, just like your thirty-year marriage. This anniversary celebrates the beauty that comes from years of devotion, understanding, and growth together.`,
      celebrationTips: [
        "Gift beautiful pearl jewelry",
        "Plan an elegant pearl-themed celebration",
        "Book a premium private venue",
        "Create a pearl-white decoration theme",
        "Celebrate with a romantic dinner cruise or special venue"
      ],
      perfectFor: ["30-year milestone couples", "Pearl Anniversary celebrators"],
      theme: "Pearl, Patience & Beauty",
      traditionalGift: "Pearl",
      modernGift: "Diamond"
    };
  }
  
  if (slug.includes('50th-anniversary')) {
    return {
      emoji: "🏆",
      yearName: "Golden Anniversary",
      yearsMarried: "50",
      intro: `Half a century of love! Your 50th Golden Anniversary is the crown jewel of wedding anniversaries. Gold represents the invaluable treasure of fifty years of marriage — a lifetime of love, sacrifice, and devotion.`,
      whySpecial: `The Golden Jubilee is a rare and precious milestone that celebrates five decades of unwavering love and commitment. This is an achievement that deserves a celebration as magnificent as gold itself.`,
      celebrationTips: [
        "Plan a grand golden-themed celebration",
        "Host a family reunion to honor your journey",
        "Exchange gold jewelry or meaningful keepsakes",
        "Renew your vows with family present",
        "Create a golden décor anniversary setup",
        "Commission a commemorative photo session"
      ],
      perfectFor: ["Golden Jubilee Couples", "Those celebrating 50 legendary years"],
      theme: "Gold, Treasure & Legacy",
      traditionalGift: "Gold",
      modernGift: "Gold"
    };
  }
  
  // Surprise celebrations
  if (slug.includes('surprise') && slug.includes('husband')) {
    return {
      emoji: "🎁",
      intro: `Planning the perfect anniversary surprise for your husband? Let us help you create an unforgettable experience that shows him just how much he means to you. A well-planned surprise can reignite the spark and create memories that last a lifetime.`,
      whySpecial: `Your husband deserves to feel special on your anniversary. A surprise celebration shows thoughtfulness, love, and appreciation for everything he does. Whether he's the romantic type or prefers understated elegance, we can create the perfect setting.`,
      celebrationTips: [
        "Plan secretly with a trusted friend or family member",
        "Choose decorations that match his personality",
        "Include his favorite foods and drinks",
        "Add personal touches like photos of your journey together",
        "Consider a rooftop setting if he loves the outdoors",
        "Arrange for his favorite music to play"
      ],
      ideas: [
        "Blindfold him and lead him to the decorated venue",
        "Set up a romantic candlelight dinner",
        "Create a memory wall with photos",
        "Arrange for a special cake with your anniversary message",
        "Plan a video message from friends and family"
      ],
      perfectFor: ["Wives planning surprises", "Secret anniversary planners"]
    };
  }
  
  if (slug.includes('surprise') && slug.includes('wife')) {
    return {
      emoji: "💝",
      intro: `Make your wife feel like the queen she is with a beautifully planned anniversary surprise! Every woman dreams of being swept off her feet, and our romantic celebration setups are designed to do exactly that.`,
      whySpecial: `Your wife deserves a celebration that shows the depth of your love. A thoughtfully planned surprise with flowers, candles, and elegant decorations will make her heart sing and remind her why she said "yes."`,
      celebrationTips: [
        "Fill the venue with her favorite flowers",
        "Choose romantic rose and pink color themes",
        "Include her favorite treats and champagne",
        "Write her a heartfelt love letter",
        "Consider a fairy-light decorated setting",
        "Plan for soft romantic music"
      ],
      ideas: [
        "Create a path of rose petals leading to the venue",
        "Arrange a candlelight dinner under the stars",
        "Set up a photo corner with your wedding pictures",
        "Surprise her with a special piece of jewelry",
        "Include a beautiful anniversary cake"
      ],
      perfectFor: ["Husbands planning surprises", "Romantic anniversary gestures"]
    };
  }
  
  if (slug.includes('surprise-anniversary-party')) {
    return {
      emoji: "🎉",
      intro: `Planning a surprise anniversary party requires secrecy, creativity, and the perfect venue. We specialize in creating surprise celebration setups that will leave your partner speechless and create a memory they'll treasure forever.`,
      whySpecial: `A surprise party shows incredible thoughtfulness and planning. It's a way to tell your partner that they deserve to be celebrated — that your love is worth the effort of creating something magical.`,
      celebrationTips: [
        "Coordinate with a trusted contact to keep the secret",
        "Plan a cover story for arriving at the venue",
        "Have everything ready before the big reveal",
        "Consider their reaction — some love big surprises, others prefer intimate ones",
        "Capture the surprise moment on camera"
      ],
      perfectFor: ["Surprise party planners", "Secret celebration organizers"]
    };
  }
  
  // Dinner & Date types
  if (slug.includes('dinner') || slug.includes('candlelight')) {
    return {
      emoji: "🕯️",
      intro: `There's nothing more romantic than a candlelight anniversary dinner for two. The soft glow of candles, elegant table settings, and intimate ambiance create the perfect atmosphere to celebrate your love story.`,
      whySpecial: `A candlelight dinner removes the distractions of everyday life and allows you to focus entirely on each other. It's a classic romantic gesture that never goes out of style — perfect for celebrating your anniversary.`,
      celebrationTips: [
        "Choose a private venue for uninterrupted romance",
        "Request soft romantic background music",
        "Pre-select your menu for a seamless experience",
        "Add flowers and rose petals to the table",
        "End the evening with a special dessert or cake"
      ],
      menuHighlights: [
        "Welcome drinks to start the evening",
        "Gourmet multi-course dinner",
        "Romantic dessert with anniversary cake",
        "Premium beverages and refreshments"
      ],
      perfectFor: ["Romantic couples", "Candlelight dinner enthusiasts", "Date night lovers"]
    };
  }
  
  if (slug.includes('date-night') || slug.includes('romantic-anniversary-date')) {
    return {
      emoji: "❤️",
      intro: `Turn your anniversary into an unforgettable date night! Whether it's your first or your fiftieth, an anniversary date night is the perfect way to reconnect, reminisce, and fall in love all over again.`,
      whySpecial: `Anniversary date nights give you dedicated time away from responsibilities to focus on your relationship. It's a chance to dress up, enjoy each other's company, and celebrate the love that brought you together.`,
      celebrationTips: [
        "Dress up as if it's your first date",
        "Put away phones and focus on each other",
        "Share your favorite memories from the past year",
        "Try something new together",
        "End the night with a meaningful gift exchange"
      ],
      perfectFor: ["Couples of all ages", "Date night enthusiasts", "Anniversary celebrators"]
    };
  }
  
  // Decoration & Planning types
  if (slug.includes('decoration')) {
    return {
      emoji: "🎈",
      intro: `Transform any space into a romantic anniversary paradise with our professional anniversary decoration services. From elegant balloon arrangements to flower installations, we create stunning setups that set the perfect mood for celebration.`,
      whySpecial: `The right decorations elevate your anniversary from ordinary to extraordinary. Beautiful decorations create a Instagram-worthy backdrop and set the romantic tone for your entire celebration.`,
      decorationElements: [
        "Elegant balloon arrangements",
        "Fresh flower installations",
        "Fairy lights and ambient lighting",
        "Rose petal arrangements",
        "Custom banners and signage",
        "Candle displays",
        "Photo backdrop setups",
        "Table centerpieces"
      ],
      themes: [
        "Classic Romance — Red roses, candles, hearts",
        "Elegant Gold — Golden accents, white flowers",
        "Garden Paradise — Greenery, soft colors",
        "Starry Night — Fairy lights, silver tones",
        "Vintage Romance — Pastels, lace accents"
      ],
      perfectFor: ["Decoration enthusiasts", "Instagram-worthy celebrations", "Visual impact lovers"]
    };
  }
  
  if (slug.includes('planners') || slug.includes('organizers')) {
    return {
      emoji: "📋",
      intro: `Leave the stress to us! Our professional anniversary party organizers and planners handle every detail of your celebration — from decoration to dining, so you can focus on enjoying your special day with your loved one.`,
      whySpecial: `Planning an anniversary celebration can be overwhelming. Our experienced team takes care of everything, ensuring your celebration is flawless, romantic, and exactly what you envisioned.`,
      servicesIncluded: [
        "Complete venue setup and decoration",
        "Menu planning and refreshments",
        "Ambiance creation with lighting and music",
        "Photography-ready setups",
        "Coordination of special requests",
        "Day-of management and service"
      ],
      planningProcess: [
        "Initial consultation to understand your vision",
        "Custom package selection and customization",
        "Venue preparation before your arrival",
        "Seamless execution of your celebration",
        "Clean-up and wrap-up handled by our team"
      ],
      perfectFor: ["Busy couples", "Those who want stress-free celebrations", "Perfectionists"]
    };
  }
  
  // Venue & Restaurant types
  if (slug.includes('venues') || slug.includes('places') || slug.includes('restaurants')) {
    return {
      emoji: "🏛️",
      intro: `Finding the perfect anniversary venue in Vadodara can make all the difference. Our exclusive celebration spaces offer private, romantic settings designed specifically for couples celebrating their love milestones.`,
      whySpecial: `The venue sets the tone for your entire celebration. Our spaces are designed with romance in mind — from rooftop settings with city views to intimate glass house venues with climate control.`,
      venueFeatures: [
        "100% private celebration space",
        "Multiple venue options (rooftop, glass house)",
        "Panoramic city views available",
        "Climate-controlled comfort",
        "Dedicated service staff",
        "Customizable decorations",
        "Premium sound system for music",
        "Photography-friendly settings"
      ],
      venueTypes: [
        "Rooftop Venue — Open-air romance under the stars",
        "Glass House — Elegant, climate-controlled intimacy",
        "Garden Setting — Natural beauty and fresh air"
      ],
      perfectFor: ["Venue seekers", "Couples wanting privacy", "Those planning special celebrations"]
    };
  }
  
  // Celebration ideas
  if (slug.includes('ideas') || slug.includes('celebration-ideas')) {
    return {
      emoji: "💡",
      intro: `Looking for unique anniversary celebration ideas in Vadodara? We've curated the most romantic and memorable ways to celebrate your love milestone. From intimate dinners to grand gestures, find inspiration for your perfect celebration.`,
      whySpecial: `Every anniversary deserves a celebration as unique as your love story. Our ideas range from classic romance to creative surprises, ensuring you find the perfect way to honor your milestone.`,
      celebrationIdeas: [
        "Romantic rooftop candlelight dinner under the stars",
        "Surprise party with decorated private venue",
        "Recreate your first date or wedding day",
        "Private movie screening for two",
        "Champagne and cake celebration in a glass house",
        "Memory lane photo exhibition of your journey together",
        "Stargazing dinner on our rooftop venue",
        "Themed celebration (vintage, Bollywood, travel)"
      ],
      budgetOptions: [
        "Budget-Friendly — Intimate dinner with elegant decorations (₹4,700+)",
        "Mid-Range — Full celebration package with cake (₹5,700+)",
        "Premium — Luxury experience with all amenities (₹6,900+)"
      ],
      perfectFor: ["Idea seekers", "Creative celebrators", "Couples wanting inspiration"]
    };
  }
  
  // Gift ideas
  if (slug.includes('gift')) {
    return {
      emoji: "🎁",
      intro: `The best anniversary gift combines thoughtfulness with experience. While traditional gifts are wonderful, gifting a romantic celebration experience creates memories that last forever. Why not give the gift of an unforgettable anniversary evening?`,
      whySpecial: `Material gifts are enjoyed, but experiences are remembered. A private anniversary celebration in a beautifully decorated venue is a gift that speaks volumes about your love and thoughtfulness.`,
      giftIdeas: [
        "Book a surprise anniversary celebration",
        "Gift a romantic candlelight dinner for two",
        "Combine a gift with a decorated venue experience",
        "Create a memory book and present it at a romantic dinner",
        "Plan a complete anniversary experience package"
      ],
      experienceGifts: [
        "Rooftop dinner under the stars",
        "Glass house celebration with cake",
        "Private venue with personalized decorations",
        "Couple's photo session at decorated venue"
      ],
      perfectFor: ["Gift seekers", "Experience gifters", "Thoughtful partners"]
    };
  }
  
  // Setup types
  if (slug.includes('setup') || slug.includes('romantic-anniversary-setup')) {
    return {
      emoji: "✨",
      intro: `Our romantic anniversary setups transform ordinary spaces into extraordinary celebrations of love. Every element is carefully curated — from the flicker of candles to the arrangement of flowers — creating the perfect atmosphere for your special day.`,
      whySpecial: `A thoughtfully designed setup shows your partner the effort and love behind your celebration. Our professional decorators create Instagram-worthy romantic environments that make your anniversary truly special.`,
      setupElements: [
        "Themed decoration with balloons and flowers",
        "Candlelight arrangements for ambiance",
        "Rose petal pathways and table arrangements",
        "Fairy light installations",
        "Comfortable seating for two",
        "Table setting with elegant dinnerware",
        "Custom signage and banners",
        "Photo corner with romantic backdrop"
      ],
      perfectFor: ["Romance lovers", "Instagram enthusiasts", "Detail-oriented celebrators"]
    };
  }
  
  // Budget & Luxury types
  if (slug.includes('affordable') || slug.includes('budget')) {
    return {
      emoji: "💰",
      intro: `Celebrate your anniversary in style without breaking the bank! Our affordable anniversary packages prove that romance doesn't need a luxury price tag. Create beautiful memories within your budget.`,
      whySpecial: `We believe every couple deserves a magical anniversary celebration, regardless of budget. Our affordable packages include all the essentials for a romantic evening.`,
      budgetFeatures: [
        "Private venue access for 3 hours",
        "Beautiful basic decorations",
        "Welcome refreshments included",
        "Ambient music and lighting",
        "Optional cake add-on (₹500)",
        "Photography-ready setup"
      ],
      savingTips: [
        "Book weekday celebrations for better availability",
        "Choose packages without cake (add your own)",
        "Consider our basic package and customize",
        "Book in advance for early bird offers"
      ],
      perfectFor: ["Budget-conscious couples", "Young couples", "First-time celebrators"]
    };
  }
  
  if (slug.includes('luxury') || slug.includes('premium')) {
    return {
      emoji: "👑",
      intro: `Indulge in the ultimate anniversary experience with our luxury celebration packages. Premium decorations, gourmet refreshments, exclusive venue access, and personalized service — everything designed for couples who want the very best.`,
      whySpecial: `Some occasions call for something extraordinary. Our luxury packages deliver an unparalleled celebration experience with attention to every detail, ensuring your anniversary is as magnificent as your love.`,
      luxuryFeatures: [
        "Premium decorated private venue",
        "Complimentary anniversary cake included",
        "Gourmet refreshments and welcome drinks",
        "Upgraded decorations with premium flowers",
        "Extended celebration time available",
        "Personalized setup with your preferences",
        "Professional-grade photo opportunities",
        "Priority booking and dedicated service"
      ],
      perfectFor: ["Luxury seekers", "Milestone celebrations", "Those wanting the best experience"]
    };
  }
  
  // Private & Outdoor types
  if (slug.includes('private')) {
    return {
      emoji: "🔒",
      intro: `Experience the intimacy of a completely private anniversary celebration. No other guests, no distractions — just you and your partner in an exclusively reserved venue, celebrating your love story.`,
      whySpecial: `Privacy allows you to be yourselves without reservation. Laugh, dance, cry happy tears, and create memories in a space that's entirely yours for the celebration.`,
      privacyFeatures: [
        "Exclusively reserved venue for your celebration",
        "No other bookings during your slot",
        "Private entrance and setup",
        "Dedicated staff for your celebration only",
        "Complete freedom to personalize your experience",
        "Intimate setting for meaningful moments"
      ],
      perfectFor: ["Privacy seekers", "Intimate celebrations", "Couples wanting exclusivity"]
    };
  }
  
  if (slug.includes('outdoor') || slug.includes('rooftop')) {
    return {
      emoji: "🌟",
      intro: `Celebrate your anniversary under the open sky! Our outdoor and rooftop celebration venues offer breathtaking views, fresh air, and a magical atmosphere that indoor spaces simply can't match.`,
      whySpecial: `There's something incredibly romantic about celebrating under the stars. Our rooftop venues provide panoramic city views, natural ambiance, and the perfect setting for sunset-to-starlight celebrations.`,
      outdoorFeatures: [
        "Panoramic city views of Vadodara",
        "Open-air rooftop setting",
        "Sunset to starlight experience",
        "Natural ambiance with city lights",
        "Weather-appropriate arrangements",
        "Comfortable outdoor seating",
        "Fairy lights and ambient lighting",
        "City skyline as your backdrop"
      ],
      perfectFor: ["Nature lovers", "Stargazers", "Couples wanting scenic celebrations"]
    };
  }
  
  // Default for other keywords
  return {
    emoji: "💕",
    intro: `Celebrate your anniversary in the most memorable way at Vadodara's premier celebration venue. We specialize in creating magical moments for couples, with elegant decorations, private settings, and personalized service.`,
    whySpecial: `Every anniversary is a milestone worth celebrating. Our venue and services are designed to make your celebration special, romantic, and unforgettable.`,
    celebrationTips: [
      "Book in advance for best availability",
      "Customize your celebration to your preferences",
      "Add personal touches like photos and messages",
      "Consider including a special cake",
      "Plan surprise elements for your partner"
    ],
    perfectFor: ["All couples", "Anniversary celebrators", "Romance seekers"]
  };
}

// Generate FAQ based on keyword
function getKeywordFAQs(keyword: ServiceKeyword) {
  const title = keyword.title.toLowerCase();
  const baseFAQs = [
    {
      question: `How do I book ${title} at your venue?`,
      answer: `Booking is easy! You can call us at ${siteConfig.phone}, WhatsApp us, or fill out our online booking form. We recommend booking 3-5 days in advance for best availability.`
    },
    {
      question: `What is included in your ${title} packages?`,
      answer: `Our packages include private venue access for 3 hours, themed decorations, welcome refreshments, ambient music, and photography-ready setups. Premium packages include complimentary cake.`
    },
    {
      question: `Can you customize the ${title} setup?`,
      answer: `Absolutely! We love customizing celebrations. You can request specific colors, themes, add personal photos, custom messages, and more. Just let us know your preferences when booking.`
    },
    {
      question: `What are the prices for ${title}?`,
      answer: `Our packages start from ₹4,700 for basic setups and go up to ₹6,900 for premium experiences with cake included. We have options for every budget.`
    },
    {
      question: `Is the venue completely private for ${title}?`,
      answer: `Yes! We ensure 100% privacy for your celebration. No other guests will be present during your booked time slot.`
    },
    {
      question: `What areas in Vadodara do you serve for ${title}?`,
      answer: `We welcome couples from all areas of Vadodara including Alkapuri, Akota, Fatehgunj, Sayajigunj, Manjalpur, Gotri, and many more. Our venue is centrally located in Gotri.`
    }
  ];
  
  return baseFAQs;
}

export default function AnniversaryKeywordPage({ keyword }: AnniversaryKeywordPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  
  // Hero slider auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const content = getKeywordContent(keyword);
  const faqs = getKeywordFAQs(keyword);
  
  // SEO Content Expansion: 700+ unique words + 10 unique FAQs with schema
  const seoContent = generateExpandedContent(keyword.title, 'Vadodara', 'Friends Factory Cafe');
  const seoFAQs = generateFAQContent(keyword.title, 'Vadodara', 'Friends Factory Cafe');

  // Merge: existing FAQs first, then fill to 10 from SEO engine
  const allFAQs = [...faqs];
  const existingQuestions = new Set(allFAQs.map(f => f.question.toLowerCase()));
  for (const faq of seoFAQs.faqs) {
    if (allFAQs.length >= 10) break;
    if (!existingQuestions.has(faq.question.toLowerCase())) {
      allFAQs.push(faq);
      existingQuestions.add(faq.question.toLowerCase());
    }
  }

  const faqSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Get related packages
  const relatedPackages = packages.slice(0, 3);

  // Get related keywords (excluding current)
  const relatedKeywords = anniversaryKeywords.filter(k => k.slug !== keyword.slug).slice(0, 10);

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      <main>
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-rose-800">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-800 font-medium">{keyword.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section — Homepage-style slider with booking form */}
      <section aria-label={`${keyword.title} - Hero`} className="relative bg-gradient-to-br from-rose-800 via-amber-600 to-rose-900 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {galleryImages.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={`${keyword.title} - ${image.alt}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/70 via-rose-950/50 to-transparent" />

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {galleryImages.slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === heroSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                💕 Anniversary Celebration Vadodara
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                {keyword.h1}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                {content.intro}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-rose-800 hover:bg-amber-50 text-lg px-8 py-6"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Celebration
                </Button>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'm interested in ${keyword.title} at your venue.`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto px-8 py-6">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                  <Shield className="h-4 w-4" /> 100% Private Venue
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> 500+ Happy Couples
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form — Desktop */}
            <div className="hidden lg:block">
              <FFCBookingFormInner variant="hero" pageTitle={keyword.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form — Above the fold on mobile */}
      <section className="lg:hidden bg-gradient-to-r from-amber-50 via-amber-50 to-amber-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingFormInner pageTitle={keyword.title} />
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
                <Heart className="w-3 h-3 mr-1" />
                Why Choose Us
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-rose-900 mb-6">
                Why Our {keyword.title} Service is Special
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.whySpecial}
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center border-amber-100 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-rose-800" />
                  </div>
                  <h3 className="font-semibold mb-2">Private Venue</h3>
                  <p className="text-sm text-muted-foreground">Exclusively yours</p>
                </CardContent>
              </Card>
              <Card className="text-center border-amber-100 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-rose-800" />
                  </div>
                  <h3 className="font-semibold mb-2">Premium Décor</h3>
                  <p className="text-sm text-muted-foreground">Elegant setups</p>
                </CardContent>
              </Card>
              <Card className="text-center border-amber-100 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-rose-800" />
                  </div>
                  <h3 className="font-semibold mb-2">3 Hours</h3>
                  <p className="text-sm text-muted-foreground">Quality time</p>
                </CardContent>
              </Card>
              <Card className="text-center border-amber-100 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-rose-800" />
                  </div>
                  <h3 className="font-semibold mb-2">Top Rated</h3>
                  <p className="text-sm text-muted-foreground">4.9★ reviews</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Tips / Ideas Section */}
      {(content.celebrationTips || content.ideas || content.celebrationIdeas) && (
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Tips & Ideas
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
                  {keyword.title} Ideas & Tips
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {(content.celebrationTips || content.ideas || content.celebrationIdeas)?.map((tip: string, index: number) => (
                  <Card key={index} className="border-amber-100">
                    <CardContent className="pt-6 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{tip}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Special Features Section (for specific keyword types) */}
      {(content.decorationElements || content.venueFeatures || content.setupElements || content.luxuryFeatures || content.privacyFeatures || content.outdoorFeatures) && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
                  <Gift className="w-3 h-3 mr-1" />
                  What&apos;s Included
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
                  {keyword.title} Features
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {(content.decorationElements || content.venueFeatures || content.setupElements || content.luxuryFeatures || content.privacyFeatures || content.outdoorFeatures)?.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section aria-label="Anniversary Gallery" className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Camera className="w-3 h-3 mr-1" />
              Gallery
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
              Our {keyword.title} Setups in Vadodara
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={image.src}
                  alt={`${keyword.title} setup ${index + 1} - ${image.alt}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section aria-label="Anniversary Celebration Packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Gift className="w-3 h-3 mr-1" />
              Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
              {keyword.title} Packages
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Choose the perfect package for your celebration. All packages include private venue, decorations, and refreshments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPackages.map((pkg, index) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all border-amber-100 ${index === 0 ? 'ring-2 ring-amber-500' : ''}`}>
                {index === 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-amber-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="text-3xl mb-2">{pkg.emoji}</div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm">{pkg.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-rose-800">{formatPrice(pkg.price)}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 5).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {pkg.cakeIncluded && (
                    <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700">
                      🎂 Cake Included
                    </Badge>
                  )}
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-rose-800 hover:to-amber-700 text-white"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Book This Package
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Heart className="w-3 h-3 mr-1" />
              Reviews
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
              What Couples Say About Our {keyword.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-amber-100">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="border-t border-amber-100 pt-4">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-rose-800">{testimonial.anniversary}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Expanded Content — 700+ unique words */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {seoContent.paragraphs.map((section, idx) => (
              <div key={`seo-${idx}`} className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-rose-900">{section.heading}</h3>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Friendly Service Summary — structured for AI crawlers */}
      <section aria-label="Service Summary" className="py-12 bg-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 font-serif text-center text-rose-900">
            {keyword.title} — Quick Overview
          </h2>
          <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <dt className="font-semibold text-gray-900">Service</dt>
              <dd className="text-gray-600">{keyword.title}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Location</dt>
              <dd className="text-gray-600">Vadodara, Gujarat, India</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Venue</dt>
              <dd className="text-gray-600">{siteConfig.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Price Range</dt>
              <dd className="text-gray-600">₹4,700 – ₹14,900</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Duration</dt>
              <dd className="text-gray-600">3 Hours Private Celebration</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Includes</dt>
              <dd className="text-gray-600">Decorations, Cake, Music, Romantic Setup</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Booking</dt>
              <dd className="text-gray-600">WhatsApp, Phone, or Online Form</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Contact</dt>
              <dd className="text-gray-600">{siteConfig.phone}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FAQ Section */}
      <section aria-label="Frequently Asked Questions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
                FAQ
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
                Frequently Asked Questions About {keyword.title}
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {allFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-amber-100">
                  <AccordionTrigger className="text-left hover:text-rose-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Sparkles className="w-3 h-3 mr-1" />
              Related Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
              Explore More Anniversary Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {relatedKeywords.map((kw, index) => (
              <Link 
                key={index}
                href={`/${kw.slug}`}
                className="block p-4 rounded-lg border border-amber-200 bg-white hover:border-amber-500 hover:bg-amber-50 transition-all group text-center"
              >
                <h3 className="font-medium text-sm group-hover:text-rose-800 transition-colors">
                  {kw.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section aria-label="Areas We Serve" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <MapPin className="w-3 h-3 mr-1" />
              Areas
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
              {keyword.title} Across Vadodara
            </h2>
            <p className="text-muted-foreground mt-4">
              We welcome couples from all areas of Vadodara for {keyword.title.toLowerCase()}.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {vadodaraAreas.map((area, index) => (
              <Link 
                key={index}
                href={`/${area.slug}`}
                className="px-4 py-2 rounded-full border border-amber-200 bg-white text-sm hover:bg-amber-100 hover:border-amber-300 transition-all"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section aria-label="Contact and Location" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
                <MapPin className="w-3 h-3 mr-1" />
                Contact Us
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
                Book Your {keyword.title} in Vadodara
              </h2>
            </div>
            
            <Card className="border-amber-100">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Our Location</h3>
                        <p className="text-muted-foreground text-sm">{siteConfig.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-muted-foreground text-sm">{siteConfig.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Hours</h3>
                        <p className="text-muted-foreground text-sm">5:00 PM - 11:00 PM (By Appointment)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button 
                      size="lg"
                      className="bg-amber-500 hover:bg-rose-800 text-white"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Now
                    </Button>
                    <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'm interested in ${keyword.title} at your venue.`}>
                      <Button size="lg" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp Us
                      </Button>
                    </Link>
                    <Link href={`tel:${siteConfig.phone}`}>
                      <Button size="lg" variant="outline" className="w-full border-amber-300 text-rose-800 hover:bg-amber-50">
                        <Phone className="mr-2 h-5 w-5" />
                        Call {siteConfig.phone}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-label="Book Your Anniversary" className="py-20 bg-gradient-to-r from-rose-800 via-amber-600 to-rose-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Book Your {keyword.title}?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto text-lg">
            Let us create a magical celebration that honors your love story. 
            Book now and make your anniversary unforgettable in Vadodara.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-rose-800 hover:bg-amber-50 px-8 py-6 text-lg rounded-full"
              onClick={() => setIsBookingOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Celebration
            </Button>
            <Link href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-rose-900 hover:bg-rose-950 px-8 py-6 text-lg rounded-full">
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phone}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaMarkup) }}
      />

      {/* Breadcrumb Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(buildKeywordBreadcrumbs(
            siteConfig.website,
            siteConfig.name,
            keyword.title,
            `${siteConfig.website}/${keyword.slug}`
          )))
        }}
      />

      {/* Service Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema({
            serviceName: `${keyword.title} in Vadodara`,
            serviceUrl: `${siteConfig.website}/${keyword.slug}`,
            serviceDescription: `Best ${keyword.title.toLowerCase()} service in Vadodara. Private romantic celebration venue with elegant decorations, candlelight dinner setup, and personalized anniversary experience.`,
            providerName: siteConfig.name,
            providerUrl: siteConfig.website,
            providerPhone: siteConfig.phone,
            providerAddress: siteConfig.address,
            providerCity: siteConfig.city,
            areaServed: 'Vadodara',
            priceRange: '₹4700 - ₹14900',
          }))
        }}
      />
      </main>

      <FFCFooter />
      <FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <FFCWhatsAppFloat />
    </div>
  );
}
