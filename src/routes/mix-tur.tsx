import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BrandHero } from "./mix-fretados";
import { Smartphone, Calendar, MapPin, Sparkles } from "lucide-react";
import mixTur from "@/assets/mix-tur.jpg";

export const Route = createFileRoute("/mix-tur")({
  head: () => ({
    meta: [
      { title: "Mix Tur — Transporte agendado nacional | Grupo Mix" },
      { name: "description", content: "Plataforma nacional de transporte agendado. App em fase de testes." },
      { property: "og:title", content: "Mix Tur — Sua viagem na palma da mão" },
      { property: "og:description", content: "Transporte agendado nacional, ramificação da Mix Fretados." },
    ],
  }),
  component: MixTur,
});

function MixTur() {
  return (
    <SiteLayout>
      <BrandHero
        tag="Mix Tur"
        title="A inteligência da estrada, agora num aplicativo."
        slogan="Sua viagem na palma da mão"
        desc="Nascida da inteligência operacional da Mix Fretados, a Mix Tur é uma plataforma nacional de transporte agendado. O app está em fase final de testes — em breve no seu celular."
        img={mixTur}
        cta={{ phone: "(62) 3991-4942", wa: "https://wa.me/556239914942" }}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-transparent p-10 text-center max-w-3xl mx-auto">
            <Sparkles className="h-8 w-8 text-primary mx-auto" />
            <h2 className="mt-4 font-display text-3xl font-bold">Aplicativo em fase de testes</h2>
            <p className="mt-3 text-muted-foreground">
              Estamos refinando cada detalhe da plataforma antes do lançamento oficial.
              Quer ser avisado quando o app estiver disponível?
            </p>
            <a href="https://wa.me/556239914942?text=Quero%20ser%20avisado%20quando%20o%20app%20Mix%20Tur%20lan%C3%A7ar" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold-glow">
              Quero ser avisado
            </a>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, t: "App nacional", d: "Reserve sua viagem direto pelo aplicativo, de onde estiver." },
              { icon: Calendar, t: "Agendamento simples", d: "Escolha origem, destino e horário em poucos toques." },
              { icon: MapPin, t: "Cobertura ampla", d: "Roteirização inteligente herdada da operação Mix Fretados." },
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
        </div>
      </section>
    </SiteLayout>
  );
}
