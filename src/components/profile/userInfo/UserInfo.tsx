import { ReactElement } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { selectedUsers } from "../../../app/register/registerSlice";
import { useSelector } from "react-redux";

const UserInfo = (): ReactElement => {
  const user = useSelector(selectedUsers);

  const showName =
    user?.userInfo.firstname && user?.userInfo.lastname
      ? `${user.userInfo.firstname} ${user.userInfo.lastname}`
      : "Name";

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
            Personal Info
          </p>
        </div>
      </div>
      <section className="flex flex-col w-full justify-start items-center">
        <article className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          <p
            data-aos="fade-right"
            data-aos-once="true"
            className="text-center w-full sm:w-1/2 p-3 rounded-xl border-2 border-solid border-gray-500 text-lg sm:text-xl line-clamp-1 mt-5"
          >
            {showName}
          </p>
          <p
            data-aos="fade-left"
            data-aos-once="true"
            className="text-center w-full sm:w-1/2 p-3 rounded-xl border-2 border-solid border-gray-500 text-lg sm:text-xl line-clamp-1 mt-5"
          >
            {user?.userInfo.email ?? "Email"}
          </p>
        </article>
        <article className="w-full flex flex-col sm:flex-row justify-between items-start gap-1">
          <p
            data-aos="fade-right"
            data-aos-once="true"
            className="text-center w-full sm:w-1/2 p-3 rounded-xl border-2 border-solid border-gray-500 text-lg sm:text-xl line-clamp-1 mt-5"
          >
            {user?.userInfo.phoneNumber ?? "Phone Number"}
          </p>
          <p
            data-aos="fade-left"
            data-aos-once="true"
            className="text-center w-full sm:w-1/2 p-3 rounded-xl border-2 border-solid border-gray-500 text-lg sm:text-xl line-clamp-1 mt-5"
          >
            {user?.userInfo.birthday ?? "Birthday Date"}
          </p>
        </article>
        <article className="w-full flex flex-col sm:flex-row justify-between items-start gap-1">
          <p
            data-aos="fade-right"
            data-aos-once="true"
            className="text-center w-full sm:w-1/2 p-3 rounded-xl border-2 border-solid border-gray-500 text-lg sm:text-xl line-clamp-1 mt-5"
          >
            {user?.userInfo.job ?? "Job"}
          </p>
          <Link
            data-aos="fade-left"
            data-aos-once="true"
            to="/profile/userinfo/edit"
            className="flex justify-center items-center tracking-wider font-semibold bg-secondary/70 text-gray-100 p-3  hover:bg-secondary transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:bg-secondary/40 cursor-pointer text-center w-full sm:w-1/2 rounded-xl border-2 border-solid border-gray-500 text-lg sm:text-xl line-clamp-1 mt-5"
          >
            Edit Personal Info
          </Link>
        </article>
      </section>
    </div>
  );
};

export default UserInfo;
