import imageUrlParser from "@/lib/imageUrlParser";
import React, { useState } from "react";

type Images = {
    images: string[];
};

export default function ProductImageViewer({ images }: Images) {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col items-center ">
      <div className="w-full h-96 mx-auto overflow-hidden bg-gray-50 p-4 rounded-3xl relative">
        {currentImage && (
          <img
            className="w-full h-full object-contain transition-transform duration-500 ease-in-out transform"
            src={imageUrlParser(currentImage)}
            alt="Product Image"
            loading="lazy"
            key={currentImage} // Key helps in triggering the transition effect
          />
        )}
      </div>
      <div className="flex mt-5 space-x-3 overflow-x-auto ">
        {images.map((image, index) => (
          <img
            key={index}
            src={imageUrlParser(image)}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-20 border border-gray-100 object-contain cursor-pointer rounded-lg transition-transform duration-300 ease-in-out shadow-md ${
              image === currentImage ? 'border-2 border-blue-500' : ''
            }`}
            onMouseEnter={() => setCurrentImage(image)}
          />
        ))}
      </div>
    </div>
  );
}
