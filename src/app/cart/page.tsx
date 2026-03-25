'use client';

import Link from 'next/link';
import { useCart } from '@/store/useCart';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart, getTotalItems } =
    useCart();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen container-custom py-12">
        <h1 className="text-4xl font-bold mb-8">Alışveriş Sepeti</h1>
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-2xl mb-6">🛒 Sepetiniz boş</p>
          <Link href="/products" className="btn-primary">
            Alışverişe Devam Et
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">Alışveriş Sepeti</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-lg p-6 flex gap-6 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.size && <>Boyut: {item.size}</> }
                      {item.color && <> | Renk: {item.color}</> }
                    </p>
                    <p className="text-primary font-semibold text-lg mt-2">
                      ₺{item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 border rounded font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold">
                      ₺{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 mt-4"
                    >
                      🗑️ Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              <h2 className="font-bold text-2xl mb-6">Sipariş Özeti</h2>

              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span>Ürünler ({getTotalItems()})</span>
                  <span className="font-semibold">₺{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kargo</span>
                  <span className="font-semibold">₺50.00</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg font-bold">
                <span>Toplam</span>
                <span className="text-primary">
                  ₺{(totalPrice + 50).toFixed(2)}
                </span>
              </div>

              <div className="space-y-3">
                <Link href="/checkout" className="btn-primary w-full block text-center">
                  Ödeme İşlemine Devam Et
                </Link>
                <Link href="/products" className="btn-secondary w-full block text-center">
                  Alışverişe Devam Et
                </Link>
                <button
                  onClick={() => clearCart()}
                  className="w-full px-4 py-2 border rounded-lg hover:bg-gray-200 transition"
                >
                  Sepeti Boşalt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
