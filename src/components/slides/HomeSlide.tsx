
import React from 'react';
import { personalInfo } from '@/data/personalInfo';
import { Github } from 'lucide-react';

const HomeSlide: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-3xl px-6 md:px-0 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {personalInfo.name.split(' ')[0]} <span className="text-orange">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-purple mb-12">
          {personalInfo.title}
        </h2>
        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          {personalInfo.shortBio}
          <br/>
          <br/><span className="text-orange">{personalInfo.location}</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {personalInfo.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
        
        {/* GitHub Contributions Chart */}
        <div className="w-full mt-6">
          <h3 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
            <Github className="w-5 h-5 text-orange" />
            <span className="text-orange">GitHub Contributions</span>
          </h3>
          <div className="bg-dark/50 border border-purple/30 rounded-lg p-4 flex items-center justify-center animate-fade-in">
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
            Veja mais no meu <a href="https://github.com/leotxsp" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
