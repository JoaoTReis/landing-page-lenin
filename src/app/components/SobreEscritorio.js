import Image from 'next/image'
const SobreEscritorio = () => {
    return (
        <div
            className="flex pt-[161px] px-[99px] pb-20 bg-[#FFFFFF] text-black max-lg:pt-8 max-lg:px-4 max-lg:pb-8 max-lg:gap-4"
        >
            <div className='flex gap-[160px] justify-center pl-'>

                <div className='flex flex-col gap-28 pt-[103px]'>
                    <h1 className='text-7xl font-bold font-girassol text-black max-lg:text-2xl'>
                        Sobre o escritório
                    </h1>

                    <div className="flex max-w-3xl items-center justify-start max-lg:max-w-full">
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

                <div className='flex flex-col gap-12'>
                    <div className='max-w-[640px] pr-10'>
                        <p className='text-xl font-manrope'>
                            Com vasta experiência em Regime Geral (INSS), Regimes Próprios de
                            Previdência (servidores públicos) e benefícios militares, oferecemos suporte
                            completo tanto na esfera administrativa quanto judicial, sempre com foco
                            na solução mais vantajosa para o segurado.<br />
                            <br />
                            Seja para aposentadoria, pensão por morte, auxílio por
                            incapacidade, planejamento previdenciário ou revisões de benefício, nossa
                            equipe está pronta para orientar e defender seus direitos com ética,
                            transparência e excelência técnica.
                        </p>
                    </div>
                    <p className='text-xl font-manrope'>
                        <span className='font-bold'> E agora?</span><br />
                        Agende uma consulta e tenha ao seu lado quem realmente entende de previdência
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SobreEscritorio;