import { ReactElement, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/products/Products";
import SingleProduct from "./components/products/SingleProduct";

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
      </Route>
    </Routes>
  );
};

export default App;
