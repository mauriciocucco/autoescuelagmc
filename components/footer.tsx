import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container px-4 md:px-6 py-8 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Autoescuela GMC</h3>
            <p className="text-sm text-gray-500">Enseñando a conducir de manera segura y responsable desde 2010.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="text-gray-500 hover:text-gray-900">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-500 hover:text-gray-900">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-gray-500 hover:text-gray-900">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-500 hover:text-gray-900">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-500">Av. Principal 123, Ciudad</li>
              <li className="text-gray-500">info@autoescuelagmc.com</li>
              <li className="text-gray-500">+123 456 7890</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>© 2023 Autoescuela GMC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

