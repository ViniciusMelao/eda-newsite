import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, Target } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "INTELIGÊNCIA ARTIFICIAL",
    description: "Crie soluções inteligentes e personalizadas com I.A., que resolvem problemas reais e te destacam no mercado."
  },
  {
    icon: Zap,
    title: "AUTOMAÇÕES", 
    description: "Crie soluções 10x mais eficientes e lucrativas com automações, pra gerar recorrência e escalar seu faturamento."
  },
  {
    icon: Target,
    title: "ESTRATÉGIA",
    description: "Domine a mentalidade e as práticas que diferenciam um executor de profissional estratégico – capaz de rastrear problemas e vender soluções completas, personalizadas e de alto valor percebido."
  }
];

const Pillars = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            A Formação mais completa em automação e I.A. do mercado
          </h2>
          <p className="font-advent-pro text-lg text-muted-foreground mb-8">
            Enquanto outros cursos formam apenas "apertadores de botões" e reservam a parte estratégica e skin in the game pra uma mentoria de mais de R$10.000…
          </p>
          <p className="font-advent-pro text-lg">
            Aqui você aprende tudo em um só lugar e domina os 3 pilares essenciais pra se tornar um Gestor de Automação e I.A. capaz de criar sistemas completos de alto valor percebido.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-center mb-8">
            Conheça os 3 Pilares da Escola:
          </h3>
          <p className="font-advent-pro text-center text-muted-foreground mb-12">
            Seja capaz de criar sistemas completos e se torne um profissional indispensável, mesmo que você não tenha muita experiência com automação e tecnologia.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <pillar.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-montserrat font-bold text-lg mb-4">
                    {pillar.title}
                  </h4>
                  <p className="font-advent-pro text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;