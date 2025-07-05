// components/NavBar.tsx
'use client'

import Link from 'next/link'

export default function BarraNavegacao() {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <ul className="flex justify-center gap-6">
          <li>
            <Link href="/categorias" className="text-sm text-gray-700 hover:text-yellow-500 transition">
              Categorias
            </Link>
          </li>
          <li>
            <Link href="/ofertas" className="text-sm text-gray-700 hover:text-yellow-500 transition">
              Ofertas
            </Link>
          </li>
          <li>
            <Link href="/cupons" className="text-sm text-gray-700 hover:text-yellow-500 transition">
              Cupons
            </Link>
          </li>
          <li>
            <Link href="/supermercado" className="text-sm text-gray-700 hover:text-yellow-500 transition">
              Supermercado
            </Link>
          </li>
          <li>
            <Link href="/moda" className="text-sm text-gray-700 hover:text-yellow-500 transition">
              Moda
            </Link>
          </li>
          <li>
            <Link href="/mercado-play" className="text-sm text-gray-700 hover:text-yellow-500 transition">
              Mercado Play
            </Link>
          </li>
          <li>
            <Link href="/vender" className="text-sm text-gray-700 hover:text-yellow-500 transition">
              Vender
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
