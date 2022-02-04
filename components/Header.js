import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-2 px-5 bg-white shadow-md md:p-4 md:py-3 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
        />
      </div>

      {/* middle */}
      <div className="flex items-center py-1 rounded-full md:border-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 font-semibold text-gray-600 placeholder-gray-400 bg-transparent outline-none"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden p-2 text-white bg-red-400 rounded-full cursor-pointer h-9 md:inline-flex md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden lg:inline">Become a host</p>
        <GlobeAltIcon className="hidden h-6 cursor-pointer md:inline" />
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
