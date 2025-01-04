import React from "react";
import { Link } from "react-router-dom";

const ActorsList = ({ actorsList }) => {
  return (
    <div className="flex flex-col pl-2  mr-0 ">
      <h2 className="text-[18px] sm:text-xl w-240px ">В главных ролях</h2>
      <div className="   w-full overflow-y-auto h-[380px] md:h-[534px]">
        <div className="max-w-[150px] flex flex-col gap-1 ">
          {actorsList.map((actor) => (
            <Link
              to={`/actor/${actor.staffId}`}
              className="text-[#1976D2] underline"
              key={actor.staffId}
            >
              {actor.nameRu}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorsList;
