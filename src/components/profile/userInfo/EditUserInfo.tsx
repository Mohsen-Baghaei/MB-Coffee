import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EditUserInfo = (): ReactElement => {
  const [firstname, SetFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [job, setJob] = useState<string>("");

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="flex gap-4 justify-center items-center p-5"
      >
        <Link to="/profile/address">
          <FaArrowLeft className="size-6 cursor-pointer" />
        </Link>
        <p className="text-2xl font-bold">Edit Personal Info</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full gap-7 p-5"
      >
        <div className="flex flex-col sm:flex-row w-full gap-2 ">
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
              pattern=".+@example\.com"
              size={30}
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
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{3}"
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
              type="tel"
              id="job"
              name="job"
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
            Add Address
          </button>
        </div>
      </form>
    </>
  );
};

export default EditUserInfo;
