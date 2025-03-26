"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      {/* Texto do site sem logo */}
      <div className={styles.logoText}>West Garage</div>

      {/* Menu de navegação */}
      <nav className={styles.navLinks}>
        <Link href="/browse">Ver Carros</Link>
        <Link href="/about">Sobre Nós</Link>
        <Link href="/sell">Vender seu Carro</Link>
        <Link href="/signin">Entrar</Link>
      </nav>
    </header>
  );
}
