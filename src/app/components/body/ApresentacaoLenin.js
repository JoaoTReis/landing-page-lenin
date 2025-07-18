const ApresentacaoLenin = () => {
  return (
    <div
      id="historia"
      className="flex flex-col pt-20 px-20 pb-20 bg-[#D9D9D9] gap-5 text-black max-lg:pt-8 max-lg:px-4 max-lg:pb-8 max-lg:gap-4"
    >
      <div className="text-4xl font-bold font-girassol text-black max-lg:text-2xl">
        <h1 >
          Filippini Advocacia – Excelência em Direito Previdenciário
        </h1>
      </div>
      <div>
        <p
          className="flex text-[30px] font-balthazar text-black max-w-5xl max-lg:text-lg max-lg:max-w-full"
        >
          No Filippini Advocacia, atuamos com dedicação e profundo conhecimento
          técnico para garantir que nossos clientes tenham acesso aos seus
          direitos previdenciários de forma segura, rápida e eficaz. Sabemos que
          cada benefício representa dignidade, segurança e tranquilidade para o
          futuro, por isso tratamos cada caso com atenção individualizada e
          comprometimento total.<br /> <br />Com vasta experiência em Regime Geral
          (INSS), Regimes Próprios de Previdência (servidores públicos)
          e benefícios militares, oferecemos suporte completo tanto na
          esfera administrativa quanto judicial, sempre com foco na solução mais
          vantajosa para o segurado.<br /> <br /> Seja para aposentadoria, pensão por
          morte, auxílio por incapacidade, planejamento
          previdenciário ou revisões de benefício, nossa equipe está pronta
          para orientar e defender seus direitos com ética, transparência e
          excelência técnica.<br /> <br /> Agende uma consulta e tenha ao seu lado quem
          realmente entende de Previdência.
        </p>
      </div>
      <div className="flex max-w-3xl items-center justify-center max-lg:max-w-full">
        <button className="flex items-center justify-center w-2/5 text-2xl bg-green-400 rounded-4xl border-3 border-white max-lg:w-full max-lg:text-lg">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex py-1 w-full font-ebgaramond justify-center text-white"
          >
            Entre em contato
          </a>
        </button>
      </div>
    </div>
  );
};

export default ApresentacaoLenin;
