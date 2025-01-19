import { ReactElement } from "react";
import bannerImg from "../../assets/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = (): ReactElement => {
  return (
    <div className="bgBannerImage bgImage">
      <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article data-aos="zoom-in">
            <img
              src={bannerImg}
              alt="bannerImg"
              className="max-w-[430px] w-full mx-auto spin drop-shadow-xl"
            />
          </article>
          <article className="flex flex-col justify-center gap-6 sm:pt-0">
            <p
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-cursive"
            >
              Premium Blen Coffee
            </p>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Cozy flavors of sweet pistachio and a brown-buttery topping paired
              with espresso and steamed milk, specially crafted to keep you
              comforted in the new year.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <section className="space-y-5">
                <article data-aos="fade-up" className="flex items-center gap-3">
                  <GrSecure className="text-2xl size-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Premium Coffee</span>
                </article>
                <article
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="flex items-center gap-3"
                >
                  <IoFastFood className="text-2xl size-12 shadow-sm p-3 rounded-full bg-orange-100" />
                  <span>Hot Coffee</span>
                </article>
                <article
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="flex items-center gap-3"
                >
                  <GiFoodTruck className="text-2xl size-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                  <span>Cold Coffee</span>
                </article>
              </section>
              <section
                data-aos="fade-left"
                className="space-y-3 border-l-4 border-primary/50 pl-6"
              >
                <p className="text-2xl font-semibold font-cursive">Tra Lover</p>
                <p className="text-gray-500 text-sm">
                  Much like writing code, brewing the perfect cup of tea
                  requires patience, precision, and a dash of passion to create
                  a comforting blend of flavors.
                </p>
              </section>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Banner;
