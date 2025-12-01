"use client";

import { useEffect, useState } from "react";
import CarrosselArtigos from "./CarrosselArtigos";

export default function ArtigosLenin() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://seu-backend-render.onrender.com/api/artigos");
        const data = await res.json();
        setArtigos(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div id="artigos" className="flex flex-col p-20 bg-[#0E1926] gap-10">
      <h1 className="text-white text-6xl font-girassol text-center">
        Artigos
      </h1>

      <CarrosselArtigos artigos={artigos} />
    </div>
  );
}
