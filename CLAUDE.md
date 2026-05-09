@AGENTS.md

---

# CLAUDE.md — Projeto Site Institucional Exceed Soldas

> **Para o Claude Code:** este arquivo contém todo o contexto necessário pra construir o site da Exceed Soldas. Leia antes de qualquer ação. Atualize conforme o projeto evolui.

---

## 🎯 Missão do Projeto

Construir um **site institucional / portfólio** pra **Exceed Soldas e Manutenção Ltda**, uma microempresa de soldagem e usinagem de Campinas/SP com 9 anos de mercado.

### Objetivos do site (em ordem de prioridade)

1. **Credibilidade B2B** — passar profissionalismo pra empresas industriais que estão avaliando a Exceed como fornecedora
2. **Geração de leads** — facilitar que clientes potenciais entrem em contato (WhatsApp, formulário, telefone)
3. **Vitrine de trabalhos executados** — galeria de serviços já realizados
4. **Atração de mão de obra qualificada** — soldadores procuram empresas sérias antes de aceitar emprego
5. **SEO local** — aparecer no Google quando alguém em Campinas/região buscar por "soldagem industrial", "caldeiraria", "usinagem"

---

## 🏢 Sobre a Exceed Soldas

- **CNPJ:** 26.160.074/0001-89
- **Fundação:** 13/09/2016
- **Endereço:** Rua Dr. Edmundo Navarro de Andrade, 1788 — Parque Industrial, Campinas/SP
- **Telefones:** (19) 2514-0265 | (19) 99452-8070
- **E-mail:** exceedsoldas@bol.com.br
- **WhatsApp:** (19) 99452-8070

---

## 🎨 Paleta de Cores (aprovada)

```
--cor-primaria: #1A1A1A     (preto industrial)
--cor-secundaria: #2D2D2D   (cinza escuro)
--cor-acento: #FF6B00       (laranja solda - APROVADO)
--cor-fundo: #F5F5F5        (cinza claro)
```

## 💻 Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion
- Formulário: React Hook Form + Zod + Resend
- Deploy: Vercel

## 📋 Status do MVP

### Concluído ✅
- [x] Setup Next.js 16 + TypeScript + Tailwind v4
- [x] Paleta de cores no @theme CSS
- [x] Header fixo com menu responsivo e scroll detection
- [x] Footer com todos os contatos
- [x] WhatsApp Float button funcional
- [x] Hero section com headline impactante + CTAs
- [x] Section Serviços (8 cards com icons)
- [x] Section Portfólio (6 placeholders)
- [x] Section Sobre com diferenciais numéricos
- [x] Section Processo de trabalho (4 passos)
- [x] Section Contato com formulário validado + mapa + contatos
- [x] SEO: metadata, Open Graph, sitemap.xml, robots.txt
- [x] Schema.org LocalBusiness
- [x] API route para envio de e-mail (Resend)
- [x] Variáveis em `lib/constants.ts`

### Pendente ⏳
- [ ] Configurar RESEND_API_KEY no .env.local para ativar envio de e-mail
- [ ] Adicionar fotos reais no portfólio (solicitar ao dono)
- [ ] Testar responsividade em mobile/tablet/desktop
- [ ] Deploy em Vercel
- [ ] Registrar domínio exceedsoldas.com.br

---

## 🤖 Como o Claude Code deve operar

- **Português sempre** nos comentários e comunicação
- **Justificar decisões de arquitetura** — não só implementar
- **Nível técnico:** intermediário-avançado (Victor é estagiário sênior em formação)
- **Não pular etapas** — Victor quer entender, não só ter o código pronto
- **Erros explicados** — causa raiz, não só correção
