"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-auto overflow-hidden bg-white rounded">
            <Image
              src="/images/logo.jpg"
              alt="Autoescuela GMC Logo"
              width={180}
              height={40}
              className="object-contain mix-blend-darken"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#inicio"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Servicios
          </Link>
          <Link
            href="#testimonios"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Testimonios
          </Link>
          <Link
            href="#instructor"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Instructor
          </Link>
          <Link
            href="#pagos"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pagos
          </Link>
          <Link
            href="#giftcard"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-2"
          >
            <Image
              src="/images/gift-card-gmc.png"
              alt="Icono de regalo"
              width={16}
              height={16}
              className="object-contain"
            />
            Gift Card
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contacto
          </Link>
          <Link
            href="/quiz"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Quiz
          </Link>
        </nav>
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="#inicio"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#instructor"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Instructor
            </Link>
            <Link
              href="#pagos"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Pagos
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="/quiz"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiz
            </Link>
            <Link
              href="#giftcard"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Gift Card
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
