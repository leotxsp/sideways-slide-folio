
import React, { useEffect, useState } from 'react';
import { CheckCircle, Award } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import useEmblaCarousel from 'embla-carousel-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Skill {
  name: string;
  level: number;
}

interface Badge {
  id: string;
  title: string;
  imageUrl: string;
  issuer: string;
  url: string;
}

const SkillsSlide: React.FC = () => {
  const isMobile = useIsMobile();
  const technicalSkills: Skill[] = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'AWS', level: 75 },
    { name: 'ETL', level: 80 },
    { name: 'Data Science', level: 70 },
    { name: 'PyQt', level: 65 },
    { name: 'WAMP', level: 60 },
  ];

  const certifications = [
    'AWS re/Start Graduate',
    'Curso de Java',
    'Ciência de Dados',
    'Programa Oracle Next Education F2 T5 Back-end',
  ];

  const credlyBadges: Badge[] = [
    {
      id: "1",
      title: "Data Science Foundations Level 1",
      imageUrl: "https://images.credly.com/size/80x80/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
      issuer: "IBM",
      url: "https://www.credly.com/badges/4405a4a5-2d1d-43b3-b812-970d91e75ca3"
    },
    {
      id: "2",
      title: "Python for Data Science",
      imageUrl: "https://images.credly.com/size/80x80/images/b1395248-483c-48cd-b40d-7fe93837c37d/image.png",
      issuer: "IBM",
      url: "https://www.credly.com/earner/earned/badge/8677b043-f02c-4e68-9bb1-95218674831c"
    },
    {
      id: "3",
      title: "Artificial Intelligence Foundations",
      imageUrl: "https://images.credly.com/size/80x80/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
      issuer: "IBM",
      url: "https://www.credly.com/earner/earned/badge/2a077a33-f47d-4142-a2ef-d8aa27fae2c2"
    }
  ];
  
  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>(null);
  const [autoScrollInterval, setAutoScrollInterval] = useState<number | null>(null);
  
  // Set up auto-scrolling
  useEffect(() => {
    if (!api) return;
    
    // Start auto-scrolling
    const interval = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to the beginning
      }
    }, 3000); // Slow scroll every 3 seconds
    
    setAutoScrollInterval(interval);
    
    return () => {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    };
  }, [api]);

  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-3xl px-6 md:px-0 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Habilidades & <span className="text-orange">Certificações</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-6">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-orange">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-purple/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-6">Certificações</h3>
            <ul className="space-y-4 inline-block text-left">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange mt-1" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            
            {/* Credly Badges */}
            <div className="mt-8">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Award className="w-5 h-5 text-orange" />
                <h3 className="text-xl font-semibold">Credly Badges</h3>
              </div>
              
              <ScrollArea className="h-[320px] w-full rounded-md border border-purple/20 p-4">
                <div className="flex flex-wrap justify-center gap-4">
                  <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ffda2e42-6472-4a2e-8f5d-926dc2fcb42a" data-share-badge-host="https://www.credly.com"></div>
                  <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7e1a54fa-2cbe-43d3-b144-3f622b2d80dd" data-share-badge-host="https://www.credly.com"></div>
                  <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="810083d4-228a-4444-ba4d-957015282dd8" data-share-badge-host="https://www.credly.com"></div>
                  <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="e89f0716-9f4e-4f1d-a956-ddaee267a5c9" data-share-badge-host="https://www.credly.com"></div>
                  <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="2a077a33-f47d-4142-a2ef-d8aa27fae2c2" data-share-badge-host="https://www.credly.com"></div>
                  <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="8677b043-f02c-4e68-9bb1-95218674831c" data-share-badge-host="https://www.credly.com"></div>
                  <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="4405a4a5-2d1d-43b3-b812-970d91e75ca3" data-share-badge-host="https://www.credly.com"></div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
        
        {/* GitHub Contributions - visible on both mobile and desktop */}
        <div className="w-full max-w-3xl mx-auto mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center text-orange">GitHub Contributions</h3>
          <div className="bg-dark/50 border border-purple/30 rounded-lg p-4 flex items-center justify-center">
            <iframe 
              src="https://ghchart.rshah.org/fe6807/leotxsp" 
              width="100%" 
              height="100" 
              frameBorder="0"
              title="GitHub Contribution Chart"
              className="rounded"
            ></iframe>
          </div>
          <p className="text-center text-sm text-purple mt-2">
            View more on my <a href="https://github.com/leotxsp" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">GitHub profile</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSlide;
