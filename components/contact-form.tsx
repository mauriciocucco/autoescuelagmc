"use client";

import type React from "react";

import { useState, useEffect } from "react";
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
import { AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [messageChars, setMessageChars] = useState(0);

  // Update character count when message changes
  useEffect(() => {
    setMessageChars(formData.message.length);
  }, [formData.message]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Por favor selecciona un servicio";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.length > 500) {
      newErrors.message = "El mensaje no puede exceder los 500 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Mark field as touched
    if (!touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));

    // Mark field as touched
    if (!touched.service) {
      setTouched((prev) => ({ ...prev, service: true }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.fromEntries(
      Object.keys(formData).map((key) => [key, true])
    );
    setTouched(allTouched);

    // Validate form
    const isValid = validateForm();

    if (!isValid) {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.getElementById(firstErrorField);
      errorElement?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);

    const data = {
      full_name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      service_type: formData.service,
      message: formData.message,
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

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setTouched({});
    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contáctanos
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes alguna pregunta? Completa el formulario y te responderemos
              a la brevedad
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg mt-8">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="flex items-center gap-1">
                Nombre completo
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                className={errors.name && touched.name ? "border-red-500" : ""}
              />
              {errors.name && touched.name && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="flex items-center gap-1">
                Correo electrónico
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={
                  errors.email && touched.email ? "border-red-500" : ""
                }
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone" className="flex items-center gap-1">
                Teléfono
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                className={
                  errors.phone && touched.phone ? "border-red-500" : ""
                }
              />
              {errors.phone && touched.phone && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="service" className="flex items-center gap-1">
                Servicio de interés
                <span className="text-red-500">*</span>
              </Label>
              <Select
                name="service"
                value={formData.service}
                onValueChange={handleSelectChange}
                onOpenChange={() => handleBlur("service")}
              >
                <SelectTrigger
                  id="service"
                  className={
                    errors.service && touched.service ? "border-red-500" : ""
                  }
                >
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
                  <SelectItem value="clase-ruta">Clase en ruta</SelectItem>
                  <SelectItem value="clase-estacionamiento">
                    Clase de estacionamiento
                  </SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && touched.service && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.service}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="message" className="flex items-center gap-1">
                  Mensaje
                  <span className="text-red-500">*</span>
                </Label>
                <span
                  className={`text-xs ${
                    messageChars > 500
                      ? "text-red-500 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {messageChars}/500 caracteres
                </span>
              </div>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                className={
                  errors.message && touched.message ? "border-red-500" : ""
                }
              />
              {errors.message && touched.message && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-2">
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
