import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectedUsers,
  userInfoEdit,
} from "../../../app/register/registerSlice";
import { ToastContainer, toast } from "react-toastify";

const EditUserInfo = (): ReactElement => {
  const user = useSelector(selectedUsers);

  const [firstname, SetFirstname] = useState<string>(
    user?.userInfo.firstname ?? ""
  );
  const [lastname, setLastname] = useState<string>(
    user?.userInfo.lastname ?? ""
  );
  const [email, setEmail] = useState<string>(user?.userInfo.email ?? "");
  const [phoneNumber, setPhoneNumber] = useState<string>(
    user?.userInfo.phoneNumber?.toString() ?? ""
  );
  const [birthday, setBirthday] = useState<string>(
    user?.userInfo.birthday ?? ""
  );
  const [job, setJob] = useState<string>(user?.userInfo.job ?? "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFirstnameChange = (e: ChangeEvent<HTMLInputElement>) =>
    SetFirstname(e.target.value);

  const onLastnameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLastname(e.target.value);

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(e.target.value);

  const onBirthdayChange = (e: ChangeEvent<HTMLInputElement>) =>
    setBirthday(e.target.value);

  const onJobChange = (e: ChangeEvent<HTMLInputElement>) =>
    setJob(e.target.value);

  const notifySuccess = (msg: string) => toast.success(msg);

  const notifyError = (msg: string) => toast.error(msg);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      notifySuccess("Personal InfoUpdated");
      dispatch(
        userInfoEdit({
          id: Number(user?.id),
          firstname,
          lastname,
          email,
          phoneNumber: Number(phoneNumber),
          birthday,
          job,
        })
      );
      setTimeout(() => {
        navigate("/profile/userinfo");
      }, 3000);
    } else {
      notifyError("You Need to Login First");
    }
  };

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="flex gap-4 justify-start items-center p-5"
      >
        <Link to="/profile/userinfo">
          <FaArrowLeft className="size-6 cursor-pointer" />
        </Link>
        <p className="text-xl sm:text-2xl font-semibold sm:font-bold">
          Edit Personal Info
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full gap-7 p-5"
      >
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1"
          >
            <label htmlFor="firstname" className="text-xl font-semibold mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              autoComplete="off"
              required
              placeholder="Mohsen"
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={firstname}
              onChange={onFirstnameChange}
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1"
          >
            <label htmlFor="lastname" className="text-xl font-semibold mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              autoComplete="off"
              required
              placeholder="Baghaei"
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={lastname}
              onChange={onLastnameChange}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-2 ">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1"
          >
            <label htmlFor="email" className="text-xl font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
              placeholder="MBCoffee@gmail.com"
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1"
          >
            {" "}
            <label htmlFor="telephone" className="text-xl font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              autoComplete="off"
              min={11}
              max={12}
              placeholder="989 012 345 678"
              required
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={phoneNumber}
              onChange={onPhoneNumberChange}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full gap-2 ">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1"
          >
            <label htmlFor="birthday" className="text-xl font-semibold mb-1">
              Birthday Date
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              autoComplete="off"
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={birthday}
              onChange={onBirthdayChange}
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1"
          >
            {" "}
            <label htmlFor="job" className="text-xl font-semibold mb-1">
              Job
            </label>
            <input
              type="text"
              id="job"
              name="job"
              autoComplete="off"
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={job}
              onChange={onJobChange}
            />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          className="flex items-center justify-center sm:justify-end w-full gap-2 "
        >
          <button
            disabled={
              !firstname || !lastname || !email || !phoneNumber ? true : false
            }
            type="submit"
            className="w-full flex justify-center items-center gap-1 tracking-wider font-semibold bg-secondary/70 text-gray-100 py-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:bg-secondary/40"
          >
            Edit
          </button>
        </div>
      </form>
    </>
  );
};

export default EditUserInfo;
