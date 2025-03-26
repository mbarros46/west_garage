"use client";

import React from "react";
import Image from "next/image";
import styles from "./CarCard.module.css";

interface CarCardProps {
  name: string;
  year: number;
  mileage: number;
  engine: string;
  type: string;
  price: number;
  category: string;
  image?: string;
}

export default function CarCard(props: CarCardProps) {
  const { name, year, mileage, engine, type, price, category, image } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {image ? (
          <Image
            src={`/images/${image}`} 
            alt={name}
            width={260}
            height={160}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <p>No Image</p>
        )}
      </div>

      <h3>{name}</h3>
      <p>
        {year} • {mileage.toLocaleString()} km • {category}
      </p>
      <p>
        Engine: {engine} - {type}
      </p>

      <p className={styles.price}>${price.toLocaleString()}</p>

      <div className={styles.buttonGroup}>
        <button>Details</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
