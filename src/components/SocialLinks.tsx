
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed top-8 right-8 z-50 flex flex-col gap-4 md:flex-row md:gap-6">
      <a 
        href="mailto:leotxsp@gmail.com" 
        className="flex items-center gap-2 text-cream hover:text-orange transition-colors"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
        <span className="hidden md:inline">leotxsp@gmail.com</span>
      </a>
      
      <a 
        href="tel:+5591989106163" 
        className="flex items-center gap-2 text-cream hover:text-orange transition-colors"
        aria-label="Phone"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden md:inline">+55 91 98910-6163</span>
      </a>
      
      <a 
        href="https://www.linkedin.com/in/leonardosimplicio/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-cream hover:text-orange transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
        <span className="hidden md:inline">LinkedIn</span>
      </a>
      
      <a 
        href="https://github.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-cream hover:text-orange transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
        <span className="hidden md:inline">GitHub</span>
      </a>
    </div>
  );
};

export default SocialLinks;
