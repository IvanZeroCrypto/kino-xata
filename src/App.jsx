import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActorDetail from "./components/pages/ActorDetail/ActorDetail";
import MovieDetail from "./components/pages/MovieDetail/MovieDetail";
import MovieNews from "./components/pages/MovieNews/MovieNews";
import Layout from "./Layout";
import { MOVIE_LISTS, TOP_LISTS } from "./constants";
import MovieCategoryList from "./components/pages/MovieCategoryList/MovieCategoryList";
import MovieCategory from "./components/pages/MovieCategory/MovieCategory";
import ImagesFilms from "./components/pages/ImagesFilms/ImagesFilms";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MovieNews />,
        },
        {
          path: "/movie/:id",
          element: <MovieDetail />,
        },
        {
          path: "/actor/:id",
          element: <ActorDetail />,
        },
        {
          path: "/movie/:id/images",
          element: <ImagesFilms />,
        },

        ...TOP_LISTS.map((item) => ({
          path: item.url,
          element: <MovieCategoryList />,
        })),
        ,
        ...MOVIE_LISTS.map((item) => ({
          path: item.url,
          element: <MovieCategory />,
        })),
        ,
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
