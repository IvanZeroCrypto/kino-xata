import React, { useState, useEffect } from "react";
import { useGetMediaPostsQuery } from "../../../redux/api/kinopoiskApi";
import CartNews from "./CartNews";
import ReactPaginate from "react-paginate";
import styles from "./CartNews.module.css";
import Loader from "../../ui/Loader/Loader";
import NotFound from "../../NotFound/NotFound";

const MovieNews = () => {
  const [totalPages, setTotalPages] = useState();

  const [pagePost, setPagePost] = useState("");

  const { data, isLoading, error, isSuccess } = useGetMediaPostsQuery(pagePost);

  const newItems = isSuccess ? data.items.slice(0, data.items.length - 1) : [];

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data.totalPages);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      if (!pagePost) {
        setPagePost(data.totalPages);
      }
    }
  }, [isSuccess]);
  if (isLoading) return <Loader />;
  if (error) return <NotFound />;
  return (
    <>
      <div className={styles.grid}>
        <a
          href={data && data.items[data.items.length - 1].url}
          className={styles.gridItem1}
        >
          <img
            className={styles.gridImg}
            src={data && data.items[data.items.length - 1].imageUrl}
          />
          <div className={styles.gridBlock}>
            <div className={styles.gridText}>
              {data && data.items[data.items.length - 1].title}
            </div>
            <span className={styles.textSpan}>Смотрите на кинопоиске </span>
          </div>
        </a>
        {isSuccess
          ? newItems
              .map((post) => <CartNews key={post.kinopoiskId} post={post} />)
              .reverse()
          : []}
      </div>
      {isSuccess && (
        <ReactPaginate
          breakLabel={" ... "}
          nextLabel=">"
          onPageChange={(e) => setPagePost(totalPages - e.selected)}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page"
          activeClassName="active"
          pageLinkClassName="page-link"
          disabledClassName="disabled"
          breakClassName="breack"
        />
      )}
    </>
  );
};

export default MovieNews;
