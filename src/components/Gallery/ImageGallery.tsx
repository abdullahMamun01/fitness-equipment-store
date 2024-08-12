import imageUrlParser from "@/lib/imageUrlParser";
import { useProductsQuery } from "@/redux/api/productsApi";

import Masonry from "react-masonry-css";
import './masonary.css'
function generateImage(id: string) {
  const img = new Image();
  const url = imageUrlParser(id);
  img.src = url;
  return {
    src: url,
    width: img.width,
    height: img.height,
  };
}

export default function ImageGallery() {
  const { data } = useProductsQuery(undefined);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 5,
  };
 
  return (
    <div className="masonry-container container py-2">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {data?.map((pd, index) => (
          <img
            key={index}
            src={imageUrlParser(pd.img)}
            alt={`Image ${index}`}
            className="masonry-image border shadow-lg p-4"
          />
        ))}
        
      </Masonry>
    </div>
  );
}
