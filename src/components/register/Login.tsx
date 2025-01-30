import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  usersError,
  authorizUser,
  selectedUsers,
} from "../../app/register/registerSlice";

import { pictutes } from "../../app/data/data";

const pictute = Math.floor(Math.random() * 10);

const Login = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector(usersError);
  const loginStatus = useSelector(selectedUsers);

  const hi = useSelector(selectedUsers);
  console.log(hi);

  const userRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<string>("");

  const [pwd, setPwd] = useState<string>("");

  const [checkNavigate, setCheckNavigate] = useState<boolean>(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    if (
      !error &&
      user &&
      pwd &&
      loginStatus?.loggedIn === true &&
      checkNavigate === true
    ) {
      notifySuccess();
      setTimeout(() => {
        setUser("");
        setPwd("");
        navigate("/");
      }, 3000);
    } else if (error && checkNavigate === true) {
      notifyError();
    }
    setCheckNavigate(false);
  }, [checkNavigate]);

  const onUserChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(authorizUser({ user, pwd }));
    setCheckNavigate(true);
  };

  const notifyError = () => toast.error(error);

  const notifySuccess = () => toast.success("You Logged in Successfuly !");

  return (
    <div className="bg-primary/50 text-gray-900 flex justify-center items-start lg:items-center min-h-screen">
      <div className=" m-0 sm:m-10 lg:bg-primary/80 shadow sm:rounded-lg flex justify-center flex-1 mt-10 space-y-16">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="lg:w-1/2 xl:w-5/12 sm:p-12 flex flex-col"
        >
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className=" flex flex-col items-start justify-start">
            <h1 className="text-5xl xl:text-9xl font-cursive lg:mb-10">
              Sign In
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
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-700 text-sm focus:bg-white transition-all duration-300 ease-in-out "
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={pwd}
                  onChange={onPasswordChange}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-700 text-sm focus:bg-white mt-5 transition-all duration-300 ease-in-out"
                />
                <button
                  type="submit"
                  disabled={!user || !pwd ? true : false}
                  className="mt-5 tracking-wider font-semibold bg-secondary/70 text-gray-100 w-full py-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:bg-secondary/40"
                >
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-10 text-center text-xl/6 text-gray-100">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-blue-300 hover:text-blue-500 underline"
                  >
                    Sign Up
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

export default Login;
