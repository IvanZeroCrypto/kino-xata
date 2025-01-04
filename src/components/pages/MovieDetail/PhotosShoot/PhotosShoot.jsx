import { useState, useEffect } from "react";
import { useGetImagesFilmQuery } from "../../../../redux/api/kinopoiskApi";

const PhotosShoot = ({ id }) => {
  const [total, setTotal] = useState("");

  const { data, isSuccess } = useGetImagesFilmQuery(id);
  useEffect(() => {
    if (isSuccess) {
      setTotal(data.total);
    }
  }, [data]);

  const imagesList = isSuccess ? data.items : [];
  console.log(data);

  return (
    <>
      {imagesList.length > 0 && (
        <h2 className="my-1 font-bold">Изображения со съемок</h2>
      )}
      <div className=" w-full      mt-2 ">
        <div className="grid grid-cols-6 ">
          {imagesList.map((img, i) => (
            <img key={i} className="w-full h-[155px]" src={img.imageUrl} />
          ))}
          {total > 20 && imagesList.length >= 20 && (
            <button>смотреть все фото</button>
          )}
        </div>
      </div>
    </>
  );
};

export default PhotosShoot;
