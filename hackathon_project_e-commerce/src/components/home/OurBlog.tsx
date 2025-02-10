"use client";

import useMyContext from "@/context/MyContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogSection = () => {
  const { products } = useMyContext();
  const [visibleProducts, setVisibleProducts] = useState(4); // Initially show 4 products

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 4); // Load 4 more products each time
  };

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Blogs</h2>
        <p className="text-gray-600 mb-8">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.slice(0, visibleProducts).map((item: Products) => {
            // Format createdAt to YYYY-MM-DD
            const formattedDate = new Date(item.createdAt).toISOString().split("T")[0];

            return (
              <div key={item._id} className="p-4 text-center">
                <Link href={`/shop/${item._id}`}>
                  <Image
                    width={250}
                    height={250}
                    src={item.imagePath}
                    alt={item.name}
                    className="w-[250px] h-[250px] object-cover rounded-md"
                  />
                </Link>
                <h2 className="text-xl font-bold mt-4">{item.name}</h2>

            
                <span className="pl-5">{formattedDate}</span> {/* Formatted Date */}
              </div>
            );
          })}
        </div>
        <button
          className="mt-8 px-6 py-3 rounded-md border-2 border-solid border-gray-300 text-lg"
          onClick={handleViewMore}
        >
          View All Posts
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
