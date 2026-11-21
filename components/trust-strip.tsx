import { Car, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const items = [
  {
    icon: ShieldCheck,
    title: 'Instructor matriculado',
    subtitle: 'Certificación oficial',
  },
  {
    icon: Car,
    title: 'Doble comando',
    subtitle: 'Vehículo equipado',
  },
  {
    icon: MapPin,
    title: 'Gesell · Pinamar · La Costa',
    subtitle: 'Zona de cobertura',
  },
  {
    icon: Clock,
    title: 'Horarios flexibles',
    subtitle: 'Adaptados a vos',
  },
];

export function TrustStrip() {
  return (
    <section className='w-full border-y border-white/10 bg-ink'>
      <div className='container mx-auto grid grid-cols-2 gap-px px-4 md:grid-cols-4 md:px-6'>
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <div className='flex items-center gap-3 px-1 py-5 md:px-6'>
              <span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-400'>
                <item.icon className='h-5 w-5' />
              </span>
              <div className='min-w-0'>
                <p className='truncate text-sm font-semibold text-white'>
                  {item.title}
                </p>
                <p className='truncate text-xs text-slate-500'>
                  {item.subtitle}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
