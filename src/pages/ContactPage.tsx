import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'azu.code@example.com',
    description: 'Réponse sous 24h maximum',
    link: 'mailto:azu.code@example.com'
  }
];

const socialLinks = [
  { icon: Github, url: '#', label: 'GitHub', color: 'hover:text-slate-400' },
  { icon: Linkedin, url: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Twitter, url: '#', label: 'Twitter', color: 'hover:text-blue-400' }
];

const projectTypes = [
  'Site vitrine',
  'E-commerce',
  'Application web',
  'Application mobile',
  'API/Backend',
  'Refonte de site',
  'Optimisation performance',
  'Autre'
];

const faqs = [
  {
    question: 'Quels sont vos tarifs ?',
    answer: 'Mes tarifs varient selon la complexité du projet. Les sites vitrines commencent à partir de 2 000€, les applications web à partir de 3 000€. Je propose toujours un devis gratuit et personnalisé.'
  },
  {
    question: 'Combien de temps dure un projet ?',
    answer: 'La durée dépend de la complexité : 2-4 semaines pour un site vitrine, 4-12 semaines pour une application web complète. Je vous fournis un planning détaillé dès le début.'
  },
  {
    question: 'Proposez-vous de la maintenance ?',
    answer: 'Oui, je propose des contrats de maintenance mensuels incluant les mises à jour, sauvegardes, monitoring et support technique à partir de 500€/mois.'
  },
  {
    question: 'Travaillez-vous en équipe ?',
    answer: 'Je travaille principalement en solo pour les petits projets, mais je peux collaborer avec des designers et d\'autres développeurs pour les projets plus complexes.'
  }
];

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    deadline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message envoyé avec succès !",
      description: "Je vous répondrai dans les plus brefs délais, généralement sous 24h.",
    });

    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      projectType: '', 
      budget: '', 
      deadline: '', 
      message: '' 
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Travaillons <span className="text-gradient">ensemble</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vous avez un projet en tête ? Discutons-en ! Je suis là pour transformer vos idées en réalité digitale.
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-8" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500">
              <CardHeader>
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Parlez-moi de votre projet
                </h2>
                <p className="text-muted-foreground">
                  Plus vous me donnez de détails, mieux je pourrai vous conseiller et vous faire un devis précis.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email professionnel *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise / Organisation</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise (optionnel)"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Type de projet *</Label>
                      <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                        <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                          <SelectValue placeholder="Sélectionnez un type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Budget estimé</Label>
                      <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                          <SelectValue placeholder="Quel est votre budget ?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1000-3000">1 000€ - 3 000€</SelectItem>
                          <SelectItem value="3000-5000">3 000€ - 5 000€</SelectItem>
                          <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                          <SelectItem value="10000-20000">10 000€ - 20 000€</SelectItem>
                          <SelectItem value="20000+">Plus de 20 000€</SelectItem>
                          <SelectItem value="discuss">À discuter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline">Délai souhaité</Label>
                    <Input
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      placeholder="Ex: Dans 2 mois, pour mars 2024, pas de contrainte..."
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Décrivez votre projet *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Parlez-moi de votre projet : objectifs, fonctionnalités souhaitées, public cible, inspiration, contraintes techniques..."
                      rows={6}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-primary-foreground hover:glow-primary transition-all duration-300 py-6 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Envoi en cours...
                      </div>
                    ) : (
                      'Envoyer ma demande'
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    En envoyant ce formulaire, vous acceptez d'être recontacté concernant votre demande. 
                    Vos données restent confidentielles.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="text-xl font-semibold">Contact direct</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
                    >
                      <div className="p-3 rounded-full gradient-primary mr-4 group-hover:glow-primary transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">{info.title}</div>
                        <div className="text-sm text-muted-foreground mb-1">{info.value}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {info.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="text-xl font-semibold">Suivez-moi</h3>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`p-3 rounded-full bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary group ${social.color}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Process Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="text-xl font-semibold">Processus de travail</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Consultation gratuite</p>
                      <p className="text-xs text-muted-foreground">Analyse de vos besoins et conseils</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Devis détaillé</p>
                      <p className="text-xs text-muted-foreground">Prix fixe, pas de surprise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Développement itératif</p>
                      <p className="text-xs text-muted-foreground">Validation à chaque étape</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Livraison & formation</p>
                      <p className="text-xs text-muted-foreground">Accompagnement complet</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;