// import Image from "next/image";
"use client";
import useMyContext from "@/context/MyContext";
import { Image } from "next-sanity/image";
import Link from "next/link";
import { useState } from "react";

const SideTable = () => {
  const {products} = useMyContext();
  const [visibleProducts, setVisibleProducts] = useState(4); // Initially show 4 products
  
    const handleViewMore = () => {
      setVisibleProducts((prev) => prev + 4); // Load 4 more products each time
    };

  return (
    <section className="py-16 bg-customSideTable">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {products.slice(0, visibleProducts).map((item: Products) => (
          <>
          <div className="mx-5 text-center" key={item._id}>
            <Link href={`/shop/${item._id}`}>
            <Image src={item.imagePath} alt={item._id} width={250} height={250} className="w-[250px] h-[250px]" />
            </Link>

            <h2 className="text-xl font-bold mt-4">{item.name}</h2>
            <button className="mt-2" onClick={handleViewMore}>
              View More
            </button>
          </div>
          </>
        ))}
        
      </div>
    </section>
  );
};

export default SideTable;
