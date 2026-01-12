import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getEventoById } from "@/lib/eventos";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EventoPage({ params }: PageProps) {
  const { id } = await params;
  const evento = getEventoById(id);

  if (!evento) {
    notFound();
  }

  const isLadoDireito = evento.lado === "direita";

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Header com botão de voltar */}
      <div className="w-full py-6 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#timeline"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            ← Voltar para Timeline
          </Link>
        </div>
      </div>

      {/* Conteúdo principal */}
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex flex-col ${
              isLadoDireito ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-8 lg:gap-12 items-center`}
          >
            {/* Imagem */}
            <div className="w-full lg:w-1/2">
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
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {evento.ano}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
                {evento.titulo}
              </h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                  {evento.descricaoCompleta}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

