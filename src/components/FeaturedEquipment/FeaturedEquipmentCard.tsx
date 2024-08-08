import React from "react";
import { Card } from "../ui/card";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

type Equipment = {
  name: string;
  image: string;
  description: string;
  price: string;
};

export default function FeaturedEquipmentCard({
  image,
  name,
  description,
  price,
}: Equipment) {
  return (
    <Card className="max-sm:mx-4 shadow-md group">
      <div className="relative">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-lg shadow-lg flex justify-center">
          <img
            className="rounded-t-lg object-cover transition-transform duration-700 transform group-hover:scale-125"
            src={image}
            loading="lazy"
            alt=""
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
            View Details
          </Button>
        </div>
      </div>

      <div className="px-5 py-6 bg-primary">
        <h1 className="text-gray-100 font-bold text-[20px] leading-tight">
          {name}
        </h1>
        <p className="text-gray-300 text-sm my-2 text-[15px] leading-relaxed">
          {description}
        </p>
        <span className="text-gray-300 line-through decoration-red-600 font-semibold text-[14px]">
          {price}
        </span>
        <span className="text-secondary font-semibold text-[18px] ml-4">
          {price}
        </span>
      </div>
      <Button className="bg-secondary rounded-none text-primary w-full mt-0 hover:bg-secondary z-10">
      <ShoppingBag className="mr-2" /> Add To Cart 
      </Button>
    </Card>
  );
}
/* 


import React from "react";
import { Card } from "../ui/card";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

type Equipment = {
  name: string;
  image: string;
  description: string;
  price: string;
};

export default function FeaturedEquipmentCard({
  image,
  name,
  description,
  price,
}: Equipment) {
  return (
    <Card className="max-sm:mx-4 shadow-md">
      <div className="relative group">

//         <div className="relative overflow-hidden rounded-lg shadow-lg flex justify-center">
//           <img
//             className="rounded-t-lg object-cover transition-transform duration-700 transform hover:scale-125"
//             src={image}
//             alt=""
//           />
//         </div>

//         <div className="absolute top-[10px] right-[10px] bg-secondary border w-[50px] h-[90px] flex justify-between flex-col items-center py-2 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">
//           <Search className="text-primary" />
//           <Heart className="text-primary" />
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-1 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">
//           <Button className="bg-secondary text-primary rounded-none hover:bg-secondary">
//             View Details
//           </Button>
//         </div>
//       </div>

//       <div className="px-5 py-6 bg-primary ">
//         <h1 className="text-gray-100 font-bold text-[20px] leading-tight">
//           {name}
//         </h1>
//         <p className="text-gray-300 text-sm my-2 text-[15px] leading-relaxed">
//           {description}
//         </p>
//         <span className="text-secondary font-semibold text-[18px]">
//           {price}
//         </span>
//       </div>
//       <Button className="bg-secondary rounded-none text-primary w-full mt-0 hover:bg-secondary">
//         Add to card <ShoppingBag className="ml-2" />
//       </Button>
//     </Card>
//   );
// }









*/