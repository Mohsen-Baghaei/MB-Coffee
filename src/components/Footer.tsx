import { ReactElement } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = (): ReactElement => {
  return (
    <footer className="text-white bgImage bgFooterImage ">
      <div className="bg-black/40 min-h-[400px]">
        <section className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <article className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              MB Coffee
            </a>
            <p className="  pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
          </article>

          {/* Footer links */}
          <section className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <article className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </article>
            {/* second col links */}
            <article className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </article>

            {/* Company Address */}
            <article className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Mashhad, Seyed Razi</p>
                <a href="tel:+989030737899">Call +98 903 073 7899</a>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </article>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
