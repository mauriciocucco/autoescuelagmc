import Image from 'next/image';
import { Check } from 'lucide-react';
import { TrackedExternalLink } from '@/components/tracked-external-link';
import { Reveal } from '@/components/reveal';

const includes = [
  'Clase personalizada con instructor matriculado',
  'Clases prácticas y teóricas de manejo',
  'Material de apoyo para el examen teórico',
  'Práctica en circuito real',
  'Tarjeta digital o física para regalar',
];

export function GiftCardSection() {
  return (
    <section
      id='giftcard'
      className='relative overflow-hidden bg-ink py-16 text-white md:py-24'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-600/25 blur-[130px]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-800/30 blur-[110px]'
      />

      <div className='container relative mx-auto px-4 md:px-6'>
        <Reveal className='mx-auto max-w-2xl text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-300'>
            Gift Card
          </span>
          <h2 className='mt-4 flex items-center justify-center gap-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl'>
            Un regalo para toda la vida
            <Image
              src='/images/gift-card-gmc.png'
              alt='Icono Gift Card GMC'
              width={40}
              height={40}
              className='h-8 w-8 object-contain'
            />
          </h2>
          <p className='mt-3 text-slate-400 md:text-lg'>
            Regalá confianza, independencia y seguridad al volante.
          </p>
        </Reveal>

        <div className='mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14'>
          <Reveal className='flex justify-center'>
            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute -inset-6 rounded-[2rem] bg-brand-500/20 blur-3xl'
              />
              <Image
                src='/images/gift-card.jpg'
                alt='Tarjeta de regalo para clases de manejo de autoescuela, con diseño moderno.'
                width={500}
                height={320}
                className='relative rounded-2xl border border-white/10 shadow-card transition-transform duration-500 ease-out hover:-rotate-1 hover:scale-[1.03]'
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className='max-w-lg leading-relaxed text-slate-300'>
              Ideal para estas fiestas, cumpleaños, egresos o para quien está
              listo para dar su primer paso hacia la conducción. Con nuestra{' '}
              <span className='font-semibold text-white'>Gift Card</span>,
              regalás una experiencia completa de aprendizaje.
            </p>

            <h4 className='mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-brand-300'>
              ¿Qué incluye?
            </h4>
            <ul className='mt-4 space-y-3'>
              {includes.map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <span className='mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20'>
                    <Check className='h-3 w-3' />
                  </span>
                  <span className='text-sm text-slate-300'>{item}</span>
                </li>
              ))}
            </ul>

            <TrackedExternalLink
              href='https://wa.me/2255627189?text=Hola,%20me%20interesa%20regalar%20una%20Gift%20Card,%20quiero%20más%20info%20...'
              target='_blank'
              rel='noopener'
              eventName='whatsapp_click'
              eventParams={{
                location: 'gift_card_section',
                campaign: 'gift_card',
              }}
              className='mt-8 inline-block w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3.5 text-center font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-400 hover:to-brand-600 sm:w-auto'
            >
              Quiero regalar una Gift Card
            </TrackedExternalLink>

            <p className='mt-3 text-xs text-slate-500'>
              *Consultá por todos los medios de pago.
            </p>

            <div className='mt-7 flex items-center gap-4'>
              <p className='text-sm font-semibold text-slate-400'>Compartir:</p>
              <div className='flex gap-2'>
                <TrackedExternalLink
                  href='https://wa.me/?text=¡Mirá%20esta%20Gift%20Card!.%20https://www.autoescuelagmc.com/#giftcard'
                  target='_blank'
                  rel='noopener noreferrer'
                  ariaLabel='Compartir en WhatsApp'
                  eventName='whatsapp_click'
                  eventParams={{
                    location: 'gift_card_share',
                    campaign: 'gift_card',
                  }}
                  className='grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10'
                >
                  <img
                    src='/images/whatsapp.png'
                    alt='WhatsApp'
                    className='h-5 w-5'
                  />
                </TrackedExternalLink>
                <a
                  href='https://www.facebook.com/dialog/send?link=https://www.autoescuelagmc.com/#giftcard&app_id=YOUR_APP_ID&redirect_uri=https://www.autoescuelagmc.com/#giftcard&message=¡Mirá esta Gift Card! Regalá confianza y seguridad al volante.'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Enviar por Facebook Messenger'
                  className='grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10'
                >
                  <img
                    src='/images/facebook.png'
                    alt='Facebook Messenger'
                    className='h-4 w-4'
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
