"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/car-front.png",
  "/images/car-back.png",
  "/images/car-road.jpeg",
  "/images/car-angle.png",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="inicio" className="relative w-full h-screen">
      {/* Imágenes de fondo con transición */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Auto de Autoescuela GMC ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-all"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-all"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-6 md:p-8 rounded-lg text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Aprendé a conducir con Autoescuela GMC
            </h1>
            <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6">
              Clases personalizadas con instructores certificados. Obtené tu
              licencia de conducir de manera rápida y segura.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="#contacto">Reservá tu clase</a>
              </Button>
              <Button
                size="lg"
                className="bg-gray-900/80 hover:bg-gray-900 text-white border-0"
                asChild
              >
                <a href="/quiz">Probá nuestro quiz</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
