import { NextRequest, NextResponse } from 'next/server';

// Mock database
let products = [
  { id: 1, name: 'Konforlu Ev Terliği', price: 29.99, stock: 50 },
  { id: 2, name: 'Kadın Spa Terliği', price: 34.99, stock: 45 },
];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const newProduct = {
      id: Math.max(...products.map(p => p.id)) + 1,
      ...data,
    };
    
    products.push(newProduct);
    
    return NextResponse.json(
      { success: true, data: newProduct },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
