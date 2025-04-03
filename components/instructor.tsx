import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function Instructor() {
  return (
    <section id="instructor" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
              Instructor Certificado
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Aprendé con los instructores más capacitados
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestro instructor cuenta con todas las certificaciones necesarias
              y años de experiencia enseñando a conducir.
            </p>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Matriculado</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Más de 4 años de experiencia</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Especialista en alumnos con miedo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Actualización constante en normativas de tránsito</span>
              </li>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/guido-cucco-instructor.jpg?height=400&width=400"
                    alt="Instructor certificado"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Prof. Guido Cucco</h3>
                  <p className="text-sm text-gray-500">
                    Instructor Principal - Autoescuela GMC
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                      Matrícula: 247-2024
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
