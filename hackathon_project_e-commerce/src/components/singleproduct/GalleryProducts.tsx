/* eslint-disable @typescript-eslint/no-explicit-any */
// import { images } from "@/app/data";
import Image from "next/image";

const GalleryProduct = ({product}:{product:Products}) => {
  
  return (
   
      <div className="space-x-5 flex p-5 ">
        
          <Image
            key={product._id}
            src={product.imagePath}
            alt={`Gallery ${product.imagePath }`}
            className="w-20 h-20 rounded-lg border bg-customProucts"
            width={150}
        height={150}

          />
          <Image
            key={product._id}
            src={product.imagePath}
            alt={`Gallery ${product._id }`}
            className="w-20 h-20 rounded-lg border bg-customProucts"
            width={150}
        height={150}

          />
          <Image
            key={product._id}
            src={product.imagePath}
            alt={`Gallery ${product._id }`}
            className="w-20 h-20 rounded-lg border bg-customProucts"
            width={150}
        height={150}

          />
      
      </div>
 
  );
};

export default GalleryProduct;
