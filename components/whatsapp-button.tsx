"use client";

import { useState } from "react";
import Image from "next/image";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/2255627189?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20las%20clases%20de%20manejo",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openWhatsApp}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="w-16 h-16 rounded-full shadow-lg hover:opacity-90 transition-opacity overflow-hidden"
        aria-label="Contactar por WhatsApp"
      >
        <div className="w-full h-full relative">
          <Image
            src="/images/logo-whatsapp.png"
            alt="Logo de WhatsApp"
            fill
            sizes="(max-width: 768px) 64px, 64px"
            className="object-cover"
            priority
          />
        </div>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 w-64 p-3 bg-white rounded-lg shadow-lg text-sm text-gray-700 border border-gray-200 animate-fade-in">
          <div className="relative">
            <p>Consultanos cualquier duda por nuestro WhatsApp</p>
            <div className="absolute -bottom-7 right-6 h-4 w-4 rotate-45 bg-white border-r border-b border-gray-200"></div>
          </div>
        </div>
      )}
    </div>
  );
}
