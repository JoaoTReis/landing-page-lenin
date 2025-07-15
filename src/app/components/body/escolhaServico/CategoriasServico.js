"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Servicos_criminal from "./Servicos_Criminal";
import Servicos_prev from "./Servico_Prev";
import Servicos_Outros from "./Servicos_Outros";

const CategoriasServico = () => {
  const areas = ["previdenciario", "outros", "criminal"];

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

  const handlePrev = () => {
    if (areaSelecionada) {
      const idx = areas.indexOf(areaSelecionada);
      setAreaSelecionada(areas[(idx - 1 + areas.length) % areas.length]);
    }
  };

  const handleNext = () => {
    if (areaSelecionada) {
      const idx = areas.indexOf(areaSelecionada);
      setAreaSelecionada(areas[(idx + 1) % areas.length]);
    }
  };

  return (
    <div
      id="servicos"
      className="flex flex-col gap-20 bg-[#204659] min-h-screen relative max-lg:w-full max-lg:gap-8"
    >
      <img
        src="/horario.webp"
        alt="24h"
        className="h-50 w-50 absolute left-60 bottom-40 max-lg:h-20 max-lg:w-20 max-lg:left-2 max-lg:bottom-2"
      />

      {/* Botões de navegação aparecem só quando uma área está selecionada */}
      {areaSelecionada && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-20 bg-yellow-400 rounded-full p-2 shadow max-lg:absolute max-lg:top-70 max-lg:left-4"
            aria-label="Anterior"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-20 bg-yellow-400 rounded-full p-2 shadow max-lg:absolute max-lg:top-70 max-lg:right-4"
            aria-label="Próximo"
          >
            {">"}
          </button>
        </>
      )}

      <AnimatePresence mode="wait">
        {showContent && !areaSelecionada && (
          <motion.div
            key="categorias"
            initial="enter"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex flex-col items-center gap-10 text-4xl text-white w-full max-lg:gap-6 max-lg:text-2xl"
          >
            <div className="flex pl-50 items-center gap-80 w-full pt-30 max-lg:flex-col max-lg:pl-0 max-lg:gap-6 max-lg:pt-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/logo_escritorio_lenin.webp"
                  alt="logo"
                  className="flex h-29 w-28 max-lg:h-16 max-lg:w-16"
                />
                <h1
                  className="text-4xl font-bold text-white pl-4 max-lg:text-2xl max-lg:pl-0"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Filippini Advocacia <br /> OAB RS/127.882
                </h1>
              </div>
              <div className="flex gap-2 relative max-lg:static">
                <img
                  src="/moldura.webp"
                  alt="moldura"
                  className="h-52 w-52 absolute top-[-80px] left-[10px] z-20 max-lg:absolute max-lg:h-20 max-lg:w-20 max-lg:top-40 max-lg:left-38"
                />
                <h1
                  className="text-4xl font-bold text-white pl-4 max-lg:text-2xl max-lg:pl-0"
                  style={{ fontFamily: "'Girassol', cursive" }}
                >
                  Serviços
                </h1>
              </div>
            </div>
            <h1
              style={{ fontFamily: "'EB Garamond', serif" }}
              className="max-lg:text-xl max-lg:w-3/5 max-lg:justify-center"
            >
              Em qual área você precisa de ajuda jurídica hoje?
            </h1>
            <div className="flex gap-10 max-lg:flex-col max-lg:gap-4">
              <button
                type="button"
                className="flex flex-col gap-5 py-6 px-18 items-center justify-center bg-[#CF9645] rounded-4xl border-3 border-white max-lg:w-full max-lg:px-4 max-lg:py-4"
                onClick={() => handleCategoriaClick("previdenciario")}
              >
                <img
                  src="/direito_prev.webp"
                  alt="imagem_prev"
                  className="flex w-32 h-32 max-lg:w-16 max-lg:h-16"
                />
                <h1 className="text-3xl font-sans max-lg:text-lg"
                style={{ fontFamily: "'EB Garamond', serif" }}>Direito Previdenciário</h1>
                <p className="text-2xl max-lg:text-base"
                style={{ fontFamily: "'EB Garamond', serif" }}>
                  Aposentadorias
                  <br /> revisões de benefício
                  <br /> auxílios
                </p>
              </button>
              <button
                type="button"
                className="flex flex-col gap-5 py-6 px-18 items-center justify-center bg-[#CF9645] rounded-4xl border-3 border-white max-lg:w-full max-lg:px-4 max-lg:py-4"
                onClick={() => handleCategoriaClick("outros")}
              >
                <img
                  src="/outros_ramos_direito.webp"
                  alt="imagem_prev"
                  className="flex w-32 h-32 max-lg:w-16 max-lg:h-16"
                />
                <h1 className="text-3xl font-sans max-lg:text-lg"
                style={{ fontFamily: "'EB Garamond', serif" }}>Outros ramo do direito</h1>
                <p className="text-2xl max-lg:text-base"
                style={{ fontFamily: "'EB Garamond', serif" }}>
                  Familia e Sucessões <br /> Direito do Consumidor
                  <br /> Direito dos Pets
                </p>
              </button>
              <button
                type="button"
                className="flex flex-col gap-5 py-6 px-18 items-center justify-center bg-[#CF9645] rounded-4xl border-3 border-white max-lg:w-full max-lg:px-4 max-lg:py-4"
                onClick={() => handleCategoriaClick("criminal")}
              >
                <img
                  src="/direito_criminal.webp"
                  alt="imagem_prev"
                  className="flex w-32 h-32 max-lg:w-16 max-lg:h-16"
                />
                <h1 className="text-3xl font-sans max-lg:text-lg"
                style={{ fontFamily: "'EB Garamond', serif" }}>Advocacia Criminal</h1>
                <p className="text-2xl max-lg:text-base"
                style={{ fontFamily: "'EB Garamond', serif" }}>
                  Defesa em processos
                  <br /> inquéritos
                  <br /> habeas corpus
                </p>
              </button>
            </div>
            <div className="flex flex-col justify-center pt-20 gap-5 max-lg:pt-6">
              <div className="flex items-center gap-4 max-lg:flex max-lg:gap-2">
                <span className="w-1 h-36 bg-[#CF9645] rounded max-lg:h-8 max-lg:w-1" />
                <h1 className="text-5xl text-left max-lg:text-xl max-lg:text-center"
                style={{ fontFamily: "'Girassol', cursive" }}>
                  Defendemos o que é seu por direito,
                  <br /> com seriedade e excelência.
                </h1>
                <span className="w-1 h-36 bg-[#CF9645] rounded max-lg:h-8 max-lg:w-1" />
              </div>
              <div className="flex items-start gap-4 max-lg:justify-center max-lg:items-center">
                <img
                  src="/lenin_mesa.webp"
                  alt="imagem_lenin"
                  className="flex w-170 rounded-2xl justify-center ml-12 pb-30 max-lg:w-32 max-lg:ml-0 max-lg:pb-4"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Os outros conteúdos (áreas selecionadas) também podem receber max-lg:w-full se necessário */}
        {areaSelecionada === "previdenciario" && showContent && (
          <motion.div
            key="prev"
            initial="enter"
            animate="animate"
            exit="exit"
            variants={variants}
            className="w-full max-lg:w-full"
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
            className="w-full max-lg:w-full"
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
            className="w-full max-lg:w-full"
          >
            <Servicos_Outros />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoriasServico;
