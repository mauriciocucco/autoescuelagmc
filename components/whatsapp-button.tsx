"use client";

import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/2255627189?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20las%20clases%20de%20manejo",
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
}
