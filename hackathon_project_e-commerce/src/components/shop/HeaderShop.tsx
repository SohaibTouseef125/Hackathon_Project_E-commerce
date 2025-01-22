import { navItems } from "@/app/data";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";

const HeaderShop = () => {
  return (
    <nav className="bg-background shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="hidden md:flex gap-8 ">
          {navItems.map((items, i) => (
            <>
              <Link href={items.link} className="hover:text-gray-700 cursor-pointer text-lg">
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
            
            <IoIosContact
              size={24}
              className="hover:text-gray-700 cursor-pointer"
            />
          </Link>
          <CiSearch size={24} className="hover:text-gray-700 cursor-pointer" />
          <CiHeart size={24} className="hover:text-gray-700 cursor-pointer" />
          
           <Link href="/cart">
           <CiShoppingCart
            size={24}
            className="hover:text-gray-700 cursor-pointer"
          />
       </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderShop;
