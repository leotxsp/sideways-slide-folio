import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Award } from 'lucide-react';

interface Badge {
  id: string;
  title: string;
  imageUrl: string;
  issuer: string;
  url: string;
}

interface CredlyBadgesCarouselProps {
  badges: Badge[];
  isMobile: boolean;
  autoplayDelay?: number;
}

const CredlyBadgesCarousel: React.FC<CredlyBadgesCarouselProps> = ({ 
  badges, 
  isMobile,
  autoplayDelay = 3000
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: false,
    skipSnaps: true,
    duration: 2500 
  });
  
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;
    stopAutoplay();
    autoplayIntervalRef.current = setInterval(scrollNext, autoplayDelay);
  }, [autoplayDelay, emblaApi, scrollNext, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onPointerDown = () => stopAutoplay();
    const onSettle = () => {
      if (!autoplayIntervalRef.current) startAutoplay();
    };
    
    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('settle', onSettle);
    
    return () => {
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('settle', onSettle);
    };
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
        <Award className="w-5 h-5 text-orange" />
        <h3 className="text-xl font-semibold">Credly Badges</h3>
      </div>
      
      <div 
        ref={emblaRef} 
        className="overflow-hidden w-full embla"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="flex">
          {badges.map((badge) => (
            <div 
              key={badge.id} 
              className={`flex-shrink-0 ${isMobile ? 'w-[85%]' : 'w-1/3'} px-2`}
            >
              <div className="h-full flex flex-col">
                <a 
                  href={badge.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block h-full"
                >
                  <div className="bg-purple/10 p-3 rounded-lg border border-purple/20 hover:border-orange/30 transition-all h-full flex flex-col">
                    <div className="flex justify-center mb-2">
                      <img 
                        src={badge.imageUrl} 
                        alt={badge.title}
                        className={`${isMobile ? 'w-16 h-16' : 'w-20 h-20'} object-contain`}
                      />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <h4 className="text-sm font-medium text-center line-clamp-2 break-words">
                        {badge.title}
                      </h4>
                      <p className="text-xs text-cream/70 light-mode:text-dark/70 mt-1 text-center">
                        {badge.issuer}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredlyBadgesCarousel;