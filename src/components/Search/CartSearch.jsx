import React from "react";
import { Link } from "react-router-dom";

const CartSearch = ({ film, setInput }) => {
  return (
    <Link
      onClick={() => setInput("")}
      to={`/movie/${film.filmId}`}
      className=" flex  items-center  cursor-pointer p-2 bg-white  w-full  gap-3 transition ease-out hover:bg-gray-100"
    >
      <img width="40" height="25" src={film.posterUrl} />
      <div className=" text-[12px] sm:text-[16px]">{film.nameRu}</div>
      <span>{film.year}</span>
    </Link>
  );
};

export default CartSearch;
