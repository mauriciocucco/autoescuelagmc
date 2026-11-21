'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'instructor', label: 'Instructor' },
  { id: 'pagos', label: 'Pagos' },
  { id: 'giftcard', label: 'Gift Card' },
  { id: 'contacto', label: 'Contacto' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Desde otras páginas los links deben volver al inicio con el hash.
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);

      if (!isHome) return;

      const offset = 96;
      let currentId = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= offset) {
          currentId = id;
        }
      }

      // Al llegar al final de la página, marcar el último link.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentId);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const linkClass = (id: string) =>
    cn(
      'relative text-sm font-medium transition-colors duration-300',
      'after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-400 after:transition-transform after:duration-300',
      'hover:text-white hover:after:scale-x-100',
      activeSection === id ? 'text-white after:scale-x-100' : 'text-white/60',
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full text-white transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-ink/85 shadow-lg shadow-black/40 backdrop-blur-xl'
          : 'border-b border-transparent bg-ink',
      )}
    >
      <div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo.jpg'
            alt='Autoescuela GMC Logo'
            width={720}
            height={165}
            priority
            className='h-10 w-auto object-contain mix-blend-lighten'
          />
        </Link>

        <nav className='hidden md:flex items-center gap-6'>
          {navItems.map(({ id, label }) => (
            <Link key={id} href={sectionHref(id)} className={linkClass(id)}>
              {id === 'giftcard' && (
                <Image
                  src='/images/gift-card-gmc.png'
                  alt=''
                  width={16}
                  height={16}
                  className='mr-1 inline-block h-4 w-4 object-contain align-[-2px]'
                />
              )}
              {label}
            </Link>
          ))}
          <Link
            href='/quiz'
            className={linkClass(pathname === '/quiz' ? 'quiz' : '')}
          >
            Quiz
          </Link>
          <Link
            href={sectionHref('contacto')}
            className='group ml-1 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-400 hover:to-brand-600'
          >
            Reservá tu clase
            <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5' />
          </Link>
        </nav>

        <button
          className='block md:hidden transition-transform duration-200 active:scale-90'
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label='Abrir menú'
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
        >
          {isMenuOpen ? (
            <X className='h-6 w-6' />
          ) : (
            <Menu className='h-6 w-6' />
          )}
        </button>
      </div>

      <div
        id='mobile-menu'
        className={cn(
          'overflow-hidden border-white/10 bg-ink transition-all duration-300 ease-in-out md:hidden',
          isMenuOpen
            ? 'max-h-[560px] border-t opacity-100'
            : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <div className='container mx-auto px-4 pb-5 pt-2'>
          <nav className='flex flex-col gap-1'>
            {navItems.map(({ id, label }) => (
              <Link
                key={id}
                href={sectionHref(id)}
                className={cn(
                  'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-white/5',
                  activeSection === id ? 'text-white' : 'text-white/60',
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {id === 'giftcard' && (
                  <Image
                    src='/images/gift-card-gmc.png'
                    alt=''
                    width={16}
                    height={16}
                    className='mr-2 inline-block h-4 w-4 object-contain align-[-2px]'
                  />
                )}
                {label}
              </Link>
            ))}
            <Link
              href='/quiz'
              className={cn(
                'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-white/5',
                pathname === '/quiz' ? 'text-white' : 'text-white/60',
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Quiz
            </Link>
            <Link
              href={sectionHref('contacto')}
              onClick={() => setIsMenuOpen(false)}
              className='mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2.5 text-sm font-semibold text-white shadow-glow'
            >
              Reservá tu clase
              <ArrowRight className='h-4 w-4' />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
