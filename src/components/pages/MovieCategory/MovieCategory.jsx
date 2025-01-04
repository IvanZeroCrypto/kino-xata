import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MOVIE_LISTS } from "../../../constants";
import Container from "../../ui/container/Container";
import { BiSort } from "react-icons/bi";
import { TbArrowBackUp } from "react-icons/tb";
import { useSelector } from "react-redux";
import PaginationPage from "../../Pagination/Pagination";
import { useGetFilmsCategoryQuery } from "../../../redux/api/kinopoiskApi";
import SelectMovie from "./SelectMovie";
import CartFilm from "../../ui/CartFilm/CartFilm";
import Loader from "../../ui/Loader/Loader";
import NotFound from "../../NotFound/NotFound";

const MovieCategory = () => {
  const [totalPages, setTotalPages] = useState();
  const [total, setTotal] = useState();
  const [activeFilter, setActiveFilter] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const page = useSelector((state) => state.filmsQuerySlice.page);
  const countries = useSelector((state) => state.filmsQuerySlice.countries);
  const genreId = useSelector((state) => state.filmsQuerySlice.genreId);
  const year = useSelector((state) => state.filmsQuerySlice.year);

  const movieType = MOVIE_LISTS.find((el) => el.url === location.pathname);
  const genreNum = location.pathname === "/cartoons" ? 18 : genreId;

  const { data, isLoading, error, isSuccess } = useGetFilmsCategoryQuery({
    type: movieType.value,
    page: page,
    genreId: genreNum,
    country: countries,
    year: year,
  });

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data.totalPages);
      setTotal(data.total);
    }
  }, [data]);
  if (isLoading) return <Loader />;
  if (error) return <NotFound />;

  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="py-1 px-2 hover:bg-blue-50"
          >
            <TbArrowBackUp size={27} className="" />
          </button>
          <div className=" text-[22px] sm:text-[30px]">
            {location.pathname === "/popular"
              ? `ТОП ${total} популярных фильмов`
              : movieType.title}
          </div>
        </div>
        <button
          onClick={() => setActiveFilter(!activeFilter)}
          className={` flex  items-center mt-1 py-1 px-2 ${
            activeFilter ? "bg-blue-500 text-white" : "bg-[#f1f1f1]"
          }   rounded-md transition ease-in scale-100 sm:scale-0`}
        >
          <div className="text-[18px]">Фильтры</div>

          <BiSort size={18} />
        </button>
      </div>
      <SelectMovie activeFilter={activeFilter} />

      <div
        className={` ${
          activeFilter ? "mt-0" : "-mt-28"
        } grid sm:mt-0  grid-cols-3 md:grid-cols-4 lg:grid-cols-5  `}
      >
        {data
          ? data.items.map((film) => (
              <CartFilm key={film.kinopoiskId} film={film} />
            ))
          : []}
      </div>
      {isSuccess && <PaginationPage totalPages={totalPages} />}
    </Container>
  );
};

export default MovieCategory;
