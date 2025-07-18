import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce moderne avec dashboard admin et paiements sécurisés.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    stack: ['React', 'TypeScript', 'Stripe']
  },
  {
    id: 2,
    title: 'Portfolio Agence',
    description: 'Site portfolio pour agence créative avec animations fluides.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    stack: ['Next.js', 'Framer Motion', 'Tailwind']
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Interface d\'analyse de données avec graphiques temps réel.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    stack: ['React', 'Chart.js', 'Express']
  }
];

const quickServices = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Applications modernes avec React, Next.js et les dernières technologies.'
  },
  {
    icon: Palette,
    title: 'Design Front-End',
    description: 'Interfaces élégantes et intuitives avec une attention particulière à l\'UX/UI.'
  },
  {
    icon: Zap,
    title: 'Optimisation Performance',
    description: 'Amélioration des performances pour une expérience utilisateur optimale.'
  }
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 gradient-secondary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 gradient-full rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Main content */}
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-gradient">AZU</span>
              <span className="text-foreground"> CODE</span>
            </h1>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
            Créateur d'expériences web élégantes et percutantes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="gradient-primary text-primary-foreground hover:glow-primary transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <Link to="/projects">Découvrir mes projets</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
            >
              <Link to="/contact">Me contacter</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:glow-primary transition-all duration-300">
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a href="#" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:glow-primary transition-all duration-300">
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a href="#" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:glow-primary transition-all duration-300">
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projets <span className="text-gradient">récents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations les plus récentes
          </p>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" className="gradient-primary text-primary-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
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

        <div className="text-center">
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
          >
            <Link to="/projects">Voir tous les projets</Link>
          </Button>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">expertises</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {quickServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary text-center p-8"
              >
                <div className="mx-auto mb-6 p-4 rounded-full gradient-primary w-fit group-hover:glow-primary transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
          >
            <Link to="/services">Découvrir tous mes services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;