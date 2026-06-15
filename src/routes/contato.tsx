import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, MapPin, Phone, MessageCircle, Bus, Wrench, Smartphone } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Grupo Mix" },
      { name: "description", content: "Fale com o Grupo Mix. WhatsApp, e-mail e endereço em Senador Canedo-GO." },
      { property: "og:title", content: "Contato — Grupo Mix" },
      { property: "og:description", content: "Solicite orçamento ou tire dúvidas com a nossa equipe." },
    ],
  }),
  component: Contato,
});

const channels = [
  { brand: "Mix Fretados", icon: Bus, phone: "(62) 3991-4942", wa: "https://wa.me/556239914942", desc: "Fretamento B2B, turismo e excursões." },
  { brand: "Mix Truck Center", icon: Wrench, phone: "(62) 99551-9695", wa: "https://wa.me/5562995519695", desc: "Oficina diesel e loja de peças." },
  { brand: "Mix Tur", icon: Smartphone, phone: "(62) 3991-4942", wa: "https://wa.me/556239914942", desc: "Transporte agendado nacional." },
];

function Contato() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Contato</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold">
              Vamos <span className="text-gradient-gold">conversar.</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              Escolha o canal mais próximo da sua necessidade. Respondemos no mesmo dia útil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((c) => (
              <div key={c.brand} className="rounded-2xl border border-border/70 bg-card p-7 hover:border-primary/60 transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{c.brand}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground/90"><Phone className="h-4 w-4 text-primary" /> {c.phone}</div>
                </div>
                <a href={c.wa} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold-glow">
                  <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border/70 bg-card p-8">
              <h3 className="font-display text-2xl font-bold">Atendimento geral</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3"><Phone className="h-5 w-5 text-primary mt-0.5" /> <a href="tel:+556239914942" className="hover:text-primary">(62) 3991-4942</a></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-primary mt-0.5" /> <a href="mailto:comercial@grupomixbrasil.com" className="hover:text-primary">comercial@grupomixbrasil.com</a></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><span>R JC 29, nº 56, Quadra 31 Lote 16<br/>Residencial Jardim Canedo II<br/>Senador Canedo - GO • CEP 75.250-310</span></li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/70 min-h-[320px]">
              <iframe
                title="Localização Grupo Mix"
                src="https://www.google.com/maps?q=Residencial+Jardim+Canedo+II,+Senador+Canedo+-+GO,+75250-310&output=embed"
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
