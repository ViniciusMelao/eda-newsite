import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Criar agentes e automações simples{" "}
            <span className="text-primary">te dão renda extra</span>…
          </h1>
          
          <p className="font-advent-pro text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Na Escola de Automação pessoas comuns estão se tornando{" "}
            <strong className="text-primary">Gestores de Automação e I.A.</strong>{" "}
            e criando negócios sólidos e altamente lucrativos – mesmo começando do zero absoluto.
          </p>

          <Button 
            size="lg" 
            className="font-montserrat font-semibold text-lg px-8 py-6 group"
          >
            Quero Faturar 10k/mês
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="mt-12 pt-12 border-t border-border">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-6">
              <h2 className="font-montserrat font-bold text-xl mb-4">
                A era dos freelancers que só apertam botões chegou ao fim!
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-destructive text-xl">❌</span>
                  <p className="font-advent-pro text-sm">
                    Empresas não querem mais automações básicas, soluções genéricas ou freelancers baratos que disputam preço.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">✔️</span>  
                  <p className="font-advent-pro text-sm">
                    Elas querem profissionais que saibam exatamente como criar soluções completas e estratégicas que resolvam problemas reais (e pagam caro por isso).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;