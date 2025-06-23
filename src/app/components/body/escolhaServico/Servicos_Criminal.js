import BotaoServico from "../../componentesPadroes/BotaoServico";

const Servicos_criminal = ({ onPrev, onNext }) => {
  return (
    <div className="relative grid grid-rows-4 p-5 gap-10 bg-[#204659] justify-center max-lg:p-2 max-lg:gap-4">
      <img
        src="/imagem_fundo_algema_martelo.webp"
        alt="24h"
        className="absolute left-[-400px] bottom-[-300px] rotate-[150deg] z-0 max-lg:hidden"
      />
      <img
        src="/imagem_lenin_servico_criminal.webp"
        alt="24h"
        className="absolute right-0 bottom-0 h-250 z-0 max-lg:h-32 max-lg:hidden"
      />
      <div className="flex justify-center">
        <img
          src="/horario.webp"
          alt="24h"
          className="h-50 w-50 absolute left-20 top-15 max-lg:h-16 max-lg:w-16 max-lg:hidden"
        />
        <div className="flex flex-col pt-12 max-lg:pt-4">
          <div className="flex justify-center">
            <img
              src="/logo_escritorio_lenin.webp"
              alt="logo"
              className="flex w-30 h-30 max-lg:w-16 max-lg:h-16"
            />
          </div>
          <h1 className="text-white text-2xl max-lg:text-lg text-center">
            Filippini Advocacia
            <br /> OAB/RS 127.882
          </h1>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col max-lg:gap-4">
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20jur%C3%ADdica%20com%20o%20acompanhamento%20de%20um%20inqu%C3%A9rito%20policial.%20Pode%20me%20ajudar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_1.webp"
          imgAlt="imagem_prev"
          titulo="Acompanhamento de inquérito policial"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Estou%20respondendo%20a%20uma%20a%C3%A7%C3%A3o%20penal%20e%20preciso%20de%20ajuda%20jur%C3%ADdica.%20Pode%20me%20orientar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_2.webp"
          imgAlt="imagem_prev"
          titulo="Defesa em Ação Penal"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20um%20advogado%20para%20me%20acompanhar%20em%20uma%20audi%C3%AAncia.%20Pode%20me%20ajudar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_3.webp"
          imgAlt="imagem_prev"
          titulo="Acompanhamento em audiências"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
      </div>
      <div className="flex gap-20 max-lg:flex-col max-lg:gap-4">
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20jur%C3%ADdica%20na%20%C3%A1rea%20de%20execu%C3%A7%C3%A3o%20penal.%20Pode%20me%20orientar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_4.webp"
          imgAlt="imagem_prev"
          titulo="Execução Penal"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20urgente%20sobre%20Habeas%20Corpus.%20Pode%20me%20ajudar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_5.webp"
          imgAlt="imagem_prev"
          titulo="Habeas Corpus"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Tenho%20interesse%20em%20interpor%20um%20recurso%20e%20preciso%20de%20ajuda%20jur%C3%ADdica.%20Pode%20me%20orientar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_6.webp"
          imgAlt="imagem_prev"
          titulo="Recursos"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
      </div>
      <div className="flex gap-20 max-lg:flex-col max-lg:gap-4">
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20em%20um%20caso%20envolvendo%20crime%20contra%20a%20vida.%20Pode%20me%20ajudar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_7.webp"
          imgAlt="imagem_prev"
          titulo="Crimes contra a vida"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20em%20um%20caso%20relacionado%20a%20crime%20contra%20o%20patrim%C3%B4nio.%20Pode%20me%20ajudar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_8.webp"
          imgAlt="imagem_prev"
          titulo="Crimes contra o patrimônio"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20sobre%20quest%C3%B5es%20jur%C3%ADdicas%20envolvendo%20crimes%20econ%C3%B4micos%20ou%20financeiros.%20Pode%20me%20ajudar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_9.webp"
          imgAlt="imagem_prev"
          titulo="Crimes Econômicos e
 Financeiros"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
      </div>
      <div className="flex gap-20 max-lg:flex-col max-lg:gap-4">
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20jur%C3%ADdica%20em%20um%20caso%20envolvendo%20tr%C3%A1fico%20de%20drogas.%20Pode%20me%20ajudar%3F",
            "_blank"
          )}
          imgSrc="/imagens_criminal/servicos_criminal_imagem_10.webp"
          imgAlt="imagem_prev"
          titulo="Tráfico de Drogas"
          tituloClassName="text-2xl max-lg:text-base"
          className="w-65 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-50 h-30 object-contain max-lg:w-20 max-lg:h-12"
        />
        <BotaoServico
          onClick={() => window.open(
            "https://wa.me/5553999258618?text=Ol%C3%A1!%20N%C3%A3o%20encontrei%20o%20que%20estava%20procurando%20no%20site%20e%20preciso%20de%20ajuda%20com%20um%20problema%20jur%C3%ADdico.%20Pode%20me%20ajudar%3F",
            "_blank"
          )}
          imgSrc="/imagem_wpp.webp"
          imgAlt="imagem_prev"
          titulo="Não encontrou o que buscava? Entre em contato e tenha um atendimento personalizado."
          tituloClassName="text-2xl max-lg:text-base"
          className="w-100 h-60 max-lg:w-full max-lg:h-32"
          imgClassName="w-25 h-25 object-contain max-lg:w-12 max-lg:h-12"
        />
        <img
          src="/horario.webp"
          alt="24h"
          className="h-50 w-50 absolute right-90 bottom-10 max-lg:h-50 max-lg:w-50 max-lg:absolute max-lg:top-50 max-lg:left-28"
        />
      </div>
    </div>
  );
};

export default Servicos_criminal;
