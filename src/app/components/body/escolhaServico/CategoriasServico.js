"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CategoriasServico = () => {
  return (
    <div
      id="servicos"
      className="relative flex flex-col gap-20 bg-[#F9F7F5] min-h-screen relative max-lg:w-full max-lg:gap-8"
    >

      <div className="flex flex-col items-center justify-center  gap-8 w-full p-10 max-lg:flex-col max-lg:pl-0 max-lg:gap-6 max-lg:pt-6">
        {/* titulo do componente */}
        <h1
          className="font-cormorant font-bold text-black text-6xl pt-15 max-lg:text-xl max-lg:w-3/5 max-lg:justify-center"
        >
          Em qual área você precisa de ajuda jurídica hoje?
        </h1>
        <div className="flex gap-14 justify-center">
          <div className="flex flex-col justify-center items-center  max-lg:gap-1">
            <h2 className="text-black text-8xl font-cormorant">100%</h2>
            <h2 className="text-black text-2xl font-manrope ">de dedicação</h2>
          </div>
          <div className="border-l h-32 border-[#00000026]"></div>
          <div className="flex flex-col justify-center items-center  max-lg:gap-1">
            <h2 className="text-black text-8xl font-cormorant">24h</h2>
            <h2 className="text-black text-2xl font-manrope">de assistência</h2>
          </div>
        </div>
        <div className="flex gap-40 max-lg:flex-col max-lg:gap-4">
          <div className="relative w-[340px] h-[449px] borde max-lg:w-16 max-lg:h-16">
            <button className="z-1" onClick={null}>
              <Image
                src="/previdenciario.jpg"
                alt="imagem_prev"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
              <h1 className=" absolute bottom-5 text-center p-2 text-[#CB935D] text-3xl uppercase font-cormorant font-bold w-full">
                previdenciário
              </h1>
            </button>
          </div>
          <div className="relative w-[340px] h-[449px] max-lg:w-16 max-lg:h-16 ">
            <button onClick={null}>
              <Image
                src="/outros.jpg"
                alt="imagem_prev"
                fill
                className="object-cover rounded-lg "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
              <h1 className=" absolute bottom-5 left-0 right-0 text-center p-2 text-[#CB935D] text-3xl uppercase font-cormorant font-black shadow-inner shadow-4xl ">
                Outros Serviços
              </h1>
            </button>
          </div>
          <div className="relative w-[340px] h-[449px] max-lg:w-16 max-lg:h-16">
            <button onClick={null}>
              <Image
                src="/criminal.jpg"
                alt="imagem_prev"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
              <h1 className=" absolute bottom-5 left-0 right-0 text-center p-2 text-[#CB935D] text-3xl uppercase font-cormorant font-bold">
                criminal
              </h1>
            </button>
          </div>
        </div>
      </div>



      <Image src="/linha_assist.png"
        alt="linhas"
        width={500}
        height={900}
        className="absolute w-[337px] h-[246px] flex left-0 bottom-0 max-lg:w-64 max-lg:h-64 z-[0]" />
    </div >
  );
};


export default CategoriasServico;
