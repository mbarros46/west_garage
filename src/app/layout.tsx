import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/app/components/Header/Header';
import { Footer } from '@/app/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'West Garage',
  description: 'Explore nossa coleção de veículos premium',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
