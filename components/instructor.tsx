"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText } from "lucide-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

export function Instructor() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                  <div className="mt-2 flex items-center gap-2">
                    <div className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                      Matrícula: 247-2024
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 text-xs"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Ver matrícula
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>
          <ModalTitle>Matrícula del Instructor</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border">
              <div className="relative w-full h-64">
                <Image
                  src="/images/matricula-frente.jpg?height=600&width=450&text=Matrícula+Frente"
                  alt="Matrícula del instructor (frente)"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-2 text-center text-sm text-gray-500">
                Frente de la matrícula
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border">
              <div className="relative w-full h-64">
                <Image
                  src="/images/matricula-dorso.jpg?height=600&width=450&text=Matrícula+Dorso"
                  alt="Matrícula del instructor (dorso)"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-2 text-center text-sm text-gray-500">
                Dorso de la matrícula
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Certificación oficial emitida por la Secretaría de Transporte de la
            Provincia de Buenos Aires
          </p>
        </ModalContent>
      </Modal>
    </section>
  );
}
