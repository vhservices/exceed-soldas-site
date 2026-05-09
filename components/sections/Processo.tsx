"use client";

import { motion } from "framer-motion";
import { PROCESSO_PASSOS, WHATSAPP_LINK } from "@/lib/constants";

export default function Processo() {
  return (
    <section className="bg-fundo py-20 lg:py-28" aria-label="Como funciona">
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
            Como funciona
          </p>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-industrial sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Do orçamento à entrega
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-texto-sec">
            Processo simples, comunicação direta e resultado na hora certa.
          </p>
        </motion.div>

        {/* Passos */}
        <div className="relative">
          {/* Linha conectora desktop */}
          <div
            className="absolute top-12 left-0 right-0 h-px bg-borda hidden lg:block"
            style={{ left: "12.5%", right: "12.5%" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESSO_PASSOS.map((passo, idx) => (
              <motion.div
                key={passo.numero}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Número */}
                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-borda bg-white shadow-sm lg:h-24 lg:w-24">
                  <span
                    className="text-3xl font-bold text-acento"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {passo.numero}
                  </span>
                </div>

                <h3
                  className="mb-3 text-xl font-bold uppercase tracking-tight text-industrial"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {passo.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-texto-sec">{passo.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <p className="text-texto-sec text-sm">Pronto para começar?</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-acento px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-acento/25 transition-all hover:bg-acento-hover focus:outline-none focus:ring-2 focus:ring-acento focus:ring-offset-2"
          >
            Iniciar Orçamento pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
