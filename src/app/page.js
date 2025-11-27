import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ApresentacaoPagina from "./components/body/ApresentacaoPagina";
import ApresentacaoLenin from "./components/body/ApresentacaoLenin";
import CategoriasServico from "./components/body/escolhaServico/CategoriasServico";
import ArtigosLenin from "./components/body/artigos/ArtigosLenin";
import EnderecoEscritorio from "./components/body/EnderecoEscritorio";
import SobreEscritorio from "./components/SobreEscritorio";

export default function Home() {
  return (
    <>
        <Header />
        <ApresentacaoPagina />
        <CategoriasServico />
        <ApresentacaoLenin />
        <SobreEscritorio />
        <EnderecoEscritorio />
        <ArtigosLenin />
        <Footer />
    </>
  );
}
