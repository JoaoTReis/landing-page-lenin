import React from "react";

const BotaoServico = ({ onClick, imgSrc, imgAlt, titulo, texto, className = "", imgClassName = "" }) => (
  <button
    type="button"
    className={`flex flex-col gap-5 px-5 z-10 items-center justify-center bg-[#CF9645] rounded-[60px] border-3 border-white ${className}`}
    onClick={onClick}
  >
    <h1 className="text-3xl text-white font-sans">{titulo}</h1>
    <img src={imgSrc} alt={imgAlt} className={`flex ${imgClassName}`} />
  </button>
);

export default BotaoServico;