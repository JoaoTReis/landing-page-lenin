import Image from "next/image";

const aprensetacaoPagina = () => {
  return (
    <div className=" flex pl-10 pt-10 pb-11 bg-gradient-to-r from-[#0D1825] to-[#1F3044] gap-10 max-lg:pl-4 max-lg:pt-10 max-lg:pb-8 max-lg:gap-6">
      <div className="flex flex-col pl-20 pt-30 pb-20  gap-10 max-lg:pl-4 max-lg:pt-10 max-lg:pb-8 max-lg:gap-6">

        <h1
          className="text-3xl font-manrope font-normal text-white max-w-3xl max-lg:text-2xl max-lg:pl-4"
        >
          ADVOCACIA COM FOCO NO RESULTADO
        </h1>
        <p
          className=" text-[80px] font-cormorant w-full text-white max-w-4xl max-lg:text-lg max-lg:max-w-full max-lg:px-4"
        >
          Defendemos seus direitos
          com <span className="text-[#CB935D] italic font-semibold"> Seriedade e Excelência.</span>
        </p>
        <p
          className="flex text-2xl font-segoe text-white max-w-2xl max-lg:text-lg max-lg:max-w-full max-lg:px-4"
        >
          Atuamos com dedicação em cada detalhe do seu caso. Seja na esfera criminal ou previdenciária, oferecemos uma defesa técnica, ética e personalizada para garantir a sua tranquilidade.
        </p>
        <button className="relative flex items-center justify-start w-84 h-16 text-2xl bg-[#CB935D] rounded-4xl max-lg:w-full max-lg:text-lg">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex py-1 w-full justify-left items-center pl-4"
          >
            <Image
              src="/imagem_wpp.webp"
              alt="WhatsApp"
              width={32}
              height={32}
              className="absolute w-8 h-8"
            />
            <h1 className="font-cormorant w-full text-white text-3xl">
              Falar com o advogado
            </h1>
          </a>
          <Image
              src="/horario.webp"
              alt="WhatsApp"
              width={320}
              height={320}
              className="absolute -top-3 -right-4 flex w-12 h-12"
            />
        </button>
      </div>
      <Image src="/mancha.png"
        alt="Imagem Advogado Lenin Filippini"
        width={500}
        height={500}
        className="absolute top-0 right-15 flex w-180 h-300 max-lg:w-72 max-lg:h-72 z-auto" />
      <Image src="/lenin_img_apresentacao.png"
        alt="Imagem Advogado Lenin Filippini"
        width={500}
        height={900}
        className="absolute flex w-[653px] h-[914px] right-30 max-lg:w-64 max-lg:h-64 z-[0]" />
      

      
    </div>
  );
};

export default aprensetacaoPagina;
