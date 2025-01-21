import { ReactElement } from "react";
import Header from "./elements/Header";
import { Outlet } from "react-router-dom";
import Footer from "./elements/Footer";
import Sidebar from "./elements/Sidebar";

const Layout = (): ReactElement => {
  return (
    <main className="overflow-x-hidden scroll-smooth min-h-screen">
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
