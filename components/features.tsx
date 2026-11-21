import { Car, Calendar, Award, BookOpen, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const services = [
  {
    icon: Car,
    title: 'Clases Prácticas',
    description:
      'Aprendé a conducir con nuestro vehículo con doble comando y equipado para la enseñanza.',
  },
  {
    icon: BookOpen,
    title: 'Clases teóricas',
    description:
      'Te enseñamos todo lo que necesitas saber para aprobar el examen.',
  },
  {
    icon: Calendar,
    title: 'Horarios Flexibles',
    description:
      'Adaptamos nuestros horarios a tu disponibilidad para mayor comodidad.',
  },
  {
    icon: Award,
    title: 'Instructor Certificado',
    description:
      'Aprendé con profesionales certificados y con amplia experiencia.',
  },
];

export function Features() {
  return (
    <section id='servicios' className='relative w-full overflow-hidden bg-white py-16 md:py-24'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 top-0 h-72 bg-grid-light opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]'
      />
      <div className='container relative px-4 md:px-6 mx-auto'>
        <Reveal className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
          <div className='max-w-2xl'>
            <span className='inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700'>
              Servicios
            </span>
            <h2 className='mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl'>
              Todo lo que necesitás para manejar con seguridad
            </h2>
          </div>
          <p className='max-w-md text-slate-500 md:text-lg'>
            Ofrecemos una variedad de servicios para ayudarte a obtener tu
            licencia de conducir.
          </p>
        </Reveal>

        <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100} className='h-full'>
              <div className='group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card'>
                <span className='absolute right-5 top-5 text-xs font-bold tracking-widest text-slate-300'>
                  0{index + 1}
                </span>
                <div className='mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110'>
                  <service.icon className='h-6 w-6' />
                </div>
                <h3 className='text-lg font-bold text-ink'>{service.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-slate-500'>
                  {service.description}
                </p>
                <span className='mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand-600'>
                  <ArrowUpRight className='h-4 w-4 translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-0.5' />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
