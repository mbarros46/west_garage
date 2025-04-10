'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function CadastroPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (response.ok) {
        setMessage('Cadastro realizado com sucesso!');
        setTimeout(() => router.push('/signin'), 1500);
      } else {
        setMessage(data.error || 'Erro ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      setMessage('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Cadastro</h2>
        <input type="text" name="name" placeholder="Nome" onChange={handleChange} required style={styles.input} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
        <input type="password" name="password" placeholder="Senha" onChange={handleChange} required style={styles.input} />
        <button type="submit" style={styles.button}>Cadastrar</button>
        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center' as const
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  message: {
    marginTop: '10px',
    color: 'green',
    textAlign: 'center' as const
  }
};
