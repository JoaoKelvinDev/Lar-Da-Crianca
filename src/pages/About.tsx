import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import aboutImage from "@/assets/about-section.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Promover o desenvolvimento integral de crianças em situação de vulnerabilidade, oferecendo suporte educacional, emocional e social.",
    },
    {
      icon: Eye,
      title: "Nossa Visão",
      description: "Ser referência no acolhimento e desenvolvimento de crianças, criando oportunidades para que elas alcancem seu máximo potencial.",
    },
    {
      icon: Award,
      title: "Nossos Valores",
      description: "Amor, respeito, transparência, comprometimento e responsabilidade social em todas as nossas ações.",
    },
  ];

  const timeline = [
    { year: "1970", event: "Inauguração do Lar da Criança Maria João de Deus, na Praça São José, bairro Vila Operária, em Teresina (PI)." },
    { year: "1980 a 2000", event: "O Lar consolidou-se como um importante centro de acolhimento infantil do estado do Piauí, sob gestão do Governo Estadual.Durante esses anos, centenas de crianças passaram pela instituição, recebendo apoio e assistência integral." },
    { year: "2010 – 2020", event: "O Lar manteve sua atuação contínua, com atividades educativas, recreativas e de convivência, em parceria com a Secretaria da Assistência Social, Trabalho e Direitos Humanos (SASC) e outras instituições públicas e sociais.Mesmo com estrutura simples, a equipe priorizou sempre o acolhimento humanizado e o bem-estar das crianças." },
    { year: "2023", event: "Iniciou-se o processo de revitalização completa do Lar da Criança, dentro do Programa Pacto pelas Crianças do Piauí, com o objetivo de modernizar o espaço e ampliar a capacidade de atendimento." },
    { year: "2024", event: "Em setembro de 2024, foi entregue a grande obra de revitalização e ampliação do Lar da Criança Maria João de Deus. Brinquedo praça de 540 m²;Biblioteca infantil e sala de TV educativa;Auditório e áreas de convivência;Ambientes climatizados e com acessibilidade;Novas salas pedagógicas e áreas de lazer." },
    { year: "2025", event: "Hoje, o Lar da Criança Maria João de Deus é referência no Piauí em acolhimento institucional, atendendo crianças de 0 a 12 anos com suporte psicossocial, educacional e afetivo.A nova estrutura fortalece o compromisso do estado com a proteção da infância e o desenvolvimento humano." }  
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
             O Lar da Criança Maria João de Deus nasceu do sonho de transformar vidas através do amor e do cuidado com quem mais precisa.
            Desde sua fundação, tem sido um espaço de acolhimento, esperança e proteção para crianças em situação de vulnerabilidade social, garantindo um ambiente seguro, educativo e cheio de afeto.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutImage} 
                alt="Crianças em atividades educativas" 
                className="rounded-2xl shadow-[var(--shadow-card)] w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Uma Jornada de Amor e Dedicação</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundado em 1970, o Lar da Criança Maria João de Deus nasceu na Praça São José, no bairro Vila Operária, em Teresina (PI), com o propósito de acolher e proteger crianças em situação de vulnerabilidade social. Desde o início, oferecemos abrigo, alimentação, educação e acompanhamento psicológico para garantir o bem-estar das crianças.
                </p>
                <p>
                  Ao longo das décadas, o Lar se consolidou como um importante centro de acolhimento infantil no estado do Piauí, atendendo centenas de crianças e promovendo atividades educativas, recreativas e de convivência. Mesmo com estrutura simples, nossa equipe sempre priorizou o acolhimento humanizado e o desenvolvimento integral das crianças.
                </p>
                <p>
                  Em 2023, iniciou-se um grande processo de revitalização dentro do Programa Pacto pelas Crianças do Piauí, com o objetivo de modernizar a instituição e ampliar sua capacidade de atendimento.
                </p>
                <p>
                  Em setembro de 2024, a revitalização foi concluída. Hoje, o Lar conta com uma brinquedopraça de 540 m², biblioteca infantil,
                  sala de TV educativa, auditório, áreas de convivência, ambientes climatizados e acessíveis, novas salas pedagógicas e áreas  
                  de lazer, tudo para oferecer um espaço seguro e acolhedor para as crianças.Nossa equipe é formada por profissionais
                   qualificados e voluntários dedicados, que trabalham todos os dias para garantir que cada criança receba atenção, 
                   cuidado e afeto.Acreditamos que toda criança possui potencial ilimitado quando recebe as oportunidades certas. 
                   É essa crença que nos inspira e move o Lar da Criança Maria João de Deus a continuar sua missão de transformar vidas.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Trajetória</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                  <p className="text-lg text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Contamos com uma equipe multidisciplinar de educadores, psicólogos, assistentes sociais e mais de 50 voluntários comprometidos com o bem-estar das nossas crianças.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
