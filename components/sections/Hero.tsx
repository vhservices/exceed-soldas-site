"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EMPRESA, WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-industrial"
      aria-label="Apresentação da Exceed Soldas"
    >
      {/* Textura de fundo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Gradiente laranja no canto */}
      <div
        className="absolute top-0 right-0 h-96 w-96 -translate-y-1/4 translate-x-1/4 rounded-full bg-acento/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-64 w-64 translate-y-1/4 -translate-x-1/4 rounded-full bg-acento/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Linha vertical decorativa */}
      <div
        className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-acento/50 to-transparent hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-acento/30 bg-acento/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-acento animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-widest text-acento">
              Campinas · SP · desde {EMPRESA.fundacao}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Soldagem industrial{" "}
            <span className="text-acento">de precisão</span>{" "}
            em Campinas
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            Soldagem MIG/MAG, TIG, eletrodo revestido e manutenção industrial
            para empresas que não aceitam retrabalho. Há mais de{" "}
            <strong className="text-white">{EMPRESA.anosExperiencia} anos</strong> de mercado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded bg-acento px-8 py-4 text-base font-bold uppercase tracking-widest text-white shadow-lg shadow-acento/25 transition-all hover:bg-acento-hover hover:shadow-acento/40 focus:outline-none focus:ring-2 focus:ring-acento focus:ring-offset-2 focus:ring-offset-industrial"
            >
              Solicitar Orçamento
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/20 px-8 py-4 text-base font-medium uppercase tracking-widest text-white transition-all hover:border-acento hover:text-acento focus:outline-none focus:ring-2 focus:ring-acento focus:ring-offset-2 focus:ring-offset-industrial"
            >
              Conhecer Trabalhos
            </a>
          </motion.div>

          {/* Números de credibilidade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-white/10 pt-8"
          >
            {[
              { valor: `${EMPRESA.anosExperiencia}+`, label: "anos de mercado" },
              { valor: "5", label: "profissionais" },
              { valor: "4h", label: "resposta orçamento" },
              { valor: "MIG · TIG · MMA", label: "processos de solda" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-2xl font-bold text-acento sm:text-3xl"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {item.valor}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest text-white/30">Rolar</span>
        <ChevronDown className="h-5 w-5 text-white/30 animate-bounce" />
      </motion.div>
    </section>
  );
}
