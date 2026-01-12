import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white">
          Evento não encontrado
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
          O evento que você está procurando não existe.
        </p>
        <Link
          href="/#timeline"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar para Timeline
        </Link>
      </div>
    </main>
  );
}

