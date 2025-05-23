"use client";
import { useState } from "react";

// Exemplo de componente que será exibido ao clicar
const ServicosPrev = () => (
  <div className="text-black text-3xl p-10">
    Aqui vão os serviços de Direito Previdenciário.
  </div>
);

const CategoriasServico = () => {
  const [areaSelecionada, setAreaSelecionada] = useState(null);

  if (areaSelecionada === "previdenciario") {
    return <ServicosPrev />;
  }

  return (
    <div id="servicos" className="flex flex-col gap-20 bg-[#204659] py-30">
      <div className="flex pl-8 items-center gap-75">
        <div className="flex items-center gap-2">
          <img
            src="/logo_escritorio_lenin.png"
            alt="logo"
            className="flex h-29 w-28"
          />
          <h1 className="text-4xl font-bold text-white pl-4">
            Felippini Advocacia
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
            onClick={() => setAreaSelecionada("previdenciario")}
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
            onClick={() => setAreaSelecionada("previdenciario")}
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
        <div className="flex flex-col self-start w-3/5 pl-55 pt-20 gap-40">
          <h1 className="text-5xl">
            Defendemos o que é seu por direito, com seriedade e excelência.
          </h1>
          <img
            src="/horario.png"
            alt="24h"
            className="h-75 w-75"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriasServico;
