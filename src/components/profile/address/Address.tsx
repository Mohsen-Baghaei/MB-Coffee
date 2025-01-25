import { ReactElement } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { selectedUsers } from "../../../app/register/registerSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Address = (): ReactElement => {
  const user = useSelector(selectedUsers);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-7 p-5">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <FaArrowLeft className="size-6 cursor-pointer" />
          <p className="text-2xl">Addresses</p>
        </div>
        <Link
          to={`/new/${user?.id}`}
          className=" flex justify-center items-center gap-1 tracking-wider font-semibold bg-secondary/70 text-gray-100 p-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:bg-secondary/40 cursor-pointer"
        >
          Add New Address
        </Link>
      </div>
    </div>
  );
};

export default Address;
