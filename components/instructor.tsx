"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

const highlights = [
  "Matriculado",
  "Más de 4 años de experiencia",
  "Especialista en alumnos con miedo",
  "Actualización constante en normativas de tránsito",
];

export function Instructor() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="instructor" className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
              Instructor
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Aprendé con los instructores más capacitados
            </h2>
            <p className="max-w-[600px] text-slate-500 md:text-lg">
              Nuestro instructor cuenta con todas las certificaciones necesarias
              y años de experiencia enseñando a conducir.
            </p>
            <ul className="grid gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={150}
            className="mx-auto w-full max-w-[520px] lg:max-w-none"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-brand-700/10 blur-2xl"
              />
              <Card className="group relative overflow-hidden rounded-3xl border-slate-200/80 bg-white p-3 shadow-card">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="/images/guido-cucco-instructor.jpg?height=400&width=400"
                      alt="Instructor certificado"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand-300" />
                      Matrícula 247-2024
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-ink">
                        Prof. Guido Cucco
                      </h3>
                      <p className="text-sm text-slate-500">
                        Instructor Principal · Autoescuela GMC
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1.5 border-slate-200 text-xs"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Ver matrícula
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Reveal>
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
