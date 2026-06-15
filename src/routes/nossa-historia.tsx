import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/nossa-historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Grupo Mix" },
      { name: "description", content: "De uma van em Anápolis a um ecossistema de transporte em Senador Canedo-GO. Conheça a trajetória do Grupo Mix." },
      { property: "og:title", content: "Nossa História — Grupo Mix" },
      { property: "og:description", content: "Fundado por Andreia e Glaydson Borges, o Grupo Mix nasceu pequeno e cresceu junto com quem confia em nós." },
    ],
  }),
  component: Historia,
});

const timeline = [
  { year: "Início", title: "Uma van. Uma família.", text: "A Mix Fretados nasce em Anápolis-GO, fundada por Andreia e Glaydson Borges, com apenas uma van e a vontade de transportar com cuidado." },
  { year: "Mudança", title: "Sede em Senador Canedo-GO", text: "Há 6 anos, transferimos nossa operação para Senador Canedo, com infraestrutura preparada para crescer." },
  { year: "2020", title: "A grande virada", text: "Assumimos uma logística de grande porte. A operação ganhou escala, processos e nova visão de futuro." },
  { year: "Depois de 2020", title: "Crescimento contínuo", text: "Todos os anos, ano após ano, expandimos frota, equipe e cobertura. Sem atalhos, com consistência." },
  { year: "Hoje", title: "Mix Truck Center", text: "Nasce a oficina diesel do grupo: frotistas e donos de veículo único não podem parar. Manutenção própria + peças." },
  { year: "Próximo capítulo", title: "Mix Tur", text: "A inteligência operacional da Mix Fretados se transforma em plataforma nacional de transporte agendado. App em fase de testes." },
];

function Historia() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <img src={team} alt="Equipe Grupo Mix" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Nossa história</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
            De uma van em Anápolis a um <span className="text-gradient-gold">ecossistema nacional.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Toda história de transporte começa com uma virada de chave. A nossa começou com Andreia e Glaydson Borges,
            uma única van, e a convicção de que cuidar do passageiro é cuidar de uma vida.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ol className="relative border-l-2 border-border space-y-12">
            {timeline.map((step, i) => (
              <li key={i} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-gold shadow-gold-glow">
                  <span className="h-2 w-2 rounded-full bg-background" />
                </span>
                <div className="text-xs uppercase tracking-[0.3em] text-primary">{step.year}</div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Continuamos sendo a mesma <span className="text-gradient-gold">família</span> — só que com mais estrada.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Cada empresa do Grupo Mix carrega o mesmo DNA: presença próxima, cuidado com o detalhe e respeito por
            quem confia em nossas mãos a sua frota, sua viagem ou sua equipe.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
