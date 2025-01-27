import { ReactElement } from "react";
import {
  addressType,
  deleteAddress,
  usersType,
} from "../../../app/register/registerSlice";
import { GiMailbox } from "react-icons/gi";
import { FaLocationArrow, FaMapLocation, FaUser } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { GrLocationPin } from "react-icons/gr";

type PropType = {
  address: addressType;
  user: usersType;
};

const SingleAddress = ({ address, user }: PropType): ReactElement => {
  const dispatch = useDispatch();

  const handleDeleteAddress = () => {
    dispatch(deleteAddress({ id: user.id, addressId: address.addressId }));
  };

  const showName =
    user?.userInfo.firstname && user?.userInfo.lastname
      ? `${user.userInfo.firstname} ${user.userInfo.lastname}`
      : "Name";

  return (
    <article
      data-aos="fade-right"
      data-aos-once="true"
      className="flex justify-between items-start w-full p-2 border-2 border-solid border-gray-500 rounded-xl"
    >
      <div className="flex flex-col gap-2 w-11/12">
        <p className="flex justify-start items-center gap-2 text-lg sm:text-xl p-2">
          <FaMapLocation className="size-6 text-gray-400" />
          {address.province}
        </p>
        <p className="flex justify-start items-center gap-2 text-lg sm:text-xl p-2">
          <FaLocationArrow className="size-6 text-gray-400" />
          {address.city}
        </p>
        <p className="flex justify-start items-center gap-2 text-lg sm:text-xl p-2">
          <GrLocationPin className="size-6 text-gray-400" />
          {address.location}
        </p>
        <p className="flex justify-start items-center gap-2 text-lg sm:text-xl p-2">
          <GiMailbox className="size-6 text-gray-400" />
          {address.postalCode}
        </p>
        {user?.userInfo?.phoneNumber ? (
          <p className="flex justify-start items-center gap-2 text-lg sm:text-xl p-2">
            <MdPhoneIphone className="size-6 text-gray-400" />
            {user.userInfo.phoneNumber}
          </p>
        ) : null}
        {showName ? (
          <p className="flex justify-start items-center gap-2 text-lg sm:text-xl p-2">
            <FaUser className="size-6 text-gray-400" />
            {showName}
          </p>
        ) : null}
      </div>
      <div className="w-1/12 flex flex-col justify-start items-end gap-2 sm:gap-4">
        <Link
          to={`/profile/address/edit/${address.addressId}`}
          className=" rounded-xl flex justify-center items-center gap-2 border border-solid border-gray-400 p-4 "
        >
          <FaEdit className="size-4 sm:size-6 text-gray-500" />
        </Link>
        <button
          onClick={handleDeleteAddress}
          className=" rounded-xl flex justify-center items-center gap-2 border border-solid border-gray-400 p-4 "
        >
          <FaTrashAlt className="size-4 sm:size-6 text-red-500" />
        </button>
      </div>
    </article>
  );
};

export default SingleAddress;
