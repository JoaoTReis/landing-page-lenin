const aprensetacaoPagina = () => {
  return (
    <div className="flex flex-col pl-20 pt-30 pb-20 bg-[#204659] gap-10">
      <h1 className="text-4xl font-bold text-white">
        Bem Vindo ao <span className="text-[#CF9645]">Filippini</span>{" "}
        <span className="text-[#CF9645]">Advocacia</span>
      </h1>
      <p className="flex text-[30px] text-white max-w-3xl">
        Seja bem-vindo ao nosso site! Atuamos com excelência nas mais diversas
        áreas do Direito, sempre buscando a melhor solução para cada caso. Nosso
        compromisso é com a justiça, a ética e o respeito ao cliente. Com
        especial destaque para o Direito Criminal, oferecemos uma defesa
        técnica, estratégica e humanizada. Conte com uma equipe preparada para
        proteger seus direitos e garantir sua voz perante a lei. Estamos prontos
        para te ouvir e ajudar. Fale agora com um de nossos advogados clicando
        no botão do WhatsApp abaixo!
      </p>
      <button className="flex items-center justify-center w-1/3 text-2xl bg-green-400 rounded-4xl border-3 border-white">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex py-1 w-full justify-center"
        >
          <img
            src="/imagem_wpp.png"
            alt="WhatsApp"
            className="flex w-8 h-8"
          />
        </a>
      </button>
    </div>
  );
};

export default aprensetacaoPagina;
