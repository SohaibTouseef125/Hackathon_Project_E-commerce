"use client"
import { Button } from "@/components/ui/button"

import {
  Sheet,
 
  SheetContent,
 
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import useMyContext from "@/context/MyContext"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SheetDemo({product}:{product:Products}) {
 const {handlerAddToCart} = useMyContext()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button  className="bg-black text-white px-3 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base" onClick={() =>  handlerAddToCart(product._id, product.name, product.price, product.imagePath)}>Add To Cart</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          
        </SheetHeader>
        <div className="mt-6">
          <div className="flex items-center gap-4">
            <Image
              src={product?.imagePath} // Replace this with actual image URL
              alt={product?.name}
              className="w-16 h-16 rounded-md"
              width={64}
              height={64}
            />
            <div className="flex-1">
              <p className="font-medium">{product?.name}</p>
              <p className="text-gray-500 text-sm">
                1 x{" "}
                <span className="text-yellow-500 font-semibold">
                  {product.price}
                </span>
              </p>
            </div>
            <button className="text-gray-500 hover:text-red-500 transition">
              <X size={18}  />
              {/* x */}
            </button>
          </div>
        </div>

        {/* Subtotal */}
        <div className="mt-6 flex justify-between border-t pt-4">
          <p className="font-medium">Subtotal</p>
          <p className="font-bold text-yellow-500">Rs. 250,000.00</p>
        </div>
        
        <SheetFooter className="mt-4 flex flex-col gap-2">
          <Link href="/cart">
            <Button variant="outline" className="w-full">
              View Cart
            </Button>
          </Link>
          <Link href="/checkout">
            <Button className="w-full bg-black text-white">Checkout</Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
