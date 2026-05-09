import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import Portfolio from "@/components/sections/Portfolio";
import Sobre from "@/components/sections/Sobre";
import Processo from "@/components/sections/Processo";
import Contato from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Portfolio />
        <Sobre />
        <Processo />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
