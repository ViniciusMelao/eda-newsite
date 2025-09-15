import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, ArrowRight } from "lucide-react";

const Competition = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-destructive/10 rounded-full">
              <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Você está competindo num jogo que foi projetado para você{" "}
            <span className="text-destructive">PERDER!</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-destructive/20">
            <CardContent className="p-8">
              <h3 className="font-montserrat font-bold text-xl mb-4">
                O que te prometeram:
              </h3>
              <p className="font-advent-pro text-muted-foreground leading-relaxed">
                Te prometeram que, se você estudasse bastante, conseguisse um bom emprego e trabalhasse duro, teria estabilidade e uma vida confortável.
              </p>
              <p className="font-advent-pro text-muted-foreground leading-relaxed mt-4">
                Mas ninguém te preparou pra se adaptar a um mundo onde funcionários estão sendo substituídos por tecnologias que fazem o seu trabalho — melhor, mais rápido e 24 horas por dia.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="font-montserrat font-bold text-xl">
                  A realidade atual:
                </h3>
              </div>
              <p className="font-advent-pro leading-relaxed mb-4">
                <strong>Enquanto você troca tempo por dinheiro…</strong>
              </p>
              <p className="font-advent-pro text-muted-foreground leading-relaxed">
                Empresas estão pagando caro por soluções de automação e I.A. — que funcionam 24 horas por dia, 7 dias por semana. E tem um grupo seleto de pessoas aproveitando essa oportunidade e faturando alto com isso.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="font-advent-pro text-lg mb-6">
            Veja alguns dos resultados dos alunos da Escola de Automação:
          </p>
          <Button size="lg" className="font-montserrat font-semibold text-lg px-8 py-6 group">
            Quero Sair da Competição Desleal
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Competition;