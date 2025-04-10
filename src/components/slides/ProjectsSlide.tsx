
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSlide: React.FC = () => {
  // Sample projects data
  const projects = [
    {
      title: 'Data Analysis Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets using Python and React',
      tags: ['Python', 'React', 'Data Visualization'],
      github: 'https://github.com/username/data-dashboard',
      live: 'https://data-dashboard-demo.com'
    },
    {
      title: 'ETL Pipeline Framework',
      description: 'Robust ETL pipeline for processing large datasets with AWS integration',
      tags: ['Python', 'AWS', 'ETL'],
      github: 'https://github.com/username/etl-framework',
      live: ''
    },
    {
      title: 'SQL Query Optimizer',
      description: 'Tool for analyzing and optimizing SQL queries for better performance',
      tags: ['SQL', 'Python', 'Database'],
      github: 'https://github.com/username/sql-optimizer',
      live: 'https://sql-optimizer.demo.com'
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

        <div className="w-full max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center text-orange">GitHub Contributions</h3>
          <div className="bg-dark/50 border border-purple/30 rounded-lg p-4 flex items-center justify-center">
            <iframe 
              src="https://ghchart.rshah.org/fe6807/leonardosimplicio" 
              width="100%" 
              height="100" 
              frameBorder="0"
              title="GitHub Contribution Chart"
              className="rounded"
            ></iframe>
          </div>
          <p className="text-center text-sm text-purple mt-2">
            View more on my <a href="https://github.com/leonardosimplicio" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">GitHub profile</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlide;
