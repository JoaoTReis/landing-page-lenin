import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#204659] text-white py-4 border-t-1 border-white">
      <div className="flex items-center gap-60 text-2xl font-bold text-[#CF9645] pl-25 pb-10 pt-10 max-lg:flex-col max-lg:gap-8 max-lg:pl-4 max-lg:pb-6 max-lg:pt-6">
        <img
          src="/logo_escritorio_lenin.webp"
          alt="Logo"
          className="h-35 w-33 max-lg:h-20 max-lg:w-20"
        />
        <div className="max-lg:text-center">
          <h3 style={{ fontFamily: "'Girassol', cursive" }}>
            Serviços Ofertados
          </h3>
          <nav>
            <ul className="flex flex-col text-white text-base max-lg:items-center">
              <li>
                <a
                  href="#servicos"
                  className=""
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Criminal
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Previdenciário
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Outros ramos do Direito
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="max-lg:text-center">
          <h3 style={{ fontFamily: "'Girassol', cursive" }}>Entre em Contato</h3>
          <div className="flex gap-10 max-lg:justify-center max-lg:gap-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/imagem_wpp.webp"
                alt="WhatsApp"
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#CF9645] border-2 border-white max-lg:w-12 max-lg:h-12"
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/imagen_insta.webp"
                alt="Instagram"
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#CF9645] border-2 border-white max-lg:w-12 max-lg:h-12"
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/imagem_email.webp"
                alt="Email"
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#CF9645] border-2 border-white max-lg:w-12 max-lg:h-12"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center max-lg:px-2 max-lg:text-sm">
        <p>
          &copy; 2025 LF Consultoria Previdenciária - Todos os Direitos
          Reservados.
        </p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://wa.me/5553991761995?text=Olá%2C%20gostaria%20de%20saber%20sobre%20o%20desenvolvimento%20de%20sites!"
            className="text-blue-400 hover:underline"
          >
            João Reis
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
