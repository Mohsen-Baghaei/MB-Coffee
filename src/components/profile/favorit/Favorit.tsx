import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectedUsers } from "../../../app/register/registerSlice";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import SingleFavorit from "./SingleFavorit";

const Favorit = (): ReactElement => {
  const user = useSelector(selectedUsers);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-7 p-2 sm:p-5">
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="w-full flex gap-4 justify-start items-center"
      >
        <Link to="/profile">
          <FaArrowLeft className="size-6 cursor-pointer" />
        </Link>
        <p className="text-xl sm:text-2xl font-semibold sm:font-bold">
          Favorite Coffees
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-6 place-content-center w-full">
        {user?.favoritCoffee?.map((coffee) => (
          <SingleFavorit
            key={coffee.productId}
            coffee={coffee}
            userId={user.id}
          />
        ))}
      </section>
    </div>
  );
};

export default Favorit;
