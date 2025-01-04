import React from "react";

import { GiFilmSpool } from "react-icons/gi";
const NavCartItem = ({ category }) => {
  return (
    <div className="w-full py-3 px-5 flex items-center cursor-pointer transition ease-in gap-7 hover:bg-gray-100">
      <GiFilmSpool size={25} />
      <div> {category.title}</div>
    </div>
  );
};

export default NavCartItem;
