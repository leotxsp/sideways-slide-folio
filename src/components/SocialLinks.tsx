
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed top-8 right-8 z-50 flex flex-col gap-4 md:flex-row md:gap-6">
      <a 
        href={`mailto:${personalInfo.email}`} 
        className="flex items-center gap-2 text-cream hover:text-orange transition-colors light-mode:text-dark light-mode:hover:text-orange"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
        <span className="hidden md:inline">{personalInfo.email}</span>
      </a>
      
      <a 
        href={`tel:${personalInfo.phone}`} 
        className="flex items-center gap-2 text-cream hover:text-orange transition-colors light-mode:text-dark light-mode:hover:text-orange"
        aria-label="Phone"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden md:inline">{personalInfo.phone}</span>
      </a>
      
      <a 
        href={personalInfo.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-cream hover:text-orange transition-colors light-mode:text-dark light-mode:hover:text-orange"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
        <span className="hidden md:inline">LinkedIn</span>
      </a>
      
      <a 
        href={personalInfo.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-cream hover:text-orange transition-colors light-mode:text-dark light-mode:hover:text-orange"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
        <span className="hidden md:inline">GitHub</span>
      </a>
    </div>
  );
};

export default SocialLinks;
