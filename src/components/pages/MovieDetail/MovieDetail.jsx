import React, { useState } from "react";
import {
  useGetFilmIdQuery,
  useGetStaffFilmQuery,
} from "../../../redux/api/kinopoiskApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Container from "../../ui/container/Container";
import ActorsList from "../../ActorsList/ActorsList";
import VideoPlayer from "../../ui/VideoPlayer/VideoPlayer";
import SequelsAndPrequels from "./SequelsAndPrequels/SequelsAndPrequels";
import Loader from "../../ui/Loader/Loader";
import NotFound from "../../NotFound/NotFound";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error } = useGetFilmIdQuery(id);
  const imageListLength = useSelector(
    (state) => state.filmsQuerySlice.imageListLength
  );
  console.log(imageListLength);
  const {
    data: listActorsDirectors,
    isLoading,
    error: staffError,
  } = useGetStaffFilmQuery(id);

  const actorsList = listActorsDirectors
    ? listActorsDirectors
        .filter((actor) => actor.professionKey === "ACTOR")
        .slice(0, 130)
    : [];
  if (isLoading) return <Loader />;
  if (error || staffError) return <NotFound />;

  return (
    <>
      {data && (
        <Container className="mx-3">
          <div className=" mt-10 grid grid-cols-[1fr] md:grid-cols-[1fr_4fr]">
            <img
              className="mb-3  ml-auto mr-auto max-w-[374px] md:margin-0 "
              src={data.posterUrl}
            />
            <div className=" grid grid-cols-[2fr_1fr] mt-2  md:grid-cols-[3fr_1fr] md:mt-0 ">
              <div className="  block ml-2">
                <div className="flex ">
                  <button onClick={() => navigate(-1)} className="mr-3 mb-3">
                    <IoMdArrowBack size={22} color="blue" />
                  </button>
                  <div className="w-full text-[16px] md:text-[20px]  lg:text-[24px]">
                    <span className="font-bold">{data.nameRu}</span>

                    {data.nameOriginal ? `(${data.nameOriginal})` : ""}
                  </div>
                </div>
                <div className="flex mb-1 ">
                  <div className="w-1/2">год</div>
                  <div className="w-1/2">
                    <div className="text-left">{data.year}</div>
                  </div>
                </div>
                <div className="flex   mb-1 ">
                  <div className="w-1/2">страна</div>
                  <div>
                    {data.countries.map(({ country }) => (
                      <div className="w-1/2" key={country}>
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex  mb-1">
                  <div className="w-1/2">жанры</div>
                  <div>
                    {data.genres.map(({ genre }) => (
                      <div className="w-1/2" key={genre}>
                        {genre}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex  mb-1 ">
                  <div className="w-1/2">время</div>
                  <div className="w-1/2">
                    <div className="text-left">{data.filmLength} мин</div>
                  </div>
                </div>

                <div className="flex mb-1  ">
                  <div className="w-1/2">режиссеры</div>
                  <div className="w-1/2 max-h-[288px] overflow-y-auto">
                    {listActorsDirectors
                      ? listActorsDirectors
                          .filter(
                            (director) => director.professionKey === "DIRECTOR"
                          )
                          .map((director) => (
                            <div className="w-1/2" key={director.nameRu}>
                              {director.nameRu}
                            </div>
                          ))
                      : []}
                  </div>
                </div>
              </div>
              <ActorsList actorsList={actorsList} />
            </div>
          </div>
          <div className=" mx-auto  my-3">
            <div>
              {data.description}

              <Link
                className="underline text-blue-500"
                to={`/movie/${data.kinopoiskId}/images`}
              >
                Изображения со съемок
              </Link>
            </div>
            <div></div>
          </div>
          <div>
            <div className="flex flex-col">
              <h1 className="text-center font-bold text-2xl mb-1 ">
                Смотреть онлайн
              </h1>
              <VideoPlayer />
            </div>
          </div>
          <div className="flex flex-wrap wrap ">
            {data.type === "FILM" && <SequelsAndPrequels id={id} />}
          </div>
        </Container>
      )}
    </>
  );
};

export default MovieDetail;
