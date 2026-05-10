'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HOT_SALE_START = new Date('2026-05-11T00:00:00');

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 1000 / 60 / 60 / 24),
        hours: Math.floor((diff / 1000 / 60 / 60) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export function HotSaleBanner() {
  const [visible, setVisible] = useState(true);
  const { days, hours, minutes, seconds } = useCountdown(HOT_SALE_START);

  if (!visible) return null;

  const started = HOT_SALE_START.getTime() <= Date.now();

  return (
    <div className='hot-sale-banner relative w-full overflow-hidden bg-gradient-to-r from-[#0f4c81] via-[#0e8a6e] to-[#00c9a7]'>
      {/* Brasas flotantes */}
      <div className='ember' />
      <div className='ember' />
      <div className='ember' />
      <div className='ember' />
      <div className='ember' />
      <div className='ember' />
      <div className='ember' />
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-4 md:py-0 gap-3 md:gap-6 min-h-[80px] md:min-h-[120px] text-center'>
        {/* Texto central */}
        <div className='flex flex-col md:flex-row items-center gap-1 md:gap-4 flex-1 justify-center text-white'>
          <span className='font-extrabold text-lg sm:text-2xl md:text-4xl leading-tight drop-shadow'>
            <span className='fire-flame'>🔥</span>{' '}
            {started ? '¡HOT SALE EN CURSO!' : '¡YA LLEGA EL HOT SALE!'}{' '}
            <span className='fire-flame'>🔥</span>
          </span>

          {/* Contador */}
          {!started && (
            <div className='flex items-center gap-1.5'>
              <span className='text-white/80 text-xl hidden md:inline'>
                Empieza en
              </span>
              {[
                { label: 'días', value: days },
                { label: 'hs', value: hours },
                { label: 'min', value: minutes },
                { label: 'seg', value: seconds },
              ].map(({ label, value }, i) => (
                <span key={label} className='flex items-center gap-1'>
                  {i > 0 && (
                    <span className='text-white/70 font-bold text-xl'>:</span>
                  )}
                  <span className='flex flex-col items-center bg-white/20 backdrop-blur rounded px-1.5 py-0.5 min-w-[36px]'>
                    <span className='text-white font-extrabold text-xl tabular-nums leading-none'>
                      {String(value).padStart(2, '0')}
                    </span>
                    <span className='text-white/70 text-[8px] uppercase leading-none'>
                      {label}
                    </span>
                  </span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA WhatsApp */}
        <Link
          href='https://wa.me/2255627189?text=Hola,%20quiero%20aprovechar%20el%20Hot%20Sale%20de%20Autoescuela%20GMC.%20%C2%BFMe%20das%20m%C3%A1s%20info?'
          target='_blank'
          className='flex items-center gap-1.5 bg-white text-green-600 font-bold text-xs sm:text-sm px-3 py-1.5 rounded-full shadow hover:bg-green-50 transition whitespace-nowrap'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
            width='16'
            height='16'
          >
            <path d='M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.19-1.62A12.13 12.13 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.68.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.47 0 4.8.91 6.62 2.56A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.26-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z' />
          </svg>
          Consultá ahora
        </Link>

        {/* Cerrar - solo desktop inline */}
        <button
          onClick={() => setVisible(false)}
          aria-label='Cerrar banner'
          className='hidden md:flex flex-shrink-0 text-white/80 hover:text-white text-lg font-bold leading-none ml-1'
        >
          ✕
        </button>
      </div>

      {/* Cerrar - mobile absoluto arriba a la derecha */}
      <button
        onClick={() => setVisible(false)}
        aria-label='Cerrar banner'
        className='md:hidden absolute top-2 right-3 text-white/80 hover:text-white text-lg font-bold leading-none'
      >
        ✕
      </button>
    </div>
  );
}
