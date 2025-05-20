
import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';

const ContactSlide: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-5xl px-6 md:px-0 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
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
          {/* Email Card */}
          <div className="box">
            <span></span>
            <div className="content">
              <div className="contact-content">
                <div className="icon-container">
                  <Mail className="w-8 h-8 text-orange" />
                </div>
                <h2>Email</h2>
                <a href={`mailto:${personalInfo.email}`} className="contact-link">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="box">
            <span></span>
            <div className="content">
              <div className="contact-content">
                <div className="icon-container">
                  <Phone className="w-8 h-8 text-orange" />
                </div>
                <h2>Mobile</h2>
                <a href={`tel:${personalInfo.phone}`} className="contact-link">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
          
          {/* LinkedIn Card */}
          <div className="box">
            <span></span>
            <div className="content">
              <div className="contact-content">
                <div className="icon-container">
                  <Linkedin className="w-8 h-8 text-orange" />
                </div>
                <h2>LinkedIn</h2>
                <a 
                  href={personalInfo.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  leonardosimplicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSlide;
