"use client";

import React from "react";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import CarCard from "./components/CarCard/CarCard";

export default function HomePage() {
  const featuredCars = [
    {
      name: "Ferrari SF90 Stradale",
      year: 2023,
      mileage: 7000,
      engine: "4.0 V8 PHEV",
      type: "Coupé",
      price: 6000000,
      category: "Supercarro",
      image: "car-placeholder.png"   
    },
    {
      name: "BMW M8 Competition",
      year: 2022,
      mileage: 4500,
      engine: "4.4L V8",
      type: "Coupe",
      price: 1000000,
      category: "Sports",
      image: "bmw_m8.png"   
    },
    {
      name: "Porsche 911 Turbo S",
      year: 2023,
      mileage: 1500,
      engine: "3.8L Twin-Turbo",
      type: "Sports",
      price: 4400000,
      category: "Luxury",
      image: "porsche_911_turbo_s.png"
    },
    {
      name: "Audi RS e-tron GT",
      year: 2023,
      mileage: 11200,
      engine: "Electric",
      type: "Sedan",
      price: 1100000,
      category: "Electric",
      image: "audi_rs_e-tron_gt.png"
    },
    {
      name: "Lamborghini Huracán Evo",
      year: 2022,
      mileage: 1300,
      engine: "5.2L V10",
      type: "Supercar",
      price: 4400000,
      category: "Sports",
      image: "lambo.png"
    },
    {
      name: "Bentley Continental GT",
      year: 2023,
      mileage: 1800,
      engine: "6.0L W12",
      type: "Grand Tourer",
      price: 3650000,
      category: "Luxury",
      image: "bentley_continental_gt.png"
    }
  ];

  return (
    <main>
      <HeroBanner />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
         Veículos de destaque
        </h2>

        <div style={{ display: "flex", gap: "1rem" }}>
          <FilterSidebar />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {featuredCars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
