import { Car, Calendar, Award, BookOpen } from "lucide-react";

export function Features() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros Servicios
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una variedad de servicios para ayudarte a obtener tu
              licencia de conducir
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Car className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Clases Prácticas</h3>
            <p className="text-sm text-gray-500 text-center">
              Aprendé a conducir con nuestro vehículo con doble comando y
              equipado para la enseñanza
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BookOpen className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Clases teóricas</h3>
            <p className="text-sm text-gray-500 text-center">
              Te enseñamos todo lo que necesitas saber para aprobar el examen
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Calendar className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Horarios Flexibles</h3>
            <p className="text-sm text-gray-500 text-center">
              Adaptamos nuestros horarios a tu disponibilidad para mayor
              comodidad
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Award className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Instructor Certificado</h3>
            <p className="text-sm text-gray-500 text-center">
              Aprendé con profesionales certificados y con amplia experiencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
