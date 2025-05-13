
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const ProjectsSlide: React.FC = () => {
  const isMobile = useIsMobile();

  // Updated projects data
  const projects = [
    {
      title: 'XML Handler',
      description: 'Uma ferramenta Python que manipula XMLs de notas fiscais e os exibe em uma tabela PyQt para visualização. Utiliza pandas para manipulação de dados.',
      tags: ['Python', 'PyQt', 'XML', 'Pandas'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://github.com/leotxsp/sideways-slide-folio/blob/main/public/XMLHANDLER.png?raw=true'
    },
    {
      title: 'Site de Portfólio',
      description: 'meu portfólio online, desenvolvido com Vite, Tailwind CSS e React. Apresenta meus projetos e habilidades de forma interativa.',
      tags: ['Vite', 'Tailwind', 'AI', 'Typescript', 'React', 'javascript'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://github.com/leotxsp/sideways-slide-folio/blob/main/public/Portifolio.png?raw=true'
    },
    {
      title: 'Ai Para reconhecimento de som (Deep Audio Classifier)',
      description: 'Um projeto de IA que reconhece sons e os classifica em categorias específicas. Utiliza aprendizado de máquina para treinar modelos de reconhecimento de som de pássaros.',
      tags: ['Python', 'Matplotlib', 'Tensorflow', 'Pandas','colabs'],
      github: 'https://github.com/leotxsp/Ai-Para-reconhecimento-de-som-Deep-Audio-Classifier-',
      live: '',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-orange">Projetos</span>
        </h2>

        {isMobile ? (
          // Mobile view - single column with better spacing and animations
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-dark/50 border-purple/30 hover:border-orange/50 transition-all w-full animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-full h-40 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-cream text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="text-purple mb-3 line-clamp-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="skill-tag text-xs py-1 px-2">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-cream hover:text-orange hover:bg-purple/20 w-full flex justify-center items-center"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          // Desktop view - grid layout
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-dark/50 border-purple/30 hover:border-orange/50 transition-all h-full flex flex-col"
              >
                <div className="w-full h-40 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-cream">{project.title}</CardTitle>
                  <CardDescription className="text-purple">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="ghost" 
                    className="text-cream hover:text-orange hover:bg-purple/20"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.live && (
                    <Button 
                      variant="ghost" 
                      className="text-cream hover:text-orange hover:bg-purple/20"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSlide;
