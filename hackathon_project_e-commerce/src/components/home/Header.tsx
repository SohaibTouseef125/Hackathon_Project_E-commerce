import Link from "next/link";
import { navItems } from "@/app/data";
import { IoIosContact } from "react-icons/io";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <nav className="bg-customHeader shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className=" md:flex items-center justify-center space-x-10 mx-auto ">
          {navItems.map((items) => (
            <>
              <Link href={items.link} key={items.id} className="hover:text-gray-700 cursor-pointer text-lg">
                <li>{items.name} </li>
              </Link>
            </>
          ))}
        </ul>

        <div className=" md:flex  justify-center gap-10 items-center ">
          <Link href={"/account"}>
            <IoIosContact
              size={24}
              className="hover:text-gray-700 cursor-pointer"
            />
          </Link>

          <CiSearch size={24} className="hover:text-gray-700 cursor-pointer" />
          <CiHeart size={24} className="hover:text-gray-700 cursor-pointer" />

          <div className="relative">
            <Link href="/cart">
              <CiShoppingCart
                size={24}
                className="hover:text-gray-700 cursor-pointer"
              />
            </Link>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
