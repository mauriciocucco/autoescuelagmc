'use client';

import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

/**
 * Detecta cuándo un elemento entra en el viewport.
 * - `isInView` es `true` en SSR y durante la hidratación para no ocultar
 *   contenido a buscadores ni a usuarios sin JavaScript.
 * - Si el elemento ya está en pantalla al montar, se muestra directamente.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  once = true,
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    const element = ref.current;
    if (!element) return;

    // Si el usuario prefiere menos movimiento, mostrar todo directamente.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    // Ya visible al montar: mostrar sin animación de entrada.
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, isInView: !ready || inView };
}
