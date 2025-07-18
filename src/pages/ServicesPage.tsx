import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, Palette, Zap, Smartphone, Globe, Database, 
  ArrowRight, CheckCircle, Star, Clock, Users, Trophy 
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Développement Web Frontend',
    subtitle: 'Applications web modernes et performantes',
    description: 'Je développe des applications web sur-mesure en utilisant les technologies les plus récentes comme React, Next.js et TypeScript pour créer des expériences utilisateur exceptionnelles.',
    features: [
      'Single Page Applications (SPA)',
      'Applications React/Next.js',
      'Intégrations API avancées',
      'Progressive Web Apps (PWA)',
      'Optimisations de performance',
      'Tests automatisés'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    pricing: 'À partir de 3 000€',
    duration: '2-8 semaines',
    deliverables: [
      'Code source complet et documenté',
      'Application déployée et fonctionnelle',
      'Documentation technique',
      'Formation utilisateur si nécessaire'
    ]
  },
  {
    icon: Palette,
    title: 'Design & Intégration UI/UX',
    subtitle: 'Interfaces élégantes et intuitives',
    description: 'Conception et intégration d\'interfaces utilisateur modernes avec une attention particulière portée à l\'expérience utilisateur et à l\'accessibilité.',
    features: [
      'Design responsive mobile-first',
      'Prototypage interactif',
      'Systèmes de design cohérents',
      'Animations CSS/JavaScript',
      'Optimisation UX/UI',
      'Tests d\'utilisabilité'
    ],
    technologies: ['Figma', 'Tailwind CSS', 'Framer Motion', 'CSS3'],
    pricing: 'À partir de 2 000€',
    duration: '1-4 semaines',
    deliverables: [
      'Maquettes haute fidélité',
      'Système de design complet',
      'Intégration responsive',
      'Guide de style'
    ]
  },
  {
    icon: Zap,
    title: 'Optimisation Performance',
    subtitle: 'Sites ultra-rapides et optimisés',
    description: 'Amélioration significative des performances de vos applications existantes pour offrir une expérience utilisateur fluide et améliorer votre référencement.',
    features: [
      'Audit de performance complet',
      'Optimisation Core Web Vitals',
      'Lazy loading et code splitting',
      'Optimisation SEO technique',
      'Compression et minification',
      'Monitoring de performance'
    ],
    technologies: ['Lighthouse', 'WebPageTest', 'GTM', 'Analytics'],
    pricing: 'À partir de 1 500€',
    duration: '1-2 semaines',
    deliverables: [
      'Rapport d\'audit détaillé',
      'Optimisations implémentées',
      'Monitoring mis en place',
      'Recommandations long terme'
    ]
  },
  {
    icon: Smartphone,
    title: 'Développement Mobile',
    subtitle: 'Applications cross-platform',
    description: 'Développement d\'applications mobiles cross-platform avec React Native pour iOS et Android, ou applications web progressives (PWA).',
    features: [
      'Applications React Native',
      'Progressive Web Apps (PWA)',
      'Interface native iOS/Android',
      'Synchronisation hors-ligne',
      'Notifications push',
      'Déploiement App Store/Play Store'
    ],
    technologies: ['React Native', 'Expo', 'Firebase', 'PWA'],
    pricing: 'À partir de 5 000€',
    duration: '4-12 semaines',
    deliverables: [
      'Application mobile fonctionnelle',
      'Code source documenté',
      'Déploiement sur les stores',
      'Formation et documentation'
    ]
  },
  {
    icon: Globe,
    title: 'Déploiement & Maintenance',
    subtitle: 'Mise en ligne et suivi continu',
    description: 'Déploiement professionnel de vos applications sur les meilleures plateformes cloud et maintenance continue pour assurer leur bon fonctionnement.',
    features: [
      'Déploiement automatisé (CI/CD)',
      'Hébergement cloud optimisé',
      'Monitoring et alertes',
      'Sauvegardes automatiques',
      'Mises à jour de sécurité',
      'Support technique'
    ],
    technologies: ['Vercel', 'Netlify', 'AWS', 'Docker'],
    pricing: 'À partir de 500€/mois',
    duration: 'Service continu',
    deliverables: [
      'Application en ligne 24/7',
      'Monitoring en temps réel',
      'Rapports mensuels',
      'Support technique réactif'
    ]
  },
  {
    icon: Database,
    title: 'Développement Backend & APIs',
    subtitle: 'Solutions serveur robustes',
    description: 'Développement d\'APIs REST robustes et de solutions backend scalables pour alimenter vos applications frontend avec des données sécurisées.',
    features: [
      'APIs REST/GraphQL',
      'Bases de données optimisées',
      'Authentification sécurisée',
      'Intégrations tierces',
      'Architecture microservices',
      'Documentation API complète'
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    pricing: 'À partir de 4 000€',
    duration: '3-10 semaines',
    deliverables: [
      'API complète et documentée',
      'Base de données structurée',
      'Authentification sécurisée',
      'Tests automatisés'
    ]
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Découverte',
    description: 'Analyse approfondie de vos besoins et objectifs pour définir la solution idéale.',
    duration: '1-2 jours'
  },
  {
    step: '02',
    title: 'Planification',
    description: 'Élaboration d\'un plan détaillé avec timeline, technologies et livrables.',
    duration: '2-3 jours'
  },
  {
    step: '03',
    title: 'Développement',
    description: 'Développement itératif avec points de validation réguliers et feedback continu.',
    duration: 'Variable'
  },
  {
    step: '04',
    title: 'Tests & Livraison',
    description: 'Tests complets, optimisations finales et mise en ligne de votre projet.',
    duration: '3-5 jours'
  }
];

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'CEO, StartupTech',
    content: 'Azu a transformé notre vision en une application web exceptionnelle. Son expertise technique et son attention aux détails sont remarquables.',
    rating: 5
  },
  {
    name: 'Pierre Martin',
    role: 'Directeur Marketing, AgencePro',
    content: 'Un développeur passionné qui comprend vraiment les enjeux business. Notre site a dépassé toutes nos attentes en termes de performance.',
    rating: 5
  }
];

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mes <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes et sur-mesure pour donner vie à vos projets digitaux les plus ambitieux
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-8" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary h-full cursor-pointer"
                onClick={() => setSelectedService(service)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isVisible ? 'fade-in 0.8s ease-out forwards' : 'none'
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full gradient-primary w-fit group-hover:glow-primary transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Technologies :</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border/30">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{service.pricing}</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="text-gradient">processus</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une méthodologie éprouvée pour garantir le succès de votre projet
          </p>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 text-center p-6">
              <div className="text-4xl font-bold text-gradient mb-4">{step.step}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
              <Badge variant="secondary" className="text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {step.duration}
              </Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ce que disent mes <span className="text-gradient">clients</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <Card className="p-12 bg-card/30 backdrop-blur-sm border border-border/30 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer votre idée en réalité ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discutons de votre projet et voyons ensemble comment je peux vous aider à atteindre vos objectifs. 
            Consultation gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="gradient-primary text-primary-foreground hover:glow-primary transition-all duration-300 px-8"
            >
              <Link to="/contact">Démarrer un projet</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
            >
              <Link to="/projects">Voir mes réalisations</Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
            <CardHeader className="border-b border-border/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full gradient-primary">
                    <selectedService.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                    <p className="text-muted-foreground">{selectedService.subtitle}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedService(null)}
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Description complète</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedService.description}
                  </p>
                  
                  <h4 className="font-semibold mb-3">Ce qui est inclus :</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Informations pratiques</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Prix :</span>
                        <span className="font-semibold">{selectedService.pricing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Durée :</span>
                        <span className="font-semibold">{selectedService.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-muted/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Livrables</h4>
                    <ul className="space-y-2">
                      {selectedService.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-border/30">
                <Button 
                  asChild
                  className="gradient-primary text-primary-foreground hover:glow-primary transition-all duration-300 px-8"
                >
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;