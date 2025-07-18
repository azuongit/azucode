import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const skills = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 
  'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Figma', 'AWS', 'Vercel'
];

const journey = [
  {
    year: '2021',
    title: 'Début de l\'aventure',
    description: 'Premiers pas dans le développement web avec HTML, CSS et JavaScript. Découverte de la passion pour la création d\'interfaces utilisateur.'
  },
  {
    year: '2022',
    title: 'Spécialisation React',
    description: 'Approfondissement de React et TypeScript. Premiers projets professionnels et développement d\'une expertise en front-end moderne.'
  },
  {
    year: '2023',
    title: 'Évolution Full-Stack',
    description: 'Extension vers le développement back-end avec Node.js et bases de données. Création de solutions complètes et intégrées.'
  },
  {
    year: '2024',
    title: 'Expert certifié',
    description: 'Consolidation de l\'expertise avec focus sur la performance et l\'UX. Accompagnement d\'entreprises dans leur transformation digitale.'
  }
];

const values = [
  {
    icon: Code,
    title: 'Code de qualité',
    description: 'Je privilégie toujours un code propre, maintenable et optimisé pour garantir la pérennité de vos projets.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation constante',
    description: 'Toujours à l\'affût des dernières technologies et tendances pour proposer des solutions modernes et efficaces.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Je crois en l\'importance du travail d\'équipe et de la communication pour mener à bien chaque projet.'
  },
  {
    icon: Coffee,
    title: 'Passion',
    description: 'Le développement web n\'est pas qu\'un métier pour moi, c\'est une véritable passion qui anime chacune de mes réalisations.'
  }
];

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

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
            À propos de <span className="text-gradient">moi</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Développeur passionné, je transforme vos idées en expériences web exceptionnelles
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Text */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:glow-primary transition-all duration-500">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-primary">Mon histoire</h2>
              <p className="text-muted-foreground leading-relaxed">
                Salut ! Je suis <strong className="text-foreground">Azu Code</strong>, un développeur web passionné basé en France. 
                Mon parcours dans le développement a commencé par une curiosité profonde pour comprendre comment fonctionnent les sites web 
                que j'utilisais quotidiennement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ce qui a débuté comme un hobby est rapidement devenu une véritable passion. J'ai découvert le pouvoir de 
                <strong className="text-primary"> React</strong>, la robustesse de <strong className="text-secondary">TypeScript</strong> 
                et l'élégance de <strong className="text-accent">Next.js</strong>. Aujourd'hui, je combine ces technologies pour créer 
                des expériences web qui ne se contentent pas de fonctionner, mais qui inspirent et engagent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ma philosophie est simple : chaque ligne de code doit avoir un objectif, chaque interface doit raconter une histoire, 
                et chaque projet doit dépasser les attentes. Je ne me contente pas de développer des sites web, 
                je crafts des expériences digitales mémorables.
              </p>
            </div>
          </Card>

          {/* Skills Grid */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-center lg:text-left">Technologies maîtrisées</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill}
                  variant="secondary"
                  className={`
                    p-4 text-center justify-center font-medium transition-all duration-500 hover:scale-105 hover:glow-secondary
                    border border-border/50 bg-card/50 backdrop-blur-sm text-base
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
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="text-gradient">parcours</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-0.5" />
          
          <div className="space-y-12">
            {journey.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 glow-primary" />
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-2xl font-bold text-gradient">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">valeurs</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary text-center p-8"
              >
                <div className="mx-auto mb-6 p-4 rounded-full gradient-primary w-fit group-hover:glow-primary transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <Card className="p-12 bg-card/30 backdrop-blur-sm border border-border/30 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à collaborer ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Si mon profil vous intéresse et que vous avez un projet en tête, 
            n'hésitez pas à me contacter. Discutons de la façon dont je peux vous aider à concrétiser vos idées.
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
              <Link to="/projects">Voir mes projets</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default AboutPage;