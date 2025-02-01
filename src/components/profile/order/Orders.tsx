import { memo, ReactElement } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedUsers } from "../../../app/register/registerSlice";
import empty from "../../../assets/profile/empty.png";

import SingleOrder from "./SingleOrder";

const Orders = (): ReactElement => {
  const user = useSelector(selectedUsers);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-7 p-2 sm:p-5">
      <div className="w-full flex justify-between items-center">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="flex gap-4 justify-center items-center"
        >
          <Link to="/profile">
            <FaArrowLeft className="size-6 cursor-pointer" />
          </Link>
          <p className="text-xl sm:text-2xl font-semibold sm:font-bold">
            Orders
          </p>
        </div>
      </div>
      <section className="flex flex-col justify-start items-center w-full gap-8">
        {user?.orderedItems.length ? (
          user.orderedItems.map((order) => (
            <SingleOrder key={order.orderedId} order={order} id={user.id} />
          ))
        ) : (
          <div
            data-aos="zoom-in"
            className="flex flex-col w-full justify-center items-center gap-6 my-7"
          >
            <p className="text-xl font-semibold">You have No Purchase</p>
            <img src={empty} alt="empty" className="size-40" />
          </div>
        )}
      </section>
    </div>
  );
};

const memoizedItem = memo(Orders);

export default memoizedItem;
