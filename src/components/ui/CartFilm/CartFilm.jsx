import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CartFilm = ({ film }) => {
  return (
    <div className="mb-2 ">
      <Link
        to={`/movie/${film.kinopoiskId}`}
        className=" text-[14px] sm:text-base underline text-[#1976D2]"
      >
        <img
          className=" cursor-pointer transition duration-300 ease-in hover:scale-[1.04] w-full h-[180px] sm:h-[300px] lg:h-[322px] block "
          src={film.posterUrl}
        />

        <span className="block text-[14px] sm:text-base text-center max-w-[215px] ">
          {film.nameRu ? film.nameRu : film.nameEn ? film.nameEn : "notname"}
        </span>
      </Link>

      <div className="text-center  " title={`${film.ratingKinopoisk} / 10`}>
        <Rating
          style={{ zIndex: "-1" }}
          name="read-only"
          value={film.ratingKinopoisk ? film.ratingKinopoisk / 2 : 3}
          readOnly
          precision={0.1}
        />
      </div>
    </div>
  );
};

export default CartFilm;
