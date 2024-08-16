import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useProductsQuery } from "@/redux/api/productsApi";



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
