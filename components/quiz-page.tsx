'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  XCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const questions = [
  {
    id: 1,
    question: '¿Qué documentación debe tener el conductor?',
    options: [
      { id: 'a', text: 'Licencia de conducir' },
      { id: 'b', text: 'Cédula verde' },
      { id: 'c', text: 'Recibo de patente' },
      { id: 'd', text: 'Seguro vigente' },
      { id: 'e', text: 'VTV (Verificación Técnica Vehicular)' },
      { id: 'f', text: 'Todas' },
    ],
    correctAnswer: 'f',
  },
  {
    id: 2,
    question: '¿Cuál es la mano de circulación reglamentaria?',
    options: [
      { id: 'a', text: 'La mano izquierda' },
      { id: 'b', text: 'La mano derecha' },
      { id: 'c', text: 'Ambas manos' },
      { id: 'd', text: 'La mano central' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 3,
    question: '¿Por dónde se adelanta a otro vehículo?',
    options: [
      { id: 'a', text: 'Por la mano derecha' },
      { id: 'b', text: 'Por la mano izquierda' },
      { id: 'c', text: 'Por la banquina' },
      { id: 'd', text: 'Por el carril central' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 4,
    question:
      '¿Qué elementos de seguridad deben llevar los vehículos que circulan?',
    options: [
      {
        id: 'a',
        text: 'Freno de mano, espejo retrovisor, balizas',
      },
      {
        id: 'b',
        text: 'Paragolpes, cinturón de seguridad, matafuegos',
      },
      {
        id: 'c',
        text: 'Herramientas de auxilio, balizas, cinturón de seguridad',
      },
      { id: 'd', text: 'Todas las anteriores' },
    ],
    correctAnswer: 'd',
  },
  {
    id: 5,
    question:
      'Si en una esquina se encuentran dos vehículos, ¿quién tiene la prioridad de paso?',
    options: [
      { id: 'a', text: 'El que viene por la izquierda' },
      { id: 'b', text: 'El que viene por la derecha' },
      { id: 'c', text: 'El que llega primero' },
      { id: 'd', text: 'El vehículo más grande' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 6,
    question:
      '¿Qué distancia deben mantener los vehículos en marcha respecto al que está adelante?',
    options: [
      { id: 'a', text: '5 metros sin importar la velocidad' },
      { id: 'b', text: 'A 10 metros por cada 10 km/h' },
      { id: 'c', text: 'A 1 metro por km/h de velocidad' },
      { id: 'd', text: 'Lo más cerca posible para ganar tiempo' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 7,
    question:
      'En las esquinas o en zona con senda peatonal, ¿quién tiene el derecho de paso?',
    options: [
      { id: 'a', text: 'El peatón siempre' },
      { id: 'b', text: 'El vehículo más rápido' },
      { id: 'c', text: 'El que toca bocina primero' },
      { id: 'd', text: 'El que viene por la derecha' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 8,
    question: 'En una rotonda, ¿quién tiene prioridad de paso?',
    options: [
      { id: 'a', text: 'El que quiere ingresar' },
      { id: 'b', text: 'El que viene por la izquierda' },
      { id: 'c', text: 'El vehículo más grande' },
      { id: 'd', text: 'El que está circulando y el que sale' },
    ],
    correctAnswer: 'd',
  },
];

function ScoreRing({
  percentage,
  score,
}: {
  percentage: number;
  score: number;
}) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const passed = percentage >= 70;

  return (
    <div className='relative h-36 w-36'>
      <svg viewBox='0 0 128 128' className='h-full w-full -rotate-90'>
        <circle
          cx='64'
          cy='64'
          r={radius}
          strokeWidth='10'
          className='fill-none stroke-slate-100'
        />
        <circle
          cx='64'
          cy='64'
          r={radius}
          strokeWidth='10'
          strokeLinecap='round'
          className={cn(
            'fill-none transition-all duration-700',
            passed ? 'stroke-brand-600' : 'stroke-amber-500',
          )}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <span className='text-3xl font-bold text-ink'>
          {Math.round(percentage)}%
        </span>
        <span className='text-xs font-medium text-slate-500'>
          {score}/{questions.length}
        </span>
      </div>
    </div>
  );
}

export function QuizPageClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: answerId,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;
    const passed = percentage >= 70;

    return (
      <section className='relative bg-[#F4F7FE] pb-20'>
        <div className='container mx-auto max-w-3xl px-4 md:px-6'>
          <div className='relative -mt-10 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card md:p-10'>
            <div className='flex flex-col items-center text-center'>
              <ScoreRing percentage={percentage} score={score} />

              <span
                className={cn(
                  'mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]',
                  passed
                    ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                    : 'border border-amber-200 bg-amber-50 text-amber-700',
                )}
              >
                {passed ? 'Aprobado' : 'A repasar'}
              </span>

              <h2 className='mt-3 text-2xl font-bold text-ink md:text-3xl'>
                {passed
                  ? '¡Felicidades, aprobaste el quiz!'
                  : 'Casi lo tenés'}
              </h2>
              <p className='mt-2 max-w-md text-slate-500'>
                {passed
                  ? 'Demostraste un buen conocimiento de las normas de tránsito. Seguí practicando para rendir con confianza.'
                  : 'Acertaste ' +
                    score +
                    ' de ' +
                    questions.length +
                    '. Repasá las respuestas y volvé a intentarlo: con práctica se llega.'}
              </p>

              <div className='mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
                <Button onClick={resetQuiz} variant='brand' size='lg'>
                  <RotateCcw className='h-4 w-4' />
                  Intentar de nuevo
                </Button>
                <Button asChild variant='outline' size='lg'>
                  <a
                    href='https://wa.me/2255627189?text=Hola,%20hice%20el%20quiz%20de%20la%20web%20y%20quiero%20coordinar%20clases%20de%20manejo'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Reservá tu clase
                    <ArrowRight className='h-4 w-4' />
                  </a>
                </Button>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-400'>
                Revisión de respuestas
              </h3>
              <div className='mt-4 space-y-3'>
                {questions.map((question) => {
                  const isCorrect =
                    selectedAnswers[question.id] === question.correctAnswer;

                  return (
                    <div
                      key={question.id}
                      className={cn(
                        'rounded-2xl border p-4',
                        isCorrect
                          ? 'border-emerald-200 bg-emerald-50/60'
                          : 'border-red-200 bg-red-50/60',
                      )}
                    >
                      <div className='flex items-start gap-3'>
                        {isCorrect ? (
                          <CheckCircle2 className='mt-0.5 h-5 w-5 flex-none text-emerald-600' />
                        ) : (
                          <XCircle className='mt-0.5 h-5 w-5 flex-none text-red-500' />
                        )}
                        <div className='min-w-0'>
                          <p className='font-semibold text-ink'>
                            {question.question}
                          </p>
                          <p className='mt-1 text-sm text-slate-500'>
                            Tu respuesta:{' '}
                            <span className='font-medium text-slate-700'>
                              {question.options.find(
                                (opt) => opt.id === selectedAnswers[question.id],
                              )?.text || 'No respondida'}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className='mt-1 text-sm text-emerald-700'>
                              Respuesta correcta:{' '}
                              <span className='font-medium'>
                                {
                                  question.options.find(
                                    (opt) => opt.id === question.correctAnswer,
                                  )?.text
                                }
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const isSelected = (optionId: string) =>
    selectedAnswers[currentQuestionData.id] === optionId;

  return (
    <section className='relative bg-[#F4F7FE] pb-20'>
      <div className='container mx-auto max-w-3xl px-4 md:px-6'>
        <div className='relative -mt-10 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card md:p-8'>
          <div className='flex items-center justify-between text-sm'>
            <span className='font-medium text-slate-500'>
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className='font-semibold text-brand-600'>
              {Math.round(progress)}%
            </span>
          </div>
          <div className='mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100'>
            <div
              className='h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all duration-500 ease-out'
              style={{ width: `${progress}%` }}
            />
          </div>

          <div key={currentQuestion} className='animate-fade-up'>
            <h2 className='mt-7 text-xl font-bold text-ink md:text-2xl'>
              {currentQuestionData.question}
            </h2>

            <div
              role='radiogroup'
              aria-label='Opciones de respuesta'
              className='mt-6 space-y-3'
            >
              {currentQuestionData.options.map((option) => {
                const selected = isSelected(option.id);

                return (
                  <button
                    key={option.id}
                    type='button'
                    role='radio'
                    aria-checked={selected}
                    onClick={() => handleAnswerSelect(option.id)}
                    className={cn(
                      'group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200',
                      selected
                        ? 'border-brand-500 bg-brand-50/70 ring-1 ring-brand-500/20'
                        : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-brand-200 hover:bg-slate-50',
                    )}
                  >
                    <span
                      className={cn(
                        'grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-all duration-200',
                        selected
                          ? 'border-brand-600 bg-brand-600 text-white'
                          : 'border-slate-300 text-transparent group-hover:border-brand-400',
                      )}
                    >
                      <Check className='h-3 w-3' />
                    </span>
                    <span
                      className={cn(
                        'text-sm font-medium transition-colors',
                        selected ? 'text-brand-900' : 'text-slate-700',
                      )}
                    >
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className='mt-8 flex items-center justify-between gap-3 border-t border-slate-100 pt-6'>
            <Button
              variant='outline'
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className='h-4 w-4' />
              Anterior
            </Button>
            <Button
              variant='brand'
              onClick={handleNextQuestion}
              disabled={!selectedAnswers[currentQuestionData.id]}
              className='group'
            >
              {currentQuestion === questions.length - 1
                ? 'Ver resultados'
                : 'Siguiente'}
              <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5' />
            </Button>
          </div>
        </div>

        <p className='mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-400'>
          <Sparkles className='h-3.5 w-3.5' />
          Podés volver y cambiar tus respuestas antes de ver el resultado.
        </p>
      </div>
    </section>
  );
}
