import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Girassol&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="flex items-center gap-150 p-4 bg-gradient-to-r from-[#0D1825] to-[#1F3044] text-white max-lg:flex-col max-lg:gap-6 max-lg:p-2">
        <div className="flex items-center text-2xl font-bold text-black pl-12 pt-6 gap-2 max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:pl-0">
          <img
            src="/logo_escritorio_lenin.webp"
            alt="Logo"
            className="h-20 w-20 max-lg:h-14 max-lg:w-14"
          />
          <div className="flex flex-col gap-1 max-lg:text-center">
            <span
              className="text-white font-girassol font-segoe text-3xl"
            >
              Filippini Advocacia
            </span>
            <h6
              className="text-white text-left font-segoe text-lg"
            >
              OAB 127.882
            </h6>
          </div>
        </div>
        <nav className="max-lg:w-full">
          <ul className="flex gap-16 pr-12 text-3xl text-white max-lg:justify-center max-lg:pr-0 max-lg:text-lg max-lg:flex-wrap">
            <li>
              <a href="#servicos" className="font-segoe">
                Serviços
              </a>
            </li>
            <li>
              <a href="#artigos" className="font-segoe">
                Artigos
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5553999258618?text=oi%20preciso%20de%20um%20auxilio%20de%20um%20advogado!!" className="font-segoe"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#historia" className="font-segoe"
              >
                Historia do escritório
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
