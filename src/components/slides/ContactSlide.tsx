
import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';

const ContactSlide: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-3xl px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Entre em <span className="text-orange">Contato</span>
        </h2>
        
        <p className="text-lg mb-10">
          Estou disponível para oportunidades de trabalho, projetos freelance ou apenas para trocar ideias sobre dados e tecnologia.
          Entre em contato através de uma das opções abaixo:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a href={`mailto:${personalInfo.email}`} className="text-cream hover:text-orange transition-colors light-mode:text-dark light-mode:hover:text-orange">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Telefone</h3>
                <a href={`tel:${personalInfo.phone}`} className="text-cream hover:text-orange transition-colors light-mode:text-dark light-mode:hover:text-orange">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="text-lg font-medium">LinkedIn</h3>
                <a 
                  href={personalInfo.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream hover:text-orange transition-colors light-mode:text-dark light-mode:hover:text-orange"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Localização</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSlide;
