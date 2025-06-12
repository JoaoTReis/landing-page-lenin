import BotaoServico from "../../componentesPadroes/BotaoServico";

const Servicos_prev = () => {
  return (
    <div className="relative grid grid-rows-4 p-5 gap-10 bg-[#204659] justify-center ">
      <div className="absolute bottom-0 inset-0 z-0">
        <img
          src="/imagem_prev_fundo.png"
          alt="fundo"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <img
        src="/Imagem_lenin_prev.png"
        alt="24h"
        className="absolute right-0 bottom-0 h-200 z-0"
      />
      <img
        src="/imagem_dinheiro_prev.png"
        alt="24h"
        className="absolute left-0 bottom-0 h-100 z-0"
      />
      <div className="flex justify-center">
        <div className="flex flex-col pt-12">
          <div className="flex justify-center">
            <img
              src="/logo_escritorio_lenin.png"
              alt="logo"
              className="flex w-30 h-30"
            />
          </div>
          <h1 className="text-white text-2xl">
            Filippini Advocacia
            <br /> OAB/RS 127.882
          </h1>
        </div>
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_1.png"
          imgAlt="imagem_prev"
          titulo="Aposentadorias
INSS"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => (window.location.href = "https:google.com")}
          imgSrc="/imagens_prev/imagem_prev_2.png"
          imgAlt="imagem_prev"
          titulo="Ben. por Incapacidade Aux. Doença"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_3.png"
          imgAlt="imagem_prev"
          titulo="BPC/LOAS"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_4.png"
          imgAlt="imagem_prev"
          titulo="Planejamento 
Previdenciário"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_5.png"
          imgAlt="imagem_prev"
          titulo="Regimes Próprio
Municipal"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_6.png"
          imgAlt="imagem_prev"
          titulo="Regime Próprio
 Estadual"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_7.png"
          imgAlt="imagem_prev"
          titulo="Segurado Especial Rurral"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_8.png"
          imgAlt="imagem_prev"
          titulo="Pensão por morte"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_9.png"
          imgAlt="imagem_prev"
          titulo="Auxílio Reclusão"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-5">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_10.png"
          imgAlt="imagem_prev"
          titulo="Regime Próprio
 Militar"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagem_wpp.png"
          imgAlt="imagem_prev"
          titulo="Não encontrou o que buscava? Entre em contato e tenha um atendimento personalizado."
          className="flex w-120 h-60"
          imgClassName="w-25 h-25 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_prev/imagem_prev_11.png"
          imgAlt="imagem_prev"
          titulo="Tempo Epecial/insalubre"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
    </div>
  );
};

export default Servicos_prev;
