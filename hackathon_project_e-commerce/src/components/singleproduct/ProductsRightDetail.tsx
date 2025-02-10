"use client";

import { useState } from "react";
import { SheetDemo } from "./Sheet";

const ProductsRightDetail = ({ product }: { product: Products }) => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("yellow");

  const [cartItem, setcartItem] = useState({
    id: product?._id,
    name: product?.name,
    price: product?.price,
    image: product?.imagePath,
    discountPercentage: product?.discountPercentage,
    qtn: 1,
  });

  // const handleCart = () => {
  //   if (!product) return;
  //    alert("product add")
  //   const existingItem = JSON.parse(localStorage.getItem("item") || "[]");

  //   const isProduct = existingItem.find(
  //     (item: Products) => item._id === product._id
  //   );

  //   let updatedCart;
  //   if (isProduct) {
  //     updatedCart = existingItem.map((item: Products) =>
  //       item._id === product._id ? { ...item } : item
  //     );
  //   } else {
  //     updatedCart = [...existingItem, product];
  //   }

  //   localStorage.setItem("item", JSON.stringify(updatedCart));
  // };

  return (
    <div
      className="
  
  absolute top-0 left-0 w-full h-full 
    
  "
    >
      {/* <h1>{product?.isFeaturedProduct}</h1> */}
      <div className="w-full absolute   left-[50%] top-[3%] sm:left-[55%] sm:top-[3%] sm:w-[250px] md:left-[50%] md:w-[300px] md:top-[5%] lg:left-[40%] lg:top-[5%] lg:w-[400px]   mx-auto p-4 sm:mx-[10%] md:mx-[15%] lg:mx-[20%] space-y-4  ">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          {product?.name}
        </h1>
        <div className="flex items-center space-x-2">
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-600">
            {/* Rs. {product?.price}  */}
            {product?.price * cartItem.qtn}
          </p>
          <p className="font-bold text-gray-400 line-through">
            {product.discountPercentage > 0 &&
              (product.price -
                (product.price * product.discountPercentage) / 100) *
                cartItem.qtn}{" "}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-yellow-500 text-sm sm:text-base lg:text-lg">
            ★★★★☆
          </p>
          <span className="text-gray-500 text-xs sm:text-sm">
            5 Customer Reviews
          </span>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          {product?.description}
        </p>
        <div className="space-y-2">
          <div>
            <label className="font-semibold">Size:</label>
            <div className="flex gap-2 mt-1">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded border ${
                    selectedSize === size ? "border-black" : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="font-semibold">Color:</label>
            <div className="flex gap-2 mt-1">
              {["yellow", "blue", "purple"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setcartItem({
                ...cartItem,
                qtn: cartItem.qtn <= 1 ? 1 : --cartItem.qtn,
              })
            }
            className="px-2 py-1 bg-gray-300 rounded"
          >
            -
          </button>
          <span>{cartItem.qtn}</span>
          <button
            onClick={() => setcartItem({ ...cartItem, qtn: ++cartItem.qtn })}
            className="px-2 py-1 bg-gray-300 rounded"
          >
            +
          </button>

          <SheetDemo product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductsRightDetail;
