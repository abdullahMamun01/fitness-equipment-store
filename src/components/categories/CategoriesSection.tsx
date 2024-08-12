import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useProductsQuery } from "@/redux/api/productsApi";

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
  const {data} = useProductsQuery(undefined)

  useEffect(() => {
    const apiKey = 'FPSX6a5e81dbafc64e1cb65a098c8fef1ef2'
    const query = 'dumbell'
    const fetchIcons = async () => {
      const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    
      try {
        const response = await fetch(`https://api.flaticon.com/v2/icons/search?q=${query}&api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching icons:', error);
        return [];
      }
    };

    fetchIcons()
  },[])


  return (
    <div className="md:container mx-auto py-14">
    <h1 className="text-primary text-xl md:text-3xl  font-bold text-center mb-14 uppercase ">Categories by Fitness Equipment</h1>
    <div className="grid grid-col-1 md:grid-cols-12   gap-4 px-4">
      {data?.map((category) => (
        <CategoryCard
          key={category._id}
          categoryName={category.name}
          imageUrl={category.images[2]}
        />
      ))}
    </div>
    
  </div>
  );
}
