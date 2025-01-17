import { ReactElement } from "react";
import appStoreImg from "../assets/website/app_store.png";
import playStoreImg from "../assets/website/play_store.png";

const AppStore = (): ReactElement => {
  return (
    <div className="bgImage bgStoreImage py-14">
      <div className="container">
        <section className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div data-aos="fade-up" className="space-y-6 max-w-xl mx-auto">
            <p className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-slate-50/90">
              MB Coffee is available for Android and IOS
            </p>

            <article className="flex flex-wrap justify-center sm:justify-start items-center">
              <a href="#">
                <img
                  src={appStoreImg}
                  alt="App Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={playStoreImg}
                  alt="App Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppStore;
