import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TOP_LISTS } from "../../../constants";
import { useGetFilmsQuery } from "../../../redux/api/kinopoiskApi";
import Container from "../../ui/container/Container";

import { TbArrowBackUp } from "react-icons/tb";
import { useSelector } from "react-redux";
import PaginationPage from "../../Pagination/Pagination";
import CartFilm from "../../ui/CartFilm/CartFilm";
import Loader from "../../ui/Loader/Loader";
import NotFound from "../../NotFound/NotFound";
const MovieCategoryList = () => {
  const [totalPages, setTotalPages] = useState();

  const [total, setTotal] = useState();

  const location = useLocation();

  const navigate = useNavigate();

  const page = useSelector((state) => state.filmsQuerySlice.page);

  const movieType = TOP_LISTS.find((el) => el.url === location.pathname);

  const { data, isLoading, error, isSuccess } = useGetFilmsQuery({
    type: movieType.value,
    page: page,
  });

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data.totalPages);
      setTotal(data.total);
    }
  }, [data]);

  if (error) return <NotFound />;

  if (isLoading) return <Loader />;
  return (
    <Container>
      <div className="flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="py-1 px-2 hover:bg-blue-50"
        >
          <TbArrowBackUp size={27} className="" />
        </button>

        <div className=" text-[20px] sm:text-[30px] my-[6px]">
          {location.pathname === "/popular"
            ? `ТОП ${total} популярных фильмов`
            : movieType.title}
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  ">
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

export default MovieCategoryList;
