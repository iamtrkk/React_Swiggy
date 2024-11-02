import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Demo from "./components/Demo";
import Error from "./components/Error";
import Restaurant from "./components/RestaurantDetails/Restaurant";
import Shimmer from "./components/Shimmer";
import Home from "./Home";

const Lazy = lazy(() => import("./components/LazyComponent"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", //Means resId is dynamic
        element: <Restaurant />,
      },
      {
        path: "/lazy",
        element: <Suspense fallback={<Shimmer />} children={<Lazy />} />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
