
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (slideIndex: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, goToSlide }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-50">
      <button 
        onClick={() => goToSlide(currentSlide - 1)}
        disabled={currentSlide === 0}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-dark border border-orange/50 text-cream disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-orange/10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-orange scale-125' : 'bg-purple/40 hover:bg-orange/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        onClick={() => goToSlide(currentSlide + 1)}
        disabled={currentSlide === totalSlides - 1}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-dark border border-orange/50 text-cream disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-orange/10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navigation;
