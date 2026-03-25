import { NextRequest, NextResponse } from 'next/server';

// Mock database
const users = [
  {
    id: 1,
    email: 'user@example.com',
    name: 'Demo User',
    password: 'demo123', // In production, use bcrypt
    isAdmin: false,
  },
  {
    id: 2,
    email: 'admin@terlikmart.com',
    name: 'Admin User',
    password: 'demo123',
    isAdmin: true,
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // In production, create and sign a JWT token
    const token = 'mock-jwt-token-' + user.id;

    return NextResponse.json(
      {
        success: true,
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
          token,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to login' },
      { status: 500 }
    );
  }
}
