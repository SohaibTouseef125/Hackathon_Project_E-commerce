"use client";
import Image from "next/image";

import useMyContext from "@/context/MyContext";
import { useState } from "react";

const BlogCard = () => {
  const { products } = useMyContext();
  const [visibleProducts, setVisibleProducts] = useState(3); // Initially show 4 products

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 3); // Load 4 more products each time
  };
  return (
    <>
      {products ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.slice(0, visibleProducts).map((product: Products) => {
            const formattedDate = new Date(product.createdAt)
              .toISOString()
              .split("T")[0];
            return (
              <div key={product._id} className="w-full grid grid-cols-1  gap-4">
                <div className="bg-white  shadow rounded-lg overflow-hidden mb-8  ">
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    className="w-[250px] h-[250px] object-cover "
                    width={250}
                    height={250}
                  />
                  <div className="p-4">
                    <span className="opacity-40">
                      Admin{" "}
                      <span>
                        {formattedDate} <span>Wood</span>
                      </span>
                    </span>
                    <p className=" text-xl font-bold mb-2">{product.name}</p>
                    <p className=" text-xl font-bold mb-2">
                      {product.description}
                    </p>
                    <h2 className="text-xl font-bold mb-2"></h2>
                    <p className="text-gray-600 mb-4"></p>
                    {visibleProducts < products.length && (
                      <button
                        onClick={handleViewMore}
                        className="mt-8 px-6 py-3 rounded-md border-2 border-solid border-gray-300 text-lg"
                      >
                        Read More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default BlogCard;
