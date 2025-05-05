
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
    { name: 'Python', level: 50 },
    { name: 'SQL', level: 10 },
    { name: 'AWS', level: 20 },
    { name: 'ETL', level: 1 },
    { name: 'Data Science', level: 1 },
    { name: 'PyQt', level: 5 },
    { name: 'WAMP', level: 1 },
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
      title: "Python Essentials 1",
      imageUrl: "https://images.credly.com/size/80x80/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
      issuer: "Cisco",
      url: "https://www.credly.com/badges/4405a4a5-2d1d-43b3-b812-970d91e75ca3/public_url"
    },
    {
      id: "2",
      title: "Networking Academy Learn-A-Thon 2023",
      imageUrl: "https://images.credly.com/size/80x80/images/b1395248-483c-48cd-b40d-7fe93837c37d/image.png",
      issuer: "Cisco",
      url: "https://www.credly.com/badges/8677b043-f02c-4e68-9bb1-95218674831c/public_url"
    },
    {
      id: "3",
      title: "Introduction to Data Science",
      imageUrl: "https://images.credly.com/size/80x80/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
      issuer: "Cisco",
      url: "https://www.credly.com/badges/2a077a33-f47d-4142-a2ef-d8aa27fae2c2/public_url"
    },
    {
      id: "5",
      title: "AWS re/Start Graduate",
      imageUrl: "https://images.credly.com/size/340x340/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png",
      issuer: "Cisco",
      url: "https://www.credly.com/badges/810083d4-228a-4444-ba4d-957015282dd8/public_url"
    },
    {
      id: "4",
      title: "AWS Certified Cloud Practitioner",
      imageUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      issuer: "Cisco",
      url: "https://www.credly.com/badges/e89f0716-9f4e-4f1d-a956-ddaee267a5c9/public_url"
    },
    {
      id: "6",
      title: "IBM Z Day 2025 SE - Security",
      imageUrl: "https://images.credly.com/size/340x340/images/abeddce9-21fc-4db5-a76f-2aba2fec4e76/IBM_20Z_20Day_20SE_20AI_20and_20Data.png",
      issuer: "IBM",
      url: "https://www.credly.com/badges/7e1a54fa-2cbe-43d3-b144-3f622b2d80dd/public_url"
    },
    {
      id: "7",
      title: "IBM Z Day 2025 SE - Security",
      imageUrl: "https://images.credly.com/size/340x340/images/2343a488-3ea1-4107-a020-9a09f2902a31/IBM_20Z_20Day_20SE_20Security.png",
      issuer: "IBM",
      url: "https://www.credly.com/badges/ffda2e42-6472-4a2e-8f5d-926dc2fcb42a/public_url"
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
        api.scrollTo(NaN); // Loop back to the beginning
      }
    }, 4000); // Slow scroll every 3 seconds
    
    setAutoScrollInterval(interval);
    
    return () => {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    };
  }, [api]);

  return (
    <div className="flex -col justify-center items-center h-full">
      <div className="max-w-3xl px-6 md:px-0 w-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Habilidades & <span className="text-orange">Certificações</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Habilidades Técnicas</h3>
            <div className="space-y-6 w-full max-w-xs md:max-w-none">
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
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Certificações</h3>
            <ul className="space-y-4 w-full max-w-xs md:max-w-none">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            
            {/* Credly Badges Carousel with Auto-scroll */}
            <div className="mt-8 w-a">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <Award className="w-5 h-5 text-orange" />
                <h3 className="text-xl font-semibold">Credly Badges</h3>
              </div>
              
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {credlyBadges.map((badge) => (
                    /* manipulação do slide */
                    <CarouselItem key={badge.id} className="flex justify-center basis-full sm:basis-1/2 md:basis-1/3">
                      <a 
                        href={badge.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block"
                      >
                        <div className="bg-purple/10 p-3 rounded-lg border border-purple/20 hover:border-orange/30 transition-all h-full flex flex-col items-center">
                          <img 
                            src={badge.imageUrl} 
                            alt={badge.title}
                            className="w-20 h-20 object-contain mb-2" 
                          />
                          <h4 className="text-sm font-medium text-center line-clamp-2">{badge.title}</h4>
                          <p className="text-xs text-cream/70 light-mode:text-dark/70 mt-1">{badge.issuer}</p>
                        </div>
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="static translate-y-0 bg-purple/10 hover:bg-orange/20 border-purple/20 hover:border-orange/30 light-mode:bg-purple/20 light-mode:hover:bg-orange/30" />
                  <CarouselNext className="static translate-y-0 bg-purple/10 hover:bg-orange/20 border-purple/20 hover:border-orange/30 light-mode:bg-purple/20 light-mode:hover:bg-orange/30" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSlide;
