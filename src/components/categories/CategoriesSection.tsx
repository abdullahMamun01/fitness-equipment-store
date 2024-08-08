import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { name: 'Cardio Equipment', image: 'https://media.gettyimages.com/id/80488814/photo/treadmills-in-a-row.jpg?s=612x612&w=gi&k=20&c=OTA6Fxy_1eAyG3ZdAtal_q28R4O_0Nsrc1BDgiO96s0=' },
  { name: 'Strength Training', image: 'https://media.gettyimages.com/id/1158242423/photo/view-from-above-dumbbells-and-exercise-equipment-knolling.jpg?s=612x612&w=gi&k=20&c=3qyQR1mf_cEuI3EP_uk1JOBrhE8rOPbl9I-EW6F2K6M=' },
  { name: 'Yoga & Pilates', image: 'https://media.gettyimages.com/id/80488814/photo/treadmills-in-a-row.jpg?s=612x612&w=gi&k=20&c=OTA6Fxy_1eAyG3ZdAtal_q28R4O_0Nsrc1BDgiO96s0=' },
  { name: 'Flexibility & Recovery', image: 'https://media.gettyimages.com/id/1158242423/photo/view-from-above-dumbbells-and-exercise-equipment-knolling.jpg?s=612x612&w=gi&k=20&c=3qyQR1mf_cEuI3EP_uk1JOBrhE8rOPbl9I-EW6F2K6M=' },
  { name: 'Accessories', image: 'https://media.gettyimages.com/id/80488814/photo/treadmills-in-a-row.jpg?s=612x612&w=gi&k=20&c=OTA6Fxy_1eAyG3ZdAtal_q28R4O_0Nsrc1BDgiO96s0=' },
  { name: 'Functional Training', image: 'https://media.gettyimages.com/id/1158242423/photo/view-from-above-dumbbells-and-exercise-equipment-knolling.jpg?s=612x612&w=gi&k=20&c=3qyQR1mf_cEuI3EP_uk1JOBrhE8rOPbl9I-EW6F2K6M=' },
  { name: 'Aerobic & Anaerobic Training', image: 'https://media.gettyimages.com/id/1158242423/photo/view-from-above-dumbbells-and-exercise-equipment-knolling.jpg?s=612x612&w=gi&k=20&c=3qyQR1mf_cEuI3EP_uk1JOBrhE8rOPbl9I-EW6F2K6M=' },
  { name: 'Boxing & MMA', image: 'https://picsum.photos/300/200?random=8https://media.gettyimages.com/id/1158242423/photo/view-from-above-dumbbells-and-exercise-equipment-knolling.jpg?s=612x612&w=gi&k=20&c=3qyQR1mf_cEuI3EP_uk1JOBrhE8rOPbl9I-EW6F2K6M=' },
  { name: 'Outdoor Fitness', image: 'https://media.gettyimages.com/id/80488814/photo/treadmills-in-a-row.jpg?s=612x612&w=gi&k=20&c=OTA6Fxy_1eAyG3ZdAtal_q28R4O_0Nsrc1BDgiO96s0=' },
  { name: 'Specialty Equipment', image: 'https://media.gettyimages.com/id/1158242423/photo/view-from-above-dumbbells-and-exercise-equipment-knolling.jpg?s=612x612&w=gi&k=20&c=3qyQR1mf_cEuI3EP_uk1JOBrhE8rOPbl9I-EW6F2K6M=' },
  { name: 'Kids\' Fitness', image: 'https://media.gettyimages.com/id/80488814/photo/treadmills-in-a-row.jpg?s=612x612&w=gi&k=20&c=OTA6Fxy_1eAyG3ZdAtal_q28R4O_0Nsrc1BDgiO96s0=' },
];


export default function CategoriesSection() {
  return (
    <div className="md:container mx-auto py-14">
    <h1 className="text-primary text-3xl font-bold text-center mb-14 uppercase">Categories by Fitness Equipment</h1>
    <div className="grid grid-cols-12  gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          categoryName={category.name}
          imageUrl={category.image}
        />
      ))}
    </div>
    
  </div>
  );
}
