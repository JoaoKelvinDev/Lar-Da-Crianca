import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Gift, Users, Shirt, Apple, BookOpen, DollarSign, Clock } from "lucide-react";
import donationsImage from "@/assets/donations.jpg";

const HowToHelp = () => {
  const donationTypes = [
    {
      icon: Shirt,
      title: "Roupas",
      description: "Roupas infantis em bom estado, calçados e acessórios são sempre bem-vindos.",
      color: "from-blue-500/20 to-blue-500/10",
    },
    {
      icon: Apple,
      title: "Alimentos",
      description: "Alimentos não perecíveis, cestas básicas e produtos de higiene pessoal.",
      color: "from-green-500/20 to-green-500/10",
    },
    {
      icon: Gift,
      title: "Brinquedos",
      description: "Brinquedos educativos, jogos e materiais recreativos novos ou seminovos.",
      color: "from-pink-500/20 to-pink-500/10",
    },
    {
      icon: BookOpen,
      title: "Material Escolar",
      description: "Cadernos, lápis, mochilas e todos os materiais para educação.",
      color: "from-purple-500/20 to-purple-500/10",
    },
  ];

  const monetaryOptions = [
    {
      icon: DollarSign,
      title: "Doação Única",
      description: "Contribua com qualquer valor através de PIX, transferência bancária ou cartão de crédito.",
    },
    {
      icon: Heart,
      title: "Doação Mensal",
      description: "Torne-se um padrinho ou madrinha com contribuições mensais recorrentes.",
    },
  ];

  const volunteerOptions = [
    {
      icon: Users,
      title: "Voluntariado Regular",
      description: "Dedique algumas horas por semana em atividades educativas e recreativas.",
    },
    {
      icon: Clock,
      title: "Eventos Especiais",
      description: "Participe de eventos pontuais como festas, campanhas e ações comunitárias.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-accent" fill="currentColor" />
            <h1 className="text-5xl font-bold mb-6">Como Você Pode Ajudar</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Existem diversas formas de fazer a diferença. Escolha a que mais combina com você e junte-se a nós nessa missão de transformar vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Material Donations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Doações Materiais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aceitamos diversos tipos de doações que fazem diferença no dia a dia das crianças
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center`}>
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Como Doar Materiais</h3>
            <p className="text-muted-foreground mb-4">
              As doações podem ser entregues pessoalmente em nossa sede ou podemos buscar em sua residência (para grandes volumes).
            </p>
            <p className="text-sm text-muted-foreground italic">
              Endereço: R. Antônio Alves de Souza, 96 - Vila Irmaos Arnoni, São Paulo - SP, 04657-230
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Horário de recebimento: Segunda a Sexta, 9h às 17h
            </p>
          </div>
        </div>
      </section>

      {/* Monetary Donations */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Doações Financeiras</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Suas contribuições financeiras nos ajudam a manter as operações diárias, pagar funcionários qualificados, comprar alimentos e garantir que nenhuma criança fique desamparada.
              </p>

              <div className="space-y-6">
                {monetaryOptions.map((option, index) => (
                  <Card key={index} className="border-none shadow-[var(--shadow-card)]">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                          <option.icon className="h-5 w-5 text-accent" />
                        </div>
                        {option.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <img 
                src={donationsImage} 
                alt="Doações fazem a diferença" 
                className="rounded-2xl shadow-[var(--shadow-card)] w-full mb-6"
              />
              
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Dados para Doação</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">PIX (CNPJ)</p>
                      <p className="text-muted-foreground font-mono">12.345.678/0001-90</p>
                    </div>
                    <div>
                      <p className="font-medium">Banco</p>
                      <p className="text-muted-foreground">Banco do Brasil - Ag: 1234-5 | CC: 12345-6</p>
                    </div>
                    <div>
                      <p className="font-medium">Favorecido</p>
                      <p className="text-muted-foreground">Lar da Criança</p>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full mt-6" size="lg">
                    Fazer Doação Agora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Seja Voluntário</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Doe seu tempo, conhecimento e carinho. Voluntários são essenciais para o nosso trabalho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {volunteerOptions.map((option, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                      <option.icon className="h-6 w-6 text-secondary" />
                    </div>
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Interessado em ser voluntário? Entre em contato conosco!
            </p>
            <Button variant="secondary" size="lg">
              Quero Ser Voluntário
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Toda Ajuda é Importante</h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Não importa o tamanho da sua contribuição, cada gesto de amor faz toda a diferença na vida de uma criança.
          </p>
          <Button variant="warm" size="lg">
            Fale Conosco
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowToHelp;
