"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function GiftCardModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => setIsOpen(false);

  const handleImageClick = () => {
    closeModal();
    const giftCardSection = document.querySelector("#giftcard");
    if (giftCardSection) {
      giftCardSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden"
      onClick={closeModal}
    >
      {/* Animación de corazones flotando */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className={`absolute animate-floating-heart select-none text-3xl opacity-70`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              top: `${Math.random() * 80}%`,
              color: i % 2 === 0 ? "#f43f5e" : "#fb7185",
            }}
          >
            {i % 3 === 0 ? "💖" : i % 3 === 1 ? "❤️" : "💕"}
          </span>
        ))}
      </div>
      <div
        className="bg-white rounded-2xl shadow-2xl p-7 w-11/12 max-w-md border-4 border-rose-300 relative z-10 sm:w-full sm:max-w-md animate-fadeIn max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex flex-col justify-center items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-rose-600 flex items-center gap-2">
              <span className="animate-heartBeat">💖</span>
              ¡Regalá Amor!
              <span className="animate-heartBeat">💖</span>
            </h2>
          </div>
          <p className="text-center text-rose-500 mt-2 font-medium">
            Sorprendé a tu persona especial con una{" "}
            <span className="font-bold text-rose-600">Gift Card</span> para
            clases de manejo en nuestra autoescuela. ¡Regalá la experiencia de
            aprender a conducir!
          </p>
          <button
            onClick={closeModal}
            className="absolute -top-4 -right-2 text-rose-400 font-bold hover:text-rose-600 text-2xl"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <Image
            src="/images/gift-card.jpg"
            alt="Gift Card San Valentín"
            width={220}
            height={80}
            className="rounded-xl w-full max-h-[180px] object-contain cursor-pointer border-2 border-rose-200 shadow-lg hover:scale-105 transition-transform duration-200"
            onClick={handleImageClick}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-rose-500 text-lg font-semibold flex items-center justify-center text-center gap-1 w-full">
            ¡Ideal para parejas, amigos o familia que quieren aprender a
            manejar!
          </span>
          <Link
            href="https://wa.me/2255627189?text=Hola,%20quiero%20regalar%20una%20Gift%20Card%20para%20clases%20de%20manejo%20en%20la%20autoescuela%20GMC.%20¿Me%20podrías%20dar%20más%20información?%20🚗"
            target="_blank"
            className="block bg-rose-500 text-white text-center py-2 px-6 rounded-lg shadow hover:bg-rose-600 transition font-bold text-lg mt-2"
          >
            ¡Quiero regalar clases de manejo!
          </Link>
        </div>
      </div>
    </div>
  );
}
