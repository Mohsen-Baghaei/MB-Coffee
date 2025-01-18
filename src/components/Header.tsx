import { ReactElement } from "react";
import Logo from "../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = (): ReactElement => {
  return (
    <header className="bg-gradient-to-r from-secondary to-secondary/90 text-slate-50">
      <section className="container py-2">
        <article className="flex justify-between items-center gap-4">
          <div data-aos="fade-down" data-aos-once="true">
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="size-14" /> MB Coffee
            </Link>
          </div>
          <nav
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              <li>
                <Link
                  to="/"
                  className="inline-block text-xl py-4 px-4 text-slate-50/70 hover:text-slate-50 duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="inline-block text-xl py-4 px-4 text-slate-50/70 hover:text-slate-50 duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="inline-block text-xl py-4 px-4 text-slate-50/70 hover:text-slate-50 duration-200"
                >
                  About
                </Link>
              </li>
            </ul>
            <Link
              to="products"
              className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3"
            >
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </Link>
          </nav>
        </article>
      </section>
    </header>
  );
};

export default Header;
