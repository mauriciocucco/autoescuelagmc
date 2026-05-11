'use client';

import type { ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

type TrackedExternalLinkProps = {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  ariaLabel?: string;
  eventName: string;
  eventParams?: Record<string, string | number | boolean | null | undefined>;
  children: ReactNode;
};

export function TrackedExternalLink({
  href,
  target,
  rel,
  className,
  ariaLabel,
  eventName,
  eventParams,
  children,
}: TrackedExternalLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </a>
  );
}
