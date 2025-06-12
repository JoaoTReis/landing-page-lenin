"use client";
import { useState } from "react";
import Servicos_criminal from "./Servicos_Criminal";
import Servicos_prev from "./Servico_Prev";
import Servicos_Outros from "./Servicos_Outros";

// Exemplo de componente que será exibido ao clicar
const ServicosPrev = () => (
  <div className="">
    <Servicos_prev />
  </div>
);

const ServicosCriminal = () => (
  <div className="">
    <Servicos_criminal />
  </div>
);

const ServicosOutros = () => (
  <div className="">
    <Servicos_Outros />
  </div>
);

const CategoriasServico = () => {
  const [areaSelecionada, setAreaSelecionada] = useState(null);

  if (areaSelecionada === "previdenciario") {
    return <ServicosPrev />;
  }
  if (areaSelecionada === "criminal") {
    return <ServicosCriminal />;
  }
  if (areaSelecionada === "outros") {
    return <ServicosOutros />;
  }
  
  return (
    <div id="servicos" className="flex flex-col gap-20 bg-[#204659] py-30">
      <div className="flex pl-64 items-center gap-50">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/logo_escritorio_lenin.png"
            alt="logo"
            className="flex h-29 w-28"
          />
          <h1 className="text-4xl font-bold text-white pl-4">
            Filippini Advocacia <br/> OAB RS/127.882
          </h1>
        </div>
        <div className="flex gap-2 relative">
          <img
            src="/moldura.png"
            alt="moldura"
            className="h-52 w-52 absolute top-[-80px] left-[10px] z-20"
          />
          <h1 className="text-4xl font-bold text-white pl-4">Serviços</h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 text-4xl text-white">
        <h1>Em qual área você precisa de ajuda jurídica hoje?</h1>
        <div className="flex gap-10">
          <button
            type="button"
            className="flex flex-col gap-5 py-6 px-18 items-center justify-center bg-[#CF9645] rounded-4xl border-3 border-white"
            onClick={() => setAreaSelecionada("previdenciario")}
          >
            <img
              src="/direito_prev.png"
              alt="imagem_prev"
              className="flex w-32 h-32"
            />
            <h1 className="text-3xl font-sans">Direito Previdenciário</h1>
            <p className="text-2xl">
              Aposentadorias
              <br /> revisões de benefício
              <br /> auxílios
            </p>
          </button>
          <button
            type="button"
            className="flex flex-col gap-5 py-6 px-18 items-center justify-center bg-[#CF9645] rounded-4xl border-3 border-white"
            onClick={() => setAreaSelecionada("outros")}
          >
            <img
              src="/outros_ramos_direito.png"
              alt="imagem_prev"
              className="flex w-32 h-32"
            />
            <h1 className="text-3xl font-sans">Outros ramo do direito</h1>
            <p className="text-2xl">Outros ramo do direito</p>
          </button>
          <button
            type="button"
            className="flex flex-col gap-5 py-6 px-18 items-center justify-center bg-[#CF9645] rounded-4xl border-3 border-white"
            onClick={() => setAreaSelecionada("criminal")}
          >
            <img
              src="/direito_criminal.png"
              alt="imagem_prev"
              className="flex w-32 h-32"
            />
            <h1 className="text-3xl font-sans">Advocacia Criminal</h1>
            <p className="text-2xl">
              Defesa em processos
              <br /> inquéritos
              <br /> habeas corpus
            </p>
          </button>
        </div>
        <div className="flex flex-col justify-center pt-20 gap-5">
          <div className="flex items-center gap-4">
            <span className=" w-1 h-36 bg-[#CF9645] rounded"></span>
            <h1 className="text-5xl text-left">
              Defendemos o que é seu por direito,<br/> com seriedade e excelência.
            </h1>
            <span className=" w-1 h-36 bg-[#CF9645] rounded"></span>
          </div>
          <div className="flex items-start gap-4">
          <img
            src="/lenin_mesa.png"
            alt="imagem_lenin"
            className="flex w-170 rounded-2xl justify-center ml-12"
          />
          </div>
        </div>
      </div>
      <img src="/horario.png" alt="24h" className="h-50 w-50 absolute left-60 bottom-[-2550px]"/>
    </div>
  );
};

export default CategoriasServico;
