"use client";

import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const eventos = [
    {
      ano: "1975",
      titulo: "Independência de Cabo Verde",
      descricao: "Cabo Verde conquista a independência de Portugal em 5 de julho, estabelecendo-se como uma república unipartidária sob o Partido Africano da Independência de Cabo Verde (PAICV).",
    },
    {
      ano: "1990",
      titulo: "Início da Transição Democrática",
      descricao: "Início do processo de abertura política e transição para um sistema multipartidário, com a aprovação da nova Constituição que estabelece o regime democrático.",
    },
    {
      ano: "1991",
      titulo: "Primeiras Eleições Multipartidárias",
      descricao: "Realização das primeiras eleições livres e democráticas, marcando o fim do regime unipartidário. O Movimento para a Democracia (MpD) vence as eleições legislativas e presidenciais.",
    },
    {
      ano: "1992",
      titulo: "Nova Constituição Democrática",
      descricao: "Promulgação da nova Constituição que consolida o regime democrático, estabelecendo a separação de poderes, direitos fundamentais e o sistema multipartidário.",
    },
    {
      ano: "2001",
      titulo: "Alternância de Poder",
      descricao: "O PAICV retorna ao poder após vencer as eleições, demonstrando a consolidação da alternância democrática e a maturidade do sistema político cabo-verdiano.",
    },
    {
      ano: "2011",
      titulo: "Reconhecimento Internacional",
      descricao: "Cabo Verde é reconhecido como um dos países mais democráticos de África, com eleições regulares e pacíficas, e uma forte tradição de respeito pelos direitos humanos.",
    },
    {
      ano: "2016",
      titulo: "Consolidação Democrática",
      descricao: "O MpD retorna ao poder através de eleições democráticas, reforçando o padrão de alternância pacífica de poder que caracteriza a democracia cabo-verdiana.",
    },
    {
      ano: "2021",
      titulo: "Eleições Presidenciais",
      descricao: "Realização de eleições presidenciais livres e justas, com José Maria Neves sendo eleito Presidente da República, continuando a tradição democrática do país.",
    },
    {
      ano: "2024",
      titulo: "Democracia Consolidada",
      descricao: "Cabo Verde mantém-se como referência democrática em África, com instituições sólidas, eleições regulares e um sistema político estável e transparente.",
    },
  ];

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
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {evento.ano}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                        {evento.titulo}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {evento.descricao}
                      </p>
                    </div>
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

