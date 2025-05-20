
import React from 'react';
import { personalInfo } from '@/data/personalInfo';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
            <span key={index} className="skill-tag">{skill.name}</span>
          ))}
        </div>
        
        {/* GitHub Contributions Chart */}
        <div className="w-full mt-6">
          <h3 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
            <Github className="w-5 h-5 text-orange" />
            <span className="text-orange">GitHub Contributions</span>
          </h3>
          <div className="bg-dark/50 border border-purple/30 rounded-lg p-4 flex items-center justify-center animate-fade-in">
            <a href="https://git.io/streak-stats">
              <img src="https://streak-stats.demolab.com?user=leotxsp&theme=highcontrast&locale=pt_BR&mode=weekly" alt="GitHub Streak" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
