"use client";


import useMyContext from "@/context/MyContext";
import Image from "next/image";




export default function CartTable() {
 const { cartItems,removeFromCart} = useMyContext()
 console.log("cartItems",cartItems);
 
  

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
            cartItems.map((item:Products) => (
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
                <td className="p-4">Rs. {item.price}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={item.stockLevel}
                    min={1}
                    
                    className="border rounded w-16 text-center"
                  />
                </td>
                <td className="p-4">Rs. </td>
                <td className="p-4 text-red-500 cursor-pointer">
                  <button onClick={() => removeFromCart(item._id)}
                    className="material-icons"
                   
                  >
                    delete
                  </button>
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
