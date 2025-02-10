import FeaturesShop from "@/components/shop/FeaturesShop";
import HeroSectionShop from "@/components/shop/HeroSectionShop";
import PaginationShop from "@/components/shop/PaginationShop";
import ShowProducts from "@/components/shop/ShowProducts";


const Shop = () => {
  return (
    <>
      <HeroSectionShop />
      <ShowProducts />
      <PaginationShop />
      <FeaturesShop />
    </>
  );
};

export default Shop;
