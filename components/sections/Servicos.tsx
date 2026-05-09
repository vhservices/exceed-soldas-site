"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Crosshair,
  Zap,
  Layers,
  Wrench,
  Settings,
  MapPin,
  Building2,
} from "lucide-react";
import { SERVICOS } from "@/lib/constants";

const ICONES: Record<string, React.ComponentType<{ className?: string }>> = {
  flame: Flame,
  crosshair: Crosshair,
  zap: Zap,
  layers: Layers,
  wrench: Wrench,
  settings: Settings,
  "map-pin": MapPin,
  "building-2": Building2,
};

export default function Servicos() {
  return (
    <section id="servicos" className="bg-fundo py-20 lg:py-28" aria-label="Serviços">
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
            O que fazemos
          </p>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-industrial sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Soluções em soldagem e manutenção
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-texto-sec">
            Para cada desafio industrial, temos o processo técnico certo. Há mais de 9 anos
            atendendo indústrias da região metropolitana de Campinas.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.map((servico, idx) => {
            const Icone = ICONES[servico.icone];
            return (
              <motion.article
                key={servico.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group relative rounded-lg bg-white p-6 shadow-sm border border-borda transition-all duration-300 hover:border-acento hover:shadow-lg hover:shadow-acento/10 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-industrial/5 text-industrial transition-colors group-hover:bg-acento group-hover:text-white">
                  {Icone && <Icone className="h-6 w-6" />}
                </div>
                <h3
                  className="mb-2 text-lg font-bold uppercase tracking-tight text-industrial"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {servico.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-texto-sec">
                  {servico.descricao}
                </p>

                {/* Linha decorativa */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-acento transition-all duration-300 group-hover:w-full rounded-b-lg" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-texto-sec mb-4">
            Não encontrou o que precisa?{" "}
            <strong className="text-industrial">Entre em contato</strong> e avaliamos juntos.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded bg-industrial px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-industrial-escuro focus:outline-none focus:ring-2 focus:ring-industrial focus:ring-offset-2"
          >
            Fale com a gente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
