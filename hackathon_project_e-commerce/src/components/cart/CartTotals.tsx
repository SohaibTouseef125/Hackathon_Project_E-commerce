"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CartTotals() {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Function to calculate the subtotal from the cart items in localStorage
    const calculateSubtotal = () => {
      const storedCart = localStorage.getItem("item");
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        const newSubtotal = cartItems.reduce(
          (acc: number, item: { price: number; quantity: number }) =>
            acc + item.price * item.quantity,
          0
        );
        setSubtotal(newSubtotal);
      }
    };

    calculateSubtotal();

    // Listen for storage changes to dynamically update the subtotal
    window.addEventListener("storage", calculateSubtotal);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("storage", calculateSubtotal);
    };
  }, []);

  return (
    <div className="bg-yellow-50 p-6 shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>Rs. {subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>Rs. {subtotal.toLocaleString()}</span>
      </div>
      <Link href={"/checkout"}>
      <button className="w-full bg-yellow-500 text-white py-3 rounded mt-4 hover:bg-yellow-600">
        Check Out
      </button></Link>
    </div>
  );
}
