import React from "react";

const images = [
  'https://picsum.photos/300/200?random=1',
  'https://picsum.photos/300/300?random=2',
  'https://picsum.photos/400/300?random=3',
  'https://picsum.photos/200/300?random=4',
  'https://picsum.photos/300/400?random=5',
  'https://picsum.photos/300/300?random=6',
  'https://picsum.photos/400/400?random=7',
  'https://picsum.photos/300/200?random=8',
  'https://picsum.photos/200/200?random=9',
];

export default function ImageGallery() {
  return (
    <div className="md:container mx-auto py-8">
      <h1 className="text-primary text-3xl font-bold text-center mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
}
