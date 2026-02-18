"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function GiftCardModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-7 w-11/12 max-w-md border-4 border-blue-700 relative z-10 sm:w-full sm:max-w-md animate-fadeIn max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute -top-4 -right-2 text-blue-700 font-bold hover:text-blue-900 text-2xl"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-center mb-2">
            <Image
              src="/images/promo-gmc.jpg"
              alt="Promo fin de mes Autoescuela GMC"
              width={320}
              height={180}
              className="rounded-lg w-full object-contain border-2 border-blue-200 shadow-md"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-800 mb-2">
            Promo fin de mes
          </h2>
          <span className="text-lg font-bold text-blue-700 text-center bg-blue-100 rounded px-3 py-1">
            ¡Pocos cupos!
          </span>
          <div className="flex flex-col items-center mt-2 mb-2">
            <span className="text-2xl font-bold text-black">
              4 CLASES $100000
            </span>
            <span className="text-sm text-gray-700 mt-1">
              Auto con doble comando
              <br />
              completo y asegurado
            </span>
          </div>
          <Link
            href="https://wa.me/2255627189?text=Hola,%20quiero%20aprovechar%20la%20promo%20de%20fin%20de%20mes%20de%20las%204%20clases%20en%20Autoescuela%20GMC.%20¿Me%20das%20más%20info?"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 text-white text-center py-2 px-6 rounded-lg shadow hover:bg-green-600 transition font-bold text-lg mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.19-1.62A12.13 12.13 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.68.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.47 0 4.8.91 6.62 2.56A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.26-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
            </svg>
            (02255) 15 627189
          </Link>
        </div>
      </div>
    </div>
  );
}
