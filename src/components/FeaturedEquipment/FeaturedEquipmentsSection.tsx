// FeaturedEquipmentsSection.jsx
import React from "react";
import FeaturedEquipmentCard from "./FeaturedEquipmentCard";

const featuredEquipments = [
  {
    name: "Treadmill",
    image:
      "https://shahsports.com.bd/wp-content/uploads/2022/06/reebok-a2-0-treadmill-silver-1-300x300.webp",
    description: "High-quality treadmill for your cardio workouts.",
    price: "$799.99",
  },
  {
    name: "Dumbbells",
    image:
      "https://shahsports.com.bd/wp-content/uploads/2022/06/reebok-a2-0-treadmill-silver-1-300x300.webp",
    description: "Set of adjustable dumbbells for strength training.",
    price: "$199.99",
  },
  {
    name: "Yoga Mat",
    image:
      "https://shahsports.com.bd/wp-content/uploads/2022/06/reebok-a2-0-treadmill-silver-1-300x300.webp",
    description: "Comfortable yoga mat for all your stretching needs.",
    price: "$29.99",
  },
  {
    name: "Treadmill2 ",
    image:
      "https://shahsports.com.bd/wp-content/uploads/2022/06/reebok-a2-0-treadmill-silver-1-300x300.webp",
    description: "High-quality treadmill for your cardio workouts.",
    price: "$799.99",
  },
];

export default function FeaturedEquipmentsSection() {
  return (
    <div className="md:container mx-auto py-14">
      <h1 className="text-primary text-3xl font-bold text-center mb-14 uppercase">
        Featured Equipments
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredEquipments.map((equipment) => (
          <FeaturedEquipmentCard
            key={equipment.name}
            name={equipment.name}
            image={equipment.image}
            description={equipment.description}
            price={equipment.price}
          />
        ))}
      </div>
    </div>
  );
}
