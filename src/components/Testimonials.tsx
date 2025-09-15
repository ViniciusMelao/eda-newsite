import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Filippe Holzer",
    quote: "Hoje o resultado que eu tenho não seria nem de perto, o mesmo, se eu não conhecesse o Thales há mais de dois anos…"
  },
  {
    name: "Rodrigo Cruz", 
    quote: "Eu não sou programador, não sou conhecedor de TI…Mas consigo fazer todas as automações de forma muito simples, sozinho…"
  },
  {
    name: "Fábio Borges",
    quote: "Foi muito legal a mudança que eu fiz pra trabalhar na área de automações e I.A, e eu fecho contratos tranquilamente aqui nos Estados Unidos na faixa de 4 e 5 mil dólares…"
  },
  {
    name: "Denderson Rodrigues",
    quote: "A comunidade do Thales é onde todos os Gestores de tráfego e estrategistas deveriam estar…"
  },
  {
    name: "Fernando Galiano",
    quote: "A tranquilidade que eu dou hoje pra minha família, qualidade de vida, qualidade dos estudos… sem automações eu acho que não conseguiria isso…"
  },
  {
    name: "Pedro Pitta",
    quote: "A metodologia é realmente tdah friendly, eu consegui entender muito fácil… Eu terminava a aula, fazia na prática e no dia seguinte já ia pros meus clientes oferecer, e deu muito certo…"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Veja o que estão falando sobre a Escola de Automação:
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <blockquote className="font-advent-pro text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="font-montserrat font-semibold text-primary text-sm">
                  {testimonial.name}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;