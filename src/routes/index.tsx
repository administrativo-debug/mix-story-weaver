import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Bus, Wrench, Smartphone, Shield, MapPin, Users, Zap } from "lucide-react";
import heroBus from "@/assets/hero-bus.jpg";
import truckCenter from "@/assets/truck-center.jpg";
import mixTur from "@/assets/mix-tur.jpg";
import fleet from "@/assets/fleet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Mix — Transportando Vidas" },
      { name: "description", content: "Ecossistema familiar de transporte com Mix Fretados, Mix Truck Center e Mix Tur. Tecnologia, cuidado e estrada." },
      { property: "og:title", content: "Grupo Mix — Transportando Vidas" },
      { property: "og:description", content: "Fretamento, oficina de pesados e transporte agendado em todo o Brasil." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBus} alt="Frota Grupo Mix na estrada" className="h-full w-full object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Ecossistema de transporte
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Transportando <span className="text-gradient-gold">vidas</span><br />
              por todo o Brasil.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Um grupo familiar nascido em Anápolis-GO, hoje sediado em Senador Canedo, que une fretamento,
              manutenção de pesados e transporte agendado em uma única operação inteligente.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/nossa-historia" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold-glow hover:opacity-90 transition">
                Conheça nossa história <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary/60 transition">
                Solicitar orçamento
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden">
            {[
              { v: "+30", l: "Veículos na frota" },
              { v: "6 anos", l: "Sede em Senador Canedo" },
              { v: "Brasil", l: "Atuação nacional" },
              { v: "3", l: "Empresas no grupo" },
            ].map((s) => (
              <div key={s.l} className="bg-card/80 p-6 md:p-8">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">O ecossistema Mix</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl">
                Três empresas. <span className="text-gradient-gold">Um propósito.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Cada operação resolve uma dor real do transporte. Juntas, formam um ciclo onde a frota
              nunca para — e o serviço nunca falha.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <BrandCard
              icon={<Bus className="h-6 w-6" />}
              tag="Mix Fretados"
              title="Fretamento B2B e turismo"
              desc="+30 veículos atendendo colaboradores e excursões em todo o Brasil, com tecnologia própria de rastreamento."
              slogan="Transportando Vidas"
              to="/mix-fretados"
              img={fleet}
            />
            <BrandCard
              icon={<Wrench className="h-6 w-6" />}
              tag="Mix Truck Center"
              title="Oficina de pesados + peças"
              desc="Manutenção diesel especializada para frotistas e donos de veículo único. Loja de peças online e presencial."
              slogan="Porque você não pode parar."
              to="/mix-truck-center"
              img={truckCenter}
            />
            <BrandCard
              icon={<Smartphone className="h-6 w-6" />}
              tag="Mix Tur"
              title="Transporte agendado"
              desc="Plataforma nacional de transporte agendado, ramificação da Mix Fretados. App em fase final de testes."
              slogan="Sua viagem na palma da mão"
              to="/mix-tur"
              img={mixTur}
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative py-32 bg-card/40 border-y border-border/60 grid-lines">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Por que Grupo Mix</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Construído por uma família. <br />Operado como uma <span className="text-gradient-gold">indústria.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, t: "Gestão familiar", d: "Fundado por Andreia e Glaydson Borges, com presença próxima na operação." },
              { icon: Zap, t: "Tecnologia própria", d: "Sistema de rastreamento e inteligência operacional desenvolvidos internamente." },
              { icon: Shield, t: "Frota cuidada", d: "Manutenção centralizada na Mix Truck Center garante disponibilidade." },
              { icon: MapPin, t: "Cobertura nacional", d: "Saídas de Senador Canedo-GO atendendo todo o território brasileiro." },
            ].map((f) => (
              <div key={f.t} className="rounded-xl border border-border/70 bg-background/60 p-6 hover:border-primary/50 transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Pronto para colocar sua operação <br /><span className="text-gradient-gold">na estrada certa?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Solicite um orçamento para fretamento, manutenção ou agendamento. Respondemos no mesmo dia útil.
          </p>
          <Link to="/contato" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold-glow hover:opacity-90 transition">
            Fale com o Grupo Mix <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function BrandCard({ icon, tag, title, desc, slogan, to, img }: {
  icon: React.ReactNode; tag: string; title: string; desc: string; slogan: string;
  to: "/mix-fretados" | "/mix-truck-center" | "/mix-tur"; img: string;
}) {
  return (
    <Link to={to} className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card hover:border-primary/60 transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={tag} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      </div>
      <div className="relative p-7 -mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
          {icon} {tag}
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
          <span className="text-xs italic text-primary">"{slogan}"</span>
          <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
