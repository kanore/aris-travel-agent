import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-5rem)] md:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
          VIAJA DIFERENTE
        </p>

        <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Descubre el mundo
          <span className="block text-right text-amber-600">
            ... con Aris Travel
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
          Experiencias diseñadas para ti, con destinos increíbles y atención
          personalizada en cada etapa de tu viaje.
        </p>
        <a href="#packages" className="mt-8 self-end rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-amber-600">
          Explorar destinos
        </a>
      </div>

      <div className="relative min-h-[500px] overflow-hidden">
        <Image src="/hero-travel.png" alt="Destino de viaje" fill className="object-cover"/>
      </div>
    </section>
  );
}