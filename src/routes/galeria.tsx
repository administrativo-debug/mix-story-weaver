import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import fleet from "@/assets/fleet.jpg";
import truckCenter from "@/assets/truck-center.jpg";
import parts from "@/assets/parts-shop.jpg";
import team from "@/assets/team.jpg";
import hero from "@/assets/hero-bus.jpg";
import mixTur from "@/assets/mix-tur.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Grupo Mix" },
      { name: "description", content: "Frota, oficina, equipe e loja de peças do Grupo Mix em imagens." },
      { property: "og:title", content: "Galeria — Grupo Mix" },
      { property: "og:description", content: "Conheça a operação do Grupo Mix em imagens." },
    ],
  }),
  component: Galeria,
});

const images = [
  { src: hero, alt: "Frota Mix na estrada ao entardecer", span: "md:col-span-2 md:row-span-2" },
  { src: fleet, alt: "Frota Mix Fretados estacionada" },
  { src: truckCenter, alt: "Oficina Mix Truck Center" },
  { src: parts, alt: "Loja de peças Mix Truck Center" },
  { src: team, alt: "Equipe Grupo Mix" },
  { src: mixTur, alt: "App Mix Tur em uso" },
];

function Galeria() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Galeria</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold">
              Nossa operação <span className="text-gradient-gold">em imagens.</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              Frota, oficina, equipe e loja de peças. Tudo que faz o Grupo Mix funcionar todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
            {images.map((img, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden rounded-xl border border-border/70 group ${img.span ?? ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-4 text-xs text-foreground/90 opacity-0 group-hover:opacity-100 transition">
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground italic">
            Em breve substituiremos esta seleção pelas fotos reais da frota, equipe e estrutura.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
