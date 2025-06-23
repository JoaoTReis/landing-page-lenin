const Header = () => {
  return (
    <header className="flex items-center gap-150 p-4 bg-[#204659] text-white border-b-[1px] max-lg:flex-col max-lg:gap-6 max-lg:p-2">
      <div className="flex items-center text-2xl font-bold text-black pl-4 gap-2 max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:pl-0">
        <img
          src="/logo_escritorio_lenin.webp"
          alt="Logo"
          className="h-18 w-18 max-lg:h-14 max-lg:w-14"
        />
        <div className="max-lg:text-center">
          <span
            className="text-white"
            style={{ fontFamily: "'Girassol', cursive" }}
          >
            Filippini Advocacia
          </span>
          <h6
            className="text-sm text-white text-center"
            style={{ fontFamily: "'Girassol', cursive" }}
          >
            OAB 127.882
          </h6>
        </div>
      </div>
      <nav className="max-lg:w-full">
        <ul className="flex gap-4 pr-12 text-3xl text-[#CF9645] max-lg:justify-center max-lg:pr-0 max-lg:text-lg max-lg:flex-wrap">
          <li>
            <a
              href="#servicos"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Serviços
            </a>
          </li>
          <li>
            <a href="#artigos" style={{ fontFamily: "'Girassol', cursive" }}>
              Artigos
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5553999258618?text=oi%20preciso%20de%20um%20auxilio%20de%20um%20advogado!!"
              style={{ fontFamily: "'Girassol', cursive" }}
            >
              Contato
            </a>
          </li>
          <li>
            <a href="#historia" style={{ fontFamily: "'Girassol', cursive" }}>
              Historia do escritório
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
