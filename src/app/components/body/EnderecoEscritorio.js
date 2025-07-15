"use client";

import { useState } from "react";

const EnderecoEscritorio = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col items-center py-10 bg-[#204659] max-lg:py-6">
      <h2
        className="text-3xl text-white mb-4 max-lg:text-xl"
        style={{ fontFamily: "'Girassol', cursive" }}
      >
        Nosso Local
      </h2>
      <div
        className="rounded-xl shadow-lg overflow-hidden relative max-lg:w-full"
        style={{
          width: "600px",
          height: "450px",
          cursor: "pointer",
          maxWidth: "100%",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Imagem de fundo */}
        <img
          src="/imagem_escritorio.webp"
          alt="Foto do Escritório"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-200 ${
            hover ? "opacity-0" : "opacity-100"
          } max-lg:static`}
          style={{ zIndex: 1 }}
        />
        {/* Iframe do Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.2393784174924!2d-52.33891992358412!3d-31.76395641314113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b500101a8ee7%3A0xbd62c40dc5e0750e!2sLENIN%20FILIPPINI%20ADVOCACIA!5e0!3m2!1spt-BR!2sbr!4v1749663451307!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            opacity: hover ? 1 : 0,
            pointerEvents: hover ? "auto" : "none",
            transition: "opacity 0.2s",
            width: "100%",
            height: "100%",
            maxWidth: "100%",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p
        className="text-white mt-4 max-lg:text-base max-lg:text-center max-lg:px-2"
        style={{ fontFamily: "'EB Garamond', serif" }}
      >
        R. Gonçalves Chaves, 960 - Centro, Pelotas
      </p>
    </div>
  );
};

export default EnderecoEscritorio;
