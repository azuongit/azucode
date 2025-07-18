import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce moderne avec dashboard admin, gestion des commandes et paiements sécurisés.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    stack: ['React', 'TypeScript', 'Stripe', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Portfolio Agence',
    description: 'Site portfolio pour agence créative avec animations fluides et galerie interactive.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    stack: ['Next.js', 'Framer Motion', 'Tailwind', 'Vercel'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Interface d\'analyse de données avec graphiques en temps réel et exports personnalisés.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    stack: ['React', 'Chart.js', 'Express', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'App Mobile Fitness',
    description: 'Application de suivi fitness avec programmes personnalisés et communauté.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    stack: ['React Native', 'Firebase', 'Redux', 'AWS'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'SaaS Marketing Tool',
    description: 'Outil de marketing automation avec intégrations multiples et tableau de bord avancé.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    stack: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Crypto Trading Bot',
    description: 'Bot de trading automatisé avec interface de monitoring et stratégies configurables.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
    stack: ['Python', 'React', 'WebSocket', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus récentes
          </p>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isVisible ? 'fade-in 0.8s ease-out forwards' : 'none'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" className="gradient-primary text-primary-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
          >
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;