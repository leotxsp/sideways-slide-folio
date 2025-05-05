
import React from 'react';
import { personalInfo } from '@/data/personalInfo';

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
        <div className="flex flex-wrap justify-center gap-3">
          {personalInfo.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
