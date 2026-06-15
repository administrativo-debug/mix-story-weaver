import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Bus, MapPin, Radar, Users, Briefcase, MessageCircle, CheckCircle2 } from "lucide-react";
import fleet from "@/assets/fleet.jpg";

export const Route = createFileRoute("/mix-fretados")({
  head: () => ({
    meta: [
      { title: "Mix Fretados — Fretamento B2B e Turismo | Grupo Mix" },
      { name: "description", content: "+30 veículos para fretamento de colaboradores e turismo em todo o Brasil. Tecnologia própria de rastreamento." },
      { property: "og:title", content: "Mix Fretados — Transportando Vidas" },
      { property: "og:description", content: "Fretamento corporativo e turismo com frota própria e rastreamento em tempo real." },
      { property: "og:image", content: "/og/mix-fretados.jpg" },
    ],
  }),
  component: MixFretados,
});

function MixFretados() {
  return (
    <SiteLayout>
      <BrandHero
        tag="Mix Fretados"
        title="Fretamento que respeita quem transporta vidas."
        slogan="Transportando Vidas"
        desc="Atendemos empresas e operadores de turismo em todo o Brasil com frota própria, tecnologia de rastreamento e a tranquilidade de um grupo que cuida da operação ponta a ponta."
        img={fleet}
        cta={{ phone: "(62) 3991-4942", wa: "https://wa.me/556239914942" }}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, t: "Fretamento corporativo", d: "Transporte diário de colaboradores com contratos B2B sob medida." },
              { icon: Bus, t: "Turismo e excursões", d: "Viagens nacionais com conforto, segurança e atendimento dedicado." },
              { icon: Radar, t: "Rastreamento próprio", d: "Tecnologia interna que monitora cada veículo em tempo real." },
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

          <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Diferenciais</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Operação que não para — porque sua empresa também não pode parar.</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Frota com +30 veículos próprios",
                "Manutenção centralizada na Mix Truck Center",
                "Atendimento em todo o território nacional",
                "Equipe de motoristas treinada e uniformizada",
                "Documentação e seguros sempre em dia",
                "Plantão comercial para emergências operacionais",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function BrandHero({ tag, title, desc, slogan, img, cta }: {
  tag: string; title: string; desc: string; slogan: string; img: string;
  cta: { phone?: string; wa?: string; site?: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0">
        <img src={img} alt={tag} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
          {tag}
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
          {title.split(" ").map((w, i, arr) => i === arr.length - 1 ? <span key={i} className="text-gradient-gold">{w}</span> : <span key={i}>{w} </span>)}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{desc}</p>
        <p className="mt-4 text-sm italic text-primary">"{slogan}"</p>
        <div className="mt-10 flex flex-wrap gap-4">
          {cta.wa && (
            <a href={cta.wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold-glow hover:opacity-90 transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp {cta.phone}
            </a>
          )}
          {cta.site && (
            <a href={cta.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold hover:border-primary/60 transition">
              Acessar site oficial
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
