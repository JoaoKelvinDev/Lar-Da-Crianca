import { Heart, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-accent" fill="currentColor" />
              <span className="text-lg font-bold">Lar da Criança</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando vidas através do amor e cuidado com crianças em situação de vulnerabilidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/como-ajudar" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Como Ajudar
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span>Praça São José - Vila Operária, Teresina - PI, 64003-210</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:contato@lardacrianca.org.br" className="hover:text-primary transition-colors">
                  contato@lardacrianca.org.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:+551155555555" className="hover:text-primary transition-colors">
                  (86) 994276127
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lar da Criança. Todos os direitos reservados.</p>
        </div>
         */}
      
      </div>
    </footer>
  );
};
