import Image from "next/image";

export function CertificateSection() {
  return (
    <section id="diploma" className="py-8 md:py-14 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
    
        <div className="flex flex-col items-center sm:flex-row-reverse sm:items-center sm:justify-center gap-4 mb-2">
          <Image
            src="/images/aprobado-diploma.png"
            alt="Icono de diploma"
            width={70}
            height={70}
          />
          <h2 className=" text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Diploma de Conducción
          </h2>
        </div>

        <p className="mb-8 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          ¡Celebra tu logro con nuestro diploma personalizado!
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/diploma.jpg"
            alt="Diploma de conducción GMC Autoescuela"
            width={800}
            height={600}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
