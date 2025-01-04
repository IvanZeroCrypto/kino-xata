import React from "react";
import { Link } from "react-router-dom";

const ListActorsFilms = ({ films }) => {
  return (
    <div>
      <h1 className="text-2xl my-2">Фильмы</h1>
      {films
        ? films.map((film, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>{i}.</div>
              <Link
                className="underline text-[#1976D2]"
                to={`/movie/${film.filmId}`}
              >
                {film.nameRu ? film.nameRu : film.nameEn}
              </Link>
              <div>{film.rating ? film.rating : "-"}</div>
            </div>
          ))
        : []}
    </div>
  );
};

export default ListActorsFilms;
