import { Card } from "../ui/card";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import imageUrlParser from "@/lib/imageUrlParser";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, useCart } from "@/redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import { useCallback } from "react";

type Equipment = {
  name: string;
  id: string;
  image: string;
  description: string;
  price: number;
  discountPrice: number;
};

export default function ProductCard({
  id,
  image,
  name,
  description,
  price,
  discountPrice,
}: Equipment) {
  const dispatch = useAppDispatch();
  const handleAddToCart = useCallback(() => {

      dispatch(
        addToCart({
          id,
          image,
          name,
          description,
          price: discountPrice,
          quantity: 1,
        })
      );
      toast.success("Product add to cart successfully", {
        position: "top-right",
      });
    
  }, []);

  return (
    <Card className=" shadow-md group w-full mx-auto ">
      <div className="relative">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-lg shadow-lg flex justify-center w-full h-full">
          <img
            className="w-full md:h-[200px] h-[150px] p-3 object-contain px-1 transition-transform duration-700 transform group-hover:scale-125"
            src={imageUrlParser(image)}
            // loading="lazy"
            alt={name}
          />
        </div>
        {/* Section 1 */}
        <div className="absolute top-[10px] right-[10px] bg-secondary border w-[50px] h-[90px] flex justify-between flex-col items-center py-2 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">
          <Search className="text-primary" />
          <Heart className="text-primary" />
        </div>
        {/* Section 2 */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-1 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">
          <Button className="bg-secondary text-primary rounded-none hover:bg-secondary">
            <Link to={`/product/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>

      <div className="md:px-5 px-3 py-6 bg-primary ">
        <h1 className="text-gray-100 font-bold text-[13px] md:text-[20px] leading-tight">
          {name.slice(0, 20)}
        </h1>
        <p className="text-gray-300 md:visible hidden text-sm my-2 text-[12px] md:text-[15px] leading-relaxed">
          {description.slice(0, 50)}...
        </p>
        <span className="text-gray-300 line-through decoration-red-600 font-semibold text-[14px]">
          ${price}
        </span>
        <span className="text-secondary font-semibold text-[13px] md:text-[18px] ml-4">
          ${discountPrice}
        </span>
      </div>
      <Button
        onClick={() => handleAddToCart()}
        className="bg-secondary rounded-none text-primary w-full mt-auto hover:bg-secondary z-10">
        <ShoppingBag className="mr-2" /> Add To Cart
      </Button>
    </Card>
  );
}
