'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Retardo en ms para crear entradas escalonadas. */
  delay?: number;
  /** Duración de la transición en ms. */
  duration?: number;
  style?: CSSProperties;
};

/**
 * Envuelve contenido y lo anima (fade + slide up) cuando entra en pantalla.
 * Sin dependencias externas: IntersectionObserver + transiciones CSS.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 650,
  style,
}: RevealProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] ease-out',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0',
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
