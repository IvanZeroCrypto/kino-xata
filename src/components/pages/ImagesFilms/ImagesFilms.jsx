import React from "react";
import { useParams } from "react-router-dom";
import { useGetImagesFilmQuery } from "../../../redux/api/kinopoiskApi";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { selectQuery } from "../../../redux/slices/filmsQuerySlice";
import { useDispatch } from "react-redux";
import PaginationPage from "../../Pagination/Pagination";
const ImagesFilms = () => {
  const [totalPages, setTotalPages] = useState("");
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isSuccess } = useGetImagesFilmQuery({ id, page });

  const imagesList = isSuccess ? data.items : [];

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data.totalPages);
    }
  }, [data]);

  return (
    <>
      {imagesList.length > 0 ? (
        <h2 className="my-1 font-bold">Изображения со съемок</h2>
      ) : (
        <h2 className="my-1 font-bold text-lg">Изображения отсутсвуют :(</h2>
      )}
      <div className=" w-full      mt-2 ">
        <div className="grid grid-cols-2 ">
          {imagesList.map((img, i) => (
            <img key={i} className="" src={img.imageUrl} />
          ))}
        </div>
        <ReactPaginate
          breakLabel={" ... "}
          nextLabel=" >"
          onPageChange={(e) => setPage(e.selected + 1)}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(totalPages)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page"
          activeClassName="active"
          pageLinkClassName="page-link"
          disabledClassName="disabled"
          breakClassName="breack"
        />
      </div>
    </>
  );
};

export default ImagesFilms;
