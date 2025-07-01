'use client'


import Link from 'next/link';
import { Search } from 'lucide-react';

export default function BarraSuperior() {

    export default function Header() {
        return (
            <header className="W-full bg-white shadow-md px-4 py-2 flex items-center justify-between">

                <Link href="/" className="text-2xl font-bold text-yellow-500">
                    <Image
                        src="/img/logo.png"
                        alt="Logo Mercado Livre"
                    
                </Link>
                <div className="flex items-center flex-1 max-w-xl mx-4">
                    <input
                        type='text'
                        placeholder='Buscar produtos, marcas e muito mais...'
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
}