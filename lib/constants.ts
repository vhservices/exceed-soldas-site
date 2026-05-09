export const EMPRESA = {
  nome: "Exceed Soldas",
  razaoSocial: "Exceed Soldas e Manutenção Ltda",
  cnpj: "26.160.074/0001-89",
  fundacao: 2016,
  anosExperiencia: new Date().getFullYear() - 2016,
  endereco: {
    rua: "Rua Dr. Edmundo Navarro de Andrade, 1788",
    bairro: "Parque Industrial",
    cidade: "Campinas",
    estado: "SP",
    completo: "Rua Dr. Edmundo Navarro de Andrade, 1788 - Parque Industrial, Campinas/SP",
    cep: "13070-000",
  },
  contato: {
    telefoneFixo: "(19) 2514-0265",
    telefoneCelular: "(19) 99452-8070",
    whatsapp: "5519994528070",
    email: "exceedsoldas@bol.com.br",
  },
  redesSociais: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
} as const;

export const WHATSAPP_LINK = `https://wa.me/${EMPRESA.contato.whatsapp}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento`;

export const SERVICOS = [
  {
    id: "mig-mag",
    titulo: "Soldagem MIG/MAG",
    descricao: "Soldagem por arame contínuo para materiais robustos e projetos de médio a grande porte. Alta produtividade com qualidade controlada.",
    icone: "flame",
  },
  {
    id: "tig",
    titulo: "Soldagem TIG",
    descricao: "Alta precisão para ligas especiais como alumínio, inox e titânio. Acabamento superior para peças críticas e de alto valor agregado.",
    icone: "crosshair",
  },
  {
    id: "mma",
    titulo: "Eletrodo Revestido (MMA)",
    descricao: "Versátil e robusto, ideal para soldagem em campo e manutenção. Funciona em locais de difícil acesso onde outros processos não chegam.",
    icone: "zap",
  },
  {
    id: "caldeiraria",
    titulo: "Caldeiraria",
    descricao: "Fabricação e reforço de estruturas metálicas, tanques, dutos e equipamentos industriais com controle dimensional rigoroso.",
    icone: "layers",
  },
  {
    id: "manutencao",
    titulo: "Manutenção Industrial",
    descricao: "Reparo e recuperação de máquinas, equipamentos, prensas e esteiras. Minimizamos o tempo de parada da sua linha produtiva.",
    icone: "wrench",
  },
  {
    id: "usinagem",
    titulo: "Usinagem e Tornearia",
    descricao: "Tornearia CNC e convencional para fabricação e recuperação de peças com tolerâncias dimensionais precisas.",
    icone: "settings",
  },
  {
    id: "campo",
    titulo: "Soldagem em Campo",
    descricao: "Atendimento na unidade do cliente quando a peça não pode ser deslocada. Equipe equipada para trabalhos externos.",
    icone: "map-pin",
  },
  {
    id: "estruturas",
    titulo: "Estruturas Metálicas",
    descricao: "Projetos personalizados de estruturas metálicas sob medida, desde mezaninos a suportes industriais de grande porte.",
    icone: "building-2",
  },
] as const;

export const PROCESSO_PASSOS = [
  {
    numero: "01",
    titulo: "Orçamento",
    descricao: "Entre em contato com detalhes do projeto. Respondemos em até 4 horas úteis com uma proposta técnica e comercial.",
  },
  {
    numero: "02",
    titulo: "Avaliação",
    descricao: "Nossa equipe analisa a viabilidade técnica, define o processo mais adequado e confirma prazos realistas.",
  },
  {
    numero: "03",
    titulo: "Execução",
    descricao: "Trabalho realizado por soldadores qualificados, com controle de qualidade em cada etapa do processo.",
  },
  {
    numero: "04",
    titulo: "Entrega",
    descricao: "Peça entregue no prazo acordado, com documentação quando exigida. Suporte pós-entrega incluso.",
  },
] as const;

export const DIFERENCIAIS = [
  { valor: `${EMPRESA.anosExperiencia}+`, label: "anos de mercado" },
  { valor: "5", label: "profissionais especializados" },
  { valor: "4h", label: "resposta para orçamentos" },
  { valor: "100%", label: "sob encomenda" },
] as const;
