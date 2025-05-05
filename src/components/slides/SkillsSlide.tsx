
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Award } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

const SkillsSlide: React.FC = () => {
  const technicalSkills = [
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

  const credlyScriptRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Load Credly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-3xl px-6 md:px-0 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Habilidades & <span className="text-orange">Certificações</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Habilidades Técnicas</h3>
            <div className="space-y-6 w-full max-w-md">
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
            
            {/* Credly Badges Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-orange" />
                <h3 className="text-xl font-semibold">Credly Badges</h3>
              </div>
              
              <ScrollArea className="h-[300px] w-full rounded-md border border-purple/20 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" ref={credlyScriptRef}>
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
      </div>
    </div>
  );
};

export default SkillsSlide;
