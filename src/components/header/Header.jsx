import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <div className="h-[64px] bg-[#1976d2] flex items-center justify-between px-2 sm:px-10 w-full   ">
        <div className="flex items-center  text-white">
          <button
            onClick={() => setOpen(!open)}
            className=" transition duration-200 ease-in hover:scale-105  rounded-full mr-[6px]"
          >
            <RxHamburgerMenu
              size={25}
              sm:size={30}
              className="mt-[2px] cursor-pointer"
            />
          </button>
          <Link to="/" className=" p-0 text-[20px] sm:text-[34px]">
            kino-xata
          </Link>
        </div>
        <Search />
      </div>
    </>
  );
};

export default Header;
