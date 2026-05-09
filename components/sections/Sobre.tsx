"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Award } from "lucide-react";
import { EMPRESA, DIFERENCIAIS } from "@/lib/constants";

const VALORES = [
  {
    icone: ShieldCheck,
    titulo: "Qualidade Técnica",
    descricao: "Soldadores qualificados com domínio de múltiplos processos. Sem atalhos, sem retrabalho.",
  },
  {
    icone: Clock,
    titulo: "Prazo Cumprido",
    descricao: "Compromisso com os prazos acordados. Comunicação transparente em cada etapa.",
  },
  {
    icone: Users,
    titulo: "Equipe Especializada",
    descricao: "Time técnico experiente, com foco em manutenção industrial e projetos sob medida.",
  },
  {
    icone: Award,
    titulo: "9 Anos de Mercado",
    descricao: "Fundada em 2016, com histórico sólido atendendo indústrias de Campinas e região.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28" aria-label="Sobre a Exceed Soldas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-acento">
              Quem somos
            </p>
            <h2
              className="mb-6 text-3xl font-bold uppercase tracking-tight text-industrial sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Especialistas em soldagem técnica desde {EMPRESA.fundacao}
            </h2>
            <p className="mb-4 text-texto-sec leading-relaxed">
              A Exceed Soldas atende indústrias de Campinas e região metropolitana com
              agilidade, precisão e cumprimento rigoroso de prazos. Somos uma empresa
              de soldagem e manutenção industrial que executa cada projeto como se fosse
              para a própria fábrica.
            </p>
            <p className="mb-6 text-texto-sec leading-relaxed">
              Nossa equipe é formada por soldadores qualificados com domínio de processos
              MIG/MAG, TIG e eletrodo revestido, atuando tanto em bancada quanto em campo.
              Atendemos desde pequenas manutenções até projetos de caldeiraria de médio porte.
            </p>

            {/* Números */}
            <div className="grid grid-cols-2 gap-6 border-t border-borda pt-6 sm:grid-cols-4">
              {DIFERENCIAIS.map((item) => (
                <div key={item.label}>
                  <p
                    className="text-2xl font-bold text-acento"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {item.valor}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-texto-sec">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards de valores */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {VALORES.map((item, idx) => {
              const Icone = item.icone;
              return (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-lg border border-borda bg-fundo p-6 hover:border-acento/50 transition-colors"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-acento/10">
                    <Icone className="h-5 w-5 text-acento" />
                  </div>
                  <h3
                    className="mb-2 text-base font-bold uppercase tracking-tight text-industrial"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {item.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-texto-sec">{item.descricao}</p>
                </motion.div>
              );
            })}

            {/* Bloco de localização */}
            <div className="sm:col-span-2 rounded-lg bg-industrial p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-acento mb-2">
                Localização
              </p>
              <p className="text-sm text-white/80">{EMPRESA.endereco.completo}</p>
              <p className="mt-2 text-xs text-white/50">
                Atendimento também em campo na unidade do cliente
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
