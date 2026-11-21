'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  ShieldCheck,
} from 'lucide-react';

const images = [
  {
    src: '/images/imagen-principal.jpeg',
    alt: 'Alumno realizando una clase de manejo con Autoescuela GMC',
  },
  {
    src: '/images/imagen-uno.jpg',
    alt: 'Práctica de conducción en vía pública con Autoescuela GMC',
  },
  {
    src: '/images/gmc-2026-1.jpeg',
    alt: 'Clase personalizada de manejo en Villa Gesell',
  },
  {
    src: '/images/imagen-tres.jpg',
    alt: 'Entrenamiento de manejo para obtener la licencia',
  },
  {
    src: '/images/imagen-cuatro.jpg',
    alt: 'Práctica de maniobras de estacionamiento con instructor',
  },
  {
    src: '/images/imagen-cinco.jpg',
    alt: 'Clase práctica para aprender a conducir con seguridad',
  },
  {
    src: '/images/gmc-2026-2.jpeg',
    alt: 'Autoescuela GMC acompañando a nuevos conductores',
  },
  {
    src: '/images/imagen-siete.jpg',
    alt: 'Sesión de práctica de manejo para principiantes',
  },
];

const SLIDE_DURATION = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrent((prev) => (prev + 1) % images.length),
      SLIDE_DURATION,
    );
    return () => clearTimeout(timeout);
  }, [current]);

  const prev = () => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id='inicio'
      className='relative w-full h-screen overflow-hidden bg-ink'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className='absolute inset-0 z-0'>
        {images.map((src, index) => (
          <div
            key={src.src}
            aria-hidden={index !== current}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src.src}
              alt={src.alt}
              fill
              className={`object-cover pointer-events-none kenburns ${
                index === current ? 'is-active' : ''
              }`}
              priority={index === 0}
              sizes='100vw'
            />

            <div className='absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30 pointer-events-none' />
            <div className='absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50 pointer-events-none' />
          </div>
        ))}
      </div>

      {/* Resplandor azul */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-40 top-1/4 z-[1] h-[28rem] w-[28rem] rounded-full bg-brand-600/25 blur-[130px]'
      />

      {/* Botón PREV */}
      <button
        onClick={prev}
        className='hidden md:flex pointer-events-auto absolute left-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full border border-white/15 bg-white/10 p-2.5 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white/20 active:scale-95'
        aria-label='Imagen anterior'
      >
        <ChevronLeft className='h-5 w-5' />
      </button>

      {/* Botón NEXT */}
      <button
        onClick={next}
        className='hidden md:flex pointer-events-auto absolute right-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full border border-white/15 bg-white/10 p-2.5 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white/20 active:scale-95'
        aria-label='Imagen siguiente'
      >
        <ChevronRight className='h-5 w-5' />
      </button>

      {/* Indicadores con barra de progreso */}
      <div className='pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${
              index === current
                ? 'w-10 bg-white/25'
                : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
            aria-current={index === current}
          >
            {index === current && (
              <span
                className='absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-brand-400 to-white'
                style={{
                  animation: `indicator-progress ${SLIDE_DURATION}ms linear forwards`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Contador de slide */}
      <div className='pointer-events-none absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/50 md:flex'>
        <span className='text-white'>
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className='h-px w-8 bg-white/25' />
        <span>{String(images.length).padStart(2, '0')}</span>
      </div>

      <div className='relative z-[2] h-full flex items-center'>
        <div className='container px-5 md:px-16 mx-auto'>
          <div className='max-w-3xl pb-20 pt-24 text-white md:pb-24'>
            <div
              className='animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur'
              style={{ animationDelay: '0.05s' }}
            >
              <span className='h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(94,147,255,0.9)]' />
              Autoescuela GMC · Costa Atlántica
            </div>

            <h1
              className='animate-fade-up mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.1rem]'
              style={{ animationDelay: '0.15s' }}
            >
              Clases de manejo en{' '}
              <span className='bg-gradient-to-r from-brand-300 via-brand-400 to-white bg-clip-text text-transparent'>
                Villa Gesell, Pinamar
              </span>{' '}
              y el Partido de La Costa
            </h1>

            <p
              className='animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg'
              style={{ animationDelay: '0.3s' }}
            >
              Aprendé a conducir con clases personalizadas, instructores
              certificados y preparación práctica para obtener tu licencia de
              manera segura.
            </p>

            <div
              className='animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row'
              style={{ animationDelay: '0.45s' }}
            >
              <Button size='lg' variant='brand' className='group' asChild>
                <a href='#contacto'>
                  Reservá tu clase
                  <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5' />
                </a>
              </Button>
              <Button size='lg' variant='glass' asChild>
                <a href='/quiz'>Probá nuestro quiz</a>
              </Button>
            </div>

            <div
              className='animate-fade-up mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white/60'
              style={{ animationDelay: '0.6s' }}
            >
              <span className='inline-flex items-center gap-2'>
                <ShieldCheck className='h-4 w-4 text-brand-400' />
                Instructor matriculado
              </span>
              <span className='inline-flex items-center gap-2'>
                <Car className='h-4 w-4 text-brand-400' />
                Vehículo con doble comando
              </span>
              <span className='inline-flex items-center gap-2'>
                <Clock className='h-4 w-4 text-brand-400' />
                Horarios flexibles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
