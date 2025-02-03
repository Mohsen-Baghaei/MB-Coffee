import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { fetchProducts } from "./app/products/productsSlice.ts";

store.dispatch(fetchProducts());

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  </Provider>
);
