import { ReactElement } from "react";
import Hero from "../mainPage/Hero";
import Services from "../mainPage/Services";
import Banner from "../mainPage/Banner";
import AppStore from "../mainPage/AppStore";
import Testimonials from "../mainPage/Testimonials";

const Home = (): ReactElement => {
  return (
    <>
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
    </>
  );
};

export default Home;
