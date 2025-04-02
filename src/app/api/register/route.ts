import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validação simples no servidor
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    // Aqui você pode adicionar validações extras, como verificação de e-mail duplicado e hash da senha
    // Exemplo: if (await userExists(email)) { return NextResponse.json({ error: 'E-mail já cadastrado.' }, { status: 400 }); }

    // Simulação de sucesso (substitua com lógica real de criação do usuário)
    return NextResponse.json(
      { message: 'Usuário cadastrado com sucesso!' },
      { status: 201 }
    );
    } catch {
        return NextResponse.json(
        { error: 'Erro interno do servidor.' },
        { status: 500 }
        );
    }


}
