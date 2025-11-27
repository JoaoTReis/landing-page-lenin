"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CarrosselArtigos({ artigos }) {
  const safeArtigos = artigos ?? [];
  const hasArtigos = safeArtigos.length > 0;

  const [index, setIndex] = useState(0);

  // Hook sempre é chamado
  useEffect(() => {
    if (!hasArtigos) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % safeArtigos.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index, hasArtigos, safeArtigos.length]);

  if (!hasArtigos) return null;

  const getArticle = (offset) => {
    const newIndex = (index + offset + safeArtigos.length) % safeArtigos.length;
    return safeArtigos[newIndex];
  };

  const prevPrev = getArticle(-2);
  const prev = getArticle(-1);
  const center = getArticle(0);
  const next = getArticle(1);
  const nextNext = getArticle(2);

  return (
    <div className="relative w-full mx-auto overflow-hidden py-10">
      <div className="flex items-center justify-center gap-10 transition-all duration-500">
        <div className="w-[20%] opacity-40 overflow-hidden">
          <Card artigo={prevPrev} small cut="left" />
        </div>

        <div className="w-[25%] opacity-60 scale-90 -translate-x-5">
          <Card artigo={prev} small />
        </div>

        <div className="w-[35%] scale-110 z-10">
          <Card artigo={center} />
        </div>

        <div className="w-[25%] opacity-60 scale-90 translate-x-5">
          <Card artigo={next} small />
        </div>

        <div className="w-[20%] opacity-40 overflow-hidden">
          <Card artigo={nextNext} small cut="right" />
        </div>
      </div>
    </div>
  );
}

function Card({ artigo, small, cut }) {
  if (!artigo) return null;

  return (
    <div
      className={`rounded-xl shadow-md p-4 text-center transition-all ${
        small ? "scale-90 opacity-80" : "scale-105"
      }`}
      style={{
        clipPath:
          cut === "left"
            ? "inset(0 50% 0 0)"
            : cut === "right"
            ? "inset(0 0 0 50%)"
            : "none",
      }}
    >
      <Image
        src={artigo.thumbnail}
        alt={artigo.titulo}
        width={400}
        height={300}
        className="w-[321px] h-[465px] rounded-xl mx-auto object-cover"
      />

      {!cut && (
        <h2 className="mt-4 text-xl text-[#CB935D] w-full font-semibold">
          {artigo.titulo}
        </h2>
      )}
    </div>
  );
}
