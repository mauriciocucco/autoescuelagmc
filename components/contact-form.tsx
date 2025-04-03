"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get("name"),
      email: formData.get("email"),
      phone_number: formData.get("phone"),
      service_type: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar formulario");
      }

      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el formulario, inténtalo nuevamente.",
      });
    }

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contactános
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tenés alguna pregunta? Completá el formulario y te responderemos
              a la brevedad
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg mt-8">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="service">Servicio de interés</Label>
              <Select name="service">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clases-practicas">
                    Clases prácticas
                  </SelectItem>
                  <SelectItem value="curso-intensivo">
                    Curso intensivo
                  </SelectItem>
                  <SelectItem value="examen-teorico">
                    Preparación examen teórico
                  </SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" name="message" rows={4} />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
