'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/store/useAuth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo credentials check
    const validCredentials = [
      { email: 'user@example.com', password: 'demo123' },
      { email: 'admin@terlikmart.com', password: 'demo123' }
    ];

    const isValid = validCredentials.some(cred => cred.email === email && cred.password === password);

    if (!isValid) {
      alert('Geçersiz e-posta veya şifre!');
      return;
    }

    // Mock login
    login(
      {
        id: email === 'admin@terlikmart.com' ? 2 : 1,
        email,
        name: email.split('@')[0],
        isAdmin: email === 'admin@terlikmart.com',
      },
      'mock-token'
    );
    alert('Giriş başarılı!');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-center mb-8">Giriş Yap</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="ornek@example.com"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full py-3 font-semibold">
            Giriş Yap
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Hesabınız yoksa?{' '}
            <Link href="/register" className="text-primary font-semibold hover:underline">
              Kayıt olun
            </Link>
          </p>
        </div>

        <div className="mt-6 pt-6 border-t text-sm text-gray-600">
          <p className="mb-2">Demo giriş bilgileri:</p>
          <p>E-mail: user@example.com</p>
          <p>Şifre: demo123</p>
          <p className="mt-2 text-primary font-bold">Admin: admin@terlikmart.com</p>
        </div>
      </div>
    </div>
  );
}
