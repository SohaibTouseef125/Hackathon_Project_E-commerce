// import Image from "next/image";
"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SideTable = () => {
  const [products, setproducts] = useState<Products[]>([]);

  useEffect(() => {
    const getData = async () => {
      const queryURL = `*[_type == "product"] | order(_createdAt asc)[0..2]{
            _id,
            name,
            price,
            "imagePath": image.asset->url
          }`;
      const responseData: Products[] = await client.fetch(queryURL);
      setproducts(responseData);
      console.log(responseData);
    };
    getData();
  }, []);

  return (
    <section className="py-16 bg-customSideTable">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <>
          <div className="mx-5 text-center" key={item._id}>
            <Image src={item.imagePath} alt="Side Table" width={200} height={200} className="w-[350px] h-[350px]" />
            <h2 className="text-xl font-bold mt-4">{item.name}</h2>
            <Link href="#" className="">
              View More
            </Link>
          </div>
          </>
        ))}
        {/* <div className="text-center">
          <Image src={Image2} alt="Side Table" />
          <h2 className="text-xl font-bold mt-4">Side Table</h2>
          <Link href="#" className="">View More</Link>
        </div>
        <div className="text-center">
          <Image src={Image3} alt="Side Table 2" />
          <h2 className="text-xl font-bold mt-4">Side Table</h2>
          <Link href="#" className="">View More</Link>
        </div> */}
      </div>
    </section>
  );
};

export default SideTable;
