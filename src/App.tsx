import { ReactElement, useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Loading from "./components/Loading";

const Products = lazy(() => import("./components/products/Products"));
const SingleProduct = lazy(() => import("./components/products/SingleProduct"));
const About = lazy(() => import("./components/About"));

const App = (): ReactElement => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":productId" element={<SingleProduct />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
