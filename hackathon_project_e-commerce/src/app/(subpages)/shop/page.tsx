import FeaturesShop from "@/components/shop/FeaturesShop";
import HeroSectionShop from "@/components/shop/HeroSectionShop";
import PaginationShop from "@/components/shop/PaginationShop";
import ProductListShop from "@/components/shop/ProductsListShop";

const Shop = () => {
  return (
    <>
      <HeroSectionShop />
      <ProductListShop />
      <PaginationShop />
      <FeaturesShop />
    </>
  );
};

export default Shop;
