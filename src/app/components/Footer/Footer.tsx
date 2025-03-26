"use client";

import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Luxury Motors. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <a href="#">Privacidade</a>
        <a href="#">Termos</a>
        <a href="#">Contato</a>
      </div>
    </footer>
  );
}
