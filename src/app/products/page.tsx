'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['Tümü', 'Erkek', 'Kadın', 'Çocuk'];

  let filteredProducts = products;

  if (selectedCategory !== 'Tümü') {
    filteredProducts = products.filter((p) => p.category === selectedCategory);
  }

  // Sort
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name, 'tr')
    );
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">Ürünler</h1>
          <p className="text-gray-200 mt-2">Tüm terlik seçenekleriniz</p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Kategoriler</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === cat
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <hr className="my-6" />

              <h3 className="font-bold text-lg mb-4">Sırala</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="name">İsme göre</option>
                <option value="price-low">Fiyat (Düşükten Yüksekliğe)</option>
                <option value="price-high">Fiyat (Yüksekten Düşüğe)</option>
                <option value="rating">Puanlamaya göre</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredProducts.length} ürün bulundu
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Bu kategoride ürün bulunmamaktadır.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
