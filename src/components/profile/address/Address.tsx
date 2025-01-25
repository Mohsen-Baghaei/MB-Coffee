import { ReactElement } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import {
  addressType,
  selectedUsers,
} from "../../../app/register/registerSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleAddress from "./SingleAddress";

const Address = (): ReactElement => {
  const user = useSelector(selectedUsers);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-7 p-5">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <Link to="/profile">
            <FaArrowLeft className="size-6 cursor-pointer" />
          </Link>
          <p className="text-2xl font-bold">Addresses</p>
        </div>
        <Link
          to={`/profile/address/new/${user?.id}`}
          className=" flex justify-center items-center gap-1 tracking-wider font-semibold bg-secondary/70 text-gray-100 p-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:bg-secondary/40 cursor-pointer"
        >
          Add New Address
        </Link>
      </div>
      <section className="flex flex-col justify-start items-center w-full gap-8">
        {user?.userAddress.length ? (
          user.userAddress.map((address: addressType) => (
            <SingleAddress
              key={address.addressId}
              address={address}
              userId={user.id}
            />
          ))
        ) : (
          <p>Thre is No Address to Show</p>
        )}
      </section>
    </div>
  );
};

export default Address;
