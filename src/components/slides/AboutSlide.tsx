import React from 'react';
import { personalInfo } from '@/data/personalInfo';

const AboutSlide: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Sobre <span className="text-orange">Mim</span>
        </h2>
        
        <div className="space-y-6 text-lg mb-8">
          <p>
            Sou um estudante fascinado por dados. Tudo começou ajudando na loja dos meus pais, onde, aos 16 anos, eu criava pequenos scripts em <span className="highlight">Excel/VBA</span> para automatizar tarefas repetitivas,
            como alimentar planilhas de vendas a partir de outras fontes de dados. Atualmente, utilizo tecnologia para facilitar processos, como o cadastro de notas fiscais no sistema de gestão, usando tecnologias como <a className='orange-text' href="https://pt.wikipedia.org/wiki/Reconhecimento_%C3%B3tico_de_caracteres"> OCR </a> 
            e <a className='orange-text highlight' href="https://pt.wikipedia.org/wiki/Extract,_transform,_load">ETL</a>.
          </p>
          
          <p>
            Com formação em tecnologia e certificações como <span className="highlight text-orange"><a href="https://escoladanuvem.org/">AWS Cloud Practitioner (EDN)</a></span> e  
            <span className="highlight text-orange"><a href="https://www.pa.senac.br/">Programador de Sistemas (Senac)</a></span>, entre várias outras que você pode ver no meu <a className="text-orange highlight" href={personalInfo.linkedin}>LinkedIn</a>,
            junto com minha noção de processos, busco por novas formas de aplicar o poder dos dados para resolver problemas do mundo real.
          </p>
          
          <p>
            Quando não estou codificando ou analisando dados, gosto de explorar habilidades pessoais como <span className="highlight text-orange">musculação</span> e <span className="highlight text-orange">corrida</span>. Meu próximo objetivo de desenvolvimento pessoal
            está focado em comunicação, com ênfase em <span className="highlight text-orange">oratória</span>  e <span className="highlight text-orange">storytelling</span> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
