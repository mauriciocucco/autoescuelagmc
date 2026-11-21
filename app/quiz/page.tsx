import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { QuizPageClient } from '@/components/quiz-page';

export const metadata: Metadata = {
  title: 'Quiz de Manejo',
  description:
    'Poné a prueba tus conocimientos de conducción con el quiz de Autoescuela GMC y preparate mejor para rendir tu licencia.',
  alternates: {
    canonical: '/quiz',
  },
  openGraph: {
    title: 'Quiz de Manejo | Autoescuela GMC',
    description:
      'Practicá preguntas frecuentes de conducción y medí tu preparación para la licencia.',
    url: '/quiz',
    type: 'website',
  },
};

export default function QuizPage() {
  return (
    <div className='flex min-h-screen flex-col bg-[#F4F7FE]'>
      <Navbar />
      <main className='flex-1'>
        <section className='relative overflow-hidden bg-ink pb-24 pt-16 text-white md:pb-28 md:pt-20'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 top-0 h-72 bg-grid-dark opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]'
          />
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-32 -top-16 h-[26rem] w-[26rem] rounded-full bg-brand-600/25 blur-[130px]'
          />

          <div className='container relative mx-auto px-4 md:px-6'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white'
            >
              <ArrowLeft className='h-4 w-4' />
              Volver al inicio
            </Link>

            <div className='mt-8 max-w-2xl'>
              <span className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-300'>
                <Sparkles className='h-3.5 w-3.5' />
                Práctica libre
              </span>
              <h1 className='mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl'>
                Quiz de{' '}
                <span className='bg-gradient-to-r from-brand-300 via-brand-400 to-white bg-clip-text text-transparent'>
                  manejo
                </span>
              </h1>
              <p className='mt-4 max-w-xl text-base leading-relaxed text-white/65 md:text-lg'>
                8 preguntas para medir cuánto sabés de las normas de tránsito.
                Sin registro, sin vueltas: elegí una opción y descubrí tu
                resultado al instante.
              </p>
            </div>
          </div>
        </section>

        <QuizPageClient />
      </main>
      <Footer />
    </div>
  );
}
