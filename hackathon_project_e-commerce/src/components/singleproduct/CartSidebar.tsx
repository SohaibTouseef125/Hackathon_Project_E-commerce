"use client"
import Image from "next/image";
import { useState } from "react";

const CartSidebar = ({product}:{product:Products}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
       <button
        className="fixed top-16 right-0 bg-black text-white px-4 py-2 rounded "
        onClick={() => setIsOpen(true)}
      >
        Open Cart
      </button>
      {isOpen && (
        <div>
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6">
          <button className="text-gray-500" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          <p>Cart items go here...</p>
        </div>
     
        <div className="p-6">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <div className="mt-4">
            <div className="flex items-center gap-4">
              <Image
                src={product?.imagePath}
                alt={product?.name}
                className="w-16 h-16 rounded"
                width={150}
                height={150}
              />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-gray-500">1 x {product.price}</p>
              </div>
              <button className="text-red-500">×</button>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <p className="font-semibold">Subtotal</p>
            <p className="font-bold">Rs. {product.price * 1}</p>
          </div>
          <div className="mt-4">
            <button className="w-full bg-black text-white py-2 rounded">
              View Cart
            </button>
            <button className="w-full mt-2 border border-black py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>)}
      {/* </div> */}
    </>
  );
};

export default CartSidebar;
