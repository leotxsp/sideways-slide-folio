
import React from 'react';
import { CheckCircle, Award } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

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

  // Credly Badge data
  const credlyBadges: Badge[] = [
    {
      id: "1",
      title: "AWS Certified Cloud Practitioner",
      imageUrl: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      issuer: "Amazon Web Services",
      url: "https://www.credly.com/badges/sample1"
    },
    {
      id: "2",
      title: "Oracle Cloud Infrastructure Foundations 2021 Associate",
      imageUrl: "https://images.credly.com/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png",
      issuer: "Oracle",
      url: "https://www.credly.com/badges/sample2"
    },
    {
      id: "3",
      title: "Python for Data Science",
      imageUrl: "https://images.credly.com/images/3cd98f34-0f95-4a75-9c26-02aaa0f1d00b/image.png",
      issuer: "IBM",
      url: "https://www.credly.com/badges/sample3"
    },
    {
      id: "4",
      title: "Data Science Foundations",
      imageUrl: "https://images.credly.com/images/5ca7b236-6105-4154-ba22-c8ae12ec1d8c/image.png",
      issuer: "IBM",
      url: "https://www.credly.com/badges/sample4"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-3xl px-6 md:px-0 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Habilidades & <span className="text-orange">Certificações</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
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
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Certificações</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange mt-1" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            
            {/* Credly Badges Carousel */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-orange" />
                <h3 className="text-xl font-semibold">Credly Badges</h3>
              </div>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {credlyBadges.map((badge) => (
                    <CarouselItem key={badge.id} className="md:basis-1/2 lg:basis-1/3">
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
                            className="w-24 h-24 object-contain mb-2" 
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
