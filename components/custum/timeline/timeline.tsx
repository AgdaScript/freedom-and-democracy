"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { eventos } from "@/lib/eventos";

export default function Timeline() {

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="timeline" className="w-full py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
          Timeline da Democracia
        </h2>
        <p className="text-xl text-center mb-16 text-zinc-600 dark:text-zinc-400">
          Principais acontecimentos da democracia de Cabo Verde ao longo do tempo
        </p>

        <div className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700 transform md:-translate-x-1/2" />

          {/* Eventos */}
          <div className="space-y-12">
            {eventos.map((evento, index) => {
              const isVisible = visibleItems.has(index);
              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`relative flex items-start md:items-center transition-all duration-1000 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Ponto na timeline */}
                  <div
                    className={`absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-black transform md:-translate-x-1/2 z-10 transition-all duration-700 delay-300 ${
                      isVisible ? "scale-100" : "scale-0"
                    }`}
                  />

                  {/* Conteúdo do evento */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      evento.lado === "esquerda" ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Link href={`/evento/${evento.id}`}>
                      <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {evento.ano}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                          {evento.titulo}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {evento.descricao}
                        </p>
                        <div className="mt-4 flex justify-end">
                          <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

