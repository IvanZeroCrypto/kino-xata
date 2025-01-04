import React from "react";
import NavCartItem from "./NavCartItem";
import { MOVIE_LISTS, TOP_LISTS } from "../../constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetQuery, selectQuery } from "../../redux/slices/filmsQuerySlice";

const Navbar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.filmsQuerySlice.page);
  const handleClikedLink = () => {
    setOpen(!open);
    if (page > 1) {
      dispatch(selectQuery({ page: 1 }));
    }
    dispatch(resetQuery());
  };
  // bg-[#00000080]
  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="fixed top-0 left-0 w-full h-full z-40  bg-[#00000080] "
        >
          <div
            className={`w-[300px] bg-white shadow-lg h-full transition ease-in overflow-auto  ${
              open ? "translate-x-0" : "-translate-x-[300px]"
            } `}
          >
            {TOP_LISTS.map((category) => (
              <Link
                onClick={handleClikedLink}
                key={category.title}
                to={category.url}
                className="text-[#1976D2] text-lg underline"
              >
                <NavCartItem category={category} />
              </Link>
            ))}
            <hr />
            {MOVIE_LISTS.map((category) => (
              <Link
                onClick={handleClikedLink}
                key={category.title}
                to={category.url}
                className="text-[#1976D2] text-lg underline"
              >
                <NavCartItem category={category} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

// import React from "react";
// import NavCartItem from "./NavCartItem";
// import { MOVIE_LISTS, TOP_LISTS } from "../../constants";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { selectQuery } from "../../redux/slices/filmsQuerySlice";

// const Navbar = ({ open, setOpen }) => {
//   const dispatch = useDispatch();
//   const page = useSelector((state) => state.filmsQuerySlice.page);
//   const handleClikedLink = () => {
//     setOpen(!open);
//     if (page > 1) {
//       dispatch(selectQuery({ page: 1 }));
//     }
//   };
//   // bg-[#00000080]
//   return (
//     <div className="fixed z-10 ">
//       <div
//         onClick={() => setOpen(!open)}
//         className={`${
//           open ? " bg-[#00000080] w-full h-screen   transition ease-in" : "none"
//         } `}
//       >
//         <div
//           className={`absolute w-[300px] top-0 left-0   bg-white shadow-lg h-full transition ease-in overflow-auto  ${
//             open ? "translate-x-0" : "-translate-x-[300px]"
//           } `}
//         >
//           {TOP_LISTS.map((category) => (
//             <Link
//               onClick={handleClikedLink}
//               key={category.title}
//               to={category.url}
//               className="text-[#1976D2] text-lg underline"
//             >
//               <NavCartItem category={category} />
//             </Link>
//           ))}
//           <hr />
//           {MOVIE_LISTS.map((category) => (
//             <Link
//               onClick={handleClikedLink}
//               key={category.title}
//               to={category.url}
//               className="text-[#1976D2] text-lg underline"
//             >
//               <NavCartItem category={category} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
