"use client";

import React from 'react';
import styles from './FilterSidebar.module.css';

export default function FilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Filter Cars</h2>

      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        placeholder="Make, model..."
      />

      <h3>Category</h3>
      <div className={styles.categoryList}>
        <label>
          <input type="checkbox" />
          Luxury
        </label>
        <label>
          <input type="checkbox" />
          Sports
        </label>
        <label>
          <input type="checkbox" />
          Electric
        </label>
        <label>
          <input type="checkbox" />
          SUV
        </label>
      </div>

      {/* Você pode adicionar Price Range, Year, etc. */}

      <button className={styles.applyButton}>Apply Filters</button>
    </aside>
  );
}
