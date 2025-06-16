import BotaoServico from "../../componentesPadroes/BotaoServico";

const Servicos_criminal = () => {
  return (
    <div className=" relative grid grid-rows-4 p-5 gap-10 bg-[#204659] justify-center ">
      <img
        src="/imagem_fundo_algema_martelo.webp"
        alt="24h"
        className="absolute left-[-400px] bottom-[-300px] rotate-[150deg] z-0"
      />
      <img
        src="/imagem_lenin_servico_criminal.webp"
        alt="24h"
        className="absolute right-[-0px] bottom-0 h-250 z-0"
      />
      <div className="flex justify-center">
        <img
          src="/horario.webp"
          alt="24h"
          className="h-50 w-50 absolute left-20 top-15"
        />
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
          imgSrc="/imagens_criminal/servicos_criminal_imagem_1.webp"
          imgAlt="imagem_prev"
          titulo="Acompanhamento de inquérito policial"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => (window.location.href = "https:google.com")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_2.webp"
          imgAlt="imagem_prev"
          titulo="Defesa em Ação Penal"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_3.webp"
          imgAlt="imagem_prev"
          titulo="Acompanhamento em audiências"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_4.webp"
          imgAlt="imagem_prev"
          titulo="Execução Penal"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_5.webp"
          imgAlt="imagem_prev"
          titulo="Habeas Corpus"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_6.webp"
          imgAlt="imagem_prev"
          titulo="Recursos"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_7.webp"
          imgAlt="imagem_prev"
          titulo="Crimes contra a vida"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_8.webp"
          imgAlt="imagem_prev"
          titulo="Crimes contra o patrimônio"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_9.webp"
          imgAlt="imagem_prev"
          titulo="Crimes Econômicos e
 Financeiros"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => setAreaSelecionada("previdenciario")}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_10.webp"
          imgAlt="imagem_prev"
          titulo="Crimes Econômicos e
 Financeiros"
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
          className="w-100 h-60"
          imgClassName="w-25 h-25 object-contain"
        />
        <img
          src="/horario.webp"
          alt="24h"
          className="h-50 w-50 absolute right-90 bottom-10"
        />
      </div>
    </div>
  );
};

export default Servicos_criminal;
