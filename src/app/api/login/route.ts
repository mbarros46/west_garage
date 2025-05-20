import { NextResponse } from 'next/server';
import { generateToken } from '@/app/utils/jwt';
import bcrypt from 'bcryptjs';

// Simulated user database - In a real application, this would be in a database
const users = [
  {
    id: '1',
    email: 'test@example.com',
    // Password: 'password123'
    password: '$2a$10$E4UeR7s3L5bYc8fG9hK0mO.yZ.x/X1Q2.G3H4I5J6K7L8M9N0oP'
  }
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validação dos dados
    if (!email || !password) {
      return NextResponse.json(
        { error: 'E-mail e senha são obrigatórios.' },
        { status: 400 }
      );
    }

    // Find user by email
    const user = users.find(u => u.email === email);
    if (!user) {
      return NextResponse.json(
        { error: 'Credenciais inválidas.' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Credenciais inválidas.' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user.id);

    // Return success with token
    return NextResponse.json(
      { 
        message: 'Login realizado com sucesso!',
        token,
        user: {
          id: user.id,
          email: user.email
        }
      },
      { 
        status: 200,
        headers: {
          'Set-Cookie': `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`
        }
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}
