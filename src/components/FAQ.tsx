import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo terei acesso ao conteúdo?",
    answer: "Você terá acesso ao conteúdo por 12 meses completos, incluindo todas as atualizações que forem lançadas durante este período."
  },
  {
    question: "Não sei programar, não sei muito de tecnologia e nunca fiz uma automação antes. A Escola é pra mim?",
    answer: "Sim! A Escola foi desenvolvida especialmente para pessoas que estão começando do zero. Todas as aulas são TDAH friendly - diretas ao ponto e com passo a passo detalhado para que qualquer pessoa leiga consiga entender e aplicar as estratégias."
  },
  {
    question: "Já trabalho com marketing digital. Como a Escola pode me ajudar?",
    answer: "Se você já trabalha com marketing digital, a Escola vai te dar uma vantagem competitiva enorme. Você será capaz de oferecer soluções completas de automação e IA para seus clientes, aumentando significativamente o valor dos seus serviços e seu faturamento."
  },
  {
    question: "Vou ter suporte se tiver dúvidas?",
    answer: "Sim! Você terá acesso à nossa comunidade exclusiva no Circle, onde pode tirar dúvidas, fazer networking e ainda participar das tutorias semanais ao vivo com especialistas em Make e integrações."
  },
  {
    question: "Quanto tempo leva para começar a ter resultados?",
    answer: "Muitos alunos começam a aplicar o conhecimento já na primeira semana e conseguem seus primeiros resultados em até 30 dias. O tempo pode variar dependendo da sua dedicação e aplicação do conteúdo."
  },
  {
    question: "Como funciona a comunidade da Escola?",
    answer: "Nossa comunidade funciona no Circle, onde você pode tirar dúvidas, fazer networking com outros alunos, acessar nossa central de vagas e até encontrar profissionais para contratar. É um ambiente colaborativo e de apoio mútuo."
  },
  {
    question: "Já comprei cursos sobre I.A. e automação antes e não consegui ter resultado. O que muda aqui?",
    answer: "A diferença está na abordagem completa: enquanto outros cursos ensinam apenas a técnica, aqui você aprende os 3 pilares (I.A., Automações e Estratégia). Além disso, você tem suporte contínuo, comunidade ativa e um plano estratégico para alcançar seus primeiros R$10k/mês."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            Ainda tem dúvida?
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-lg px-6">
                <AccordionTrigger className="font-montserrat font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-advent-pro text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;