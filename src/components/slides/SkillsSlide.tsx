
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

const SkillsSlide: React.FC = () => {
  const technicalSkills: Skill[] = [
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

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-3xl px-6 md:px-0 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Habilidades & <span className="text-orange">Certificações</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Habilidades Técnicas</h3>
            <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSlide;
