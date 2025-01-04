import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import Select from "react-select";
import { useGetCountriesAndGenresQuery } from "../../../redux/api/kinopoiskApi";
import { useDispatch, useSelector } from "react-redux";
import { resetQuery, selectQuery } from "../../../redux/slices/filmsQuerySlice";
const SelectMovie = ({ activeFilter }) => {
  const { data } = useGetCountriesAndGenresQuery();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.filmsQuerySlice.countries);
  const genreId = useSelector((state) => state.filmsQuerySlice.genreId);
  const year = useSelector((state) => state.filmsQuerySlice.year);

  const optionsCountry = data
    ? data.countries.slice(0, 249).map((country) => ({
        value: country.id,
        label: country.country,
      }))
    : [];

  const optionsGenre = data
    ? data.genres.map((genre) => ({
        value: genre.id,
        label: genre.genre,
      }))
    : [];
  const yearsList = new Array(90).fill(null).map((_, index) => ({
    value: new Date().getFullYear() - index,
    label: new Date().getFullYear() - index,
  }));

  const countryValueSelect =
    optionsCountry.find((option) => option.value === countries) || null;

  const genreValueSelect =
    optionsGenre.find((option) => option.value === genreId) || null;

  const yearValueSelect =
    yearsList.find((option) => option.value === year) || null;

  return (
    <div
      className={`${
        activeFilter ? "scale-100" : "scale-0"
      } flex items-center sm:scale-100 gap-2 mt-5 mb-4  flex-wrap wrap `}
    >
      <Select
        value={genreValueSelect}
        placeholder="Жанр"
        options={optionsGenre}
        onChange={(e) => dispatch(selectQuery({ genreId: e.value }))}
        className="  w-[150px] sm:max-w-[200px] sm:w-full"
      />
      <Select
        value={countryValueSelect}
        placeholder="Страна"
        options={optionsCountry}
        onChange={(e) => dispatch(selectQuery({ countries: e.value }))}
        className="w-[150px] sm:max-w-[180px]  sm:w-full"
      />
      <Select
        value={yearValueSelect}
        placeholder="Год"
        options={yearsList}
        onChange={(e) => dispatch(selectQuery({ year: e.value }))}
        className="max-w-[150px]  w-full"
      />
      <button
        className="flex items-center cursor-pointer gap-1 py-[5px] px-[15px] rounded-md border border-blue-500 text-[#1976d2] "
        onClick={() => dispatch(resetQuery())}
      >
        <MdOutlineClear /> <span> Сбросить</span>
      </button>
    </div>
  );
};

export default SelectMovie;
