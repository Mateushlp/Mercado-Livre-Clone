'use client'


import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Header() {
    return (
        <header className="W-full bg-white shadow-md px-4 py-2 flex items-center justify-between">

            <Link href="/" className="text-2xl font-bold text-yellow-500">
                Mercado Livre
        </Link>
            <div className="flex items-center flex-1 max-w-xl mx-4">
                <input
                    type='text'
                    placeholder='Buscar produtos, marcas e muito mais...'
                    className=
        </div>
        </header>