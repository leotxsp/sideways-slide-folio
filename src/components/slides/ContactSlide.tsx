import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSlide: React.FC = () => {
  const isMobile = useIsMobile();

  const renderMobileContent = () => (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 pb-16 space-y-6">
      <h2 className="text-3xl font-bold mb-2 text-center">
        <span className="text-orange">Contato</span>
      </h2>
  
      <div className="flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center mr-3">
          <MapPin className="w-5 h-5 text-orange" />
        </div>
        <h3 className="text-xl font-medium">BRAZIL</h3>
      </div>
  
      <p className="text-base text-center max-w-sm">
        Estou disponível para oportunidades de trabalho, projetos freelance ou apenas para trocar ideias sobre dados e tecnologia.
      </p>
  
      <div className="grid grid-cols-1 gap-6">
        {/* Email Card */}
        <a href={`mailto:${personalInfo.email}`} className="block">
          <div className="card cursor-pointer">
            <div className="blob"></div>
            <div className="bg">
              <Mail className="w-6 h-6 text-orange mb-2" />
              <h3 className="text-md font-semibold mb-1">Email</h3>
              <span className="text-sm break-words text-cream">
                {personalInfo.email}
              </span>
            </div>
          </div>
        </a>

        {/* Phone Card */}
        <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="block">
          <div className="card cursor-pointer">
            <div className="blob"></div>
            <div className="bg">
              <Phone className="w-6 h-6 text-orange mb-2" />
              <h3 className="text-md font-semibold mb-1">Whatsapp</h3>
              <span className="text-sm break-words text-cream">
                {personalInfo.phone}
              </span>
            </div>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="block">
          <div className="card cursor-pointer">
            <div className="blob"></div>
            <div className="bg">
              <Linkedin className="w-6 h-6 text-orange mb-2" />
              <h3 className="text-md font-semibold mb-1">LinkedIn</h3>
              <span className="text-sm break-words text-cream">
                leonardosimplicio
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );

  const renderDesktopContent = () => (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-5xl px-6 md:px-0 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-orange">Contato</span>
        </h2>

        <div className="flex items-center justify-center mb-10">
          <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center mr-4">
            <MapPin className="w-6 h-6 text-orange" />
          </div>
          <h3 className="text-2xl font-medium">BRAZIL</h3>
        </div>

        <p className="text-lg mb-10 text-center">
          Estou disponível para oportunidades de trabalho, projetos freelance ou apenas para trocar ideias sobre dados e tecnologia.
        </p>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {/* Email */}
          <a href={`mailto:${personalInfo.email}`} className="w-full">
            <div className="box cursor-pointer">
              <span></span>
              <div className="content">
                <div className="contact-content text-center">
                  <div className="icon-container">
                    <Mail className="w-8 h-8 text-orange mx-auto" />
                  </div>
                  <h2>Email</h2>
                  <p>{personalInfo.email}</p>
                </div>
              </div>
            </div>
          </a>

          {/* Phone */}
        <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full">
          <div className="box">
            <span></span>
            <div className="content">
              <div className="contact-content text-center">
                <div className="icon-container">
                  <Phone className="w-8 h-8 text-orange mx-auto" />
                </div>
                <h2>Whatsapp</h2>
                <p>{personalInfo.phone}</p>
              </div>
            </div>
          </div>
        </a>

          {/* LinkedIn */}
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-full">
          <div className="box">
            <span></span>
            <div className="content">
              <div className="contact-content text-center">
                <div className="icon-container">
                  <Linkedin className="w-8 h-8 text-orange mx-auto" />
                </div>
                <h2>LinkedIn</h2>
                  leonardosimplicio
              </div>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center h-full w-full py-16 md:py-24 overflow-x-hidden">
      {isMobile ? renderMobileContent() : renderDesktopContent()}
    </div>
  );
};

export default ContactSlide;
