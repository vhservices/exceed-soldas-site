import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { EMPRESA } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exceedsoldas.com.br"),
  title: {
    default: "Exceed Soldas | Soldagem Industrial em Campinas há mais de 9 anos",
    template: "%s | Exceed Soldas",
  },
  description:
    "Soldagem MIG/MAG, TIG, eletrodo revestido, caldeiraria e manutenção industrial em Campinas/SP. 9 anos de experiência, atendimento ágil e qualidade comprovada.",
  keywords: [
    "soldagem industrial campinas",
    "soldagem mig mag campinas",
    "soldagem tig campinas",
    "caldeiraria campinas",
    "manutenção industrial campinas",
    "usinagem tornearia campinas",
    "estruturas metálicas campinas",
    "solda campinas sp",
  ],
  authors: [{ name: EMPRESA.razaoSocial }],
  creator: EMPRESA.razaoSocial,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: EMPRESA.nome,
    title: "Exceed Soldas | Soldagem Industrial em Campinas há mais de 9 anos",
    description:
      "Soldagem MIG/MAG, TIG, caldeiraria e manutenção industrial em Campinas/SP. Orçamento em até 4h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exceed Soldas | Soldagem Industrial Campinas",
    description:
      "Soldagem MIG/MAG, TIG, caldeiraria e manutenção industrial em Campinas/SP.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: EMPRESA.razaoSocial,
              alternateName: EMPRESA.nome,
              description:
                "Empresa especializada em soldagem industrial, caldeiraria, usinagem e manutenção industrial em Campinas/SP.",
              url: "https://exceedsoldas.com.br",
              telephone: EMPRESA.contato.telefoneFixo,
              email: EMPRESA.contato.email,
              foundingDate: String(EMPRESA.fundacao),
              address: {
                "@type": "PostalAddress",
                streetAddress: EMPRESA.endereco.rua,
                addressLocality: EMPRESA.endereco.cidade,
                addressRegion: EMPRESA.endereco.estado,
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -22.9005,
                longitude: -47.0616,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
