import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="w-full py-12 md:py-24 lg:py-14 bg-gray-50"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lo que dicen nuestros alumnos
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Testimonios de personas que aprendieron a conducir con nosotros
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  "Excelente experiencia!
                  Mucha paciencia siempre impulsándote a avanzar y no rendirte
                  Yo hoy ya tengo mi licencia por más que lo pospuse por un tiempo largo. Gracias Guido!!!"
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">FA</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Flor de Abreo</p>
                  <p className="text-xs text-gray-500">Alumna - 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  "Aprender a manejar puede ser una experiencia estresante, pero con Guido se transforma en algo claro, ameno y hasta disfrutable. Tiene una forma de enseñar que transmite confianza desde el primer momento. Muy agradecido por su dedicación y profesionalismo. Totalmente recomendable!!"
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">JME</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Jose Manuel Esteves</p>
                  <p className="text-xs text-gray-500">Alumno - 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  "Excelente experiencia!!! Instructor con paciencia y simpleza al enseñar, te brinda seguridad para afrontar el miedo a manejar. Si tenes que hacer un regalo o conocen a alguien que quiere manejar y no se anime, es la opción perfecta como lo fue en mi caso. El regalo de mi cumple de un curso de manejo fue genial y acá estoy hoy ya tengo mi licencia!! Gracias!!!"
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">AC</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Andrea Carrara</p>
                  <p className="text-xs text-gray-500">Alumna - 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
