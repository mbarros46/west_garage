
import './globals.css';
import type { Metadata } from 'next';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'West Garage',
  description: 'Explore nossa coleção de veículos premium',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
