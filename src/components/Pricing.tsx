import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const bonuses = [
  {
    title: "Tutoria semanal de make e integrações",
    value: "R$1.997",
    description: "Com integrações, você é capaz de criar praticamente qualquer solução que o mercado precisa. Por isso na Escola, você tem acesso a tutoria ao vivo toda semana com um especialista em Make e integrações, pra tirar dúvidas e te ajudar a aplicar na prática. (Ninguém no mercado faz isso)"
  },
  {
    title: "Plano gestor R$10k",
    value: "R$1.997", 
    description: "Você vai ter acesso a um plano, onde detalhamos todo o passo a passo que, se você implementar sem pular etapas, vai conseguir recuperar o seu investimento na sua inscrição em pouquíssimo tempo."
  },
  {
    title: "Acesso à 1ª e maior comunidade de automação e I.A. no Circle",
    value: "R$997",
    description: "Na nossa comunidade, além de ter o espaço para tirar dúvidas e fazer networking, você também vai ter acesso à nossa central de vagas e até mesmo, se for do seu interesse, encontrará profissionais da área para contratar."
  }
];

const includes = [
  "Todos os conteúdos da Escola de Automação",
  "Tutoria semanal de make e integrações",
  "Plano Gestor 10K",
  "Templates das minhas automações e I.A's",
  "Comunidade de I.A. e Automação no Circle",
  "Acesso a todas as atualizações da Escola por 12 meses",
  "Estar 5 anos à frente de qualquer concorrente"
];

const Pricing = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Entrando HOJE para a Escola de Automação você recebe de presente o acesso exclusivo a todos os esses bônus.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat font-bold text-lg mb-2">
                  {bonus.title}
                </CardTitle>
                <div className="text-center">
                  <span className="text-muted-foreground line-through">De: {bonus.value}</span>
                  <span className="text-primary font-bold text-xl ml-2">Por: R$0,00</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-advent-pro text-sm text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-4 border-primary">
            <CardHeader className="text-center bg-primary text-primary-foreground">
              <CardTitle className="font-montserrat font-bold text-2xl">
                Faça parte da 1ª e maior Escola de Automação e IA do Brasil
              </CardTitle>
              <p className="font-advent-pro">Veja tudo que você terá acesso entrando agora pra Escola:</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="font-advent-pro text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center border-t pt-8">
                <div className="mb-6">
                  <span className="text-muted-foreground line-through text-lg">Total de: R$ 12.170</span>
                </div>
                <div className="mb-6">
                  <span className="font-advent-pro text-sm text-muted-foreground">Por apenas</span>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="font-montserrat font-bold text-4xl text-primary">R$218</span>
                    <div className="text-left">
                      <div className="font-montserrat font-bold text-lg">12x</div>
                      <div className="text-sm text-muted-foreground">,88</div>
                    </div>
                  </div>
                  <p className="font-advent-pro text-sm text-muted-foreground mt-2">
                    ou R$1.997 à vista
                  </p>
                  <p className="font-advent-pro text-xs text-muted-foreground mt-2">
                    Produto de assinatura ANUAL | Renovação após 12 meses de R$ 997
                  </p>
                </div>

                <Button size="lg" className="font-montserrat font-bold text-lg px-12 py-6 group">
                  Quero Garantir Minha Vaga
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg">
                  <p className="font-advent-pro text-sm text-green-800">
                    <strong>Garantia de 7 dias:</strong> Você vai ter 7 dias pra experimentar tudo o que quiser lá dentro da Escola, sem nenhum risco. Se você não estiver completamente satisfeito, basta solicitar seu reembolso dentro do período de 7 dias.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;