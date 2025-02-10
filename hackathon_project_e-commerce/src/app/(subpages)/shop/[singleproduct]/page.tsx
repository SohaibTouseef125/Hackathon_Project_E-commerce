"use client"

import SingleProduct from "@/components/singleproduct/SingleProduct";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";



export default function ProductDetail({params}:{params:{singleproduct:string}}) {
         
  const [product, setProduct] = useState<Products>({} as Products);
  useEffect(() => {
    const fetchData = async () => {
      const queryUrl = `*[_type == "product" &&_id == "${params.singleproduct}"]|order(_createdAt asc)[0]{
        _id,
        name,
        price,
        "imagePath": image.asset->url,
        description,
        stockLevel,
        discountPercentage,
        isFeaturedProduct,
        category
        }`;
      const response = await client.fetch(queryUrl);
      setProduct(response);
      console.log("producted", product);
    };
    fetchData();
  }, [product, params.singleproduct]);

  
  return (
    <SingleProduct product={product} />
)
}

// export async function generateStaticParams() {
//   const query = `*[_type == "product"]{ _id }`;
//   const products = await client.fetch(query);

//   return products.map((product: { _id: string }) => ({
//     singleproduct: product._id,
//   }));
// }
