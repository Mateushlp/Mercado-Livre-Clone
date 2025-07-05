// components/Header.tsx
'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import Image from 'next/image'

export default function BarraSuperior() {
  return (
    <div className="w-full px-4 pt-6 flex  items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-yellow-500">
        <Image
            src="/img/logo.png"
            alt='Mercado Livre'
            width={180}
            height={180}
        />
      </Link>

      {/* Barra de Pesquisa */}
      <div className="flex items-center flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full px-4 py-2 bg-white"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2">
          <Search size={20} />
        </button>
      </div>

      {/* Botão "Assine Meli+" */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition">
        Assine Meli+
      </button>
      
    </div>
  )
}
