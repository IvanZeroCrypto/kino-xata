import React from "react";

import { GrFormNextLink } from "react-icons/gr";
import { month } from "../../../constants";
const CartNews = ({ post }) => {
  const arrDate = post.publishedAt.split("-").map(Number);
  const monthObj = month.find((month) => arrDate[1] === Number(month.value));

  const arr1 = post.publishedAt.split("-");

  const arr2 = arr1[2]
    .replace("T", " ")
    .replace(/:/g, " ")
    .split(" ")
    .map(Number);

  return (
    <a href={post.url} className=" w-full h-[340px] rounded-lg  cursor-pointer">
      <img
        className="w-full h-[40%] rounded-tl-lg rounded-tr-lg"
        src={post.imageUrl}
      />
      <div className=" flex flex-col h-[60%] justify-between  rounded-bl-lg rounded-br-lg  bg-gray-100">
        <div className="p-4">
          <h2 className="text-orange-500 font-bold m-1 text-center text-[14px]">
            Смотрите на кинопоиске
          </h2>
          <div className="font-bold text-[15px] md:text-base max-h-[110px]   hover:text-orange-500 text-ellipsis line-clamp-4 overflow-hidden ">
            {post.title}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1 text-[14px] justify-center text-[#838080]   ">
            {arrDate[0] === new Date().getFullYear() &&
            arr2[0] === new Date().getDate() ? (
              "сегодня"
            ) : (
              <>
                <div className="">{arr2[0]}</div>
                <div>{monthObj.name}</div>
                <div>{arrDate[0]}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default CartNews;
