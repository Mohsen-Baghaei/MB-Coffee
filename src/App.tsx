import { ReactElement, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";

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
    </main>
  );
};

export default App;
