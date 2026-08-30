'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight,
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Camera, Music, Cake, Wine, PartyPopper, Flower2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCBookingFormInner, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, packages, anniversaryKeywords, vadodaraAreas, formatPrice, testimonials, faqs } from '@/lib/anniversary-config';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/schema-generator';

// Experience features for Anniversary
const experienceFeatures = [
  {
    icon: Clock,
    title: "3 Hours of Romance",
    description: "Three magical hours to celebrate your love story in a private setting"
  },
  {
    icon: Cake,
    title: "Anniversary Cake Included",
    description: "Complimentary celebration cake with premium packages"
  },
  {
    icon: Camera,
    title: "Photo-Ready Décor",
    description: "Instagram-worthy decorations capturing your milestone moment"
  },
  {
    icon: Music,
    title: "Romantic Ambiance",
    description: "Soft music, candlelight, and enchanting atmosphere"
  }
];

// Why choose us for Anniversary
const whyChooseUs = [
  {
    icon: Heart,
    title: "Anniversary Specialists",
    description: "We focus exclusively on creating perfect anniversary celebrations for couples in Vadodara"
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Private venue with no other guests during your celebration - just you and your partner"
  },
  {
    icon: Award,
    title: "Premium Experience",
    description: "Elegant decorations, quality refreshments, and attention to every romantic detail"
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Customizable setups tailored to your love story and celebration preferences"
  }
];

// Gallery images for Anniversary
const galleryImages = [
  { src: '/images/gallery/IMG_20251108_195907946.jpg', alt: 'Anniversary celebration setup Vadodara', title: 'Anniversary Setup' },
  { src: '/images/gallery/IMG_20251108_195914428.jpg', alt: 'Romantic anniversary decoration', title: 'Romantic Decor' },
  { src: '/images/gallery/IMG_20251117_201140680.jpg', alt: 'Anniversary dinner arrangement', title: 'Dinner Setup' },
  { src: '/images/gallery/IMG_20251126_195504828.jpg', alt: 'Anniversary candlelight dinner', title: 'Candlelight' },
  { src: '/images/gallery/IMG_20251126_195520782.jpg', alt: 'Rooftop anniversary celebration', title: 'Rooftop Romance' },
  { src: '/images/gallery/IMG_20251126_195542577.jpg', alt: 'Anniversary table decoration', title: 'Table Setting' },
  { src: '/images/gallery/IMG_20251130_190628327.jpg', alt: 'Anniversary venue Vadodara', title: 'Venue Setup' },
  { src: '/images/gallery/IMG_20251201_201429116.jpg', alt: 'Anniversary celebration venue', title: 'Celebration' },
  { src: '/images/gallery/IMG_20251203_202600922.jpg', alt: 'Romantic anniversary setup', title: 'Romantic Night' },
  { src: '/images/gallery/IMG-20250123-WA0014.jpg', alt: 'Anniversary surprise decoration', title: 'Surprise Setup' },
  { src: '/images/gallery/IMG-20250123-WA0018.jpg', alt: 'Anniversary celebration decor', title: 'Special Decor' },
  { src: '/images/gallery/IMG-20250123-WA0029.jpg', alt: 'Private anniversary celebration', title: 'Private Venue' },
];

// Gallery videos for Anniversary
const galleryVideos = [
  { src: '/images/gallery/1000330054.mp4', title: 'Anniversary Celebration Reel', poster: '/images/gallery/IMG_20251108_195907946.jpg' },
  { src: '/images/gallery/1000330055.mp4', title: 'Romantic Setup Video', poster: '/images/gallery/IMG_20251117_201140680.jpg' },
  { src: '/images/gallery/VID-20250425-WA0024.mp4', title: 'Couple Celebration', poster: '/images/gallery/IMG_20251126_195504828.jpg' },
  { src: '/images/gallery/reel-.mp4', title: 'Anniversary Moments', poster: '/images/gallery/IMG_20251201_201429116.jpg' },
];

// Anniversary Milestones
const anniversaryMilestones = [
  { year: "1st", name: "Paper Anniversary", emoji: "📜", link: "/first-anniversary-celebration-vadodara" },
  { year: "5th", name: "Wood Anniversary", emoji: "🪵", link: "/5th-anniversary-celebration-vadodara" },
  { year: "10th", name: "Tin Anniversary", emoji: "🥈", link: "/10th-anniversary-celebration-vadodara" },
  { year: "15th", name: "Crystal Anniversary", emoji: "💎", link: "/15th-anniversary-celebration-vadodara" },
  { year: "20th", name: "China Anniversary", emoji: "🏺", link: "/20th-anniversary-celebration-vadodara" },
  { year: "25th", name: "Silver Anniversary", emoji: "🥈", link: "/25th-anniversary-celebration-vadodara" },
  { year: "30th", name: "Pearl Anniversary", emoji: "🦪", link: "/30th-anniversary-celebration-vadodara" },
  { year: "50th", name: "Golden Anniversary", emoji: "🏆", link: "/50th-anniversary-celebration-vadodara" },
];

// Service highlights for SEO
const serviceHighlights = [
  { icon: Wine, title: "Candlelight Anniversary Dinner", description: "Romantic dining experience with candles, roses, and intimate ambiance", link: "/candlelight-anniversary-dinner-vadodara" },
  { icon: PartyPopper, title: "Surprise Anniversary Party", description: "Secret celebration setup to surprise your beloved partner", link: "/surprise-anniversary-party-vadodara" },
  { icon: Flower2, title: "Anniversary Decoration", description: "Beautiful floral arrangements, balloons, and themed decorations", link: "/anniversary-decoration-vadodara" },
  { icon: Gift, title: "Anniversary Gift Ideas", description: "Combine your gift with a memorable celebration experience", link: "/anniversary-gift-ideas-vadodara" },
];

// Hero slider images
const heroSliderImages = [
  { src: '/images/gallery/IMG_20251108_195907946.jpg', alt: 'Anniversary Celebration Vadodara - Romantic Private Setup' },
  { src: '/images/gallery/IMG_20251126_195504828.jpg', alt: 'Anniversary Candlelight Dinner Vadodara' },
  { src: '/images/gallery/IMG_20251201_201429116.jpg', alt: 'Romantic Anniversary Venue Vadodara' },
];

export default function AnniversaryHomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FFCHeader />
      
      <main>
      {/* Hero Section */}
      <section aria-label="Anniversary Celebration Vadodara - Hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-950/90 via-amber-900/85 to-rose-950/90 z-10" />
          {heroSliderImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
            />
          ))}
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl" />
        
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-amber-500/20 text-amber-100 border-amber-500/30 backdrop-blur-sm text-sm px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Vadodara&apos;s Premier Anniversary Celebration Venue
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Anniversary Celebration
                <span className="block bg-gradient-to-r from-amber-300 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                  Vadodara
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-amber-100/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Create unforgettable memories at Vadodara&apos;s most romantic anniversary venue. 
                Whether you&apos;re celebrating your <strong>1st anniversary</strong>, <strong>10th anniversary</strong>, 
                <strong> 25th silver jubilee</strong>, or <strong>50th golden anniversary</strong> — we specialize in 
                crafting magical private celebrations with elegant decorations, candlelight dinners, 
                and personalized romantic setups for couples.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-amber-100/80">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm">500+ Happy Couples</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">100% Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Premium Experience</span>
                </div>
              </div>
            </div>
            
            {/* Right - Booking Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <FFCBookingFormInner variant="hero" pageTitle="Anniversary Celebration Vadodara" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section with Thumbnails */}
      <section aria-label="Anniversary Celebration Packages" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Gift className="w-3 h-3 mr-1" />
              Our Packages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Anniversary Celebration Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from 8 stunning romantic setups designed to make your anniversary unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden border-amber-100 hover:shadow-xl transition-all group h-full hover:border-amber-300">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={`${pkg.name} - Anniversary Package Vadodara`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 md:top-3 md:left-3 bg-rose-800 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                    {pkg.cakeIncluded && (
                      <Badge className="absolute top-2 right-2 md:top-3 md:right-3 bg-green-600 text-white text-xs">
                        <Cake className="w-3 h-3 mr-1" /> Cake Free
                      </Badge>
                    )}
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-3 md:p-4">
                    <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 group-hover:text-rose-800 transition-colors line-clamp-2">
                      {pkg.name} {pkg.emoji}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
                    <p className="text-lg md:text-xl font-bold text-rose-800">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-rose-800 hover:bg-rose-900 text-white rounded-full px-8">
              <Link href="/packages">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section - SEO Rich Content */}
      <section aria-label="About Us" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
                <Heart className="w-3 h-3 mr-1" />
                About Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Best Anniversary Celebration Venue in Vadodara
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Welcome to <strong>Anniversary Celebration Vadodara</strong> — the city&apos;s most trusted destination 
                for romantic anniversary celebrations. Located in the heart of Vadodara, we have been helping 
                couples create magical memories on their special day for years. Whether you&apos;re planning an 
                <Link href="/anniversary-surprise-for-husband-vadodara" className="text-rose-800 hover:underline"> anniversary surprise for your husband</Link> or an 
                <Link href="/anniversary-surprise-for-wife-vadodara" className="text-rose-800 hover:underline"> anniversary surprise for your wife</Link>, 
                our expert team ensures every detail is perfect.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our venue offers exclusive <Link href="/private-anniversary-celebration-vadodara" className="text-rose-800 hover:underline">private anniversary celebrations</Link> with 
                stunning rooftop views, elegant glass house settings, and romantic decorations. From 
                <Link href="/candlelight-anniversary-dinner-vadodara" className="text-rose-800 hover:underline"> candlelight anniversary dinners</Link> to 
                <Link href="/luxury-anniversary-celebration-vadodara" className="text-rose-800 hover:underline"> luxury anniversary celebrations</Link>, 
                we cater to all preferences and budgets with <Link href="/affordable-anniversary-celebration-vadodara" className="text-rose-800 hover:underline">affordable packages</Link> starting 
                from just ₹4,700.
              </p>
              
              <p className="text-lg leading-relaxed">
                As professional <Link href="/anniversary-planners-vadodara" className="text-rose-800 hover:underline">anniversary planners in Vadodara</Link> and 
                <Link href="/anniversary-party-organizers-vadodara" className="text-rose-800 hover:underline"> party organizers</Link>, 
                we handle everything — from <Link href="/anniversary-decoration-vadodara" className="text-rose-800 hover:underline">beautiful decorations</Link> and 
                <Link href="/romantic-anniversary-setup-vadodara" className="text-rose-800 hover:underline"> romantic setups</Link> to 
                <Link href="/anniversary-dinner-vadodara" className="text-rose-800 hover:underline"> intimate dinners</Link>. 
                Explore our <Link href="/anniversary-venues-vadodara" className="text-rose-800 hover:underline">anniversary venues</Link> and 
                discover why we&apos;re rated among the <Link href="/best-anniversary-places-vadodara" className="text-rose-800 hover:underline">best anniversary places in Vadodara</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anniversary Milestones Section */}
      <section aria-label="Anniversary Milestones" className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Cake className="w-3 h-3 mr-1" />
              Celebrate Every Milestone
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Anniversary Celebration by Year
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every anniversary deserves a special celebration. From your first year to your golden jubilee, 
              we create themed celebrations for every milestone.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {anniversaryMilestones.map((milestone, index) => (
              <Link 
                key={index}
                href={milestone.link}
                className="block p-6 rounded-xl bg-white border border-amber-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all text-center group"
              >
                <div className="text-4xl mb-3">{milestone.emoji}</div>
                <h3 className="text-2xl font-bold text-rose-800 mb-1">{milestone.year}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-rose-800 transition-colors">{milestone.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section aria-label="What's Included" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Sparkles className="w-3 h-3 mr-1" />
              What&apos;s Included
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Anniversary Experience in Vadodara
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every detail designed to make your celebration unforgettable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-amber-100 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <PartyPopper className="w-3 h-3 mr-1" />
              Popular Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Anniversary Celebration Services in Vadodara
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular anniversary celebration services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card className="h-full border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all group cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <service.icon className="w-6 h-6 text-rose-800 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-rose-800 transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Award className="w-3 h-3 mr-1" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vadodara&apos;s Trusted Anniversary Celebration Specialists
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve helped hundreds of couples create magical anniversary memories across Vadodara
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-amber-100 hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-rose-800" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Camera className="w-3 h-3 mr-1" />
              Our Gallery
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Anniversary Celebrations We&apos;ve Created in Vadodara
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the magical moments we&apos;ve helped couples create — from 
              <Link href="/romantic-anniversary-date-vadodara" className="text-rose-800 hover:underline"> romantic date nights</Link> to 
              <Link href="/wedding-anniversary-party-vadodara" className="text-rose-800 hover:underline"> wedding anniversary parties</Link>
            </p>
          </div>
          
          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {galleryImages.map((item, index) => (
              <div 
                key={index} 
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Gallery */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Watch Our Anniversary Celebrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryVideos.map((video, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                  <video 
                    className="w-full aspect-video object-cover"
                    poster={video.poster}
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-3 bg-amber-50">
                    <p className="font-medium text-rose-900 text-sm">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Heart className="w-3 h-3 mr-1" />
              Happy Couples
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Couples in Vadodara Say About Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read reviews from couples who celebrated their anniversary with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Anniversary Services (All Keywords) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <Sparkles className="w-3 h-3 mr-1" />
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Anniversary Celebration Services in Vadodara
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From <Link href="/anniversary-date-night-vadodara" className="text-rose-800 hover:underline">anniversary date nights</Link> to 
              <Link href="/anniversary-restaurants-vadodara" className="text-rose-800 hover:underline"> romantic restaurant experiences</Link>, 
              explore our full range of anniversary celebration services. We offer 
              <Link href="/anniversary-celebration-ideas-vadodara" className="text-rose-800 hover:underline"> creative celebration ideas</Link> for 
              couples seeking the perfect way to honor their love story.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {anniversaryKeywords.map((keyword, index) => (
              <Link 
                key={index}
                href={`/${keyword.slug}`}
                className="block p-4 rounded-lg border border-amber-100 hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <h3 className="font-medium text-sm group-hover:text-rose-800 transition-colors flex items-center">
                  {keyword.title}
                  <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section - All Vadodara Areas */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              <MapPin className="w-3 h-3 mr-1" />
              Areas We Serve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Anniversary Celebrations Across Vadodara
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our centrally located venue in Gotri, Vadodara is easily accessible from all major areas of the city. 
              We welcome couples from every corner of Vadodara for their special anniversary celebration.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {vadodaraAreas.map((area, index) => (
              <Link 
                key={index}
                href={`/${area.slug}`}
                className="block px-4 py-3 rounded-lg border border-amber-200 text-center hover:bg-amber-100 hover:border-amber-300 transition-all group"
              >
                <span className="text-sm font-medium group-hover:text-rose-800 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
                <MapPin className="w-3 h-3 mr-1" />
                Our Location
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Visit Us in Vadodara
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our anniversary celebration venue is conveniently located in Gotri, Vadodara — 
                easily accessible from Alkapuri, Akota, Fatehgunj, Sayajigunj, and all major areas of the city.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-rose-800 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground text-sm">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-rose-800 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground text-sm">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-rose-800 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Celebration Hours</p>
                    <p className="text-muted-foreground text-sm">5:00 PM - 11:00 PM (By Appointment)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-amber-500 hover:bg-rose-800 text-white"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Anniversary
                </Button>
                <Button 
                  variant="outline" 
                  className="border-amber-300 text-rose-800 hover:bg-amber-50"
                  asChild
                >
                  <Link href={`https://wa.me/${siteConfig.whatsapp}`}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.215022946781!2d73.1251565!3d22.3077063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc857f49f5a21%3A0xff4259d15a6c3964!2sFriends%20Factory%20Cafe%20-%20Private%20Candle%20Light%20Dinner!5e0!3m2!1sen!2sin!4v1769771197246!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Friends Factory Cafe - Anniversary Celebration Vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section aria-label="Frequently Asked Questions" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions About Anniversary Celebrations in Vadodara
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
          
          <div className="mt-10 p-6 bg-amber-50 rounded-xl">
            <h3 className="font-semibold mb-3">Still Have Questions?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Contact our anniversary planning team for personalized assistance with your celebration.
            </p>
            <Button 
              variant="outline" 
              className="border-amber-300 text-rose-800 hover:bg-white"
              asChild
            >
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Us: {siteConfig.phone}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-800 via-amber-600 to-rose-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Celebrate Your Anniversary in Vadodara?
          </h2>
          <p className="text-amber-100 max-w-3xl mx-auto mb-10 text-lg">
            Whether it&apos;s your 1st anniversary, 10th anniversary, 25th silver jubilee, or 50th golden anniversary — 
            let us help you create a magical celebration that honors your love story. 
            Book now and make your anniversary truly unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-rose-800 hover:bg-amber-50 px-8 py-6 text-lg rounded-full"
              onClick={() => setIsBookingOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Anniversary Celebration
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full"
              asChild
            >
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phone}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })
        }}
      />

      {/* Breadcrumb Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: siteConfig.website }
          ]))
        }}
      />

      {/* LocalBusiness Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema({
            name: siteConfig.name,
            url: siteConfig.website,
            phone: siteConfig.phone,
            address: siteConfig.address,
            city: siteConfig.city,
            description: siteConfig.description,
            priceRange: '₹4700 - ₹14900',
            image: `${siteConfig.website}/og-image.jpg`,
          }))
        }}
      />
      </main>

      {/* Footer */}
      <FFCFooter />
      
      {/* Booking Form Modal */}
      <FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      
      {/* WhatsApp Float */}
      <FFCWhatsAppFloat />
    </div>
  );
}
