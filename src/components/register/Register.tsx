import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiInformation2Fill } from "react-icons/ri";
import {
  createUser,
  usersError,
  pictutes,
} from "../../app/register/registerSlice";

const USER_REGEX: RegExp = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const pictute = Math.floor(Math.random() * 10);

const Register = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector(usersError);

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState<string>("");
  const [validUser, setValidUser] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);

  const [pwd, setPwd] = useState<string>("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState<string>("");
  const [validMatchPwd, setValidMatchPwd] = useState<boolean>(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");
  const [checkNavigate, setCheckNavigate] = useState<boolean>(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatchPwd(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg(error);
  }, [error]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  useEffect(() => {
    if (!error && validUser && validPwd && validMatchPwd) {
      navigate("/login");
      setUser("");
      setPwd("");
      setMatchPwd("");
    }
    setCheckNavigate(false);
  }, [checkNavigate]);

  const onUserChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);

  const onMatchPwdChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMatchPwd(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const v1: boolean = USER_REGEX.test(user);
    const v2: boolean = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    dispatch(createUser({ user, pwd }));
    setCheckNavigate(true);
  };

  return (
    <div className="bg-primary/50 text-gray-900 flex justify-center items-start lg:items-center min-h-screen">
      <div className=" m-0 sm:m-10 lg:bg-primary/80 shadow sm:rounded-lg flex justify-center flex-1 mt-10 space-y-16">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="lg:w-1/2 xl:w-5/12 sm:p-12 flex flex-col"
        >
          <p
            className={
              errMsg
                ? "text-center bg-slate-300 text-red-500 text-sm md:text-base rounded-xl p-3 relative flex outline outline-2 outline-offset-1 outline-red-500 mb-5"
                : "hidden"
            }
            ref={errRef}
          >
            {errMsg}
          </p>
          <div className=" flex flex-col items-start justify-start">
            <h1 className="text-5xl xl:text-9xl font-cursive lg:mb-10">
              Sign up
            </h1>
            <form className="w-full flex-1 mt-8" onSubmit={handleSubmit}>
              <div className="mx-auto max-w-xs">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="User Name"
                  required
                  ref={userRef}
                  value={user}
                  onChange={onUserChange}
                  autoComplete="off"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  aria-describedby="usernote"
                  aria-invalid={validUser ? "false" : "true"}
                  className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-700 text-sm focus:bg-white transition-all duration-300 ease-in-out ${
                    user && validUser
                      ? "outline outline-2 outline-offset-1 outline-green-500"
                      : user && !validUser
                      ? "outline outline-2 outline-offset-1 outline-red-500"
                      : "focus:outline focus:outline-2 focus:outline-offset-1 "
                  }`}
                />
                <p
                  id="usernote"
                  className={
                    user && !validUser && userFocus
                      ? "bg-secondary/70 text-slate-50 text-sm md:text-base rounded-xl p-1 -bottom-2 relative flex"
                      : "hidden"
                  }
                >
                  <RiInformation2Fill className="  mr-1 text-base  md:mt-1" />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  value={pwd}
                  onChange={onPasswordChange}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-700 text-sm focus:bg-white mt-5 transition-all duration-300 ease-in-out ${
                    pwd && validPwd
                      ? "outline outline-2 outline-offset-1 outline-green-500"
                      : pwd && !validPwd
                      ? "outline outline-2 outline-offset-1 outline-red-500"
                      : "focus:outline focus:outline-2 focus:outline-offset-1 "
                  }`}
                />
                <p
                  id="pwdnote"
                  className={
                    pwd && !validPwd && pwdFocus
                      ? "bg-secondary/70 text-slate-50 text-sm md:text-base rounded-xl p-1 -bottom-2 relative flex flex-col"
                      : "hidden"
                  }
                >
                  <span className="flex">
                    <RiInformation2Fill className="mr-1 text-base  md:mt-1" />8
                    to 24 characters.
                  </span>
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  <span>
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </span>
                </p>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  aria-describedby="confirmnote"
                  aria-invalid={validMatchPwd ? "false" : "true"}
                  value={matchPwd}
                  onChange={onMatchPwdChange}
                  onFocus={() => setMatchPwdFocus(true)}
                  onBlur={() => setMatchPwdFocus(false)}
                  className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-700 text-sm focus:bg-white mt-5 transition-all duration-300 ease-in-out ${
                    validMatchPwd && validPwd
                      ? "outline outline-2 outline-offset-1 outline-green-500"
                      : matchPwd && !validMatchPwd
                      ? "outline outline-2 outline-offset-1 outline-red-500"
                      : "focus:outline focus:outline-2 focus:outline-offset-1 "
                  }`}
                />
                <p
                  id="confirmnote"
                  className={
                    matchPwd && !validMatchPwd && matchPwdFocus
                      ? "bg-secondary/70 text-slate-50 text-sm md:text-base rounded-xl p-1 -bottom-2 relative flex"
                      : "hidden"
                  }
                >
                  <RiInformation2Fill className="  mr-1 text-base  md:mt-1" />
                  Must match the first password input field.
                </p>
                <button
                  type="submit"
                  disabled={
                    !validUser || !validPwd || !validMatchPwd ? true : false
                  }
                  className="mt-5 tracking-wider font-semibold bg-secondary/70 text-gray-100 w-full py-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:bg-secondary/40"
                >
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-10 text-center text-xl/6 text-gray-100">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-blue-300 hover:text-blue-500 underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="flex-1 p-10 text-center hidden lg:flex"
        >
          <div className="flex justify-center items-center w-full">
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
