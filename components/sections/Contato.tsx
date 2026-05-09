"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { EMPRESA, WHATSAPP_LINK } from "@/lib/constants";

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  empresa: z.string().optional(),
  telefone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  servico: z.string().min(1, "Selecione um serviço"),
  mensagem: z.string().min(20, "Descreva melhor o projeto (mínimo 20 caracteres)"),
});

type FormData = z.infer<typeof schema>;

const SERVICOS_OPCOES = [
  "Soldagem MIG/MAG",
  "Soldagem TIG",
  "Eletrodo Revestido (MMA)",
  "Caldeiraria",
  "Manutenção Industrial",
  "Usinagem / Tornearia",
  "Soldagem em Campo",
  "Estruturas Metálicas",
  "Outro / Não sei ainda",
];

export default function Contato() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const resp = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!resp.ok) throw new Error("Erro no servidor");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="bg-industrial py-20 lg:py-28" aria-label="Contato">
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
            Vamos conversar
          </p>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Fale sobre seu projeto
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-white/60">
            Resposta em até 4 horas úteis. Orçamentos sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3
                className="mb-4 text-lg font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Contato Direto
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/20 group-hover:bg-[#25D366]/30 transition-colors">
                      <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-0.5">WhatsApp</p>
                      <p>{EMPRESA.contato.telefoneCelular}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${EMPRESA.contato.telefoneFixo.replace(/\D/g, "")}`}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Phone className="h-5 w-5 text-acento" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-0.5">Telefone Fixo</p>
                      <p>{EMPRESA.contato.telefoneFixo}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMPRESA.contato.email}`}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Mail className="h-5 w-5 text-acento" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-0.5">E-mail</p>
                      <p>{EMPRESA.contato.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-5 w-5 text-acento" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-0.5">Endereço</p>
                    <p className="text-sm">{EMPRESA.endereco.completo}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Horário */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-2">Horário de Atendimento</p>
              <p className="text-sm text-white/60">Segunda a Sexta · 8h às 18h</p>
              <p className="text-xs text-white/40 mt-1">Orçamentos enviados fora do horário são respondidos no próximo dia útil</p>
            </div>

            {/* Mapa */}
            <div className="overflow-hidden rounded-lg border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=Rua+Edmundo+Navarro+de+Andrade%2C+1788%2C+Parque+Industrial%2C+Campinas%2C+SP%2C+13030-160&output=embed&hl=pt-BR"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Exceed Soldas"
                aria-label="Mapa com localização da Exceed Soldas em Campinas"
              />
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border border-green-500/30 bg-green-500/10 p-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-400" />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-oswald)" }}>
                  Mensagem enviada!
                </h3>
                <p className="text-white/60">
                  Retornaremos em até 4 horas úteis. Você também pode nos contatar
                  diretamente pelo WhatsApp.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 rounded border border-white/20 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5 rounded-lg border border-white/10 bg-white/5 p-6 lg:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                      Nome <span className="text-acento">*</span>
                    </label>
                    <input
                      id="nome"
                      type="text"
                      autoComplete="name"
                      {...register("nome")}
                      className="w-full rounded bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-acento focus:outline-none focus:ring-1 focus:ring-acento"
                      placeholder="Seu nome"
                    />
                    {errors.nome && (
                      <p className="mt-1 text-xs text-red-400">{errors.nome.message}</p>
                    )}
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="empresa" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      autoComplete="organization"
                      {...register("empresa")}
                      className="w-full rounded bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-acento focus:outline-none focus:ring-1 focus:ring-acento"
                      placeholder="Nome da empresa (opcional)"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="telefone" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                      Telefone <span className="text-acento">*</span>
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      autoComplete="tel"
                      {...register("telefone")}
                      className="w-full rounded bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-acento focus:outline-none focus:ring-1 focus:ring-acento"
                      placeholder="(19) 99999-9999"
                    />
                    {errors.telefone && (
                      <p className="mt-1 text-xs text-red-400">{errors.telefone.message}</p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                      E-mail <span className="text-acento">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className="w-full rounded bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-acento focus:outline-none focus:ring-1 focus:ring-acento"
                      placeholder="email@empresa.com.br"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Serviço */}
                <div>
                  <label htmlFor="servico" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                    Tipo de Serviço <span className="text-acento">*</span>
                  </label>
                  <select
                    id="servico"
                    {...register("servico")}
                    className="w-full rounded bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white focus:border-acento focus:outline-none focus:ring-1 focus:ring-acento"
                  >
                    <option value="" className="bg-industrial">Selecione um serviço</option>
                    {SERVICOS_OPCOES.map((s) => (
                      <option key={s} value={s} className="bg-industrial">{s}</option>
                    ))}
                  </select>
                  {errors.servico && (
                    <p className="mt-1 text-xs text-red-400">{errors.servico.message}</p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
                    Descreva o Projeto <span className="text-acento">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    {...register("mensagem")}
                    className="w-full rounded bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-acento focus:outline-none focus:ring-1 focus:ring-acento resize-none"
                    placeholder="Descreva o serviço necessário, material, dimensões, prazo desejado..."
                  />
                  {errors.mensagem && (
                    <p className="mt-1 text-xs text-red-400">{errors.mensagem.message}</p>
                  )}
                </div>

                {/* Erro de envio */}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Erro ao enviar. Tente pelo WhatsApp ou telefone.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded bg-acento px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-acento/25 transition-all hover:bg-acento-hover disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-acento focus:ring-offset-2 focus:ring-offset-industrial"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </button>

                <p className="text-center text-xs text-white/30">
                  Ou entre em contato direto pelo WhatsApp:{" "}
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-acento hover:underline">
                    {EMPRESA.contato.telefoneCelular}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
