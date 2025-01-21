import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, sidebarStatus } from "../../app/setting/settingSlice";

import coffeeHome from "../../assets/menu/coffeeHome.png";
import coffeeBag from "../../assets/menu/coffeeBag.png";
import sign from "../../assets/menu/sign.png";
import register from "../../assets/menu/register.png";
import coffeecup from "../../assets/menu/coffeecup.png";

const Sidebar = (): ReactElement => {
  const SidebarStatus = useSelector(sidebarStatus);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const direction = (to: string) => {
    dispatch(closeSidebar());
    navigate(`${to}`);
  };

  return (
    <nav
      className={`flex bg-gradient-to-r from-secondary to-secondary/90 z-10 absolute right-0 left-0 top-[72px] transition ease-in-out duration-500 text-nowrap md:pt-5 sm:mt-2 rounded-b-3xl ${
        SidebarStatus ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <section className="flex flex-wrap md:flex-nowrap flex-row w-full justify-around p-2 items-start text-slate-50 gap-3 ">
        <button
          onClick={() => direction("/")}
          className="flex justify-center items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={coffeeHome} alt="coffeeHome" className="size-9" />

          <p className="text-2xl">Home</p>
        </button>
        <button
          onClick={() => direction("/products")}
          className="flex justify-center items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={coffeecup} alt="coffeecup" className="size-9" />

          <p className="text-2xl">Coffees</p>
        </button>
        <button
          onClick={() => direction("/inbag")}
          className="flex justify-start items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={coffeeBag} alt="coffeeBag" className="size-9" />
          <p className="text-2xl">In Bag</p>
        </button>
        <button
          onClick={() => direction("/register")}
          className="flex justify-start items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={register} alt="register" className="size-9 " />
          <p className="text-2xl">Register</p>
        </button>
        <button
          onClick={() => direction("/about")}
          className="flex justify-start items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={sign} alt="sign" className="size-9 " />
          <p className="text-2xl">About</p>
        </button>
      </section>
    </nav>
  );
};

export default Sidebar;
