import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const skills = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 
  'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Figma', 'AWS', 'Vercel'
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:glow-primary transition-all duration-500">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Développeur passionné</h3>
              <p className="text-muted-foreground leading-relaxed">
                Salut ! Je suis <strong className="text-foreground">Azu Code</strong>, un développeur web spécialisé dans la création d'expériences digitales modernes et performantes. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Avec une expertise en <strong className="text-primary">React</strong>, <strong className="text-secondary">TypeScript</strong> et <strong className="text-accent">Next.js</strong>, 
                je transforme les idées en applications web élégantes qui captivent les utilisateurs et génèrent des résultats.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon approche combine design moderne, performance optimale et code propre pour livrer des solutions techniques qui dépassent les attentes.
              </p>
            </div>
          </Card>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center lg:text-left">Technologies & Outils</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill}
                  variant="secondary"
                  className={`
                    p-3 text-center justify-center font-medium transition-all duration-500 hover:scale-105 hover:glow-secondary
                    border border-border/50 bg-card/50 backdrop-blur-sm
                  `}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: isVisible ? 'fade-in 0.8s ease-out forwards' : 'none'
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats or achievements */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Projets réalisés' },
            { number: '3+', label: 'Années d\'expérience' },
            { number: '100%', label: 'Clients satisfaits' },
            { number: '24/7', label: 'Support disponible' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;