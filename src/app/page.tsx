'use client';

import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                👡 Rahat ve Şık Terlikler
              </h1>
              <p className="text-xl mb-6 text-gray-100">
                Ev, ofis, plaj ve daha pek çok yerde kullanabileceğiniz kaliteli terlikler.
              </p>
              <Link href="/products" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg">
                Alışverişe Başla
              </Link>
            </div>
            <div className="text-6xl text-center">
              🛍️
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-semibold text-lg mb-2">Kaliteli Ürünler</h3>
              <p className="text-gray-600">En iyi malzemeler ile yapılmış rahat terlikler</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-semibold text-lg mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600">Orderiniz 24-48 saat içinde kapınıza gelir</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-semibold text-lg mb-2">Güvenli Ödeme</h3>
              <p className="text-gray-600">Tüm ödeme yöntemleri güvenli ve şifreli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">Öne Çıkan Ürünler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary text-lg">
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Haberlerimize Abone Olun</h2>
          <p className="mb-6">Yeni ürünler ve özel indirimler hakkında ilk haberolun.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-mail adresiniz..."
              className="flex-1 px-4 py-2 rounded text-gray-800 focus:outline-none"
            />
            <button className="btn-secondary">Abone Ol</button>
          </div>
        </div>
      </section>
    </>
  );
}
