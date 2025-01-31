import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, sidebarStatus } from "../../app/setting/settingSlice";

import coffeeHome from "../../assets/menu/coffeeHome.png";
import coffeeBag from "../../assets/menu/coffeeBag.png";
import sign from "../../assets/menu/sign.png";
import register from "../../assets/menu/register.png";
import coffeecup from "../../assets/menu/coffeecup.png";
import barista from "../../assets/menu/barista.png";
import { selectedUsers } from "../../app/register/registerSlice";

const Sidebar = (): ReactElement => {
  const SidebarStatus: boolean = useSelector(sidebarStatus);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(selectedUsers);

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
      <section className="flex flex-wrap lg:flex-nowrap flex-row w-full justify-around p-2 items-start text-slate-50 gap-3 ">
        <button
          onClick={() => direction("/")}
          className="flex justify-center items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={coffeeHome} alt="home" className="size-9" />

          <p className="text-2xl">Home</p>
        </button>
        <button
          onClick={() => direction("/products")}
          className="flex justify-center items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={coffeecup} alt="coffees" className="size-9" />

          <p className="text-2xl">Coffees</p>
        </button>
        <button
          onClick={() => direction("/inbag")}
          className="flex justify-start items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={coffeeBag} alt="onbag" className="size-9" />
          <p className="text-2xl">In Bag</p>
        </button>
        <button
          onClick={() => direction("/profile")}
          className="flex justify-start items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={barista} alt="profile" className="size-9" />
          <p className="text-2xl">Profile</p>
        </button>
        <button
          onClick={() => direction("/register")}
          className={
            user
              ? "hidden"
              : "flex justify-start items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
          }
        >
          <img src={register} alt="register" className="size-9 " />
          <p className="text-2xl">Register</p>
        </button>
        <button
          onClick={() => direction("/about")}
          className="flex justify-start items-center p-2 gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200"
        >
          <img src={sign} alt="about" className="size-9 " />
          <p className="text-2xl">About</p>
        </button>
      </section>
    </nav>
  );
};

export default Sidebar;
