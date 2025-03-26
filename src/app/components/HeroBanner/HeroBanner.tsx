"use client";

import React from 'react';
import Image from 'next/image';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <section className={styles.heroContainer}>
      {/* Um “slide” de exemplo */}
      <div className={styles.heroSlide}>
        {/* Logo WG grande (pode ser outro arquivo se quiser) */}
        <Image
          src="/images/wg_logo.png"
          alt="West Garage Big Logo"
          width={120}
          height={120}
          className={styles.heroLogo}
        />

        <h1 className={styles.heroTitle}>Discover Luxury</h1>
        <p className={styles.heroSubtitle}>
          Explore our collection of premium vehicles
        </p>
        <button className={styles.heroButton}>Browse Now</button>
      </div>
    </section>
  );
}
