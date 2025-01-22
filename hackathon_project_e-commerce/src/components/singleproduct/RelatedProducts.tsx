/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { client } from "@/sanity/lib/client";
import Image from "next/image";


import { useEffect, useState } from "react";

const RelatedProducts = () => {
  const [product, setproducts] = useState<Products[]>([]);

  useEffect(() => {
    const getData = async () => {
      const queryURL = `*[_type == "product"] | order(_createdAt asc)[0..3]{
            _id,
            name,
            price,
            "imagePath": image.asset->url
          }`;
      const responseData: Products[] = await client.fetch(queryURL);
      setproducts(responseData);
      // console.log(responseData);
    };
    getData();
  }, []);

  console.log(product);
  if (!product) {
    return <p>No related products found!</p>; // Agar data nahi hai to ye show karega.
  }

  return (
    <div className="mt-12">
      <h2 className="text-center text-3xl font-bold">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-11">
        <>
          {product.map((item: Products) => (
            <div key={item?._id} className="text-center  p-4">
              <Image
                src={item?.imagePath}
                alt={item?.name}
                width={200}
                height={200}
                className="h-40 mx-auto"
              />
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
