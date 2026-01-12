import { notFound } from "next/navigation";
import { getEventoById } from "@/lib/eventos";
import EventoDetalhes from "@/components/custum/evento-detalhes/evento-detalhes";
import EventoHeader from "@/components/custum/evento-detalhes/evento-header";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EventoPage({ params }: PageProps) {
  const { id } = await params;
  const evento = getEventoById(id);

  if (!evento) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Header com botão de voltar */}
      <EventoHeader />

      {/* Conteúdo principal */}
      <EventoDetalhes evento={evento} />
    </main>
  );
}

