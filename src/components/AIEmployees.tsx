import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, Headphones, DollarSign, BarChart3, Phone } from "lucide-react";

const careerLevels = [
  { icon: Bot, title: "Estagiário de I.A.", color: "text-blue-500" },
  { icon: Users, title: "Analista de I.A.", color: "text-green-500" },
  { icon: Headphones, title: "Especialista de I.A.", color: "text-orange-500" },
  { icon: DollarSign, title: "Coordenador de I.A.", color: "text-purple-500" },
  { icon: BarChart3, title: "Gerente de I.A.", color: "text-red-500" },
  { icon: Phone, title: "Diretor de I.A.", color: "text-primary" }
];

const functions = [
  "Atendimento ao Cliente",
  "SDR", 
  "Suporte Técnico",
  "Vendas"
];

const AIEmployees = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Você já viu um funcionário de I.A. com{" "}
            <span className="text-primary">plano de carreira?</span>
          </h2>
          <p className="font-advent-pro text-lg text-muted-foreground mb-8">
            Na Escola de Automação você não aprende só a criar agentes. Você aprende a evoluí-los estrategicamente e transformá-los em soluções completas que o mercado inteiro procura – e paga muito bem por isso.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="font-montserrat font-bold text-xl text-center mb-8">
            Você vai evoluir seus Funcionários de I.A. e fazê-los passar por cargos como:
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {careerLevels.map((level, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors group text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <level.icon className={`h-6 w-6 ${level.color}`} />
                    </div>
                  </div>
                  <h4 className="font-montserrat font-semibold text-sm">
                    {level.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="font-montserrat font-bold text-lg">
                Ao longo disso tudo, esse Funcionário também vai atuar em funções de:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                {functions.map((func, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg">
                    <span className="font-advent-pro font-medium text-sm">
                      {func}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="font-advent-pro text-lg">
              <strong>E o melhor:</strong> Você receberá acesso aos templates e prompts desses agentes pra criar suas próprias soluções e lucrar com isso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEmployees;