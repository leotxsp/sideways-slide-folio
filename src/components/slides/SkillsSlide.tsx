import React, { useEffect, useState, useCallback } from 'react';
import { CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { personalInfo } from '@/data/personalInfo';
import CredlyBadgesCarousel from '../../components/CredlyBadgesCarousel';

interface Badge {
  id: string;
  title: string;
  imageUrl: string;
  issuer: string;
  url: string;
}

const SkillsSlide: React.FC = () => {
  const isMobile = useIsMobile();
  
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

  // Mobile view content rendering
  const renderMobileContent = () => (
    <div className="h-full w-full flex flex-col items-center px-4 pb-16 overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Habilidades & <span className="text-orange">Certificações</span>
      </h2>
      
      <div className="w-full max-w-[100vw] space-y-6">
        {/* Skills Section */}
        <div className="bg-purple/10 border border-purple/20 rounded-lg p-4 animate-fade-in w-full">
          <h3 className="text-xl font-bold mb-3 text-center">Habilidades Técnicas</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {personalInfo.skills.map((skill, index) => (
              <span 
                key={skill} 
                className="skill-tag animate-fade-in text-xs"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="bg-purple/10 border border-purple/20 rounded-lg p-4 animate-fade-in w-full">
          <h3 className="text-xl font-bold mb-3 text-center">Certificações</h3>
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-2 text-sm animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="w-4 h-4 text-orange mt-1 flex-shrink-0" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Credly Badges Section */}
        <div className="animate-fade-in w-full max-w-[100vw]">
          <CredlyBadgesCarousel badges={credlyBadges} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
  
  // Desktop view content rendering
  const renderDesktopContent = () => (
    <div className="max-w-3xl w-full animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Habilidades & <span className="text-orange">Certificações</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center w-full">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-center">Habilidades Técnicas</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {personalInfo.skills.map((skill, index) => (
              <span 
                key={skill} 
                className="skill-tag animate-fade-in hover:bg-orange/30 hover:border-orange/40 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-start w-full">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Certificações</h3>
          <ul className="space-y-3 w-full max-w-xs md:max-w-none">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
          
          {/* Credly Badges Section */}
          <div className="mt-6 w-full">
            <CredlyBadgesCarousel badges={credlyBadges} isMobile={isMobile} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center h-full w-full py-16 md:py-24 overflow-x-hidden ">
      {isMobile ? renderMobileContent() : renderDesktopContent()}
    </div>
  );
};

export default SkillsSlide;