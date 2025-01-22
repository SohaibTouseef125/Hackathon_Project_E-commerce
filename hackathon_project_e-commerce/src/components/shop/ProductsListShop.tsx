"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";




import Link from "next/link";
import { useEffect, useState } from "react";

const ProductListShop = () => {
  const [products, setproducts] = useState<Products[]>([]);
  useEffect(() => {
    const getData = async () => {
      const queryURL = `*[_type == "product"] | order(_createdAt asc){
        _id,
        name,
        price,
        "imagePath": image.asset->url}`;
      const responseData: Products[] = await client.fetch(queryURL);
      setproducts(responseData);
      console.log(responseData);
    };
    getData();
  }, []);
 if(!products) {
  return <p>Products Not found</p>
 }
 
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {products.map((product: Products) => (
          <div key={product?._id} className=" p-4 text-center">
            <Link href={`/shop/${product?._id}`}>
              <Image
                width={900}
                height={192}
                src={product?.imagePath}
                alt={product?.name}
                className="w-full h-48 object-cover"
              />
            </Link>
            <h3 className="mt-2 font-semibold">{product?.name}</h3>
            <p className="text-gray-600">Rs. {product?.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListShop;
