import { ReactElement } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Footer = (): ReactElement => {
  const { pathname } = useLocation();

  const show: boolean =
    pathname === "/" || pathname === "/about" ? true : false;

  return (
    <footer
      className={`${
        show ? "" : "hidden"
      } text-white bgImage bgFooterImage bottom-0`}
    >
      <div className="bg-black/40 min-h-[400px]">
        <section className="container grid md:grid-cols-3 pb-20 pt-5">
          <article className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              MB Coffee
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
          </article>

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
                    to="/products"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Coffees
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
                    to="/products"
                    className="inline-block hover:scale-105 duration-200"
                  >
                    Coffees
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

            <article className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Mashhad, Seyed Razi</p>
                <a href="tel:+980101010101">Call +98 010 101 0101</a>

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
        <p className="flex flex-col md:flex-row justify-center items-center gap-2 text-2xl pb-5">
          <span>&copy; All Rights Reserved by : </span>
          <span> Mohsen Baghaei</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
