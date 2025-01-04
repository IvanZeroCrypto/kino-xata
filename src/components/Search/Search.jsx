import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuery } from "../../redux/slices/filmsQuerySlice";
import { useGetSearchFilmsQuery } from "../../redux/api/kinopoiskApi";
import { MdOutlineClear } from "react-icons/md";
import CartSearch from "./CartSearch";
import Loader from "../ui/Loader/Loader";
const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.filmsQuerySlice.keyword);
  const { data, error, isLoading, isSuccess } = useGetSearchFilmsQuery(keyword);

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(selectQuery({ keyword: input }));
    }, 1000);

    return () => clearTimeout(setTimeoutId);
  }, [input]);
  if (isLoading) return <Loader />;
  return (
    <>
      {input && (
        <div
          onClick={() => setInput("")}
          className="w-full h-screen  absolute bottom-0 left-0 z-10"
        />
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className="  relative  w-[225px] sm:w-[350px]"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full  h-[45px] rounded-md outline-none px-2 bg-[#308fef]  placeholder:text-[#000000de]"
          placeholder="Поиск..."
        />
        {input && (
          <button
            onClick={() => setInput("")}
            className="absolute text-[#000000de] top-[14px]  right-[5px]"
          >
            <MdOutlineClear size={20} />
          </button>
        )}
        {input && (
          <div className=" flex flex-col bg-white shadow-lg rounded-md max-h-[500px] overflow-auto absolute z-50  top-14  w-full pb-1">
            {isSuccess
              ? data.films.map((film) => (
                  <CartSearch
                    key={film.filmId}
                    film={film}
                    setInput={setInput}
                  />
                ))
              : []}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
