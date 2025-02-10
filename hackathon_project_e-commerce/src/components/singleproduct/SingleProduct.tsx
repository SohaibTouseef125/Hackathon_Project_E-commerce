"use client";
import GalleryProduct from "@/components/singleproduct/GalleryProducts";
import Breadcrumb from "./BreadcrumbProduct";

import AdditionalInfo from "./AdditionalInfo";
import RelatedProducts from "./RelatedProducts";

import Image from "next/image";

import ProductsRightDetail from "./ProductsRightDetail";

function SingleProduct({ product }: { product: Products }) {
  if (!product) {
    return <p>Product not found!</p>;
  }

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
            className="sm:w-[200px] sm:h-[200px] md:w-[450px] md:h-[450px] rounded-md"
          />
          <GalleryProduct product={product} />
        </div>
        <ProductsRightDetail product={product} />
      </div>

      {/* <CartSidebar key={product?._id} product={product} /> */}
      <div className=" mt-[550px] sm:mt-[30%] md:mt-0">
        <AdditionalInfo />
      </div>
      <RelatedProducts key={product?._id} category={product?.category} />
    </div>
  );
}
export default SingleProduct;
