
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const ProjectsSlide: React.FC = () => {
  const isMobile = useIsMobile();

  // Updated projects data with the GitHub project
  const projects = [
    {
      title: 'XML Handler',
      description: 'A Python tool that handles XMLs from notas fiscais and displays them in a PyQt table for visualization. Uses pandas for data manipulation.',
      tags: ['Python', 'PyQt', 'XML', 'Pandas'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
    {
      title: 'XML Handler',
      description: 'A Python tool that handles XMLs from notas fiscais and displays them in a PyQt table for visualization. Uses pandas for data manipulation.',
      tags: ['Python', 'PyQt', 'XML', 'Pandas'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
    {
      title: 'XML Handler',
      description: 'A Python tool that handles XMLs from notas fiscais and displays them in a PyQt table for visualization. Uses pandas for data manipulation.',
      tags: ['Python', 'PyQt', 'XML', 'Pandas'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-5xl px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-orange">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="bg-dark/50 border-purple/30 hover:border-orange/50 transition-all">
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
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
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
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

        <div className="w-full max-w-3xl mx-auto px-4 md:px-0">
          <h3 className="text-xl font-semibold mb-4 text-center text-orange">GitHub Contributions</h3>
          <div className="bg-dark/50 border border-purple/30 rounded-lg p-4 flex items-center justify-center overflow-x-auto">
            <iframe 
              src="https://ghchart.rshah.org/fe6807/leotxsp" 
              width={isMobile ? "600" : "100%"}
              height="100" 
              frameBorder="0"
              title="GitHub Contribution Chart"
              className="rounded"
            />
          </div>
          <p className="text-center text-sm text-purple mt-2">
            View more on my <a href="https://github.com/leotxsp" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">GitHub profile</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlide;
