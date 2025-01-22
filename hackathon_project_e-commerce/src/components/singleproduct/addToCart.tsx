"use client";

import { client } from "@/sanity/lib/client";


import GalleryProduct from "@/components/singleproduct/GalleryProducts";
import { useEffect, useState } from "react";

import Breadcrumb from "./BreadcrumbProduct";
import CartSidebar from "./CartSidebar";
import AdditionalInfo from "./AdditionalInfo";
import RelatedProducts from "./RelatedProducts";
import Image from "next/image";


function AddToCart({ params }: { params: { singleproduct: string } }) {
  const [product, setproduct] = useState<Products>();

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

  useEffect(() => {
    const getData = async () => {
      const queryUrl = `*[_type == "product" && _id == "${params.singleproduct}"][0]{
        _id,
        name,
        price,
        description,
        stockLeve,
        discountPercentage,
        isFeaturedProduct,
        category->{
          _id,
          name
    },
        "imagePath": image.asset->url,
     
        }`;
      const response: Products = await client.fetch(queryUrl);
      setproduct(response);
      // console.log(response);
    };
    getData();
  }, [params.singleproduct]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleCart = () => {
    if (!product) return;

    const existingItem = JSON.parse(localStorage.getItem("item") || "[]");

    const isProduct = existingItem.find(
      (item: Products) => item._id === product._id
    );

    let updatedCart;
    if (isProduct) {
      updatedCart = existingItem.map((item: Products) =>
        item._id === product._id ? { ...item } : item
      );
    } else {
      updatedCart = [...existingItem, product];
    }

    localStorage.setItem("item", JSON.stringify(updatedCart));
  };
  return (
    <div className="relative top-0 bottom-0">
      <Breadcrumb />
      {/* <CartSidebar /> */}
      <div className="">
        <div className="mx-[5%] mt-[50px] mr-[40%] md:mr-0">
          <Image
            src={product?.imagePath}
            alt={product?.name}
            width={450}
            height={450}
            className="sm:w-[200px] sm:h-[200px] md:w-[450px] md:h-[450px]"
          />
          <GalleryProduct key={product?._id} product={product} />
        </div>
        <div
          className="
  
   sm:w-[40%] md:w-auto  
   absolute   sm:bottom-[63%] sm:left-[60%]   md:bottom-[55%] md:left-[59%]  lg:bottom-[53%] lg:left-[50%] xl:bottom-[55%] xl:left-[35%]
    
  "
        >
          {/* <h1>{product?.isFeaturedProduct}</h1> */}
          <div className="relative mx-auto p-4 sm:mx-[10%] md:mx-[15%] lg:mx-[20%] space-y-4  ">
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
                        selectedSize === size
                          ? "border-black"
                          : "border-gray-300"
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
                onClick={() =>
                  setcartItem({ ...cartItem, qtn: ++cartItem.qtn })
                }
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>

              <button
                className="bg-black text-white px-3 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
                onClick={handleCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <CartSidebar key={product?._id} product={product} />
      <div className=" mt-[550px] sm:mt-[30%] md:mt-0">
        <AdditionalInfo />
      </div>
      <RelatedProducts />
    </div>
  );
}
export default AddToCart;



