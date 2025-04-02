"use client";

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <h1 className={styles.logo}>
            <span className={styles.logoBlue}>West</span> Garage
          </h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/sell-your-car" className={styles.navLink}>
          Vender seu Carro
        </Link>
        <Link href="/browse-cars" className={styles.navLink}>
          Ver Carros
        </Link>
        <Link href="/about" className={`${styles.navLink} ${styles.active}`}>
          Sobre Nós
        </Link>
        <Link href="/signin">
          <button className={styles.signInButton}>Sign In</button>
        </Link>
      </nav>
    </header>
  );
}
