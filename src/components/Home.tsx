import { ReactElement } from "react";
import HeroImg from "../assets/coffee2.png";

const Home = (): ReactElement => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-slate-50">
      <div className="container pb-8 sm:pb-0">
        <section className="grid grid-cols-1 sm:grid-cols-2">
          <article className="order-2 sm:order-1 flex flex-col justify-center gap-6">
            <p
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              We Serve the richest{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="text-primary font-cursive"
              >
                Coffee
              </span>{" "}
              in the city
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-gradient-to-r from-primary  to-secondary border-2 border-primary rounded-full px-4 py-2 text-slate-50 hover:scale-105 duration-200">
                Coffee and Code
              </button>
            </div>
          </article>
          <article
            data-aos="zoom-in"
            className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative"
          >
            <img
              src={HeroImg}
              alt="HeroImg"
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
            />
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl"
            >
              <h2 className="">Hey Coder</h2>
            </div>
            <div
              data-aos="fade-right"
              className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl"
            >
              <h2 className="">Best Coffee</h2>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Home;
