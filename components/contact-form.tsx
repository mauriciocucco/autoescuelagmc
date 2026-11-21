'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';
import { Reveal } from '@/components/reveal';
import {
  AlertCircle,
  CheckCircle2,
  Facebook,
  Instagram,
  Loader2,
  MessageCircle,
} from 'lucide-react';

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
  const [isTakingLong, setIsTakingLong] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // El backend real es el de onrender.com; el fallback evita romper el form
  // si la variable de entorno no está configurada en el deploy.
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    'https://autoescuelagmc-backend.onrender.com';
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [messageChars, setMessageChars] = useState(0);

  // Update character count when message changes
  useEffect(() => {
    setMessageChars(formData.message.length);
  }, [formData.message]);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Por favor selecciona un servicio';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.length > 500) {
      newErrors.message = 'El mensaje no puede exceder los 500 caracteres';
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      Object.keys(formData).map((key) => [key, true]),
    );
    setTouched(allTouched);

    // Validate form
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      // Scroll to the first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.getElementById(firstErrorField);
      errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    setIsTakingLong(false);

    const data = {
      full_name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      service_type: formData.service,
      message: formData.message,
    };

    let timeout: number | undefined;
    let slowMessageTimeout: number | undefined;

    try {
      const controller = new AbortController();
      timeout = window.setTimeout(() => controller.abort(), 12000);
      slowMessageTimeout = window.setTimeout(() => setIsTakingLong(true), 3500);

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      if (!response.ok) {
        // 4xx = problema con los datos enviados; 5xx = problema del servidor.
        throw new Error(
          response.status >= 500 ? 'server_error' : 'request_error',
        );
      }

      trackEvent('contact_form_submit', {
        status: 'success',
        service: formData.service,
      });

      toast({
        title: '¡Consulta enviada!',
        description: 'Gracias por contactarnos. En breve nos comunicaremos con vos 💪.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setTouched({});
      setIsSubmitted(true);
    } catch (error) {
      let description =
        'No se pudo enviar el formulario, inténtalo nuevamente.';

      if (error instanceof DOMException && error.name === 'AbortError') {
        description =
          'El servidor tardó demasiado en responder. Intentá nuevamente en unos segundos.';
      } else if (error instanceof Error && error.message === 'server_error') {
        description =
          'El servidor tuvo un problema. Intentá de nuevo en unos minutos o escribinos por WhatsApp.';
      } else if (error instanceof Error && error.message === 'request_error') {
        description =
          'No pudimos procesar los datos. Revisá los campos o escribinos por WhatsApp.';
      }

      toast({ title: 'Error', description });
    } finally {
      if (timeout) {
        window.clearTimeout(timeout);
      }
      if (slowMessageTimeout) {
        window.clearTimeout(slowMessageTimeout);
      }
      setIsTakingLong(false);
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contacto' className='w-full bg-[#F4F7FE] py-16 md:py-24'>
      <div className='container px-4 md:px-6 mx-auto'>
        <Reveal className='mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700'>
            Contacto
          </span>
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl'>
              Contactános
            </h2>
            <p className='text-slate-500 md:text-lg'>
              ¿Tenés alguna pregunta? Completá el formulario y te responderemos
              a la brevedad.
            </p>
          </div>
        </Reveal>
        <Reveal
          delay={120}
          className='mx-auto mt-10 max-w-xl rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card md:p-8'
        >
          {isSubmitted ? (
            <div
              className='rounded-xl border border-green-200 bg-white p-8 text-center shadow-md animate-in fade-in-50 duration-300'
              role='status'
              aria-live='polite'
            >
              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4'>
                <CheckCircle2 className='h-10 w-10' />
              </div>

              <h3 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                ¡Gracias por contactarnos!
              </h3>
              
              <p className='mt-3 text-base text-gray-600 max-w-md mx-auto'>
                Recibimos tu consulta con éxito. En breve nos pondremos en contacto con vos para responder a todas tus dudas y coordinar tus clases.
              </p>

              <div className='mt-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4 max-w-md mx-auto'>
                <p className='text-sm font-medium text-emerald-800 mb-2'>
                  ¿Precisás una respuesta inmediata?
                </p>
                <a
                  href='https://wa.me/2255627189?text=Hola,%20acabo%20de%20enviar%20una%20consulta%20por%20la%20web%20de%20Autoescuela%20GMC'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow transition-all hover:bg-[#20ba59]'
                >
                  <MessageCircle className='h-4 w-4' />
                  Escribinos por WhatsApp
                </a>
              </div>

              <div className='mt-6'>
                <p className='text-sm font-medium text-gray-700'>
                  Mientras tanto, seguinos en nuestras redes
                </p>
                <div className='mt-3 flex justify-center gap-3'>
                  <a
                    href='https://www.instagram.com/clasesdemanejo_gmc/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-gray-900 hover:text-gray-900'
                    aria-label='Seguir a Autoescuela GMC en Instagram'
                  >
                    <Instagram className='h-5 w-5' />
                  </a>
                  <a
                    href='https://www.facebook.com/p/Autoescuela-GMC-100092333736848/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-gray-900 hover:text-gray-900'
                    aria-label='Seguir a Autoescuela GMC en Facebook'
                  >
                    <Facebook className='h-5 w-5' />
                  </a>
                </div>
              </div>

              <div className='mt-8 pt-4 border-t border-gray-100'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => setIsSubmitted(false)}
                >
                  Enviar otra consulta
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='name' className='flex items-center gap-1'>
                  Nombre completo
                  <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={
                    errors.name && touched.name ? 'border-red-500' : ''
                  }
                />
                {errors.name && touched.name && (
                  <p className='text-sm text-red-500 flex items-center gap-1 mt-1'>
                    <AlertCircle className='h-3 w-3' />
                    {errors.name}
                  </p>
                )}
              </div>

            <div className='grid gap-2'>
              <Label htmlFor='email' className='flex items-center gap-1'>
                Correo electrónico
                <span className='text-red-500'>*</span>
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                className={
                  errors.email && touched.email ? 'border-red-500' : ''
                }
              />
              {errors.email && touched.email && (
                <p className='text-sm text-red-500 flex items-center gap-1 mt-1'>
                  <AlertCircle className='h-3 w-3' />
                  {errors.email}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='phone' className='flex items-center gap-1'>
                Teléfono
                <span className='text-red-500'>*</span>
              </Label>
              <Input
                id='phone'
                name='phone'
                type='tel'
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                className={
                  errors.phone && touched.phone ? 'border-red-500' : ''
                }
              />
              {errors.phone && touched.phone && (
                <p className='text-sm text-red-500 flex items-center gap-1 mt-1'>
                  <AlertCircle className='h-3 w-3' />
                  {errors.phone}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='service' className='flex items-center gap-1'>
                Servicio de interés
                <span className='text-red-500'>*</span>
              </Label>
              <Select
                name='service'
                value={formData.service}
                onValueChange={handleSelectChange}
                onOpenChange={() => handleBlur('service')}
              >
                <SelectTrigger
                  id='service'
                  className={
                    errors.service && touched.service ? 'border-red-500' : ''
                  }
                >
                  <SelectValue placeholder='Selecciona un servicio' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='clases-practicas'>
                    Clases prácticas
                  </SelectItem>
                  <SelectItem value='curso-intensivo'>
                    Curso intensivo
                  </SelectItem>
                  <SelectItem value='examen-teorico'>
                    Preparación examen teórico
                  </SelectItem>
                  <SelectItem value='clase-ruta'>Clase en ruta</SelectItem>
                  <SelectItem value='clase-estacionamiento'>
                    Clase de estacionamiento
                  </SelectItem>
                  <SelectItem value='otro'>Otro</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && touched.service && (
                <p className='text-sm text-red-500 flex items-center gap-1 mt-1'>
                  <AlertCircle className='h-3 w-3' />
                  {errors.service}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <div className='flex items-center justify-between'>
                <Label htmlFor='message' className='flex items-center gap-1'>
                  Mensaje
                  <span className='text-red-500'>*</span>
                </Label>
                <span
                  className={`text-xs ${
                    messageChars > 500
                      ? 'text-red-500 font-medium'
                      : 'text-gray-500'
                  }`}
                >
                  {messageChars}/500 caracteres
                </span>
              </div>
              <Textarea
                id='message'
                name='message'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                className={
                  errors.message && touched.message ? 'border-red-500' : ''
                }
              />
              {errors.message && touched.message && (
                <p className='text-sm text-red-500 flex items-center gap-1 mt-1'>
                  <AlertCircle className='h-3 w-3' />
                  {errors.message}
                </p>
              )}
            </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='mt-2 h-12 w-full gap-2 text-base'
                aria-busy={isSubmitting}
              >
                {isSubmitting && <Loader2 className='h-4 w-4 animate-spin' />}
                {isSubmitting ? 'Enviando consulta...' : 'Enviar consulta'}
              </Button>

              {isSubmitting && (
                <p
                  className='text-sm text-gray-500 text-center'
                  aria-live='polite'
                >
                  {isTakingLong
                    ? 'Está tardando más de lo normal, pero seguimos intentando.'
                    : 'Estamos enviando tu consulta...'}
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
