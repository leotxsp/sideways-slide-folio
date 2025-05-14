
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSlide: React.FC = () => {
  const isMobile = useIsMobile();

  // All available tags for filtering
  const allTags = ['Python', 'PyQt', 'XML', 'Pandas', 'Vite', 'Tailwind', 'AI', 
                  'Typescript', 'React', 'javascript', 'Matplotlib', 'Tensorflow', 
                  'colabs', 'Frontend', 'Backend', 'Data'];

  // State for active filters
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  // Updated projects data with more detailed tags
  const projects = [
    {
      title: 'XML Handler',
      description: 'Uma ferramenta Python que manipula XMLs de notas fiscais e os exibe em uma tabela PyQt para visualização. Utiliza pandas para manipulação de dados.',
      tags: ['Python', 'PyQt', 'XML', 'Pandas', 'Backend', 'Data'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://github.com/leotxsp/sideways-slide-folio/blob/main/public/XMLHANDLER.png?raw=true'
    },
    {
      title: 'Site de Portfólio',
      description: 'meu portfólio online, desenvolvido com Vite, Tailwind CSS e React. Apresenta meus projetos e habilidades de forma interativa.',
      tags: ['Vite', 'Tailwind', 'Typescript', 'React', 'javascript', 'Frontend'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://github.com/leotxsp/sideways-slide-folio/blob/main/public/Portifolio.png?raw=true'
    },
    {
      title: 'Deep Audio Classifier',
      description: 'Um projeto de IA que reconhece sons e os classifica em categorias específicas. Utiliza aprendizado de máquina para treinar modelos de reconhecimento de som de pássaros.',
      tags: ['Python', 'Matplotlib', 'Tensorflow', 'Pandas', 'colabs', 'AI', 'Data'],
      github: 'https://github.com/leotxsp/Ai-Para-reconhecimento-de-som-Deep-Audio-Classifier-',
      live: '',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      title: 'Todo App',
      description: 'Aplicativo de tarefas usando React e TypeScript com backend em Node.js',
      tags: ['React', 'Typescript', 'javascript', 'Frontend', 'Backend'],
      github: 'https://github.com/leotxsp/todo-app',
      live: '',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard de clima que consome API de previsão do tempo',
      tags: ['React', 'API', 'Frontend', 'javascript'],
      github: 'https://github.com/leotxsp/weather-dashboard',
      live: '',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    {
      title: 'Data Analytics Tool',
      description: 'Ferramenta para análise de grandes conjuntos de dados',
      tags: ['Python', 'Pandas', 'AI', 'Data'],
      github: 'https://github.com/leotxsp/data-analytics',
      live: '',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
  ];

  // Toggle filter function
  const toggleFilter = useCallback((tag: string) => {
    setActiveFilters(prevFilters => 
      prevFilters.includes(tag)
        ? prevFilters.filter(f => f !== tag)
        : [...prevFilters, tag]
    );
  }, []);

  // Filter projects based on active filters
  const filteredProjects = activeFilters.length > 0
    ? projects.filter(project => 
        activeFilters.some(filter => project.tags.includes(filter))
      )
    : projects;

  // Group tags by category for better organization
  const tagCategories = {
    'Linguagens': ['Python', 'Typescript', 'javascript'],
    'Frameworks': ['React', 'PyQt', 'Tailwind', 'Vite'],
    'Categorias': ['Frontend', 'Backend', 'Data', 'AI'],
    'Bibliotecas': ['Pandas', 'Matplotlib', 'Tensorflow', 'XML', 'colabs']
  };

  // Desktop carousel setup
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1
  });

  return (
    <div className="flex flex-col justify-center items-center h-full w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-8 text-center">
          <span className="text-orange">Projetos</span>
        </h2>

        {/* Filter Section */}
        <div className="mb-6 w-full">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-5 h-5 text-orange" />
            <h3 className="text-xl font-semibold">Filtrar por:</h3>
          </div>
          
          <div className="space-y-2">
            {Object.entries(tagCategories).map(([category, tags]) => (
              <div key={category} className="space-y-1">
                <p className="text-sm text-cream/70 mb-1">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <Badge 
                      key={tag}
                      variant={activeFilters.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        activeFilters.includes(tag) 
                          ? "bg-orange hover:bg-orange/80" 
                          : "hover:bg-purple/20"
                      }`}
                      onClick={() => toggleFilter(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {isMobile ? (
          // Mobile view - single column with better spacing and animations
          <div className="space-y-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
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
                        <span 
                          key={idx} 
                          className={`skill-tag text-xs py-1 px-2 ${
                            activeFilters.includes(tag) ? "border-orange text-orange" : ""
                          }`}
                        >
                          {tag}
                        </span>
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
              ))
            ) : (
              <div className="text-center py-12">
                <p>Nenhum projeto encontrado com os filtros selecionados.</p>
              </div>
            )}
          </div>
        ) : (
          // Desktop view - carousel layout
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-dark/50 border-purple/30 hover:border-orange/50 transition-all h-full flex flex-col">
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
                            <span 
                              key={idx} 
                              className={`skill-tag ${
                                activeFilters.includes(tag) ? "border-orange text-orange" : ""
                              }`}
                            >
                              {tag}
                            </span>
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
                  </CarouselItem>
                ))
              ) : (
                <CarouselItem className="basis-full">
                  <div className="text-center py-12">
                    <p>Nenhum projeto encontrado com os filtros selecionados.</p>
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ProjectsSlide;
