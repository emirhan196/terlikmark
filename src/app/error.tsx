'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Bir Hata Oluştu</h1>
        <p className="text-gray-600 mb-6">
          Üzgünüz, bir hata oluştu. Lütfen sayfayı yenileyin.
        </p>
        <button
          onClick={reset}
          className="btn-primary w-full py-3 font-semibold"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}