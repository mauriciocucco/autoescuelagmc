import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function CertificateSection() {
  return (
    <section
      id="diploma"
      className="relative overflow-hidden bg-gradient-to-br from-ink via-[#081428] to-[#0A2A5E] py-16 text-white md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[130px]"
      />
      <div className="container relative mx-auto px-4 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-300">
            Tu logro
          </span>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row-reverse sm:justify-center">
            <Image
              src="/images/aprobado-diploma.png"
              alt="Icono de diploma"
              width={70}
              height={70}
              className="drop-shadow-[0_0_25px_rgba(47,115,255,0.45)]"
            />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Diploma de Conducción
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-slate-400 md:text-lg">
            ¡Celebra tu logro con nuestro diploma personalizado!
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-10 flex max-w-3xl justify-center">
          <div className="rounded-3xl border border-white/10 bg-white p-3 shadow-card">
            <Image
              src="/images/diploma.jpg"
              alt="Diploma de conducción GMC Autoescuela"
              width={800}
              height={600}
              className="h-auto max-w-full rounded-2xl object-contain transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
