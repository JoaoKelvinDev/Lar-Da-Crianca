import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Praça São José - Vila Operária, Teresina - PI, 64003-210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@lardacrianca.org.br",
      link: "mailto:contato@lardacrianca.org.br",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(86) 994276127",
      link: "tel:+551155555555",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta: 9h às 17h",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos prontos para responder suas dúvidas, receber sugestões ou conversar sobre como você pode ajudar
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <info.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie uma Mensagem</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input id="name" placeholder="Seu nome" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone (opcional)
                  </label>
                  <Input id="phone" type="tel" placeholder="(11) 99999-9999" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <Input id="subject" placeholder="Sobre o que você gostaria de falar?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Escreva sua mensagem aqui..." 
                    rows={6}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Localização</h2>
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8473982534934!2d-46.69785682378726!3d-23.65374967869858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50e3c7e0bacd%3A0x4e0f77c7e5c8a8e0!2sR.%20Ant%C3%B4nio%20Alves%20de%20Souza%2C%2096%20-%20Vila%20Irmaos%20Arnoni%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004657-230!5e0!3m2!1sen!2sbr!4v1704117000000!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Lar da Criança"
                ></iframe>
              </div>
              <div className="mt-6 bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold mb-3">Como Chegar</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Estamos localizados na Vila Irmãos Arnoni, região sul de São Paulo. 
                  Há estacionamento disponível nas proximidades e o local é servido por diversas linhas de ônibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              <Card className="border-none shadow-[var(--shadow-card)]">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Posso visitar o Lar da Criança?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! Agende uma visita entrando em contato conosco por telefone ou email. 
                    Teremos prazer em mostrar nosso trabalho e apresentar as crianças.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-[var(--shadow-card)]">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Como faço para me tornar voluntário?</h3>
                  <p className="text-sm text-muted-foreground">
                    Entre em contato através dos nossos canais de comunicação. 
                    Faremos uma entrevista inicial e apresentaremos as oportunidades disponíveis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-[var(--shadow-card)]">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Vocês emitem recibo de doação?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sim, emitimos recibos para todas as doações financeiras e materiais, 
                    que podem ser utilizados para declaração de Imposto de Renda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
