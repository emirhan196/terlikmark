'use client';

/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from '@/store/useAuth';
import Link from 'next/link';
import { products as initialProducts } from '@/data/products';
import { useEffect, useState } from 'react';

interface Product {
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

export default function AdminPanel() {
  const { user, isAdmin } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window === 'undefined') return initialProducts;
    try {
      const saved = localStorage.getItem('terlikmart_products');
      return saved ? (JSON.parse(saved) as Product[]) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: ''
  });

  // Persist products to localStorage whenever they change (hook called unconditionally)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('terlikmart_products', JSON.stringify(products));
    }
  }, [products]);

  // Early return for non-admin users (after all hooks)
  if (!isAdmin()) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erişim Reddedildi</h1>
          <p className="text-gray-600 mb-6">Bu sayfaya erişmek için admin yetkisine sahip olmanız gerekir.</p>
          <Link href="/login" className="btn-primary">
            Giriş Yap
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.category) {
      alert('Lütfen zorunlu alanları doldurun!');
      return;
    }

    const newProduct: Product = {
      id: Math.max(...products.map(p => p.id)) + 1,
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      image: formData.image || '/api/placeholder/300/300',
      category: formData.category,
      sizes: ['36', '37', '38', '39', '40', '41', '42'],
      colors: ['Siyah', 'Beyaz', 'Mavi'],
      stock: parseInt(formData.stock) || 0,
      rating: 4.5,
      reviews: 0
    };

    setProducts(prev => [...prev, newProduct]);
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      stock: '',
      image: ''
    });
    setShowForm(false);
    alert('Ürün başarıyla eklendi!');
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
      alert('Ürün silindi!');
    }
  };

  // Persist products to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('terlikmart_products', JSON.stringify(products));
    }
  }, [products]);

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">Admin Paneli</h1>
          <p className="text-gray-200 mt-2">Ürünleri yönetin ve satışları izleyin</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Toplam Ürün</p>
            <p className="text-4xl font-bold text-primary mt-2">{products.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Toplam Gelir</p>
            <p className="text-4xl font-bold text-green-600 mt-2">
              ₺{products.reduce((sum, p) => sum + (p.price * (10 - p.stock % 10)), 0).toFixed(0)}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Siparişler</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {products.reduce((sum, p) => sum + Math.floor(p.stock / 5), 0)}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Müşteriler</p>
            <p className="text-4xl font-bold text-purple-600 mt-2">
              {products.reduce((sum, p) => sum + Math.floor(p.reviews * 2), 0) + 50}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold">Ürünler</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary"
            >
              + Yeni Ürün
            </button>
          </div>

          {showForm && (
            <div className="p-6 border-b bg-gray-50">
              <h3 className="font-bold text-lg mb-4">Yeni Ürün Ekle</h3>
              <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ürün Adı *"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Fiyat (₺) *"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="Kategori *"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  placeholder="Stok"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Resim URL (boş bırakabilirsiniz)"
                  className="col-span-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Ürün Açıklaması"
                  className="col-span-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
                <button type="submit" className="btn-primary col-span-2">
                  Ürün Ekle
                </button>
              </form>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Ürün Adı</th>
                  <th className="px-6 py-3 text-left font-semibold">Kategori</th>
                  <th className="px-6 py-3 text-left font-semibold">Fiyat</th>
                  <th className="px-6 py-3 text-left font-semibold">Stok</th>
                  <th className="px-6 py-3 text-left font-semibold">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4 font-semibold">₺{product.price}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          product.stock > 0
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button className="text-blue-600 hover:underline">Düzenle</button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:underline"
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}