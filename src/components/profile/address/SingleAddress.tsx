import { ReactElement } from "react";
import {
  addressType,
  deleteAddress,
} from "../../../app/register/registerSlice";
import { GiMailbox } from "react-icons/gi";
import { FaMapLocation, FaUser } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

type PropType = {
  address: addressType;
  userId: number;
};

const SingleAddress = ({ address, userId }: PropType): ReactElement => {
  const showAddress = `${address.province} / ${address.city} / ${address.location}`;

  const dispatch = useDispatch();

  const handleDeleteAddress = () => {
    dispatch(deleteAddress({ id: userId, addressId: address.addressId }));
  };

  return (
    <article className="flex justify-between items-start w-full p-2 border-2 border-solid border-gray-500 rounded-xl">
      <div className="flex flex-col gap-2 w-11/12">
        <p className="flex justify-start items-center gap-2 text-xl p-2">
          <FaMapLocation className="size-6 text-gray-400" /> {showAddress}
        </p>
        <p className="flex justify-start items-center gap-2 text-xl p-2">
          <GiMailbox className="size-6 text-gray-400" />
          {address.postalCode}
        </p>
        <p className="flex justify-start items-center gap-2 text-xl p-2">
          <MdPhoneIphone className="size-6 text-gray-400" />
          phone number remove if it dose not exsit
        </p>
        <p className="flex justify-start items-center gap-2 text-xl p-2">
          <FaUser className="size-6 text-gray-400" />
          name and last name
        </p>
      </div>
      <div className="w-1/12 flex flex-col justify-start items-end gap-4">
        <Link
          to={`/profile/address/edit/${address.addressId}`}
          className=" rounded-xl flex justify-center items-center gap-2 border border-solid border-gray-400 p-4 "
        >
          <FaEdit className="size-6 text-gray-500" />
        </Link>
        <button
          onClick={handleDeleteAddress}
          className=" rounded-xl flex justify-center items-center gap-2 border border-solid border-gray-400 p-4 "
        >
          <FaTrashAlt className="size-6 text-red-500" />
        </button>
      </div>
    </article>
  );
};

export default SingleAddress;
