import { ReactElement, useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/elements/Home";
import Loading from "./components/elements/Loading";

const Products = lazy(() => import("./components/products/Products"));
const SingleProduct = lazy(() => import("./components/products/SingleProduct"));
const About = lazy(() => import("./components/elements/About"));
const InBag = lazy(() => import("./components/products/InBag"));
const Register = lazy(() => import("./components/register/Register"));
const Login = lazy(() => import("./components/register/Login"));
const Missing = lazy(() => import("./components/elements/Missing"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Address = lazy(() => import("./components/profile/address/Address"));
const NewAddress = lazy(
  () => import("./components/profile/address/NewAddress")
);
const EditAddress = lazy(
  () => import("./components/profile/address/EditAddress")
);
const UserInfo = lazy(() => import("./components/profile/userInfo/UserInfo"));
const EditUserInfo = lazy(
  () => import("./components/profile/userInfo/EditUserInfo")
);
const Favorit = lazy(() => import("./components/profile/favorit/Favorit"));

const App = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path=":productId"
            element={
              <Suspense fallback={<Loading />}>
                <SingleProduct />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="inbag"
          element={
            <Suspense fallback={<Loading />}>
              <InBag />
            </Suspense>
          }
        />

        <Route
          path="register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path="about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          }
        >
          <Route
            path="favorit"
            element={
              <Suspense fallback={<Loading />}>
                <Favorit />
              </Suspense>
            }
          />
          <Route path="userinfo">
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <UserInfo />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loading />}>
                  <EditUserInfo />
                </Suspense>
              }
            />
          </Route>

          <Route path="address">
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <Address />
                </Suspense>
              }
            />
            <Route
              path="new/:userId"
              element={
                <Suspense fallback={<Loading />}>
                  <NewAddress />
                </Suspense>
              }
            />
            <Route
              path="edit/:addressId"
              element={
                <Suspense fallback={<Loading />}>
                  <EditAddress />
                </Suspense>
              }
            />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Missing />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
