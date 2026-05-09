"use client";

import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const PLACEHOLDERS = [
  { label: "Caldeiraria industrial", categoria: "Caldeiraria" },
  { label: "Soldagem estrutural", categoria: "Estruturas" },
  { label: "Manutenção de equipamentos", categoria: "Manutenção" },
  { label: "Soldagem TIG em inox", categoria: "TIG" },
  { label: "Fabricação de suportes", categoria: "Estruturas" },
  { label: "Recuperação de peças", categoria: "Usinagem" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-industrial-escuro py-20 lg:py-28" aria-label="Portfólio de trabalhos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-acento">
            Trabalhos executados
          </p>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Portfólio
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-white/60">
            Uma amostra de projetos realizados para indústrias da região de Campinas.
            Fotos reais sendo adicionadas — contate-nos para ver trabalhos específicos.
          </p>
        </motion.div>

        {/* Grid de trabalhos */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDERS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative aspect-[4/3] rounded-lg bg-industrial border border-white/10 overflow-hidden cursor-pointer"
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/20">
                <ImageOff className="h-10 w-10" aria-hidden="true" />
                <span className="text-xs uppercase tracking-widest">Foto em breve</span>
              </div>

              {/* Padrão decorativo de fundo */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 8px,
                    rgba(255,107,0,0.3) 8px,
                    rgba(255,107,0,0.3) 9px
                  )`,
                }}
                aria-hidden="true"
              />

              {/* Overlay ao hover */}
              <div className="absolute inset-0 bg-acento/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center gap-2">
                <p
                  className="text-lg font-bold uppercase tracking-tight text-white text-center px-4"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {item.label}
                </p>
                <span className="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-widest text-white/80">
                  {item.categoria}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA portfólio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-white/60 text-sm">
            Quer ver trabalhos específicos por tipo de serviço?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-acento px-6 py-3 text-sm font-bold uppercase tracking-widest text-acento transition-colors hover:bg-acento hover:text-white focus:outline-none focus:ring-2 focus:ring-acento focus:ring-offset-2 focus:ring-offset-industrial-escuro"
          >
            Solicitar Portfólio Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
