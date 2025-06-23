const Header = () => {
  return (
    <header className="flex items-center gap-150 p-4 bg-[#204659] text-white border-b-[1px]">
      <div className="flex items-center text-2xl font-bold text-black pl-4 gap-2">
        <img
          src="/logo_escritorio_lenin.webp"
          alt="Logo"
          className="h-18 w-18"
        />
        <div>
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
      <nav>
        <ul className="flex gap-4 pr-12 text-3xl text-[#CF9645]">
          <li>
            <a
              href="#servicos"
              className="font-size[]"
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
              href="https://wa.me/5553999258618?text=oi%20preciso%20de%20um%20auxilio%20de%20um%20advogado!!
"
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
