import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">Hakkında</h1>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">👡 TerlikMart Hakkında</h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            TerlikMart, 2020 yılından beri Türkiye'nin en güvenilir terlik satışı platformlarından biridir.
            Rahat, kaliteli ve şık terlikler sunarak müşteri memnuniyetini öncelik almaktayız.
          </p>

          <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Herkesin uygun fiyatla, yüksek kalitede terlik satın alabilmesi için emeğimizi sarf ediyoruz.
            Müşteri desteği ve hızlı teslimat servisleriyle endüstride lider konumda bulunuyoruz.
          </p>

          <h3 className="text-2xl font-bold mb-4">Neden Bize Güvenin?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>Sadece orijinal ve kaliteli ürünler</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>24/7 müşteri desteği</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>Güvenli ve şifreli ödeme sistemi</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>Hızlı ve güvenilir kargo</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>30 gün para iade garantisi</span>
            </li>
          </ul>

          <div className="mt-12 pt-12 border-t">
            <h3 className="text-2xl font-bold mb-6">Çalışma Koşullarımız</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-3xl mb-2">1M+</p>
                <p className="text-gray-600">Memnun Müşteri</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-3xl mb-2">500K+</p>
                <p className="text-gray-600">Siparişler</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-3xl mb-2">4.8/5</p>
                <p className="text-gray-600">Ortalama Puan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-primary text-white py-12 mt-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Bize Katılın</h2>
          <p className="mb-6 text-gray-200">Terlik koleksiyonunuzu keşfetmek için bugün alışverişe başlayın.</p>
          <Link href="/products" className="btn-secondary">
            Alışverişe Başla
          </Link>
        </div>
      </section>
    </div>
  );
}
