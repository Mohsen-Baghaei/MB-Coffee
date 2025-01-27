import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { aboutContent, AboutStateType } from "../../app/about/aboutSlice";

const About = (): ReactElement => {
  const content: AboutStateType[] = useSelector(aboutContent);

  return (
    <section className="felx flex-col max-w-5xl mx-auto justify-center p-5 items-center my-10">
      {content.map((item: AboutStateType, i: number) => {
        const { title, img, text } = item;
        return (
          <article
            data-aos="zoom-in"
            key={i}
            className="flex flex-col items-start justify-start my-10 border-b-2 border-solid border-gray-400 "
          >
            <img
              src={img}
              alt={title}
              className="w-full max-h-[322px] md:max-h-[400px] mb-10"
            />
            <p className="text-4xl font-bold font-sans mb-10">{title}</p>
            {text.map((content: string, i: number) => (
              <p key={i} className="mb-10 text-lg text-gray-800 font-semibold">
                {content}
              </p>
            ))}
          </article>
        );
      })}
    </section>
  );
};

export default About;
