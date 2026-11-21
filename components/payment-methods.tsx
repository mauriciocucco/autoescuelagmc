import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Banknote, Landmark, Receipt } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Tarjetas de Débito/Crédito",
    description: "Aceptamos todas las tarjetas principales",
  },
  {
    icon: Banknote,
    title: "Billeteras virtuales",
    description: "Mercadopago, Cuenta DNI, Naranja X",
  },
  {
    icon: Landmark,
    title: "Transferencia Bancaria",
    description: "Realizá una transferencia a nuestra cuenta bancaria",
  },
  {
    icon: Receipt,
    title: "Planes de Pago",
    description: "Opciones de pago en cuotas sin interés",
  },
];

export function PaymentMethods() {
  return (
    <section id="pagos" className="w-full bg-[#F4F7FE] py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
            Pagos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Métodos de Pago
          </h2>
          <p className="mt-3 text-slate-500 md:text-lg">
            Ofrecemos múltiples opciones para que puedas pagar de la manera más
            cómoda.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {paymentMethods.map((method, index) => (
            <Reveal key={method.title} delay={index * 100} className="h-full">
              <Card className="group h-full rounded-2xl border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                <CardContent className="flex h-full flex-col items-start p-6">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-ink">{method.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GiftCardSection() {
  return (
    <section id="gift-card" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Regala Clases de Manejo
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sorprende a tus seres queridos con una Gift Card especial para
              aprender a conducir.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="relative w-full max-w-[500px]">
            <Image
              src="/images/gift-card.jpg"
              alt="Gift Card Autoescuela GMC"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <p className="mt-6 text-gray-500 text-center">
            Presenta esta tarjeta en nuestra sede para activar el curso.
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition">
            Comprar Gift Card
          </button>
        </div>
      </div>
    </section>
  );
}
