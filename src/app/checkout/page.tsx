'use client';

import Link from 'next/link';
import { useCart } from '@/store/useCart';
import { useAuth } from '@/store/useAuth';
import { useState } from 'react';

export default function CheckoutPage() {
  const { getTotalPrice, getTotalItems, clearCart } = useCart();
  const { user } = useAuth();
  const totalPrice = getTotalPrice();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      alert('Ödeme başarıyla tamamlandı! Siparişiniz yakında hazırlanacaktır.');
      clearCart();
      setLoading(false);
      // Redirect would happen here
    }, 2000);
  };

  if (getTotalItems() === 0) {
    return (
      <div className="min-h-screen container-custom py-12">
        <p className="text-2xl mb-6">Sepetiniz boştur</p>
        <Link href="/products" className="btn-primary">
          Alışverişe Devam Et
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">Ödeme İşlemi</h1>

        {/* Progress Bar */}
        <div className="mb-12 flex gap-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <button
                onClick={() => setStep(s)}
                className={`rounded-full w-12 h-12 font-bold flex items-center justify-center transition ${
                  s <= step ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {s}
              </button>
              {s < 3 && <div className="flex-1 h-1 bg-gray-300 mx-2"></div>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Step 1: Address */}
            {step === 1 && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">📍 Teslimat Adresi</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Ad"
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="Soyadı"
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Adres"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="İl"
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="İlçe"
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="Posta Kodu"
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="btn-primary w-full mt-6"
                >
                  Devam Et →
                </button>
              </div>
            )}

            {/* Step 2: Shipping Method */}
            {step === 2 && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">🚚 Kargo Seçimi</h2>
                <div className="space-y-4">
                  {[
                    { name: 'Standart Kargo', price: 50, time: '3-5 iş günü' },
                    { name: 'Hızlı Kargo', price: 100, time: '1-2 iş günü' },
                    { name: 'Aynı Gün Teslimat', price: 200, time: 'Aynı gün' },
                  ].map((method, i) => (
                    <label
                      key={i}
                      className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="shipping"
                        defaultChecked={i === 0}
                        className="w-5 h-5"
                      />
                      <div className="ml-4 flex-1">
                        <p className="font-semibold">{method.name}</p>
                        <p className="text-sm text-gray-600">{method.time}</p>
                      </div>
                      <span className="font-bold">₺{method.price}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="btn-secondary flex-1"
                  >
                    ← Geri
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-primary flex-1"
                  >
                    Devam Et →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">💳 Ödeme Bilgileri</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Kart Sahibinin Adı"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Kart Numarası"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    maxLength={16}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      maxLength={3}
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-secondary flex-1"
                  >
                    ← Geri
                  </button>
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="btn-primary flex-1"
                  >
                    {loading ? '⏳ İşperiyor...' : '✓ Ödemeyi Tamamla'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-20">
              <h3 className="font-bold text-2xl mb-6">Sipariş Özeti</h3>
              <div className="space-y-3 pb-6 border-b">
                <div className="flex justify-between">
                  <span>Ürünler</span>
                  <span className="font-semibold">₺{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kargo</span>
                  <span className="font-semibold">₺50.00</span>
                </div>
                <div className="flex justify-between">
                  <span>İndirim</span>
                  <span className="font-semibold text-green-600">₺0.00</span>
                </div>
              </div>
              <div className="flex justify-between mt-6 text-lg font-bold">
                <span>Toplam</span>
                <span className="text-primary">₺{(totalPrice + 50).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
