"use client";
import SearchProducts from "@/components/singleproduct/SearchProducts";
import useMyContext from "@/context/MyContext";
import { useEffect, useState } from "react";

const RelatedProducts = ({ params }: { params: { search: string | string[] } }) => {
  const { products } = useMyContext();
  const [searchProducts, setSearchProducts] = useState<Products[]>([]);

  useEffect(() => {
    let searchQuery = "";

    // Check if params.search is an array and has a second index
    if (Array.isArray(params.search) && params.search.length > 1) {
      searchQuery = params.search[1]?.toLowerCase() || "";
    } else if (typeof params.search === "string") {
      searchQuery = params.search.toLowerCase();
    }

    if (searchQuery === "") {
      // If empty, show all products
      setSearchProducts(products);
    } else {
      // Filter products based on the search query
      setSearchProducts(
        products.filter((product: Products) => product.name?.toLowerCase().includes(searchQuery))
      );
    }
  }, [params.search, products]);

  return <SearchProducts searchProducts={searchProducts} />;
};

export default RelatedProducts;
