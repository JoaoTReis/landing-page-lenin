import BotaoServico from "../../componentesPadroes/BotaoServico";

const Servicos_Outros = ({ onPrev, onNext }) => {
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
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20jur%C3%ADdica%20relacionada%20ao%20Direito%20do%20Trabalho.%20Pode%20me%20orientar%3F",
                  "_blank"
                )}
          imgSrc="/imagens_outros/imagens_servico_outros_8.webp"
          imgAlt="imagem_prev"
          titulo="Direito do Trabalho"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Gostaria%20de%20esclarecer%20uma%20d%C3%BAvida%20relacionada%20ao%20Direito%20Civil.%20Pode%20me%20ajudar%3F",
                  "_blank"
                )}
          imgSrc="imagens_outros/imagens_servico_outros_1.webp"
          imgAlt="imagem_prev"
          titulo="Direito Civil"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20em%20quest%C3%B5es%20de%20fam%C3%ADlia%20ou%20sucess%C3%B5es.%20Poderia%20me%20ajudar%3F",
                  "_blank"
                )}
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
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20relacionadas%20ao%20Direito%20P%C3%BAblico%20e%20gostaria%20de%20esclarecimentos.",
                  "_blank"
                )}
          imgSrc="imagens_outros/imagens_servico_outros_2.webp"
          imgAlt="imagem_prev"
          titulo="Direito Público"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20quest%C3%B5es%20ligadas%20ao%20Direito%20Tribut%C3%A1rio.%20Pode%20me%20ajudar%3F",
                  "_blank"
                )}
          imgSrc="imagens_outros/imagens_servico_outros_3.webp"
          imgAlt="imagem_prev"
          titulo="Direito Tributárrio"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20jur%C3%ADdicas%20relacionadas%20ao%20Direito%20Empresarial.%20Gostaria%20de%20ajuda.",
                  "_blank"
                )}
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
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Gostaria%20de%20esclarecimentos%20sobre%20quest%C3%B5es%20de%20Direito%20Eleitoral.%20Pode%20me%20orientar%3F",
                  "_blank"
                )}
          imgSrc="imagens_outros/imagens_servico_outros_5.webp"
          imgAlt="imagem_prev"
          titulo="Direito Eleitoral"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20um%20problema%20relacionado%20ao%20Direito%20do%20Consumidor.%20Pode%20me%20ajudar%3F",
                  "_blank"
                )}
          imgSrc="imagens_outros/imagens_servico_outros_6.webp"
          imgAlt="imagem_prev"
          titulo="Direito do Consumidor"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20jur%C3%ADdica%20relacionada%20ao%20tr%C3%A2nsito%20e%20gostaria%20de%20ajuda.",
                  "_blank"
                )}
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
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20jur%C3%ADdica%20relacionada%20aos%20direitos%20dos%20animais%20de%20estima%C3%A7%C3%A3o.%20Pode%20me%20orientar%3F",
                  "_blank"
                )}
          imgSrc="imagens_outros/imagens_servico_outros_10.webp"
          imgAlt="imagem_prev"
          titulo="Direito dos Pets"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
                  "https://wa.me/5553999258618?text=Ol%C3%A1!%20N%C3%A3o%20encontrei%20o%20que%20estava%20procurando%20no%20site%20e%20preciso%20de%20ajuda%20com%20um%20problema%20jur%C3%ADdico.%20Pode%20me%20ajudar%3F",
                  "_blank"
                )}
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
