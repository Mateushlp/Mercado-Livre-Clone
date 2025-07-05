'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function BarraSuperior() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-amber-300 px-4 py-2 flex items-center justify-between shadow-md">
            <Link href="/">
                <span className="text-2xl font-bold text-yellow-500">
                    <Image
                        src="/img/logo.png"
                        alt="Logo Mercado Livre"
                        width={180}
                        height={180}
                    />
                </span>
            </Link>

            <div className="flex items-center flex-1 max-w-xl mx-4">
                <input
                    type="text"
                    placeholder="Buscar produtos, marcas e muito mais..."
                    className="w-full px-4 py-2 b"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-r-md flex items-center">
                    <Search size={20} />
                </button>
            </div>

            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Assine Meli+
            </button>
        </header>
    );
}
