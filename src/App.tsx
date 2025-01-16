import { ReactElement, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Banner from "./components/Banner";

const App = (): ReactElement => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <Banner />
    </main>
  );
};

export default App;
