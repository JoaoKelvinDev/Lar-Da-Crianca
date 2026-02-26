import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Gift, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-children.jpg";
import aboutImage from "@/assets/about-section.jpg";

const Home = () => {
  const impactStats = [
    { number: "200+", label: "Crianças Atendidas", icon: Users },
    { number: "15", label: "Anos de História", icon: Heart },
    { number: "50+", label: "Voluntários Ativos", icon: BookOpen },
    { number: "1000+", label: "Doações Mensais", icon: Gift },
  ];

  const howToHelp = [
    {
      icon: Gift,
      title: "Doações Materiais",
      description: "Roupas, brinquedos, alimentos e materiais escolares fazem a diferença.",
    },
    {
      icon: Heart,
      title: "Doações Financeiras",
      description: "Contribuições mensais ou pontuais nos ajudam a manter nossas atividades.",
    },
    {
      icon: Users,
      title: "Seja Voluntário",
      description: "Doe seu tempo e talento para transformar vidas.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Transformando Vidas com Amor
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Juntos, podemos construir um futuro melhor para as crianças que mais precisam
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="warm" size="lg" asChild>
                <Link to="/como-ajudar">
                  Como Ajudar <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                <Link to="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Sobre o Lar da Criança
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Há mais de 15 anos, o Lar da Criança vem transformando a vida de crianças em situação de vulnerabilidade social. Nossa missão é proporcionar um ambiente seguro, acolhedor e cheio de oportunidades.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Através de programas educacionais, atividades recreativas e apoio emocional, trabalhamos para garantir que cada criança tenha a chance de desenvolver seu potencial máximo.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/sobre">
                  Saiba Mais <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={aboutImage} 
                alt="Crianças felizes participando de atividades" 
                className="rounded-2xl shadow-[var(--shadow-card)] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Como Você Pode Ajudar</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Existem várias formas de fazer a diferença na vida dessas crianças
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howToHelp.map((item, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/como-ajudar">
                Ver Todas as Formas de Ajudar <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" fill="currentColor" />
          <h2 className="text-4xl font-bold mb-4">Faça Parte Dessa Transformação</h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Sua contribuição, seja ela qual for, tem o poder de mudar vidas e construir futuros
          </p>
          <Button variant="warm" size="lg" asChild>
            <Link to="/contato">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
