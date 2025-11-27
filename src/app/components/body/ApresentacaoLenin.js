import Image from 'next/image'
const ApresentacaoLenin = () => {
  return (
    <div
      id="historia"
      className="relative overflow-hidden flex pt-20 pl-[99px] pb-20 bg-[#0E1926] gap-36 text-black max-lg:pt-8 max-lg:px-4 max-lg:pb-8 max-lg:gap-4"
    >
      <div
        aria-hidden="true"
        className="absolute -left-60 top-30 w-[489px] h-[489px] rounded-full bg-[#CB935D] opacity-90 transform-gpu max-lg:hidden"
      />

      <Image
        src="/lenin_advogado.png"
        width={500}
        height={500}
        alt="imagem Lenin"
        className=" w-[429px] h-[594px] z-1 rounded-4xl"
      />

      <div className='flex flex-col gap-5'>
        <div >
          <h1 className="text-xl font-bold font-manrope text-white max-lg:text-2xl">
            SEU PRIMEIRO RECURSO
          </h1>
        </div>
        <div >
          <h1 className="text-5xl font-bold font-girassol text-white max-lg:text-2xl">
            Bem-vindo ao
            <br/> <span className='text-[#CB935D]'>Filipini Advocacia</span>
          </h1>
        </div>
        <div>
          <p
            className="flex text-[30px] font-segoe text-white max-w-4xl max-lg:text-lg max-lg:max-w-full"
          >
            Atuamos com excelência nas mais diversas áreas do Direito, sempre buscando a melhor solução para cada caso. Nosso compromisso é com a justiça, a ética e o respeito ao cliente. Com especial destaque para o Direito Criminal,oferecemos uma defesa técnica, estratégica e humanizada.<br/>
            Conte com uma equipe preparada para proteger seus direitos e garantir sua voz perante a lei. Estamos prontos para te ouvir e ajudar.
            Fale agora com um de nossos advogados clicando no botão do WhatsApp abaixo!
          </p>
        </div>
        <div className="flex max-w-3xl items-center justify-center max-lg:max-w-full">
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
      </div>
    </div>
  );
};

export default ApresentacaoLenin;
