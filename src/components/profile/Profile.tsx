import { ReactElement } from "react";
import { CiLocationOn, CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import Address from "./Address";

const Profile = (): ReactElement => {
  return (
    <section className="w-full min-h-screen-small sm:min-h-screen-big flex justify-center items-start mx-auto">
      <article className="w-full lg:w-4/12 xl:w-2/12 flex flex-col items-start justify-start p-5">
        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <img src="" alt="" className="size-8" />
          <p className="text-xl font-semibold ">Hey Mohsen</p>
        </div>
        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <FiShoppingBag className="size-8" />
          <p className="text-xl font-semibold ">Orders</p>
        </div>

        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <MdFavoriteBorder className="size-8" />
          <p className="text-xl font-semibold ">Favorite Coffees</p>
        </div>

        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <FaRegUser className="size-8" />
          <p className="text-xl font-semibold ">User Info</p>
        </div>

        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <CiLocationOn className="size-8" />
          <p className="text-xl font-semibold ">Address</p>
        </div>

        <div className="w-full flex items-center gap-4 border-b-2 border-solid border-gray-400 p-5">
          <CiLogout className="size-8" />
          <p className="text-xl font-semibold ">Logout</p>
        </div>
      </article>
      <article className="hidden lg:flex lg:w-8/12 xl:w-10/12  flex-col items-start justify-start p-5">
        <Address />
      </article>
    </section>
  );
};

export default Profile;
