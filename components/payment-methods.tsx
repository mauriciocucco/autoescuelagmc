import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Banknote, Landmark, Receipt } from "lucide-react";
import Image from "next/image";

export function PaymentMethods() {
  return (
    <section id="pagos" className="w-full py-6 md:py-8 lg:py-14 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Métodos de Pago
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos múltiples opciones para que puedas pagar de la manera
              más cómoda
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <Card className="shadow-lg">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <CreditCard className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold">Tarjetas de Débito/Crédito</h3>
              <p className="text-sm text-gray-500 mt-2">
                Aceptamos todas las tarjetas principales
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <Banknote className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold">Billeteras virtuales</h3>
              <p className="text-sm text-gray-500 mt-2">
                Mercadopago, Cuenta DNI, Naranja X
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <Landmark className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold">Transferencia Bancaria</h3>
              <p className="text-sm text-gray-500 mt-2">
                Realizá una transferencia a nuestra cuenta bancaria
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <Receipt className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold">Planes de Pago</h3>
              <p className="text-sm text-gray-500 mt-2">
                Opciones de pago en cuotas sin interés
              </p>
            </CardContent>
          </Card>
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
              className="rounded-lg shadow-lg"
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
