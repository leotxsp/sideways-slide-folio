
import React from 'react';

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
      </div>
    </div>
  );
};

export default AboutSlide;
