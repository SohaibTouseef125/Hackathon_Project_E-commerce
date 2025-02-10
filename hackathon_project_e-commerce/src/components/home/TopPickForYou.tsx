"use client";
import { useState } from "react";
import useMyContext from "@/context/MyContext";
import Image from "next/image";
import Link from "next/link";

const TopPickForYou = () => {
  const { products } = useMyContext();
  const [visibleProducts, setVisibleProducts] = useState(4); // Initially show 4 products

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 4); // Load 4 more products each time
  };

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Top Picks For You</h2>
        <p className="text-gray-600 mb-8">
          Find a bright idea to suit your taste...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.slice(0, visibleProducts).map((item: Products) => (
            <div key={item._id} className="p-4 text-center">
              <Link href={`/shop/${item._id}`}>
                <Image
                  width={900}
                  height={192}
                  src={item.imagePath}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <h3 className="mt-2 font-semibold">{item.name}</h3>
              <p className="text-gray-600">Rs. {item.price}</p>
            </div>
          ))}
        </div>

        {visibleProducts < products.length && (
          <button
            onClick={handleViewMore}
           className="mt-8 px-6 py-3 rounded-md border-2 border-solid border-gray-300 text-lg"
          >
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default TopPickForYou;
