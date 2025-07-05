/* eslint-disable @next/next/no-img-element */
// components/ProductGrid.tsx
'use client'

type Product = {
  id: number
  title: string
  price: number
  image: string
  location: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'Smartphone Samsung Galaxy A14',
    price: 1299.99,
    image: 'https://via.placeholder.com/300x200?text=Produto+1',
    location: 'São Paulo, SP',
  },
  {
    id: 2,
    title: 'Notebook Acer Aspire 5',
    price: 3599.00,
    image: 'https://via.placeholder.com/300x200?text=Produto+2',
    location: 'Curitiba, PR',
  },
  {
    id: 3,
    title: 'Tênis Nike Revolution 6',
    price: 299.90,
    image: 'https://via.placeholder.com/300x200?text=Produto+3',
    location: 'Belo Horizonte, MG',
  },
  {
    id: 4,
    title: 'Fone de Ouvido Bluetooth JBL',
    price: 189.00,
    image: 'https://via.placeholder.com/300x200?text=Produto+4',
    location: 'Recife, PE',
  },
  {
    id: 5,
    title: 'Smart TV Samsung 50"',
    price: 2299.90,
    image: 'https://via.placeholder.com/300x200?text=Produto+5',
    location: 'Porto Alegre, RS',
  },
]

export default function GaleriaProdutos() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
          >
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/img/produto.webp"
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800 mb-1">{product.title}</h3>
              <p className="text-lg font-bold text-black mb-1">R$ {product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">{product.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
