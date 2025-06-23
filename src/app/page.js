import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ApresentacaoPagina from "./components/body/ApresentacaoPagina";
import ApresentacaoLenin from "./components/body/ApresentacaoLenin";
import CategoriasServico from "./components/body/escolhaServico/CategoriasServico";
import ArtigosLenin from "./components/body/ArtigosLenin";
import EnderecoEscritorio from "./components/body/EnderecoEscritorio";


export default function Home() {
  return (
    <>
      <Header/>
      <CategoriasServico/>
      <ApresentacaoPagina/>
      <ApresentacaoLenin/>
      <ArtigosLenin/>
      <EnderecoEscritorio />
      <Footer/>
    </>
  )
}
