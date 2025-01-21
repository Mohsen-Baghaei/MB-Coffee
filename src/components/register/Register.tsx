import { ReactElement, useState } from "react";
import coffeeregister1 from "../../assets/register/coffeeregister1.png";
import coffeeregister2 from "../../assets/register/coffeeregister2.png";
import coffeeregister3 from "../../assets/register/coffeeregister3.png";
import coffeeregister4 from "../../assets/register/coffeeregister4.png";

const USER_REGEX: RegExp = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = (): ReactElement => {
  const pictutes = [
    coffeeregister1,
    coffeeregister2,
    coffeeregister3,
    coffeeregister4,
  ];

  const pictute = Math.floor(Math.random() * 4);

  const [user, setUser] = useState<string>("");
  const [validUser, setValidUser] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);

  const [pwd, setPwd] = useState<string>("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState<string>("");
  const [validMatchPwd, ValidMatchPwd] = useState<boolean>(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState<boolean>(false);

  return (
    <div className="bg-gray-100 text-gray-900 flex justify-center">
      <div className=" m-0 sm:m-10 bg-primary/50 shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 sm:p-12">
          <div className=" flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-10 text-center hidden lg:flex">
          <div className="flex justify-center items-center w-full bg-contain bg-center bg-no-repeat back">
            <img
              src={pictutes[pictute]}
              alt="coffeeregister"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
