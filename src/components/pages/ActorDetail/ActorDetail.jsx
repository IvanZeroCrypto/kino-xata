import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

import { useGetStaffIdQuery } from "../../../redux/api/kinopoiskApi";
import Container from "../../ui/container/Container";
import AboutActor from "./AboutActor";
import ListActorsFilms from "./ListActorsFilms";
import Loader from "../../ui/Loader/Loader";
import NotFound from "../../NotFound/NotFound";

const ActorDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess } = useGetStaffIdQuery(id);
  const navigate = useNavigate();
  const filmsList = isSuccess
    ? data.films.filter(
        (item, index, self) =>
          index === self.findIndex((el) => el.filmId === item.filmId)
      )
    : [];
  if (isLoading) return <Loader />;
  if (error) return <NotFound />;

  return (
    <>
      {isSuccess && (
        <Container className="text-base">
          <div className="mt-5 flex  flex-col md:flex-row  ">
            <div className=" max-w-[374px] ml-auto mr-auto w-full">
              <img src={data.posterUrl} />
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="flex ">
                <button onClick={() => navigate(-1)} className="mr-3 mb-3">
                  <IoMdArrowBack size={25} sm:size={30} color="blue" />
                </button>
                <div className="text-[22px] sm:text-[26px] my-1">
                  {data.nameRu} {data.nameEn ? `(${data.nameEn})` : ""}
                </div>
              </div>
              <div className="text-[20px] sm:text-2xl">
                Об {data.sex === "FEMALE" ? "актрисе" : "актере"}
              </div>
              <AboutActor text="Карьера" data={data.profession} />
              <AboutActor text="Место рождения" data={data.birthplace} />
              <AboutActor text="Рост" data={data.growth} />
              <AboutActor text="Дата рождения" data={data.birthday} />
              <AboutActor text="Всего фильмов" data={filmsList.length + 1} />
              {data.facts.length > 0 && (
                <ul>
                  <div className="w-1/2">факты</div>
                  {isSuccess
                    ? data.facts.map((fact, i) => (
                        <li className="mb-[6px]" key={i}>
                          {i}.{fact}
                        </li>
                      ))
                    : []}
                </ul>
              )}
            </div>
          </div>
          <ListActorsFilms films={filmsList} />
        </Container>
      )}
    </>
  );
};

export default ActorDetail;
