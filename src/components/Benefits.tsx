import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Building } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Gestor de Automações e Prestadores de Serviço",
    description: "Se tornará um dos profissionais que estão mais em alta, tanto do meio digital quanto fora. Terão acesso ao que existe de mais estratégico no mercado das automações e inteligências artificiais e vão conseguir aplicar tudo isso mesmo que não tenha muita experiência na área de tecnologia."
  },
  {
    icon: TrendingUp,
    title: "Heads e Estrategistas", 
    description: "Serão capazes de trazer inovação ao negócio que faz parte, integrar novas soluções sem interromper operações existentes e principalmente, implementar estratégias de automação e IA que vão impulsionar o seu crescimento na empresa."
  },
  {
    icon: Building,
    title: "Dono de negócio",
    description: "Vai saber exatamente quais automações seu negócio precisa para vender mais e, principalmente, estará apto a delegar de forma inteligente e escalar seus ganhos sem precisar aumentar o custo do time exponencialmente."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            O que você vai conquistar com a Escola de Automação?
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="font-montserrat font-bold text-lg">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-advent-pro text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;