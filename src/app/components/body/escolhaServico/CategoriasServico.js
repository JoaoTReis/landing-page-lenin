"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Servicos_criminal from "./Servicos_Criminal";
import Servicos_prev from "./Servico_Prev";
import Servicos_Outros from "./Servicos_Outros";

const CategoriasServico = () => {
  const [areaSelecionada, setAreaSelecionada] = useState(null);
  const [showContent, setShowContent] = useState(true);

  // Variants para animação
  const variants = {
    initial: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100, transition: { duration: 0.5 } },
    enter: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Quando clicar, anima saída e só depois troca o conteúdo
  const handleCategoriaClick = (area) => {
    setShowContent(false);
    setTimeout(() => {
      setAreaSelecionada(area);
      setShowContent(true);
    }, 500); // tempo igual ao duration da animação
  };

  return (
    <div
      id="servicos"
      className="flex flex-col gap-20 bg-[#204659] min-h-screen relative"
    >
      <img
        src="/horario.webp"
        alt="24h"
        className="h-50 w-50 absolute left-60 bottom-40"
      />

      <AnimatePresence mode="wait">
        {showContent && !areaSelecionada && (
          <motion.div
            key="categorias"
            initial="enter"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex flex-col items-center gap-10 text-4xl text-white w-full"
          >
            <div className="flex pl-64 items-center gap-50 w-full pt-30">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/logo_escritorio_lenin.webp"
                  alt="logo"
                  className="flex h-29 w-28"
                />
                <h1 className="text-4xl font-bold text-white pl-4">
                  Filippini Advocacia <br /> OAB RS/127.882
                </h1>
              </div>
              <div className="flex gap-2 relative">
                <img
                  src="/moldura.webp"
                  alt="moldura"
                  className="h-52 w-52 absolute top-[-80px] left-[10px] z-20"
                />
                <h1 className="text-4xl font-bold text-white pl-4">Serviços</h1>
              </div>
            </div>
            <h1>Em qual área você precisa de ajuda jurídica hoje?</h1>
            <div className="flex gap-10">
              <button
                type="button"
                className="flex flex-col gap-5 py-6 px-18 items-center justify-center bg-[#CF9645] rounded-4xl border-3 border-white"
                onClick={() => handleCategoriaClick("previdenciario")}
              >
                <img
                  src="/direito_prev.webp"
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
                onClick={() => handleCategoriaClick("outros")}
              >
                <img
                  src="/outros_ramos_direito.webp"
                  alt="imagem_prev"
                  className="flex w-32 h-32"
                />
                <h1 className="text-3xl font-sans">Outros ramo do direito</h1>
                <p className="text-2xl">Outros ramo do direito</p>
              </button>
              <button
                type="button"
                className="flex flex-col gap-5 py-6 px-18 items-center justify-center bg-[#CF9645] rounded-4xl border-3 border-white"
                onClick={() => handleCategoriaClick("criminal")}
              >
                <img
                  src="/direito_criminal.webp"
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
                  Defendemos o que é seu por direito,
                  <br /> com seriedade e excelência.
                </h1>
                <span className=" w-1 h-36 bg-[#CF9645] rounded"></span>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/lenin_mesa.webp"
                  alt="imagem_lenin"
                  className="flex w-170 rounded-2xl justify-center ml-12 pb-30"
                />
              </div>
            </div>
          </motion.div>
        )}

        {areaSelecionada === "previdenciario" && showContent && (
          <motion.div
            key="prev"
            initial="enter"
            animate="animate"
            exit="exit"
            variants={variants}
            className="w-full"
          >
            <Servicos_prev />
          </motion.div>
        )}
        {areaSelecionada === "criminal" && showContent && (
          <motion.div
            key="criminal"
            initial="enter"
            animate="animate"
            exit="exit"
            variants={variants}
            className="w-full"
          >
            <Servicos_criminal />
          </motion.div>
        )}
        {areaSelecionada === "outros" && showContent && (
          <motion.div
            key="outros"
            initial="enter"
            animate="animate"
            exit="exit"
            variants={variants}
            className="w-full"
          >
            <Servicos_Outros />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoriasServico;
