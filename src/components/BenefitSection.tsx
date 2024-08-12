import { CircleCheck, ShieldCheck, ThumbsUp, Truck } from "lucide-react";
import React from "react";

const benefits = [
  {
    title: "High-Quality Equipment",
    icon: <Truck />,
  },
  {
    title: "Secure Shopping Guarantee",
    icon: <ShieldCheck />,
  },
  {
    title: "100% Customer Satisfaction",
    icon: <ThumbsUp />,
  },
  {
    title: "Product Guarantee",
    icon: <CircleCheck />,
  },
];
//https://media.istockphoto.com/id/1431983463/photo/dumbbells-put-on-racks-in-a-gym.jpg?s=1024x1024&w=is&k=20&c=CU5Y1S2VsWxfXFkDoFPaH1rrwWv_GbKSojeLS72r104=
const BenefitSection = () => {
  return (
    <section className="py-14  bg-gray-100">
      <h1 className="text-primary text-2xl  md:text-3xl font-bold text-center  mb-14 uppercase">
        Why Choose Us?
      </h1>
      <div className="container px-4 mx-auto mb-8">
        <div className="max-w-xs md:max-w-xl xl:max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 text-secondary">
                <div className="flex items-center px-4 py-5 bg-primary border-2 border-primary rounded-md shadow min-h-[96px]">
                  <span className="inline-block mr-3">{benefit.icon}</span>
                  <h4 className="font-bold">{benefit.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
