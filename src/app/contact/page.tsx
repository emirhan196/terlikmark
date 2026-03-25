'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated form submission
    console.log('Form submitted:', formData);
    setSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSent(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">İletişim</h1>
          <p className="text-gray-200 mt-2">Sorularınız için bize ulaşın</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-lg mb-2">E-mail</h3>
            <p className="text-gray-600">info@terlikmart.com</p>
            <p className="text-gray-600">support@terlikmart.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-lg mb-2">Telefon</h3>
            <p className="text-gray-600">+90 (123) 456-7890</p>
            <p className="text-gray-600">+90 (123) 456-7891</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-lg mb-2">Adres</h3>
            <p className="text-gray-600">İstanbul, Türkiye</p>
            <p className="text-gray-600">Cumartesi - Cumadan 9:00 - 18:00</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Bize Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Adınız</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Adınız..."
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Konu</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Konu..."
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Mesaj</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                  placeholder="Mesajınız..."
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'btn-primary'
                }`}
              >
                {sent ? '✓ Gönderildi' : 'Gönder'}
              </button>
            </form>
          </div>

          {/* FAQ */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-primary mb-2">Sipariş ne kadar sürede teslim olur?</h3>
                <p className="text-gray-600 text-sm">
                  Standart kargo 3-5 iş günü, hızlı kargo 1-2 iş günü alır.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">İade yapabilir miyim?</h3>
                <p className="text-gray-600 text-sm">
                  Evet, 30 gün boyunca iade kabul edilir. Kargo ücreti geri ödenir.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Hangi ödeme yöntemleri kabul edilir?</h3>
                <p className="text-gray-600 text-sm">
                  Kredi kartı, banka transferi ve PayPal kabul edilir.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Dizeye kargo yapar mısınız?</h3>
                <p className="text-gray-600 text-sm">
                  Evet, tüm Türkiye'ye kargo göndeririz. Bazı bölgelerde ek ücret alınabilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
