import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec dashboard admin, gestion des commandes, paiements sécurisés via Stripe, et système de notifications en temps réel.',
    fullDescription: 'Cette plateforme représente une solution e-commerce complète développée pour une startup française. Elle inclut une interface utilisateur moderne, un tableau de bord administrateur complet, un système de gestion des stocks, et une intégration poussée avec les services de paiement.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    stack: ['React', 'TypeScript', 'Stripe', 'Node.js', 'MongoDB', 'Express'],
    category: 'E-commerce',
    duration: '3 mois',
    team: '4 personnes',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Interface utilisateur responsive',
      'Dashboard administrateur complet',
      'Paiements sécurisés avec Stripe',
      'Gestion des stocks en temps réel',
      'Système de notifications',
      'Optimisations SEO avancées'
    ]
  },
  {
    id: 2,
    title: 'Portfolio Agence Créative',
    description: 'Site portfolio pour agence créative avec animations fluides, galerie interactive et système de gestion de contenu personnalisé.',
    fullDescription: 'Développé pour une agence de design parisienne, ce portfolio met en avant leurs créations avec des animations sophistiquées et une expérience utilisateur immersive. Le site inclut un CMS custom pour la gestion autonome du contenu.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
    category: 'Portfolio',
    duration: '2 mois',
    team: '2 personnes',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Animations fluides avec Framer Motion',
      'Galerie interactive',
      'CMS headless avec Sanity',
      'Optimisations de performance',
      'Design responsive avancé',
      'Intégrations réseaux sociaux'
    ]
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Interface d\'analyse de données avec graphiques en temps réel, exports personnalisés et système d\'alertes automatiques.',
    fullDescription: 'Application développée pour une entreprise de marketing digital nécessitant une vue d\'ensemble de leurs KPIs. L\'interface propose des visualisations interactives et des rapports automatisés.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    stack: ['React', 'Chart.js', 'Express', 'MongoDB', 'Socket.io', 'Redis'],
    category: 'Dashboard',
    duration: '4 mois',
    team: '3 personnes',
    year: '2023',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Graphiques interactifs en temps réel',
      'Système d\'alertes automatiques',
      'Exports PDF et Excel',
      'Filtres avancés',
      'API REST complète',
      'Cache Redis pour les performances'
    ]
  },
  {
    id: 4,
    title: 'App Mobile Fitness',
    description: 'Application de suivi fitness avec programmes personnalisés, communauté d\'utilisateurs et synchronisation avec objets connectés.',
    fullDescription: 'Application mobile cross-platform développée pour une startup fitness. Elle propose des programmes d\'entraînement personnalisés, un système social et des intégrations avec les principales montres connectées.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
    stack: ['React Native', 'Firebase', 'Redux', 'AWS', 'Expo', 'TypeScript'],
    category: 'Mobile',
    duration: '5 mois',
    team: '5 personnes',
    year: '2023',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Programmes d\'entraînement personnalisés',
      'Système social et défis',
      'Synchronisation objets connectés',
      'Notifications push intelligentes',
      'Suivi de progression détaillé',
      'Mode hors-ligne'
    ]
  },
  {
    id: 5,
    title: 'SaaS Marketing Tool',
    description: 'Outil de marketing automation avec intégrations multiples, tableau de bord avancé et système de campagnes automatisées.',
    fullDescription: 'Plateforme SaaS complète pour l\'automatisation marketing. Elle permet aux entreprises de gérer leurs campagnes, analyser leurs performances et optimiser leur ROI avec des outils avancés.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    stack: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Redis', 'Elasticsearch'],
    category: 'SaaS',
    duration: '6 mois',
    team: '6 personnes',
    year: '2022',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Automatisation de campagnes',
      'Intégrations CRM multiples',
      'Analytics avancés',
      'A/B testing intégré',
      'API publique complète',
      'Système de facturation'
    ]
  },
  {
    id: 6,
    title: 'Crypto Trading Bot',
    description: 'Bot de trading automatisé avec interface de monitoring, stratégies configurables et système d\'alertes en temps réel.',
    fullDescription: 'Application de trading automatisé développée pour des investisseurs crypto. Elle propose des stratégies préprogrammées, un backtesting avancé et une interface de monitoring en temps réel.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop',
    stack: ['Python', 'React', 'WebSocket', 'PostgreSQL', 'Docker', 'Kubernetes'],
    category: 'FinTech',
    duration: '4 mois',
    team: '3 personnes',
    year: '2022',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Algorithmes de trading avancés',
      'Backtesting historique',
      'Interface de monitoring temps réel',
      'Système d\'alertes configurables',
      'Gestion des risques automatisée',
      'Intégrations exchanges multiples'
    ]
  }
];

const categories = ['Tous', 'E-commerce', 'Portfolio', 'Dashboard', 'Mobile', 'SaaS', 'FinTech'];

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            Mes <span className="text-gradient">Projets</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations les plus significatives, chacune représentant un défi technique unique et des solutions innovantes
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-8" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "gradient-primary text-primary-foreground" 
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
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
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 gradient-primary text-primary-foreground">
                  {project.category}
                </Badge>
                
                {/* Year Badge */}
                <Badge variant="secondary" className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm">
                  {project.year}
                </Badge>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" className="gradient-primary text-primary-foreground">
                    Voir détails
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
                
                {/* Project Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.team}
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.stack.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-muted/50">
                      +{project.stack.length - 3} autres
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
              >
                ✕
              </Button>
            </div>
            
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="gradient-primary text-primary-foreground">
                    {selectedProject.category}
                  </Badge>
                  <Badge variant="secondary">{selectedProject.year}</Badge>
                </div>
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Détails du projet</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">Durée : {selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">Équipe : {selectedProject.team}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Fonctionnalités clés</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.stack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button className="gradient-primary text-primary-foreground">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir la démo
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Github className="w-4 h-4 mr-2" />
                  Code source
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;