import React from "react";
import Image from "next/image";

const BotaoServico = ({
  onClick,
  imgSrc,
  imgAlt,
  titulo,
  className = "",
  imgClassName = "",
  tituloClassName = "", // nova prop
}) => (
  <button
    type="button"
    className={`flex flex-col gap-2 px-5 z-10 items-center justify-center bg-[#CF9645] rounded-[60px] border-3 border-white ${className}`}
    onClick={onClick}
  >
    <h1 className={`text-white font-sans ${tituloClassName}`}>{titulo}</h1>
    <Image src={imgSrc} alt={imgAlt} className={`flex ${imgClassName}`} />
  </button>
);

export default BotaoServico;
