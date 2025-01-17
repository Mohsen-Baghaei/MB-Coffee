import { ReactElement } from "react";
import Slider from "react-slick";

type TestimonialDataType = {
  id: number;
  name: string;
  text: string;
  img: string;
};

const TestimonialData: TestimonialDataType[] = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = (): ReactElement => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <article className="text-center mb-10">
          <p className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </p>
        </article>
        <article>
          <Slider {...settings}>{showTestimonialData}</Slider>
        </article>
      </section>
    </div>
  );
};

export default Testimonials;
