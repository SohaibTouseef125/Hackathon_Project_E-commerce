"use client";


import Image from "next/image";
import { useState, useEffect } from "react";


interface CartItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  quantity: number;
  subtotal: number;
}

export default function CartTable() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Fetch the cart items from localStorage
    const storedCart = localStorage.getItem("item");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart) as CartItem[]);
    }
  }, []);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    updatedCart[index].subtotal = updatedCart[index].price * newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem("item", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (index: number) => {
    // Filter out the item at the given index
    const updatedCart = cartItems.filter((_, i) => i !== index);
    // Update the state
    setCartItems(updatedCart);
    // Save the updated cart back to localStorage
    localStorage.setItem("item", JSON.stringify(updatedCart));
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-700">
            <th className="p-4">Product</th>
            <th className="p-4">Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Subtotal</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <tr key={item._id} className="border-t">
                <td className="p-4 flex items-center">
                  <Image
                    src={item.imagePath}
                    width={100}
                    height={100}
                    alt={item.name}
                    className="w-16 h-16 rounded mr-4"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="p-4">Rs. {item.price.toLocaleString()}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    className="border rounded w-16 text-center"
                  />
                </td>
                <td className="p-4">Rs. {item.subtotal}</td>
                <td className="p-4 text-red-500 cursor-pointer">
                  <span
                    className="material-icons"
                    onClick={() => handleRemoveItem(index)}
                  >
                    delete
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-4">
                No items in the cart.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
}
