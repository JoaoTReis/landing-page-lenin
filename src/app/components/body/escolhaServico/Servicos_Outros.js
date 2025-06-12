import BotaoServico from "../../componentesPadroes/BotaoServico";

const Servicos_Outros = () => {
  return (
    <div className="relative grid grid-rows-4 p-5 gap-10 bg-[#204659] justify-center ">
      <img
        src="/imagens_outros/imagem_fundo_servico_outros.png"
        alt="24h"
        className="absolute left-0 bottom-0 z-0"
      />
      <img
        src="/imagens_outros/imagem_lenin_servico_outros.png"
        alt="24h"
        className="absolute right-0 bottom-0 h-180 z-0"
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
          imgSrc="/imagens_outros/imagens_servico_outros_8.png"
          imgAlt="imagem_prev"
          titulo="Direito do Trabalho"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"

        />
        <BotaoServico
          onClick={() => (window.location.href = "https:google.com")}
          imgSrc="imagens_outros/imagens_servico_outros_1.png"
          imgAlt="imagem_prev"
          titulo="Direito Civil"
          className="w-80 h-60"
          imgClassName="w-25 h-25 object-contain"

        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_9.png"
          imgAlt="imagem_prev"
          titulo="Família e Sucessões"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"

        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_2.png"
          imgAlt="imagem_prev"
          titulo="Direito Público"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"

        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_3.png"
          imgAlt="imagem_prev"
          titulo="Direito Tributárrio"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"

        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_4.png"
          imgAlt="imagem_prev"
          titulo="Direito Empresarial"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"

        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_5.png"
          imgAlt="imagem_prev"
          titulo="Direito Eleitoral"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"

        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_6.png"
          imgAlt="imagem_prev"
          titulo="Direito do Consumidor"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"

        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_7.png"
          imgAlt="imagem_prev"
          titulo="Direito de Trânsito"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="imagens_outros/imagens_servico_outros_10.png"
          imgAlt="imagem_prev"
          titulo="Direito dos Pets"
          className="w-80 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagem_wpp.png"
          imgAlt="imagem_prev"
          titulo="Não encontrou o que buscava? Entre em contato e tenha um atendimento personalizado."
          className="w-140 h-60"
          imgClassName="w-25 h-25 object-contain"
        />
      </div>
    </div>
  );
};

export default Servicos_Outros;
