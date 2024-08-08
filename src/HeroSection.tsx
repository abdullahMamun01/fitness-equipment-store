import React from "react";
import { Button } from "./components/ui/button";
import { MoveRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HeroSection() {
  return (
    <div
      className="md:container min-h-screen py-[40px] bg-[#101010] text-white flex justify-between items-center"
      //   style={{
      //     backgroundImage: `url('https://dreamthemebd.dreamitsolution.net/html/dreamhub/personal-trainer/assets/images/hero-thumb.png')`,
      //   }}
    >
      {/* Overlay with gradient and opacity */}
      {/* <div className="bg-primary bg-opacity-60"></div> */}

      {/* Content */}

      <div className=" w-[724px] h-[259px] p-6">
        <h1 className="text-[18px] leading-[24px] pb-[35px] text-secondary font-semibold">
          Wellcome to Muscle Max
        </h1>
        <h1 className="text-4xl md:text-[2.75rem] font-bold mb-4 leading-[3.5rem]">
          Build your body into <br /> healthy and strong body
        </h1>
        <h2 className="text-xl  mb-8 ">
          Top-Quality Fitness Equipment for Every Workout
        </h2>
        <Button className="bg-secondary text-primary hover:bg-primary px-[40px] py-[28px] text-[18px]">
          Shop Now <MoveRight className="ml-2 text-primary " />
        </Button>
      </div>
      <div>
        <img
          className="object-contain"
          loading="lazy"
          src="https://res.cloudinary.com/db5a7lbio/image/upload/v1723139322/others/hero-thumb_bjetwj.png"
          alt=""
        />
      </div>
    </div>
  );
}
