
import React from 'react';

const HomeSlide: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-3xl px-6 md:px-0 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Leonardo <span className="text-orange">Simplicio</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-purple mb-12">
          Ciência de dados | SQL | Python | ETL | CLOUD | AWS
        </h2>
        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          Sou um profissional apaixonado por transformar dados em insights valiosos,
          combinando habilidades técnicas e analíticas para resolver problemas complexos.
          Baseado em <span className="text-orange">Belém, Pará, Brasil</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">SQL</span>
          <span className="skill-tag">AWS</span>
          <span className="skill-tag">ETL</span>
          <span className="skill-tag">Data Science</span>
          <span className="skill-tag">Cloud</span>
          <span className="skill-tag">PyQt</span>
          <span className="skill-tag">WAMP</span>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
