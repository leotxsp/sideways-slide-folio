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
      title: 'Site de Portfólio',
      description: 'A Python tool that handles XMLs from notas fiscais and displays them in a PyQt table for visualization. Uses pandas for data manipulation.',
      tags: ['Python', 'PyQt', 'XML', 'Pandas'],
      github: 'https://github.com/leotxsp/XMLHandler',
      live: '',
      image: 'https://lh3.googleusercontent.com/fife/ALs6j_GyqBR1MV_9gDPX7LJLhBACH8C5eK5Cs6hFT8UDWAlSbg2EnogNT5sOplYak8xTssPxAh_1hKj5-xq2RO7pRONKCerjwcDSVG5uRG1sC6oqoo7WWJSFw1w2YrwqnHxOEDCeW4Wyzo7idtD_xho1cRlj7yQZ27euID83Zb35eVV9AMjb8QQE9sj2L9ois_yacNmSaWjXQJGkPwMzBnfX2gJgr_5F4pxFFcrdHe2-vtb6yBgeTCf74zdArWEJ-ZnjyZpmbCJVn2lSM3YOLhvEU-Pwd9lfttqwPdGBbpV1a3gNEp9Tbhzuqvw87Wvkw5ELUt3WiJZR49gkXGMzBl7Nyty1Q9MBPOCfQFI0rvMIfKDE9wgoS01ssvJ2Z4kgFUa80rYv_BctCI7Rk21xgIVg46W5l_OFmGMNvX4w-io3b6TTXHV9lN6ZAsVTx1C-IasYITmufGNvxkJg9gtoQTT_Z-aAWRE6uJlmmXvKJb28aTMWeAtDEZNbh0haosLLognNRPm6bvG5_ojhV4R38PDE1ktft90oT6E0Yo6wamaZWFfXpL63FnDvxn2xxjGVIYBvROLnVwaYAwFyz5n1sHjcGZIllLcd7vU3b23_7hkPBUnb-frv90Y4bhXdAMHWZS4ULrmrlEYTl2sVWY4wnFKq80zx0WuLiUCfEqH4t-ikOs78WX3TqUhZmitOla3L4LZnU-QKQDjAdgbZ6GfxztVK2yuf0aC8AqnOy6lBtYUZhmN4XkmK_8m28doaTXOHva4njirbg7PAxg3gGHYwX4A9eOCu4WEy0sOfrMGgAURonxIlYcTJK8963kMVkbS7XLhyyEPhsZwjPKZNA9XvNdlgzCbp55bU2ycRDm--scqkukTSmTeABiUutpOeir5uTHEyw2YfPkgbI76f7EkgzHU67vrHF0IRXZ7Cei5SeTTtNswJgKvLz5fFr4EZ9tzPpcC6ucd8toQaZFY4lyniohHl5zXtvgex5NUIi24r_CRZjz7dWQa08yBRWyZDKhEUwyCIgR10TNgaejBFHOllpxuVYGn8PknUrvzRGY0D8dMQUzg4QhLLUDMn8rqO0AvsItuW5Yh2RZn-NNzywYEmkFXWuLDGXV3Pt2hf0kkGhG35tPQdEyu-0N1ejNi8ab79yWaqi0vkH5lCUVMxlqBJ6ECyGiJ7_SRJrQWqdVKWvn7qMOafabxmzCPpS5ZE9x5kIVHol14qIL6PF3JyKCk8V0k6O9ZlPpdhBDaGDJ-QcQcs-7MbZfOrUPEQ2hrksG1dig7v-BeOGoIql-pwhBAWxz6I1Y1bAx4KdTywdJSZvEE-HvDeap76_2kyYU74j0XV_92fWDgdkuSt32YEPlAvYon0Ez6enXHdfccD90rCnyyEmbzIu4sFo0famIBSYI2AKe7kabk9IaOFILt83Rr93pJ5CQN5t4KIDQvhfVrqwYhX7IeD6ho0UYVs2LE1sJDNqrojsZlVFCC6gi9BWkbdKru9kly8tUdj_hEQb0cL0WPJPvH-zfw7DMgd2Va4h6b9h_YRSVXzzxj6wjrccLHHZVwpLT0XI1fvPt1BmibRyo21-zMPTjTwxeWECfYWMBucwOudlXfnIUkiVF18ZqYD0IXRCd1lgjpbWk3dbjzTw6nzb60krpZH8o6AX88TlDh_AUGfBg3V3AJDzrFc2I8GfgjLddkaEUmG2Rsj=w1920-h959?auditContext=prefetch'
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
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center ">
          <span className="text-orange">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="bg-dark/50 border-purple/30 hover:border-orange/50 transition-all">
              <div className="w-full h-40 overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-50 object-cover object-center"
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

        <div className="w-full max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center text-orange">GitHub Contributions</h3>
          <div className="bg-dark/50 border border-purple/30 rounded-lg p-4 flex items-center justify-center">
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
            View more on my <a href="https://github.com/leotxsp" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">GitHub profile</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlide;