
import React, { useState, useEffect, useRef } from 'react';
import SocialLinks from '@/components/SocialLinks';
import Navigation from '@/components/Navigation';
import { useIsMobile } from '@/hooks/use-mobile';

// Slides
import HomeSlide from '@/components/slides/HomeSlide';
import AboutSlide from '@/components/slides/AboutSlide';
import SkillsSlide from '@/components/slides/SkillsSlide';
import ProjectsSlide from '@/components/slides/ProjectsSlide';
import ContactSlide from '@/components/slides/ContactSlide';
import WorkingOnSlide from '@/components/slides/WorkingOnSlide';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliding, setSliding] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const slides = [
    { id: 'home', component: <HomeSlide /> },
    { id: 'about', component: <AboutSlide /> },
    { id: 'skills', component: <SkillsSlide /> },
    { id: 'projects', component: <ProjectsSlide /> },
    { id: 'working-on', component: <WorkingOnSlide /> },
    { id: 'contact', component: <ContactSlide /> }
  ];

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < slides.length && !sliding && slideIndex !== currentSlide) {
      setSliding(true);
      setCurrentSlide(slideIndex);
      
      // Reset sliding state after animation completes
      setTimeout(() => {
        setSliding(false);
      }, 500);
    }
  };

  // Handle keyboard navigation only on desktop
  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, isMobile]);

  // Handle wheel/scroll events for horizontal scrolling only on desktop
  useEffect(() => {
    if (isMobile) return;
    
    let lastScrollTime = 0;
    const scrollCooldown = 1000; // ms

    const handleWheel = (e: WheelEvent) => {
      const currentTime = new Date().getTime();
      
      if (currentTime - lastScrollTime < scrollCooldown) {
        return;
      }
      
      lastScrollTime = currentTime;
      
      if (e.deltaY > 0) {
        goToSlide(currentSlide + 1);
      } else if (e.deltaY < 0) {
        goToSlide(currentSlide - 1);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide, isMobile]);

  // Handle touch events for mobile swiping only on desktop
  useEffect(() => {
    if (isMobile) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const distance = touchStartX - touchEndX;
      if (Math.abs(distance) < minSwipeDistance) return;
      
      if (distance > 0) {
        // Swipe left, go to next slide
        goToSlide(currentSlide + 1);
      } else {
        // Swipe right, go to previous slide
        goToSlide(currentSlide - 1);
      }
    };
    
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, isMobile]);

  return (
    <>
      <div className="min-h-screen bg-dark">
        <SocialLinks />
        
        {isMobile ? (
          <div className="mobile-container">
            {slides.map((slide) => (
              <div key={slide.id} className="w-full min-h-screen py-20 px-4">
                {slide.component}
              </div>
            ))}
          </div>
        ) : (
          <div className="slide-container">
            <div 
              ref={sliderRef}
              className="slider"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="slide scroll-thin px-4 py-24">
                  {slide.component}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <Navigation 
          currentSlide={currentSlide}
          totalSlides={slides.length}
          goToSlide={goToSlide}
        />
      </div>
    </>
  );
};

export default Index;
