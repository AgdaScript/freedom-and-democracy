export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden m-0 p-0">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-[150%] object-cover absolute left-1/2 -translate-x-1/2"
        >
          <source
            src="/video/video-reportagem-13-de-janeiro.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        {/* Overlay escuro para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Liberdade e Democracia
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl drop-shadow-md">
          Uma reportagem sobre os eventos de 13 de janeiro
        </p>
      </div>
    </section>
  );
}