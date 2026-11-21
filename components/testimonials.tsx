import { Star } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const testimonials = [
  {
    initials: 'SC',
    name: 'Sonia Cordoba',
    meta: 'Alumna - 2026',
    quote:
      'Muy buena experiencia. En mi caso fue para manejo de moto. Recomendable Autoescuela GMC!',
  },
  {
    initials: 'RZ',
    name: 'Romina Zelaya',
    meta: 'Alumna - 2026',
    quote:
      'Excelente experiencia. Guido transmite la importancia de conducir con responsabilidad y conciencia, cuidando tanto la propia vida como la de los demás. Mucha paciencia, compromiso y profesionalismo. Muy recomendable.',
  },
  {
    initials: 'SZ',
    name: 'Sabrina Zarza',
    meta: 'Alumna - 2026',
    quote:
      'Gran instructor de manejo Guido y su equipo! El acompañamiento es de 10, profesional, paciente, empático, respetuoso del ritmo de cada persona que se propone el objetivo de aprender a manejar y sacar su licencia. Te dan consejos personalizados para ganar confianza y superar las inseguridades al volante. Se nota el compromiso y las ganas que le ponen para acompañarte en todo el proceso, entendiendo que el aprendizaje de cada quien es diferente y ajustando las estrategias de instrucción a las necesidades de cada caso en particular. Lo recomiendo totalmente!',
  },
];

export function Testimonials() {
  return (
    <section
      id='testimonios'
      className='relative w-full overflow-hidden bg-ink py-16 md:py-24 text-white'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-brand-600/25 blur-[130px]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-800/30 blur-[110px]'
      />

      <div className='container relative px-4 md:px-6 mx-auto'>
        <Reveal className='max-w-2xl'>
          <span className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-300'>
            Testimonios
          </span>
          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl'>
            Lo que dicen nuestros alumnos
          </h2>
          <p className='mt-3 text-slate-400 md:text-lg'>
            Personas que aprendieron a conducir con nosotros y hoy manejan con
            confianza.
          </p>
        </Reveal>

        <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 120}
              className='h-full'
            >
              <div className='group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/[0.07]'>
                <div className='mb-4 flex items-center space-x-1'>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className='h-4 w-4 fill-brand-400 text-brand-400 transition-transform duration-300 group-hover:scale-110'
                      style={{ transitionDelay: `${starIndex * 30}ms` }}
                    />
                  ))}
                </div>
                <p className='text-sm leading-relaxed text-slate-300'>
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className='mt-auto flex items-center space-x-3 pt-6'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20 transition-transform duration-300 group-hover:scale-105'>
                    <span className='text-sm font-semibold'>
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className='text-sm font-semibold text-white'>
                      {testimonial.name}
                    </p>
                    <p className='text-xs text-slate-500'>{testimonial.meta}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
