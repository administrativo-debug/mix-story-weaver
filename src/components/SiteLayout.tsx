import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/grupo-mix-logo.png.asset.json";
const logo = logoAsset.url;

const nav = [
  { to: "/", label: "Início" },
  { to: "/mix-fretados", label: "Mix Fretados" },
  { to: "/mix-truck-center", label: "Mix Truck Center" },
  { to: "/mix-tur", label: "Mix Tur" },
  { to: "/nossa-historia", label: "Nossa História" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Grupo Mix" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-tight">GRUPO MIX</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary">Transportando Vidas</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://wa.me/556239914942"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold-glow hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> Fale conosco
          </a>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="px-6 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-foreground/90 hover:text-primary border-b border-border/40"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/556239914942"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Fale conosco
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children ?? <Outlet />}</main>

      <footer className="border-t border-border/60 bg-card/50 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Grupo Mix" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-display text-xl font-bold">GRUPO MIX</div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary">Transportando Vidas</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              Ecossistema familiar de transporte nascido em Anápolis-GO. Há 6 anos sediados em
              Senador Canedo, conectamos vidas, frotas e destinos em todo o Brasil.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-4">Empresas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/mix-fretados" className="hover:text-foreground">Mix Fretados</Link></li>
              <li><Link to="/mix-truck-center" className="hover:text-foreground">Mix Truck Center</Link></li>
              <li><Link to="/mix-tur" className="hover:text-foreground">Mix Tur</Link></li>
              <li><Link to="/nossa-historia" className="hover:text-foreground">Nossa História</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>(62) 3991-4942</span></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>comercial@grupomixbrasil.com</span></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>R JC 29, nº 56, Qd 31 Lt 16<br/>Res. Jardim Canedo II<br/>Senador Canedo - GO, 75.250-310</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Grupo Mix. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
