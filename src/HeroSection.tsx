import React from "react";
import { Button } from "./components/ui/button";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className=" md:container px-8 min-h-screen py-6 md:py-[40px] bg-[#101010] text-white flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-[724px] h-auto md:h-[259px] md:p-6 py-6 ">
        <h1 className="text-md my-4 md:text-[18px] md:leading-[24px] md:pb-[35px] text-secondary font-semibold">
          Welcome to Muscle Max
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-[2.5rem] md:leading-[3.5rem]">
          Build your body into <br /> healthy and strong body
        </h1>
        <h2 className="text-md md:text-xl  mb-6 md:mb-8 text-gray-400">
          Top-Quality Fitness Equipment for Every Workout
        </h2>
        <Button className="bg-secondary text-primary hover:bg-secondary  px-6 md:px-[40px] py-6 md:py-[28px] text-lg md:text-[18px]">
          Shop Now <MoveRight className="ml-2 text-primary" />
        </Button>
      </div>
      <div className="w-full md:w-auto mt-6 md:mt-0 ">
        <img
          className="object-contain md:w-full md:h-auto  mx-auto"
          loading="lazy"
          src="https://res.cloudinary.com/db5a7lbio/image/upload/v1723139322/others/hero-thumb_bjetwj.webp"
          alt="Fitness Equipment"
        />
      </div>
    </div>
  );
}
