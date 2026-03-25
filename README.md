# 👡 TerlikMart - Terlik Satışı Web Sitesi

Türkiye'nin en modern ve kullanıcı dostu terlik e-ticaret platformu.

## 🚀 Özellikler

- ✅ **Ürün Kataloğu**: 6 adet örnek terlik ürünü
- ✅ **Alışveriş Sepeti**: Zustand ile state management
- ✅ **Ödeme Sistemi**: 3 adımlı checkout flow
- ✅ **Kullanıcı Hesabı**: Kayıt ve giriş sistemi
- ✅ **Admin Paneli**: Ürün yönetimi ve istatistikler
- ✅ **Responsive Design**: Mobile ve desktop uyumlu
- ✅ **Tailwind CSS**: Modern ve hızlı UI

## 📦 Teknolojiler

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Language**: TypeScript
- **Backend**: API Routes (hazır)

## 🛠️ Kurulum

### 1. Proje Klasörüne Gidin
```bash
cd "c:\Users\e.gundu\Desktop\Terlik Sitesi\site"
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

### 4. Tarayıcıda Açın
```
http://localhost:3003
```

## 📁 Proje Yapısı

```
site/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx       # Ana sayfa
│   │   ├── products/      # Ürün listesi
│   │   ├── product/[id]/  # Ürün detayı
│   │   ├── cart/          # Alışveriş sepeti
│   │   ├── checkout/      # Ödeme işlemi
│   │   ├── login/         # Giriş sayfası
│   │   ├── register/      # Kayıt sayfası
│   │   ├── admin/         # Admin paneli
│   │   ├── about/         # Hakkında
│   │   ├── contact/       # İletişim
│   │   ├── api/           # API routes
│   │   └── layout.tsx     # Root layout
│   ├── components/        # Reusable components
│   ├── store/            # Zustand stores
│   ├── data/             # Mock data
│   └── globals.css       # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🔐 Demo Giriş Bilgileri

### Kullanıcı Hesabı
- **E-mail**: user@example.com
- **Şifre**: demo123

### Admin Hesabı
- **E-mail**: admin@terlikmart.com
- **Şifre**: demo123

## 🎯 Başlıca Sayfalar

| URL | Açıklama |
|-----|----------|
| `/` | Ana sayfa - Öne çıkan ürünler |
| `/products` | Tüm ürünler - Filtreleme ve sıralama |
| `/product/1` | Ürün detayı sayfası |
| `/cart` | Alışveriş sepeti |
| `/checkout` | 3 adımlı ödeme işlemi |
| `/login` | Kullanıcı giriş |
| `/register` | Yeni hesap oluştur |
| `/admin` | Admin paneli (sadece adminler) |
| `/about` | Hakkında |
| `/contact` | İletişim formu |

## 💡 Kullanıcı Akışı

1. **Alışveriş**: `/` → `/products` → `/product/[id]`
2. **Sepet**: "Sepete Ekle" → `/cart`
3. **Ödeme**: `/cart` → `/checkout` (3 adım)
4. **Hesap**: `/register` veya `/login`
5. **Admin**: Admin hesabı ile `/admin` erişimi

## 🚀 Production'a Deploy

### Vercel'e Deploy Etme (Önerilen)
```bash
npm run build
vercel
```

### Docker ile
```bash
docker build -t terlikmart .
docker run -p 3000:3000 terlikmart
```

## 📄 Lisans

MIT License
