import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">AZU</span>
              <span className="text-foreground"> CODE</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Développeur passionné créant des expériences web modernes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                À propos
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projets
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">azu.code@example.com</p>
              <p className="text-muted-foreground">+33 6 12 34 56 78</p>
              <p className="text-muted-foreground">Paris, France</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a 
                href="#" 
                className="p-2 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:glow-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:glow-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:glow-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:azu.code@example.com" 
                className="p-2 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:glow-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground">
            © {currentYear} <span className="text-primary font-semibold">Azu Code</span>. 
            Tous droits réservés. Fait avec ❤️ et React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;