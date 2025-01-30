import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { logoutUser, selectedUsers } from "../../app/register/registerSlice";
import nologin from "../../assets/profile/nologin.gif";

import { ToastContainer, toast } from "react-toastify";

import avatar from "../../assets/profile/avatar.png";
import address from "../../assets/profile/address.png";
import favoritCoffee from "../../assets/profile/favoritCoffee.png";
import info from "../../assets/profile/info.png";
import log from "../../assets/profile/log.png";
import orders from "../../assets/profile/orders.png";
import { clearItems } from "../../app/inBag/inBagSlice";

const Profile = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const splitedPath = pathname.split("/");
  console.log(splitedPath[2]);

  const user = useSelector(selectedUsers);

  const handleLogout = () => {
    notifySuccess("You Logged out Successfuly");
    dispatch(logoutUser({ id: user?.id! }));
    setTimeout(() => {
      dispatch(clearItems());
      navigate("/");
    }, 3000);
  };

  const notifySuccess = (msg: string) => toast.success(msg);

  return (
    <section className="w-full min-h-screen-small sm:min-h-screen-big flex justify-center items-start mx-auto bg-white relative">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <article className="w-full lg:w-4/12 xl:w-2/12 flex flex-col items-start justify-start p-5">
        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <img src={avatar} alt="avatar" className="size-10" />
          <p className="text-xl font-semibold ">
            Hey {user?.userInfo.firstname ?? user?.user}
          </p>
        </div>
        <Link
          to="/profile/orders"
          className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5"
        >
          <img src={orders} alt="orders" className="size-10" />
          <p className="text-xl font-semibold ">Orders</p>
        </Link>
        <div
          className={
            splitedPath[2] === "orders" ? "block lg:hidden w-full" : "hidden"
          }
        >
          <Outlet />
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
      <article
        data-aos="zoom-in"
        className={
          !user
            ? "absolute top-0 right-0 left-0 bottom-0 bg-gray-300/50 flex flex-col gap-6 justify-center items-center"
            : "hidden"
        }
      >
        <p className="text-3xl font-semibold">You Need to Login First</p>
        <Link
          to="/login"
          className="text-center text-2xl text-gray-100 font-semibold font-serif sm:text-4xl bg-primary/80 hover:bg-primary p-5 rounded-xl"
        >
          Login
        </Link>
        <img src={nologin} alt="noLogIn" className="size-64" />
      </article>
    </section>
  );
};

export default Profile;
