import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
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
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                "Guido es el mejor profesor, gracias a él pude conseguir mi
                licencia. Llegué al momento confiada, todo por su paciencia,
                profesionalismo. Lo súper recomiendo. Te ayuda a tener confianza
                en vos qué eso es fundamental a la hora de manejar en la
                calle.."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">ML</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Belén Henares</p>
                  <p className="text-xs text-gray-500">Alumna - 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                "Guido es el mejor instructor de manejo de toda la costa! Es muy
                amable y tiene La Paz y la tranquilidad que todos necesitamos
                para poder aprender a manejar. Gracias Guido 🙌🏽."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">JR</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Micaela Rolon</p>
                  <p className="text-xs text-gray-500">Alumna - 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                "100% RECOMENDABLE... Ya tenia experiencia manejando en la
                ciudad y tengo registro pero necesitaba confianza y seguridad en
                la ruta. Es muy importante saber lo suficiente para salir. Por
                eso decidí tomar clases y enfrentar el miedo. Ayer pude animarme
                a salir a la ruta acompañada x el que realmente sabe. Con
                perseverancia todo se puede!! Gracias al profe y su paciencia x
                supuesto 😃."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">AG</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Maru Torres</p>
                  <p className="text-xs text-gray-500">Alumna - 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
