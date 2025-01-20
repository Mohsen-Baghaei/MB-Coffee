import { ReactElement } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = (): ReactElement => {
  return (
    <main className="overflow-x-hidden scroll-smooth min-h-screen relative">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
