'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

export function FriendshipModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const timer = setTimeout(() => setIsOpen(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60'
      onClick={closeModal}
    >
      <div
        className='relative rounded-2xl shadow-2xl overflow-hidden w-11/12 max-w-lg border-[3px] border-pink-300'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className='absolute top-2 right-3 z-10 text-white font-bold hover:text-gray-200 lg:text-2xl text-xs drop-shadow'
          aria-label='Cerrar'
        >
          ✕
        </button>
        <Link
          href='https://wa.me/2255627189?text=Hola,%20quiero%20aprovechar%20la%20promo%20del%20D%C3%ADa%20de%20la%20Amistad%20de%20Autoescuela%20GMC.%20%C2%BFMe%20das%20m%C3%A1s%20info?'
          target='_blank'
          onClick={() => {
            trackEvent('whatsapp_click', {
              location: 'friendship_modal',
              campaign: 'dia_de_la_amistad_2026',
            });
            closeModal();
          }}
        >
          <Image
            src='/images/dia-de-la-amistad.jpeg'
            alt='Día de la Amistad Autoescuela GMC'
            width={800}
            height={400}
            className='w-full h-[320px] sm:h-[480px] lg:h-[500px] object-cover cursor-pointer'
            priority
          />
        </Link>
      </div>
    </div>
  );
}
