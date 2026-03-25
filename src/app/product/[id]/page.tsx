'use client';

import { products } from '@/data/products';
import { useCart } from '@/store/useCart';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addToCart = useCart((state) => state.addToCart);

  if (!product) {
    return (
      <div className="min-h-screen container-custom py-12">
        <p className="text-2xl">❌ Ürün bulunamadı</p>
        <Link href="/products" className="btn-primary mt-4 inline-block">
          Ürünlere Geri Dön
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        size: selectedSize,
        color: selectedColor,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <Link href="/products" className="text-primary hover:underline mb-6 inline-block">
          ← Ürünlere Geri Dön
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <span className="text-xs bg-gray-200 px-3 py-1 rounded">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">
                    {i < Math.floor(product.rating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <span className="text-gray-600 ml-4">
                {product.rating} / 5 ({product.reviews} yorum)
              </span>
            </div>

            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">
                  ₺{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-500 line-through">
                      ₺{product.originalPrice.toFixed(2)}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>
              <div className="text-sm text-gray-600">Stok: {product.stock} adet</div>
            </div>

            {/* Options */}
            <div className="space-y-4 mb-8">
              <div>
                <label className="block font-semibold mb-2">Boyut</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Renk</label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  {product.colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Adet</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 border rounded"
                  >
                    −
                  </button>
                  <span className="text-2xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition ${
                added
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-white hover:bg-purple-700'
              }`}
            >
              {added ? '✓ Sepete Eklendi' : 'Sepete Ekle'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
