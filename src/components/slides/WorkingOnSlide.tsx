
import React from 'react';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const WorkingOnSlide: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-4xl px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-orange">Atualmente Trabalhando Em</span>
        </h2>

        <Card className="bg-dark/50 border-purple/30 p-6 md:p-8">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-orange mb-4">Transformando o XMLHandler em uma API</h3>
            
            <p className="text-cream text-lg leading-relaxed">
              Atualmente estou trabalhando na transformação do meu projeto XMLHandler em uma API para 
              proporcionar maior escalabilidade e acessibilidade. O objetivo é permitir que mais usuários 
              possam se beneficiar da ferramenta sem a necessidade de instalar todas as dependências localmente.
            </p>

            <p className="text-cream text-lg leading-relaxed">
              Esta nova versão está sendo desenvolvida com:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-cream">
              <li>Java para o backend, proporcionando robustez e performance</li>
              <li>API RESTful para facilitar a integração com diversos sistemas</li>
              <li>Interface simples com PYQT para visualização e manipulação dos dados</li>
              <li>Recursos adicionais de processamento e análise de notas fiscais</li>
            </ul>

            <p className="text-cream text-lg leading-relaxed">
              A motivação para este projeto é aumentar a acessibilidade e facilitar o uso da ferramenta. 
              Permitindo que pessoas com menos familiaridade com tecnologia ou pessoas com mais idade utilizem a ferramenta em seus pequenos negócios.
            </p>

            <p className="text-purple text-lg font-medium">
              Previsão de conclusão: Segundo semestre de 2025
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-orange mb-4">Cursos em progresso</h3>
            <ul className="list-disc pl-6 space-y-2 text-cream">
              <li>Formação React Native Developer - DIO - complemento a faculdade</li>
              <li>Formação Machine Learning Specialist - DIO - desenvovimento tecnico pessoal</li>
              <li>Formação SQL Database Specialist - DIO - desenvovimento tecnico pessoal</li>
            </ul>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default WorkingOnSlide;
