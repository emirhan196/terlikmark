export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  stock: number;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Konforlu Ev Terliği',
    description: 'Ana içerik veya başka bir amaç için ideal yumuşak ve rahat terlik',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://via.placeholder.com/300x300?text=Konforlu+Terlik',
    category: 'Erkek',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Siyah', 'Gri', 'Kahverengi'],
    stock: 50,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Kadın Spa Terliği',
    description: 'Ortopedik destek ile lüks spa terliği',
    price: 34.99,
    originalPrice: 59.99,
    image: 'https://via.placeholder.com/300x300?text=Spa+Terlik',
    category: 'Kadın',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pembe', 'Beyaz', 'Lavanta'],
    stock: 45,
    rating: 4.8,
    reviews: 267,
  },
  {
    id: 3,
    name: 'Çocuk Animasyon Terliği',
    description: 'Eğlenceli desenleri ile çocuklara özel terlik',
    price: 19.99,
    originalPrice: 34.99,
    image: 'https://via.placeholder.com/300x300?text=Cocuk+Terlik',
    category: 'Çocuk',
    sizes: ['21', '23', '25', '27'],
    colors: ['Mavi', 'Kırmızı', 'Sarı'],
    stock: 60,
    rating: 4.6,
    reviews: 94,
  },
  {
    id: 4,
    name: 'Erkek Deri Terliği',
    description: 'Gerçek deri ile yapılmış premium terlik',
    price: 44.99,
    originalPrice: 79.99,
    image: 'https://via.placeholder.com/300x300?text=Deri+Terlik',
    category: 'Erkek',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Siyah', 'Kahverengi', 'Bordo'],
    stock: 35,
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 5,
    name: 'Kadın Ortopedik Terliği',
    description: 'Ayak sağlığı için özel tasarlanmış terlik',
    price: 39.99,
    originalPrice: 69.99,
    image: 'https://via.placeholder.com/300x300?text=Ortopedik+Terlik',
    category: 'Kadın',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Siyah', 'Gri', 'Pembe'],
    stock: 40,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 6,
    name: 'Erkek Spor Terliği',
    description: 'Hafif ve nefes alan spor terliği',
    price: 24.99,
    originalPrice: 44.99,
    image: 'https://via.placeholder.com/300x300?text=Spor+Terlik',
    category: 'Erkek',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Siyah', 'Mavi', 'Beyaz'],
    stock: 55,
    rating: 4.4,
    reviews: 145,
  },
];
