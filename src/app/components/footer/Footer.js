import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0E1926] text-white py-4 border-t-1 border-white">
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
