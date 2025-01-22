import { ReactElement } from "react";
import missingPage from "../../assets/about/missingPage.mp4";
import { Link } from "react-router-dom";

const Missing = (): ReactElement => {
  return (
    <div
      className="relative flex items-center 
        justify-center min-h-screen-small sm:min-h-screen-big overflow-hidden"
    >
      <video
        src={missingPage}
        autoPlay={true}
        loop
        muted
        className="absolute w-auto 
            min-w-full min-h-full max-w-none"
      ></video>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-slate-50/10 z-10 flex flex-col justify-center items-center p-5">
        <p className="text-3xl text-gray-100 font-semibold font-serif sm:text-6xl">
          Sorry, We couldn't find what you are looking for!
        </p>
        <Link
          to="/"
          className="mt-16 text-center text-xl text-gray-100 font-semibold font-serif sm:text-4xl bg-primary/70 hover:bg-primary p-5 rounded-xl"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Missing;
{
  /* <div className="w-full min-h-screen flex justify-center items-center">
      <video id="bannerVideo" autoPlay muted loop className="max-w-9xl ">
        <source src={missingPage} type="video/mp4" />
      </video> */
}
