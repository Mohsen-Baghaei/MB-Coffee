import { ReactElement } from "react";
import { ServicesData, ServicesDataType } from "../../app/data/data";

const Services = (): ReactElement => {
  const showServicesData = ServicesData.map((service: ServicesDataType) => {
    const { id, img, name, aosDelay, description } = service;
    return (
      <article
        data-aos="fade-up"
        data-aos-delay={aosDelay}
        key={id}
        className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
      >
        <div className="h-[122px]">
          <img
            src={img}
            alt={name}
            className="max-w-[200px] block mx-auto transform -translate-y-14
          group-hover:scale-105 group-hover:rotate-6 duration-300"
          />
        </div>
        <div className="p-4 text-center">
          <div className="w-full "></div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </article>
    );
  });

  return (
    <div className="py-10">
      <section className="container">
        <article className="text-center mb-20">
          <p className="text-4xl font-bold font-cursive text-gray-800">
            Best Coffee For You
          </p>
        </article>
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {showServicesData}
        </article>
      </section>
    </div>
  );
};

export default Services;
