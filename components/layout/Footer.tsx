import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { EMPRESA, WHATSAPP_LINK } from "@/lib/constants";

const ANO_ATUAL = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-industrial text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span
                className="block text-3xl font-bold tracking-widest text-white uppercase"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                EXCEED
              </span>
              <span className="text-xs tracking-[0.3em] text-acento uppercase font-medium">
                Soldas e Manutenção
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              {EMPRESA.anosExperiencia} anos de experiência em soldagem industrial, caldeiraria
              e manutenção. Atendemos indústrias de Campinas e região metropolitana com
              precisão e agilidade.
            </p>
            <p className="mt-3 text-xs text-white/40">
              CNPJ: {EMPRESA.cnpj}
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Serviços", href: "#servicos" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Contato", href: "#contato" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-acento"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-acento" />
                <span>{EMPRESA.endereco.completo}</span>
              </li>
              <li>
                <a
                  href={`tel:${EMPRESA.contato.telefoneFixo.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-acento"
                >
                  <Phone className="h-4 w-4 shrink-0 text-acento" />
                  {EMPRESA.contato.telefoneFixo}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-acento"
                >
                  <Phone className="h-4 w-4 shrink-0 text-acento" />
                  {EMPRESA.contato.telefoneCelular}
                  <span className="text-xs text-acento">(WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMPRESA.contato.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-acento"
                >
                  <Mail className="h-4 w-4 shrink-0 text-acento" />
                  {EMPRESA.contato.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {ANO_ATUAL} {EMPRESA.razaoSocial}. Todos os direitos reservados.
          </p>
          <p>
            Fundada em {EMPRESA.fundacao} · Campinas, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
