import ProductCardSkeleton from "@/components/common/skeleton/ProductCardSkeleton";
import ProductCard from "@/components/FeaturedEquipment/ProductCard";
import { useProductsQuery } from "@/redux/api/productsApi";


export default function Shop() {
  const { data, isLoading } = useProductsQuery(undefined);
  if (isLoading) {
    return (
      <div className="grid grid-cols-12 gap-4 px-4">
        {Array.from({ length: 10 }).map(
          (
            _,
            index // Render 10 skeletons
          ) => (
            <div className="col-span-4" key={index}>
              <ProductCardSkeleton key={index} />
            </div>
          )
        )}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-12 gap-4 px-4">
      {data?.map((product) => (
        <div className="col-span-4" key={product._id}>
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.img}
            description={product.description}
            price={product.price}
            discountPrice={product.discountedPrice}
          />
        </div>
      ))}
    </div>
  );
}
