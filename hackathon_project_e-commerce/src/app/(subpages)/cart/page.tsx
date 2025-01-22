import Breadcrumb from "@/components/cart/Breadcrumb";
import CartTable from "@/components/cart/CartTable";
import CartTotals from "@/components/cart/CartTotals";
import FeaturesShop from "@/components/shop/FeaturesShop";


const Cart = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CartTable />
        </div>
        <CartTotals />
      </div>
      <FeaturesShop />
    </div>
  );
};

export default Cart;
