import { ReactElement } from "react";
import Slider from "react-slick";
import {
  TestimonialData,
  TestimonialDataType,
  settings,
} from "../../app/about/aboutSlice";

const Testimonials = (): ReactElement => {
  const showTestimonialData = TestimonialData.map(
    (testimonial: TestimonialDataType) => {
      const { id, name, text, img } = testimonial;
      return (
        <div key={id} className="my-6">
          <section className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
            <article className="mb-4">
              <img src={img} alt={name} className="rounded-full size-20" />
            </article>
            <article className="flex flex-col gap-4 space-y-3">
              <p className="text-xs text-gray-500">{text}</p>
              <p className="text-xl font-bold text-black/70 font-cursive">
                {name}
              </p>
            </article>
            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
              ,,
            </p>
          </section>
        </div>
      );
    }
  );

  return (
    <div className="py-14 mb-10">
      <section className="container">
        <article data-aos="fade-up" className="text-center mb-10">
          <p className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </p>
        </article>
        <article data-aos="zoom-in">
          <Slider {...settings}>{showTestimonialData}</Slider>
        </article>
      </section>
    </div>
  );
};

export default Testimonials;
