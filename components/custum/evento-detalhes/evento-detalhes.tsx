"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Evento } from "@/lib/eventos";

interface EventoDetalhesProps {
  evento: Evento;
}

export default function EventoDetalhes({ evento }: EventoDetalhesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagemRef = useRef<HTMLDivElement>(null);
  const anoRef = useRef<HTMLDivElement>(null);
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const textoRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isLadoDireito = evento.lado === "direita";

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className={`flex flex-col ${
            isLadoDireito ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-8 lg:gap-12 items-center`}
        >
          {/* Imagem */}
          <div
            ref={imagemRef}
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDelay: "200ms",
            }}
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src={evento.imagem}
                alt={evento.titulo}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Informações */}
          <div
            className={`w-full lg:w-1/2 ${
              isLadoDireito ? "lg:text-left" : "lg:text-right"
            }`}
          >
            <div
              ref={anoRef}
              className={`text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: "400ms",
              }}
            >
              {evento.ano}
            </div>
            <h1
              ref={tituloRef}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: "600ms",
              }}
            >
              {evento.titulo}
            </h1>
            <div
              ref={textoRef}
              className={`prose prose-lg dark:prose-invert max-w-none transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: "800ms",
              }}
            >
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                {evento.descricaoCompleta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

