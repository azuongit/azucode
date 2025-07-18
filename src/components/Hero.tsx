import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            size="lg" 
            className="gradient-primary text-primary-foreground hover:glow-primary transition-all duration-300 px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection('projects')}
          >
            Découvrir mes projets
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
            onClick={() => scrollToSection('contact')}
          >
            Me contacter
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
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:text-primary transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;