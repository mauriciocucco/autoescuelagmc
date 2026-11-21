import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const quickLinks = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#testimonios', label: 'Testimonios' },
  { href: '/#instructor', label: 'Instructor' },
  { href: '/#contacto', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className='w-full bg-ink text-slate-400'>
      <div className='container mx-auto px-4 py-14 md:px-6'>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <Image
              src='/images/logo.jpg'
              alt='Autoescuela GMC'
              width={720}
              height={165}
              className='h-9 w-auto object-contain mix-blend-lighten'
            />
            <p className='max-w-xs text-sm leading-relaxed'>
              Enseñando a conducir de manera segura y responsable desde 2021.
            </p>
            <div className='flex gap-2'>
              <a
                href='https://www.facebook.com/p/Autoescuela-GMC-100092333736848/'
                target='_blank'
                rel='noopener noreferrer'
                className='grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-brand-400/40 hover:bg-white/5 hover:text-white'
                aria-label='Facebook'
              >
                <Facebook className='h-4 w-4' />
              </a>
              <a
                href='https://www.instagram.com/clasesdemanejo_gmc/'
                target='_blank'
                rel='noopener noreferrer'
                className='grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-brand-400/40 hover:bg-white/5 hover:text-white'
                aria-label='Instagram'
              >
                <Instagram className='h-4 w-4' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-xs font-semibold uppercase tracking-[0.18em] text-white'>
              Enlaces rápidos
            </h3>
            <ul className='mt-4 space-y-2.5 text-sm'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='transition-colors hover:text-white'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-xs font-semibold uppercase tracking-[0.18em] text-white'>
              Contacto
            </h3>
            <ul className='mt-4 space-y-3 text-sm'>
              <li className='flex items-start gap-2.5'>
                <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-brand-400' />
                <span>Paseo 117 n° 354, Villa Gesell, Bs. As.</span>
              </li>
              <li className='flex items-start gap-2.5'>
                <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-brand-400' />
                <span>Villa Gesell, Pinamar y el Partido de la Costa</span>
              </li>
              <li className='flex items-center gap-2.5'>
                <Mail className='h-4 w-4 shrink-0 text-brand-400' />
                <a
                  href='mailto:autoescuelagmc@gmail.com'
                  className='transition-colors hover:text-white'
                >
                  autoescuelagmc@gmail.com
                </a>
              </li>
              <li className='flex items-center gap-2.5'>
                <Phone className='h-4 w-4 shrink-0 text-brand-400' />
                <a
                  href='tel:+542255627189'
                  className='transition-colors hover:text-white'
                >
                  2255-627189
                </a>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-xs font-semibold uppercase tracking-[0.18em] text-white'>
              ¿Listo para manejar?
            </h3>
            <p className='text-sm leading-relaxed'>
              Reservá tu clase y empezá el camino hacia tu licencia con
              acompañamiento real.
            </p>
            <Link
              href='/#contacto'
              className='group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-400 hover:to-brand-600'
            >
              Reservá tu clase
              <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5' />
            </Link>
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row'>
          <p>© 2026 Autoescuela GMC. Todos los derechos reservados.</p>
          <p>Villa Gesell · Pinamar · Partido de la Costa</p>
        </div>
      </div>
    </footer>
  );
}
