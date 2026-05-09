"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { EMPRESA, WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolado, setRolado] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        rolado
          ? "bg-industrial shadow-lg shadow-black/30"
          : "bg-industrial/90 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-acento focus:ring-offset-2 focus:ring-offset-industrial rounded"
            onClick={fecharMenu}
          >
            <div className="flex flex-col leading-none">
              <span
                className="text-2xl font-bold tracking-widest text-white uppercase"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                EXCEED
              </span>
              <span className="text-[10px] tracking-[0.3em] text-acento uppercase font-medium">
                Soldas e Manutenção
              </span>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 uppercase tracking-wider transition-colors hover:text-acento focus:outline-none focus:text-acento"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${EMPRESA.contato.telefoneFixo.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              {EMPRESA.contato.telefoneFixo}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-acento px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-acento-hover focus:outline-none focus:ring-2 focus:ring-acento focus:ring-offset-2 focus:ring-offset-industrial"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="lg:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-acento rounded"
            aria-expanded={menuAberto}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="lg:hidden bg-industrial-escuro border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Menu mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={fecharMenu}
                className="py-3 text-white/80 uppercase tracking-wider text-sm font-medium border-b border-white/5 hover:text-acento transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={fecharMenu}
              className="mt-4 rounded bg-acento px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-acento-hover"
            >
              Solicitar Orçamento via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
