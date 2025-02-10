"use client";
import useMyContext from "@/context/MyContext";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

const RelatedProducts = ({ category }: { category: string }) => {
  const { products } = useMyContext();
  const [relatedProducts, setRelatedProducts] = useState<Products[]>([]);
  useEffect(() => {
    setRelatedProducts(
      products.filter((product: Products) => product.category === category)
    );
  }, [products, category]);
  

  // if (!relatedProducts.length) {
  //   return <p>No related products found!</p>; // Agar data nahi hai to ye show karega.
  // }

  return (
    <div className="mt-12">
      <h2 className="text-center text-3xl font-bold">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-11">
        <>
          {relatedProducts.map((item: Products) => (
            <div className="text-center  p-4" key={item._id}>
              <Link href={`/shop/${item._id}`}>
                <Image
                  src={item?.imagePath}
                  alt={item?.name}
                  width={200}
                  height={200}
                  className="w-[200xp] h-[200px] mx-auto rounded-sm"
                />
              </Link>
              <h3 className="mt-2 font-semibold">{item?.name}</h3>
              <p className="text-gray-500">Rs. {item?.price}</p>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default RelatedProducts;
