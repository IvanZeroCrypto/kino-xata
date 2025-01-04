import React, { useEffect, useState } from "react";
import { useGetImagesFilmQuery } from "../redux/api/kinopoiskApi";

const useImagesFilm = ({ id }) => {
  const [totalPages, setTotalPages] = useState("");

  const { data, isSuccess } = useGetImagesFilmQuery({ id });
  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data.totalPages);
    }
  }, [data]);

  const imagesList = isSuccess ? data.items : [];

  console.log(imagesList);
  return {
    imagesList,
    totalPages,
  };
};

export default useImagesFilm;
