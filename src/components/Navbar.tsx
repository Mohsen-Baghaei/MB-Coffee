import { ReactElement } from "react";
import Logo from "../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

type MenuType = {
  id: number;
  name: string;
  link: string;
};

const Menu: MenuType[] = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = (): ReactElement => {
  const showMenu: JSX.Element[] = Menu.map((menu: MenuType) => (
    <li key={menu.id}>
      <a
        href={menu.link}
        className="inline-block text-xl py-4 px-4 text-slate-50/70 hover:text-slate-50 duration-200"
      >
        {menu.name}
      </a>
    </li>
  ));
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-slate-50">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="size-14" /> MB Coffee
            </a>
          </div>
          <nav className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">{showMenu}</ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
