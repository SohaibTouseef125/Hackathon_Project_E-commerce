"use client";
import { navItems } from "@/app/data";
import useMyContext from "@/context/MyContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const HeaderShop = () => {
 const {cartItems,setCartItems} = useMyContext()
  const [search, setSearch] = useState("");
  const route = useRouter();
  const handlerForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    route.push(`/search/${search}`);
    setSearch("");
  };
  return (
    <nav className="bg-background shadow-md py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="hidden md:flex gap-8 ">
          {navItems.map((items, i) => (
            <>
              <Link
                href={items.link}
                className="hover:text-gray-700 cursor-pointer text-lg"
              >
                <li key={i}>{items.name} </li>
              </Link>
            </>
          ))}
        </ul>
        <ul className="flex flex-col pl-5 md:hidden gap-8 ">
          {navItems.map((items, i) => (
            <>
              <Link href={items.link}>
                <li key={i}>{items.name} </li>
              </Link>
            </>
          ))}
        </ul>
        <div className="flex justify-center gap-4 items-center">
          <Link href={"/account"}>
            <IoIosContact className="hover:text-gray-700 cursor-pointer text-3xl" />
          </Link>

          <form onSubmit={handlerForm} className="flex items-center gap-2 rounded-md bg-white py-1 px-2 ">
          <CiSearch  className="hover:text-gray-700 cursor-pointer text-2xl  " />
          <input type="text" name="search" id="search" placeholder="Search" className="outline-none  border-none " value={search} onChange={(e) => setSearch(e.target.value)} />
          </form>
          <CiHeart className="hover:text-gray-700 cursor-pointer text-3xl" />

          <Link href={"/cart"} className="relative">
            <IoCartOutline className="text-3xl hover:text-gray-700 cursor-pointer  " />
            {cartItems.length > 0 && (
              <span
                className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0"
                onClick={() => setCartItems.length + 1}
              >
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderShop;
