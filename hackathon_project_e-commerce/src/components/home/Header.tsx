"use client";
import Link from "next/link";
import { navItems } from "@/app/data";
import { IoIosContact } from "react-icons/io";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import useMyContext from "@/context/MyContext";

const Header = () => {
  const { cartItems, setCartItems } = useMyContext();
  const [search, setSearch] = useState("");
  const route = useRouter();
  const handlerFrom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    route.push(`/search/${search}`);
    setSearch("");
    //  console.log(search);
  };
  return (
    <nav className="bg-customHeader shadow-md py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <ul className=" md:flex items-center justify-center space-x-10 mx-auto ">
          {navItems.map((items) => (
            <>
              <Link
                href={items.link}
                key={items.id}
                className="hover:text-gray-700 cursor-pointer text-lg"
              >
                <li>{items.name} </li>
              </Link>
            </>
          ))}
        </ul>

        <div className=" md:flex  justify-center gap-10 items-center ">
          <Link href={"/account"}>
            <IoIosContact className="hover:text-gray-700 cursor-pointer text-3xl" />
          </Link>
          <form
            onSubmit={handlerFrom}
            className="flex items-center gap-2 rounded-md bg-white py-1 px-2 "
          >
            <CiSearch className="hover:text-gray-700 cursor-pointer text-2xl  " />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="outline-none  border-none "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
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

export default Header;
