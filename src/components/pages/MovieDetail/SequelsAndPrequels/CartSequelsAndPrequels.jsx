import React from "react";
import { Link } from "react-router-dom";

const CartSequelsAndPrequels = ({ film }) => {
  return (
    // <div className="grid grid-cols-4">
    <div className="flex flex-col ">
      <Link
        to={`/movie/${film.filmId}`}
        className="text-blue-500 underline block  text-center my-[6px] text-[14px]  md:text-[20px] "
      >
        <div>
          <img
            className="w-full h-full cursor-pointer transition duration-300 ease-in hover:scale-[1.04] mb-1"
            hover
            src={film.posterUrl}
          />
        </div>
        <span className="px-1"> {film.nameRu}</span>
      </Link>
    </div>
    // </div>
  );
};

export default CartSequelsAndPrequels;
