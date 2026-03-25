import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">👡 TerlikMart</h3>
            <p className="text-gray-400 text-sm">
              En iyi kalite ve fiyat ile terlik alışverişi yapın.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kategoriler</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/products?category=Erkek" className="hover:text-white transition">
                  Erkek Terliği
                </Link>
              </li>
              <li>
                <Link href="/products?category=Kadın" className="hover:text-white transition">
                  Kadın Terliği
                </Link>
              </li>
              <li>
                <Link href="/products?category=Çocuk" className="hover:text-white transition">
                  Çocuk Terliği
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 info@terlikmart.com</li>
              <li>📞 +90 (123) 456-7890</li>
              <li>📍 İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 TerlikMart. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">
              Gizlilik
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Şartlar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
