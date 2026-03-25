'use client';

import Link from 'next/link';
import { useCart } from '@/store/useCart';
import { useAuth } from '@/store/useAuth';

export default function Header() {
  const getTotalItems = useCart((state) => state.getTotalItems);
  const totalItems = getTotalItems();
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            👡 TerlikMart
          </Link>

          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-primary transition">
              Ana Sayfa
            </Link>
            <Link href="/products" className="hover:text-primary transition">
              Ürünler
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              Hakkında
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            {user ? (
              <>
                <Link href="/profile" className="text-sm">
                  👤 {user.name || user.email}
                </Link>
                {user.isAdmin && (
                  <Link
                    href="/admin"
                    className="text-sm px-2 py-1 bg-primary text-white rounded"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => logout()}
                  className="text-sm px-2 py-1 bg-red-500 text-white rounded"
                >
                  Çıkış
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn-secondary text-sm">
                  Giriş Yap
                </Link>
                <Link href="/register" className="btn-primary text-sm">
                  Kayıt Ol
                </Link>
              </>
            )}

            <Link href="/cart" className="relative">
              <span className="text-2xl">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
