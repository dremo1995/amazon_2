import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex h-10 flex-grow rounded-md items-center  cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="h-full p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />

          <SearchIcon className="p-4 h-12" />
        </div>
        {/* Right Nav */}
        <div className=" text-white flex items-center py-2 text-sm space-x-4 mx-4 whitespace-nowrap">
          <div className="link">
            <p>Hello, Andre</p>
            <p className="font-extrabold md:text-md">Account & Lists</p>
          </div>
          <div className="link ">
            <p>Returns</p>
            <p className="font-extrabold md:text-md">& Orders</p>
          </div>
          <div className="relative link">
            <ShoppingCartIcon className="w-12 h-12" />
            <span className="rounded-full bg-yellow-400 w-5 h-5 absolute -top-1 -right-2 items-center text-center">
              <p className="text-amazon_blue font-bold">4</p>
            </span>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex items-center bg-amazon_blue-light text-white space-x-4 p-3 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link"> Today's Deal</p>
        <p className="link hidden md:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Food & Grocery</p>
        <p className="link hidden md:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden xl:inline-flex"> Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
