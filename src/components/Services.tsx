import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Code, Palette, Zap, Smartphone, Globe, Database } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Applications web modernes et performantes avec React, Next.js et les dernières technologies.',
    features: ['Single Page Applications', 'Sites vitrine', 'E-commerce', 'APIs REST']
  },
  {
    icon: Palette,
    title: 'Design Front-End',
    description: 'Interfaces utilisateur élégantes et intuitives avec une attention particulière à l\'UX/UI.',
    features: ['Design responsive', 'Prototypage', 'Systèmes de design', 'Animations CSS']
  },
  {
    icon: Zap,
    title: 'Optimisation Performance',
    description: 'Amélioration des performances et de la vitesse de chargement pour une expérience optimale.',
    features: ['Core Web Vitals', 'SEO technique', 'Lazy loading', 'Code splitting']
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Expériences parfaitement adaptées à tous les écrans et appareils.',
    features: ['Mobile-first', 'Tablettes', 'Desktop', 'PWA']
  },
  {
    icon: Globe,
    title: 'Déploiement & Hosting',
    description: 'Mise en ligne et maintenance de vos applications sur les meilleures plateformes.',
    features: ['Vercel', 'Netlify', 'AWS', 'CI/CD']
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Développement d\'APIs robustes et de bases de données pour vos applications.',
    features: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
  }
];

const Services = () => {
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
    <section ref={sectionRef} id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes pour concrétiser vos idées digitales
          </p>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary h-full"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isVisible ? 'fade-in 0.8s ease-out forwards' : 'none'
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full gradient-primary w-fit group-hover:glow-primary transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 gradient-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30">
          <h3 className="text-2xl font-semibold mb-4">
            Prêt à donner vie à votre projet ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble une solution sur mesure qui dépasse vos attentes.
          </p>
          <a 
            href="#contact" 
            className="inline-block gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:glow-primary transition-all duration-300"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;