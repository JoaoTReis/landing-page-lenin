import BotaoServico from "../../componentesPadroes/BotaoServico";

const Servicos_prev = () => {
  return (
    <div className="relative grid grid-rows-4 p-5 gap-10 bg-[#204659] justify-center ">
      <div className="absolute bottom-0 inset-0 z-0">
        <img
          src="/imagem_prev_fundo.webp"
          alt="fundo"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <img
        src="/Imagem_lenin_prev.webp"
        alt="24h"
        className="absolute right-0 bottom-0 h-200 z-0"
      />
      <img
        src="/imagem_dinheiro_prev.webp"
        alt="24h"
        className="absolute left-0 bottom-0 h-100 z-0"
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
          onClick={() =>
            window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20jur%C3%ADdica%20com%20a%20minha%20aposentadoria%20pelo%20INSS.",
              "_blank"
            )
          }
          imgSrc="/imagens_prev/imagem_prev_1.webp"
          imgAlt="imagem_prev"
          titulo="Aposentadorias
INSS"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20sobre%20benef%C3%ADcio%20por%20incapacidade%20ou%20aux%C3%ADlio-doen%C3%A7a.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_2.webp"
          imgAlt="imagem_prev"
          titulo="Ben. por Incapacidade Aux. Doença"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20sobre%20o%20BPC%2FLoas%20e%20gostaria%20de%20ajuda.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_3.webp"
          imgAlt="imagem_prev"
          titulo="BPC/LOAS"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Quero%20fazer%20um%20planejamento%20previdenci%C3%A1rio%20e%20preciso%20de%20orienta%C3%A7%C3%A3o.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_4.webp"
          imgAlt="imagem_prev"
          titulo="Planejamento 
Previdenciário"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20jur%C3%ADdica%20com%20o%20regime%20pr%C3%B3prio%20de%20previd%C3%AAncia%20do%20munic%C3%ADpio.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_5.webp"
          imgAlt="imagem_prev"
          titulo="Regimes Próprio
Municipal"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20sobre%20o%20regime%20pr%C3%B3prio%20estadual%20e%20gostaria%20de%20esclarecimentos.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_6.webp"
          imgAlt="imagem_prev"
          titulo="Regime Próprio
 Estadual"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-20">
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Sou%20trabalhador%20rural%20e%20queria%20saber%20mais%20sobre%20meus%20direitos%20como%20segurado%20especial.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_7.webp"
          imgAlt="imagem_prev"
          titulo="Segurado Especial Rurral"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20jur%C3%ADdica%20para%20entender%20melhor%20sobre%20pens%C3%A3o%20por%20morte.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_8.webp"
          imgAlt="imagem_prev"
          titulo="Pensão por morte"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20sobre%20o%20aux%C3%ADlio-reclus%C3%A3o%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_9.webp"
          imgAlt="imagem_prev"
          titulo="Auxílio Reclusão"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
      <div className="flex gap-5">
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20regime%20pr%C3%B3prio%20de%20previd%C3%AAncia.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_10.webp"
          imgAlt="imagem_prev"
          titulo="Regime Próprio
 Militar"
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
          className="flex w-95 h-60"
          imgClassName="w-25 h-25 object-contain"
        />
        <BotaoServico
          onClick={() => window.open(
              "https://wa.me/5553999258618?text=Ol%C3%A1!%20Trabalhei%20em%20condi%C3%A7%C3%B5es%20especiais%20e%20insalubres%20e%20gostaria%20de%20ajuda%20para%20contar%20esse%20tempo%20na%20aposentadoria.",
              "_blank"
            )}
          imgSrc="/imagens_prev/imagem_prev_11.webp"
          imgAlt="imagem_prev"
          titulo="Tempo Epecial/insalubre"
          tituloClassName="text-2xl"
          className="w-65 h-60"
          imgClassName="w-50 h-30 object-contain"
        />
      </div>
    </div>
  );
};

export default Servicos_prev;
