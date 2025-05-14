import React, { useCallback, useEffect, useState } from 'react';
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
}

const CredlyBadgesCarousel: React.FC<CredlyBadgesCarouselProps> = ({ badges, isMobile }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });
  
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayDelay] = useState(30);
  const [autoplayInterval, setAutoplayInterval] = useState<ReturnType<typeof setInterval> | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      setAutoplayInterval(null);
    }
    setAutoplay(false);
    setIsHovering(true);
  }, [autoplayInterval]);

  const startAutoplay = useCallback(() => {
    if (emblaApi && !autoplayInterval && !isHovering) {
      const interval = setInterval(() => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0);
        } else {
          emblaApi.scrollNext();
        }
      }, autoplayDelay);
      
      setAutoplayInterval(interval);
      setAutoplay(true);
    }
  }, [emblaApi, autoplayDelay, autoplayInterval, isHovering]);

  useEffect(() => {
    if (!emblaApi) return;
    
    if (autoplay && !isHovering) {
      startAutoplay();
    }
    
    return () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, [emblaApi, autoplay, startAutoplay, autoplayInterval, isHovering]);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
        <Award className="w-5 h-5 text-orange" />
        <h3 className="text-xl font-semibold">Credly Badges</h3>
      </div>
      
      <div 
        ref={emblaRef} 
        className="overflow-hidden w-full"
        onMouseEnter={stopAutoplay}
        onMouseLeave={() => {
          setIsHovering(false);
          startAutoplay();
        }}
        onTouchStart={stopAutoplay}
        onTouchEnd={() => {
          setTimeout(() => {
            setIsHovering(false);
            startAutoplay();
          }, 3000);
        }}
      >
        <div className="flex">
          {badges.map((badge) => (
            <div 
              key={badge.id} 
              className={`flex-shrink-0 ${isMobile ? 'min-w-[45%]' : 'min-w-[22%]'} px-2`}
            >
              <a 
                href={badge.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full"
              >
                <div className="bg-purple/10 p-3 rounded-lg border border-purple/20 hover:border-orange/30 transition-all h-full flex flex-col items-center">
                  <img 
                    src={badge.imageUrl} 
                    alt={badge.title}
                    className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} object-contain mb-2`} 
                  />
                  <h4 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-center line-clamp-2`}>
                    {badge.title}
                  </h4>
                  <p className="text-xs text-cream/70 light-mode:text-dark/70 mt-1">
                    {badge.issuer}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredlyBadgesCarousel;