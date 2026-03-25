import { products } from '@/data/products';
import Link from 'next/link';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen container-custom py-12">
        <p className="text-2xl">❌ Ürün bulunamadı</p>
        <Link href="/products" className="btn-primary mt-4 inline-block">
          Ürünlere Geri Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <Link href="/products" className="text-primary hover:underline mb-6 inline-block">
          ← Ürünlere Geri Dön
        </Link>
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}
