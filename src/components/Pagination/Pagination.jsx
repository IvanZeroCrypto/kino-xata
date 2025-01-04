import React from "react";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { selectQuery } from "../../redux/slices/filmsQuerySlice";

import "./index.css";
const PaginationPage = ({ totalPages }) => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      breakLabel={" ... "}
      nextLabel=" >"
      onPageChange={(e) => dispatch(selectQuery({ page: e.selected + 1 }))}
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
  );
};

export default PaginationPage;
