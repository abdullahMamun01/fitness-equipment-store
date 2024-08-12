import React from "react";
import ProductCard from "./ProductCard";
import { useProductsQuery } from "@/redux/api/productsApi";
import ProductCardSkeleton from "../common/skeleton/ProductCardSkeleton";

export default function FeaturedEquipmentsSection() {
  const { data, isLoading, isError } = useProductsQuery(undefined);
  console.log(data, 'data');

  return (
    <div className="md:container mx-auto py-14">
      <h1 className="text-primary text-3xl font-bold text-center mb-14 uppercase">
        Featured Equipments
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 overflow-hidden ">
        {isLoading &&
          Array.from({ length: 10 }, (_, index) => (
            <ProductCardSkeleton key={index} />
          ))}

        {data?.map((equipment) => (
          <ProductCard
            key={equipment._id}
            id={equipment._id}
            name={equipment.name}
            image={equipment.img}
            description={equipment.description}
            price={equipment.price}
            discountPrice={equipment.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
}
