

import Image from "next/image";

const GalleryProduct = ({product}:{product:Products}) => {

  
  return (
   
      <div className="flex p-5 space-x-5" key={product._id}>
        
          <Image
            
            src={product.imagePath}
            alt={product.name}
            className="w-20 h-20 rounded-lg border bg-customProucts"
            width={150}
        height={150}

          />
          <Image
            
            src={product.imagePath}
            alt={product.name}
            className="w-20 h-20 rounded-lg border bg-customProucts"
            width={150}
        height={150}

          />
          <Image
            
            src={product.imagePath}
            alt={product.name}
            className="w-20 h-20 rounded-lg border bg-customProucts"
            width={150}
        height={150}

          />
          <Image
            
            src={product.imagePath}
            alt={product.name}
            className="w-20 h-20 rounded-lg border bg-customProucts"
            width={150}
        height={150}

          />
         
           
      </div>
 
  );
};

export default GalleryProduct;
