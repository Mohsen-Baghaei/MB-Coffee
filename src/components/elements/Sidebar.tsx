import { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, sidebarStatus } from "../../app/setting/settingSlice";
import { GrCircleInformation } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { BiHomeAlt2 } from "react-icons/bi";

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
      className={`flex bg-primary/80 z-10 absolute right-0 top-[72px] transition ease-in-out duration-500 text-nowrap md:pt-5 sm:mt-2 ${
        SidebarStatus ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <section className="flex w-full flex-col justify-start p-2 items-start text-slate-50 gap-3">
        <button
          onClick={() => direction("/")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:"
        >
          <BiHomeAlt2 className="size-11" />
          <p className="text-3xl">Index</p>
        </button>
        <button
          onClick={() => direction("/newtask")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:"
        >
          <FaPlus className="size-11 " />
          <p className="text-3xl">New Todo</p>
        </button>
        <button
          onClick={() => direction("/profile")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:"
        >
          <CiUser className="size-11 " />
          <p className="text-3xl">Profile</p>
        </button>
        <button
          onClick={() => direction("/about")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:"
        >
          <GrCircleInformation className="size-11 " />
          <p className="text-3xl">About</p>
        </button>
      </section>
    </nav>
  );
};

export default Sidebar;
