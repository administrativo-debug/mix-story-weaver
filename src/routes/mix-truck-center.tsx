import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BrandHero } from "./mix-fretados";
import { Wrench, ShoppingBag, Truck, CheckCircle2 } from "lucide-react";
import truckCenter from "@/assets/truck-center.jpg";
import parts from "@/assets/parts-shop.jpg";

export const Route = createFileRoute("/mix-truck-center")({
  head: () => ({
    meta: [
      { title: "Mix Truck Center — Oficina diesel e peças | Grupo Mix" },
      { name: "description", content: "Oficina diesel especializada em veículos pesados e loja de peças online e presencial. Porque você não pode parar." },
      { property: "og:title", content: "Mix Truck Center — Porque você não pode parar." },
      { property: "og:description", content: "Manutenção de pesados e peças para frotistas e donos de veículo único." },
    ],
  }),
  component: MixTruckCenter,
});

function MixTruckCenter() {
  return (
    <SiteLayout>
      <BrandHero
        tag="Mix Truck Center"
        title="Quando o veículo precisa voltar à estrada."
        slogan="Porque você não pode parar."
        desc="Surgimos da realidade de quem vive da estrada: frotistas e donos de veículo único não podem ficar parados. Oficina diesel especializada em pesados, com loja de peças online e presencial."
        img={truckCenter}
        cta={{ phone: "(62) 99551-9695", wa: "https://wa.me/5562995519695", site: "https://mixtruckcenter.grupomixoficial.com" }}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Wrench, t: "Manutenção diesel", d: "Diagnóstico e reparo de pesados com mão de obra especializada." },
              { icon: Truck, t: "Atendimento a frotistas", d: "Planos preventivos e disponibilidade prioritária para frotas." },
              { icon: ShoppingBag, t: "Loja de peças", d: "Estoque amplo de peças para pesados, com venda online e presencial." },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-border/70 bg-card p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
            <img src={parts} alt="Loja de peças Mix Truck Center" loading="lazy" className="rounded-2xl border border-border/70" />
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Por que escolher</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Estrutura que nasceu para resolver de verdade.</h2>
              <ul className="space-y-3">
                {[
                  "Equipe técnica especializada em pesados",
                  "Estoque próprio reduz tempo de espera",
                  "Atendimento presencial e venda online de peças",
                  "Suporte a frotas de qualquer porte",
                ].map((b) => (
                  <li key={b} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
