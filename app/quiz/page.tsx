import type { Metadata } from 'next';
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
  return <QuizPageClient />;
}
