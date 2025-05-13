
import React from 'react';
import { Github } from 'lucide-react';

const AboutSlide: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Sobre <span className="text-orange">Mim</span>
        </h2>
        
        <div className="space-y-6 text-lg mb-8">
          <p>
            Sou um profissional de Ciência de Dados com sólida formação técnica e experiência
            em desenvolvimento de soluções baseadas em dados. Minha paixão está em extrair insights 
            valiosos de conjuntos de dados complexos e transformá-los em soluções práticas.
          </p>
          
          <p>
            Com formação em tecnologia e certificações em <span className="highlight">AWS</span> e 
            <span className="highlight">Oracle Next Education</span>, combinada com minhas habilidades 
            em <span className="highlight">SQL</span>, <span className="highlight">Python</span> e 
            <span className="highlight">ETL</span>, estou sempre buscando novas formas de aplicar 
            o poder dos dados para resolver problemas do mundo real.
          </p>
          
          <p>
            Quando não estou codificando ou analisando dados, gosto de explorar novas tecnologias, 
            contribuir para projetos de código aberto e compartilhar conhecimento com a comunidade.
          </p>
        </div>

        {/* GitHub Contribution Chart */}
        <div className="w-full mt-10">
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

export default AboutSlide;
