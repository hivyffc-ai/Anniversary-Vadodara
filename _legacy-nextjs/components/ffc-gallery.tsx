'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ImageIcon, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Gallery item type
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// Anniversary gallery items with real file paths from /public/images/gallery
export const galleryItems: GalleryItem[] = [
  // Featured Anniversary Celebration Photos
  { type: 'image', src: '/images/gallery/IMG_20251108_195907946.jpg', alt: 'Romantic anniversary celebration setup Vadodara', title: 'Anniversary Setup', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/images/gallery/IMG_20251108_195914428.jpg', alt: 'Anniversary dinner decoration Vadodara', title: 'Romantic Dinner', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251108_195959576.jpg', alt: 'Anniversary candlelight setup Vadodara', title: 'Candlelight Setup', featured: false },
  { type: 'video', src: '/images/gallery/1000330054.mp4', alt: 'Anniversary celebration video Vadodara', title: 'Anniversary Celebration', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251108_200130169.jpg', alt: 'Romantic anniversary venue Vadodara', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251117_201140680.jpg', alt: 'Anniversary surprise decoration Vadodara', title: 'Anniversary Surprise', featured: false },
  { type: 'video', src: '/images/gallery/1000330055.mp4', alt: 'Romantic anniversary dinner video Vadodara', title: 'Anniversary Dinner', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251117_201157039.jpg', alt: 'Anniversary table decoration Vadodara', title: 'Table Decoration', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195504828.jpg', alt: 'Anniversary celebration in Vadodara', title: 'Evening Celebration', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195520782.jpg', alt: 'Romantic anniversary ambiance Vadodara', title: 'Romantic Ambiance', featured: false },
  { type: 'video', src: '/images/gallery/1000330059.mp4', alt: 'Anniversary rooftop celebration video Vadodara', title: 'Rooftop Celebration', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195542577.jpg', alt: 'Anniversary couple celebration Vadodara', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195913666.jpg', alt: 'Anniversary evening setup Vadodara', title: 'Evening Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195930910 (1).jpg', alt: 'Anniversary party decoration Vadodara', title: 'Party Decor', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_195948095.jpg', alt: 'Romantic anniversary night Vadodara', title: 'Night Romance', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251126_200041024.jpg', alt: 'Anniversary surprise for couple Vadodara', title: 'Couple Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251130_190628327.jpg', alt: 'Anniversary private dining Vadodara', title: 'Private Dining', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251130_190653723.jpg', alt: 'Anniversary romantic dinner Vadodara', title: 'Dinner Date', featured: false },
  { type: 'video', src: '/images/gallery/reel-.mp4', alt: 'Anniversary celebration reel Vadodara', title: 'Anniversary Reel', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251201_201429116.jpg', alt: 'Anniversary glass house celebration Vadodara', title: 'Glass House', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251201_201504639.jpg', alt: 'Anniversary rooftop dinner Vadodara', title: 'Rooftop Dinner', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251201_201519850.jpg', alt: 'Anniversary venue decoration Vadodara', title: 'Venue Decor', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251203_133009085.jpg', alt: 'Anniversary day celebration Vadodara', title: 'Day Celebration', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251203_202600922.jpg', alt: 'Anniversary night setup Vadodara', title: 'Night Setup', featured: false },
  { type: 'video', src: '/images/gallery/VID-20250416-WA0010.mp4', alt: 'Anniversary surprise video Vadodara', title: 'Surprise Video', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251209_193815280.jpg', alt: 'Anniversary candlelight dinner Vadodara', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251213_191903856.jpg', alt: 'Anniversary celebration for husband Vadodara', title: 'Husband Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251213_191910048.jpg', alt: 'Anniversary celebration for wife Vadodara', title: 'Wife Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251226_190325218.jpg', alt: 'Anniversary special evening Vadodara', title: 'Special Evening', featured: false },
  { type: 'video', src: '/images/gallery/VID-20250425-WA0024.mp4', alt: 'Anniversary celebration moments Vadodara', title: 'Anniversary Moments', featured: false },
  { type: 'image', src: '/images/gallery/IMG_3672.jpg', alt: 'Romantic anniversary setup Vadodara', title: 'Romantic Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG_3688.JPG', alt: 'Anniversary photoshoot Vadodara', title: 'Anniversary Photo', featured: false },
  { type: 'image', src: '/images/gallery/IMG_7626.jpg', alt: 'Anniversary venue Vadodara', title: 'Our Venue', featured: false },
  { type: 'video', src: '/images/gallery/Yash And Tulsi .mp4', alt: 'Couple anniversary celebration video Vadodara', title: 'Couple Celebration', featured: false },

  // WhatsApp shared celebration photos
  { type: 'image', src: '/images/gallery/IMG-20241204-WA0066.jpg', alt: 'Anniversary party in Vadodara', title: 'Anniversary Party', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20241204-WA0070.jpg', alt: 'Anniversary balloon decoration Vadodara', title: 'Balloon Decor', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250123-WA0014.jpg', alt: 'Anniversary rooftop celebration Vadodara', title: 'Rooftop Celebration', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250123-WA0018.jpg', alt: 'Anniversary candlelight setup for couples Vadodara', title: 'Couple Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250123-WA0020.jpg', alt: 'Anniversary dinner date Vadodara', title: 'Dinner Date', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250123-WA0022.jpg', alt: 'Anniversary celebration venue Vadodara', title: 'Celebration Venue', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250123-WA0029.jpg', alt: 'Romantic anniversary evening Vadodara', title: 'Romantic Evening', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250123-WA0033.jpg', alt: 'Anniversary surprise planning Vadodara', title: 'Surprise Plan', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250123-WA0037.jpg', alt: 'Anniversary celebration ideas Vadodara', title: 'Celebration Ideas', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250123-WA0039.jpg', alt: 'Anniversary gift and celebration Vadodara', title: 'Gift Celebration', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250207-WA0012.jpg', alt: 'Valentine anniversary celebration Vadodara', title: 'Valentine Special', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250207-WA0014.jpg', alt: 'Anniversary couple moment Vadodara', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250209-WA0012.jpg', alt: 'Romantic anniversary setup Vadodara', title: 'Romantic Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250209-WA0016.jpg', alt: 'Anniversary decoration Vadodara', title: 'Anniversary Decor', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250209-WA0018.jpg', alt: 'Anniversary evening celebration Vadodara', title: 'Evening Moment', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250425-WA0016 (1).jpg', alt: 'Anniversary party setup Vadodara', title: 'Party Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250425-WA0021.jpg', alt: 'Anniversary venue decoration Vadodara', title: 'Venue Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG-20250425-WA0026.jpg', alt: 'Anniversary celebration moment Vadodara', title: 'Celebration', featured: false },

  // Classic celebration photos
  { type: 'image', src: '/images/gallery/10.jpg', alt: 'Anniversary celebration at Friends Factory Cafe Vadodara', title: 'Classic Setup', featured: false },
  { type: 'image', src: '/images/gallery/13.jpg', alt: 'Romantic anniversary venue Vadodara', title: 'Venue View', featured: false },
  { type: 'image', src: '/images/gallery/2-1.jpg', alt: 'Anniversary candlelight dinner Vadodara', title: 'Candlelight', featured: false },
  { type: 'image', src: '/images/gallery/3-1.jpg', alt: 'Anniversary rooftop setup Vadodara', title: 'Rooftop', featured: false },
  { type: 'image', src: '/images/gallery/4-1.jpg', alt: 'Anniversary glass house dinner Vadodara', title: 'Glass House', featured: false },
  { type: 'image', src: '/images/gallery/5.jpg', alt: 'Anniversary private dining Vadodara', title: 'Private Setup', featured: false },
  { type: 'image', src: '/images/gallery/6.jpg', alt: 'Anniversary surprise decoration Vadodara', title: 'Surprise Decor', featured: false },
  { type: 'image', src: '/images/gallery/57b5e578-168b-4542-85ea-58d17a849c01.jpg', alt: 'Anniversary couple celebration Vadodara', title: 'Couple Joy', featured: false },
  { type: 'image', src: '/images/gallery/5e6fb556-2f94-43ff-bbff-f3446181300e.jpg', alt: 'Anniversary premium package Vadodara', title: 'Premium Package', featured: false },
  { type: 'image', src: '/images/gallery/20240126_130014_3dbef883-2fbc-4a8c-8aea-c5113be00e81.JPG', alt: 'Anniversary daytime celebration Vadodara', title: 'Day Celebration', featured: false },
  { type: 'image', src: '/images/gallery/20240903_145321_b91de0ce-dddd-44e6-8cb6-f524674139df.JPG', alt: 'Anniversary venue ambiance Vadodara', title: 'Venue Ambiance', featured: false },
  { type: 'image', src: '/images/gallery/20240926_152854_13bb1c5a-3d17-4c08-b174-ec5376fa1b0a.JPG', alt: 'Anniversary celebration planning Vadodara', title: 'Planning Setup', featured: false },
];

// Hero images for anniversary pages
export const anniversaryHeroImages = [
  '/images/gallery/IMG_20251108_195907946.jpg',
  '/images/gallery/IMG_20251117_201140680.jpg',
  '/images/gallery/IMG_20251126_195504828.jpg',
  '/images/gallery/IMG_20251130_190628327.jpg',
  '/images/gallery/IMG_20251201_201429116.jpg',
  '/images/gallery/IMG_20251209_193815280.jpg',
];

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Our Gallery", 
  subtitle = "Real celebrations, real memories",
  maxItems = 12,
  showFilters = true,
  className = ""
}: FFCGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems
    .filter(item => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'photos') return item.type === 'image';
      if (activeFilter === 'videos') return item.type === 'video';
      return true;
    })
    .slice(0, maxItems);

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-amber-50 via-white to-amber-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-200">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of romantic celebrations in Vadodara
          </p>
        </div>

        {/* Filter Buttons */}
        {showFilters && (
          <div className="flex justify-center gap-3 mb-8">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' 
                ? 'bg-amber-500 hover:bg-rose-800 text-white' 
                : 'border-amber-300 text-rose-900 hover:bg-amber-50'}
            >
              All ({photoCount + videoCount})
            </Button>
            <Button 
              variant={activeFilter === 'photos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('photos')}
              className={activeFilter === 'photos' 
                ? 'bg-amber-500 hover:bg-rose-800 text-white' 
                : 'border-amber-300 text-rose-900 hover:bg-amber-50'}
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Photos ({photoCount})
            </Button>
            <Button 
              variant={activeFilter === 'videos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('videos')}
              className={activeFilter === 'videos' 
                ? 'bg-amber-500 hover:bg-rose-800 text-white' 
                : 'border-amber-300 text-rose-900 hover:bg-amber-50'}
            >
              <Play className="h-4 w-4 mr-2" />
              Videos ({videoCount})
            </Button>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-rose-800 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
