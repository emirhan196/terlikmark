'use client';

import { useAuth } from '@/store/useAuth';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen container-custom py-12">
        <p className="text-2xl mb-6">❌ Giriş yapmanız gerekiyor</p>
        <Link href="/login" className="btn-primary">
          Giriş Yap
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">👤 Profilim</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-6xl mb-4">👤</div>
              <h2 className="text-2xl font-bold">{user.name || 'Kullanıcı'}</h2>
              <p className="text-gray-600">{user.email}</p>
              {user.isAdmin && (
                <span className="inline-block mt-3 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Admin
                </span>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">Hesap Bilgileri</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">E-mail:</span>
                  <span className="font-semibold">{user.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Ad Soyad:</span>
                  <span className="font-semibold">{user.name || 'Belirtilmedi'}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Hesap Türü:</span>
                  <span className="font-semibold">
                    {user.isAdmin ? 'Admin' : 'Normal Kullanıcı'}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Kayıt Tarihi:</span>
                  <span className="font-semibold">Mart 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">Hızlı İşlemler</h3>
              <div className="space-y-2">
                <Link href="/cart" className="block px-4 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition w-full text-center">
                  🛒 Sepetim
                </Link>
                {user.isAdmin && (
                  <Link href="/admin" className="block px-4 py-2 bg-secondary text-white rounded-lg hover:bg-pink-600 transition w-full text-center">
                    ⚙️ Admin Paneli
                  </Link>
                )}
                <button
                  onClick={() => logout()}
                  className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  🚪 Çıkış Yap
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md p-6 text-white">
            <p className="text-4xl mb-2">0</p>
            <p className="text-blue-100">Aktif Siparişler</p>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-md p-6 text-white">
            <p className="text-4xl mb-2">₺0</p>
            <p className="text-green-100">Toplam Harcama</p>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-md p-6 text-white">
            <p className="text-4xl mb-2">0</p>
            <p className="text-purple-100">İncele Edilen</p>
          </div>
        </div>
      </div>
    </div>
  );
}
