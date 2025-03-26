"use client";

import React from 'react';
import styles from './FilterSidebar.module.css';

export default function FilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Filtrar Carros</h2>

      <label htmlFor="search">Pesquisar</label>
      <input
        id="search"
        type="text"
        placeholder="Marca, modelo..."
      />

      <h3>Categoria</h3>
      <div className={styles.categoryList}>
        <label>
          <input type="checkbox" />
          Luxo
        </label>
        <label>
          <input type="checkbox" />
          Esportivo
        </label>
        <label>
          <input type="checkbox" />
          Elétrico
        </label>
        <label>
          <input type="checkbox" />
          SUV
        </label>
      </div>

      

      <button className={styles.applyButton}>Aplicar Filtros</button>
    </aside>
  );
}
