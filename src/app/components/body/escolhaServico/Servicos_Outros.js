import BotaoServico from "../../componentesPadroes/BotaoServico";

const Servicos_Outros = () => {
  return (
    <div className="relative grid grid-rows-4 p-5 gap-10 bg-[#204659] justify-center ">
      <img
        src="/imagens_outros/imagem_fundo_servico_outros.webp"
        alt="24h"
        className="absolute left-0 bottom-0 z-0"
      />
      <img
        src="/imagens_outros/imagem_lenin_servico_outros.webp"
        alt="24h"
        className="absolute right-0 bottom-0 h-180 z-0"
      />
      <div className="flex justify-center">
        <div className="flex flex-col pt-12">
          <div className="flex justify-center">
            <img
              src="/logo_escritorio_lenin.webp"
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
          imgSrc="/imagens_outros/imagens_servico_outros_8.webp"
          imgAlt="imagem_prev"
          titulo="Direito do Trabalho"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => (window.location.href = "https:google.com")}
          imgSrc="imagens_outros/imagens_servico_outros_1.webp"
          imgAlt="imagem_prev"
          titulo="Direito Civil"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_9.webp"
          imgAlt="imagem_prev"
          titulo="Família e Sucessões"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"

        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_2.webp"
          imgAlt="imagem_prev"
          titulo="Direito Público"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_3.webp"
          imgAlt="imagem_prev"
          titulo="Direito Tributárrio"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_4.webp"
          imgAlt="imagem_prev"
          titulo="Direito Empresarial"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_5.webp"
          imgAlt="imagem_prev"
          titulo="Direito Eleitoral"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_6.webp"
          imgAlt="imagem_prev"
          titulo="Direito do Consumidor"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_7.webp"
          imgAlt="imagem_prev"
          titulo="Direito de Trânsito"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_10.webp"
          imgAlt="imagem_prev"
          titulo="Direito dos Pets"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagem_wpp.webp"
          imgAlt="imagem_prev"
          titulo="Não encontrou o que buscava? Entre em contato e tenha um atendimento personalizado."
          tituloClassName="text-2xl"
          className="w-120 h-60"
          imgClassName="w-30 h-30 object-contain"
        />
      </div>
    </div>
  );
};

export default Servicos_Outros;
