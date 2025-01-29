import { ReactElement } from "react";
import { CiLocationOn, CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { logoutUser, selectedUsers } from "../../app/register/registerSlice";

import avatar from "../../assets/profile/avatar.png";
import address from "../../assets/profile/address.png";
import favoritCoffee from "../../assets/profile/favoritCoffee.png";
import info from "../../assets/profile/info.png";
import log from "../../assets/profile/log.png";
import orders from "../../assets/profile/orders.png";

const Profile = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const splitedPath = pathname.split("/");
  console.log(splitedPath[2]);

  const user = useSelector(selectedUsers);

  const handleLogout = () => {
    dispatch(logoutUser({ id: user?.id! }));
    navigate("/");
  };

  return (
    <section className="w-full min-h-screen-small sm:min-h-screen-big flex justify-center items-start mx-auto bg-white">
      <article className="w-full lg:w-4/12 xl:w-2/12 flex flex-col items-start justify-start p-5">
        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <img src={avatar} alt="avatar" className="size-10" />
          <p className="text-xl font-semibold ">
            Hey {user?.userInfo.firstname ?? user?.user}
          </p>
        </div>
        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <img src={orders} alt="orders" className="size-10" />
          <p className="text-xl font-semibold ">Orders</p>
        </div>

        <Link
          to="/profile/favorit"
          className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5"
        >
          <img src={favoritCoffee} alt="favoritCoffee" className="size-10" />
          <p className="text-xl font-semibold ">Favorite Coffees</p>
        </Link>
        <div
          className={
            splitedPath[2] === "favorit" ? "block lg:hidden w-full" : "hidden"
          }
        >
          <Outlet />
        </div>

        <Link
          to="/profile/userinfo"
          className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5"
        >
          <img src={info} alt="info" className="size-10" />
          <p className="text-xl font-semibold ">Personal Info</p>
        </Link>
        <div
          className={
            splitedPath[2] === "userinfo" ? "block lg:hidden w-full" : "hidden"
          }
        >
          <Outlet />
        </div>

        <Link
          to="/profile/address"
          className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5"
        >
          <img src={address} alt="address" className="size-10" />
          <p className="text-xl font-semibold ">Address</p>
        </Link>
        <div
          className={
            splitedPath[2] === "address" ? "block lg:hidden w-full" : "hidden"
          }
        >
          <Outlet />
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5"
        >
          <img src={log} alt="logOut" className="size-10 " />
          <p className="text-xl font-semibold ">Logout</p>
        </button>
      </article>
      <article className="hidden lg:flex lg:w-8/12 xl:w-10/12  flex-col items-start justify-start ">
        <Outlet />
      </article>
    </section>
  );
};

export default Profile;
