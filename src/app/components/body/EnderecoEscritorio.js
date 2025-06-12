"use client";

import { use, useState } from "react";

const EnderecoEscritorio = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col items-center py-10 bg-[#204659]">
      <h2 className="text-3xl text-white mb-4">Nosso Local</h2>
      <div
        className="rounded-xl shadow-lg overflow-hidden"
        style={{ width: 600, height: 450, cursor: "pointer" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {!hover ? (
          <img
            src="/imagem_escritorio.png"
            alt="Foto do Escritório"
            className="w-full h-full object-cover"
          />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.2393784174924!2d-52.33891992358412!3d-31.76395641314113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b500101a8ee7%3A0xbd62c40dc5e0750e!2sLENIN%20FILIPPINI%20ADVOCACIA!5e0!3m2!1spt-BR!2sbr!4v1749663451307!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
      <p className="text-white mt-4">R. Gonçalves Chaves, 960 - Centro, Pelotas</p>
    </div>
  );
};

export default EnderecoEscritorio;
