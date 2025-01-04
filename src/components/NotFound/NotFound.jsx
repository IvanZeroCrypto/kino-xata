import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img className="mt-[100px]" src="./img/i.webp" />
      <span className="text-[22px] sm:text-[28px] font-bold text-red-700 mt-1 text-center">
        На сегодняшний день вы превысили лимит запросов,повторите попытку
        завтра....
      </span>
    </div>
  );
};

export default NotFound;
