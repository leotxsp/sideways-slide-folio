import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

  // State for active filters
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTechDropdown, setShowTechDropdown] = useState(false);

  // Group tags by category for better organization
  const tagCategories = {
    'Linguagens': ['Python', 'Typescript', 'javascript'],
    'Frameworks': ['React', 'PyQt', 'Tailwind', 'Vite'],
    'Categorias': ['Frontend', 'Backend', 'Data', 'AI'],
    'Bibliotecas': ['Pandas', 'Matplotlib', 'Tensorflow', 'XML', 'colabs'],
    'Ferramentas': ['Git', 'Github', 'AWS', 'SQL', 'lovable'],
  };

  // Updated projects data with more detailed tags
  const projects = [
    {
      title: 'XML Handler',
      description: 'Uma ferramenta Python que manipula XMLs de notas fiscais e os exibe em uma tabela PyQt para visualização. Utiliza pandas e XMLetree para manipulação de dados.',
      tags: ['Python', 'PyQt', 'XML', 'Pandas', 'Backend', 'Data','Git'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://github.com/leotxsp/sideways-slide-folio/blob/main/public/XMLHANDLER.png?raw=true'
    },
    {
      title: 'Site de Portfólio',
      description: 'meu portfólio online, desenvolvido com Vite, Tailwind CSS e React. Apresenta meus projetos e habilidades de forma interativa.',
      tags: ['Vite', 'Tailwind', 'Typescript', 'React', 'javascript', 'Frontend', 'lovable','Git'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://github.com/leotxsp/sideways-slide-folio/blob/main/public/Portifolio.png?raw=true'
    },
    {
      title: 'Deep Audio Classifier',
      description: 'Um projeto de IA que reconhece sons e os classifica em categorias específicas. Utiliza aprendizado de máquina para treinar modelos de reconhecimento de som de pássaros.',
      tags: ['Python', 'Matplotlib', 'Tensorflow', 'Pandas', 'colabs', 'AI', 'Data', 'Git'],
      github: 'https://github.com/leotxsp/Ai-Para-reconhecimento-de-som-Deep-Audio-Classifier-',
      live: '',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
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
      activeFilters.some(filter => project.tags.includes(filter)))
  : projects;

  // Desktop carousel setup
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1
  });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
    setShowTechDropdown(true);
  };

  const handleTechSelect = (tech: string) => {
    toggleFilter(tech);
    setShowTechDropdown(false);
    setSelectedCategory(null);
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSelectedCategory(null);
  };

return (
  <div className="flex flex-col justify-center items-center h-full w-full py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-5xl w-full">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-8 text-center">
        <span className="text-orange">Projetos</span>
      </h2>

      {/* Filter Section */}
      <div className="mb-6 w-full relative">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-5 h-5 text-orange" />
          <h3 className="text-xl font-semibold">Filtrar por:</h3>
          {activeFilters.length > 0 && (
            <button 
              onClick={clearFilters}
              className="text-sm text-orange ml-2 hover:underline"
            >
              Limpar todos
            </button>
          )}
        </div>
        
        <div className="flex gap-2">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="flex items-center gap-2 bg-dark/50 border border-purple/30 px-4 py-2 rounded-md hover:border-orange/50"
            >
              {selectedCategory || "Selecione uma categoria"}
              <ChevronDown className={`w-4 h-4 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showCategoryDropdown && (
              <div className="absolute z-10 mt-1 w-48 bg-dark border border-purple/30 rounded-md shadow-lg">
                {Object.keys(tagCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="block w-full text-left px-4 py-2 hover:bg-purple/20"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Technology Dropdown */}
          {selectedCategory && (
            <div className="relative">
              <button
                onClick={() => setShowTechDropdown(!showTechDropdown)}
                className="flex items-center gap-2 bg-dark/50 border border-purple/30 px-4 py-2 rounded-md hover:border-orange/50"
              >
                Selecione uma tecnologia
                <ChevronDown className={`w-4 h-4 transition-transform ${showTechDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showTechDropdown && (
                <div className="absolute z-10 mt-1 w-48 bg-dark border border-purple/30 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {tagCategories[selectedCategory as keyof typeof tagCategories].map((tech) => (
                    <button
                      key={tech}
                      onClick={() => handleTechSelect(tech)}
                      className={`block w-full text-left px-4 py-2 hover:bg-purple/20 ${
                        activeFilters.includes(tech) ? 'text-orange' : ''
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Active filters display */}
        {activeFilters.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-cream/70 mb-1">Filtros ativos:</p>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className="text-xs py-1 px-2 bg-orange/20 text-orange rounded-md flex items-center gap-1 hover:bg-orange/30"
                >
                  {filter}
                  <span className="text-xs">×</span>
                </button>
              ))}
              </div>
            </div>
          )}
        </div>

        {/* Rest of the component remains the same */}
        {isMobile ? (
          // Mobile view - single column with better spacing and animations
          <div className="space-y-6 ">
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
                          className="text-xs py-1 px-2 border border-purple/30 rounded-md text-orange"
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
                      <CardContent className="flex-grow ">
                        <div className="flex flex-wrap gap-2 mb-2 ">
                          {project.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs py-1 px-2 border border-purple/30 rounded-md text-orange"
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