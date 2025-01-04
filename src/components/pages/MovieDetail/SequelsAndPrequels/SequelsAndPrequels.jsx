import React from "react";
import { useGetSequelsAndPrequelsQuery } from "../../../../redux/api/kinopoiskApi";
import CartSequelsAndPrequels from "./CartSequelsAndPrequels";

const SequelsAndPrequels = ({ id }) => {
  const { data, isSuccess } = useGetSequelsAndPrequelsQuery(id);

  return (
    <>
      {data && (
        <div>
          <h1 className="text-center m-2 font-bold text-[24px]">
            Сиквелы и приквелы
          </h1>
          <div className="w-full ml-auto mr-auto">
            <div className="  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {isSuccess && data.length > 0
                ? data.map((film) => (
                    <CartSequelsAndPrequels key={film.filmId} film={film} />
                  ))
                : []}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SequelsAndPrequels;
