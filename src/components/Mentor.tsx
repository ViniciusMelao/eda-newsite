import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Mentor = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            Quem vai ser <span className="text-primary">seu mentor?</span>
          </h2>

          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-montserrat font-bold text-2xl mb-4 text-primary">
                    Thales Laray
                  </h3>
                  <div className="space-y-4 font-advent-pro text-muted-foreground leading-relaxed">
                    <p>
                      Sou Thales Laray, apaixonado por tecnologia, automações e inteligência artificial.
                    </p>
                    <p>
                      Em 2018, decidi deixar minha carreira em uma multinacional, buscando mais eficiência, lucro e qualidade de vida. Foi então que descobri o poder das automações e, mais tarde, da inteligência artificial para transformar negócios e rotinas de trabalho.
                    </p>
                    <p>
                      Mergulhei nesse universo e fundei a primeira e maior Escola de Automação e Inteligência Artificial, onde já formei milhares de alunos que faturam múltiplos 6, 7 e 8 dígitos em diversos nichos e modelos de negócios.
                    </p>
                    <p>
                      Agora, quero ajudar mais profissionais a aproveitarem o hype da I.A. para transformar suas carreiras e negócios, dominando a profissão mais demandada e bem paga da próxima década.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-64 h-64 bg-primary/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                    <span className="font-montserrat font-bold text-4xl text-primary">TL</span>
                  </div>
                  
                  <Button size="lg" className="font-montserrat font-semibold group">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar com Suporte
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="font-advent-pro text-muted-foreground">
              Aperte no botão abaixo para falar com alguém do meu time de suporte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;