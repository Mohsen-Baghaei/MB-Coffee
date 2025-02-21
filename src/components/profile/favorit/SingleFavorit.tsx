import { ReactElement } from "react";
import {
  favoritCoffeeType,
  removeFavoritCoffee,
} from "../../../app/register/registerSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToBag } from "../../../app/inBag/inBagSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

type PropType = {
  coffee: favoritCoffeeType;
  userId: number;
};

const SingleFavorit = ({ coffee, userId }: PropType): ReactElement => {
  const dispatch = useDispatch();
  const notifySuccess = (successMsg: string) => toast.success(successMsg);

  const notifyInfo = (infoMsg: string) => toast(infoMsg);

  const price: string = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(coffee.price);

  const handleRemoveFavort = () => {
    notifyInfo("Item Removed from Favorits");
    dispatch(
      removeFavoritCoffee({
        id: userId,
        productId: coffee?.productId!,
      })
    );
  };

  const handleAdd = () => {
    notifySuccess("Item Added To Bag");
    dispatch(
      addToBag({
        id: coffee?.productId!,
        name: coffee?.name!,
        img: coffee?.img!,
        weight: coffee?.weight!,
        price: coffee?.price!,
      })
    );
  };

  return (
    <article
      data-aos="zoom-in"
      data-aos-once="true"
      className="bg-primary/20 rounded-xl w-full"
    >
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
      <img
        src={coffee.img}
        alt={coffee.name}
        className="size-48 block mx-auto"
      />
      <Link to={`/products/${coffee.productId}`}>
        <p className="flex justify-center items-center flex-nowrap w-full p-1 mx-auto text-xl sm:text-2xl ">
          {coffee.name}
        </p>
        <p className="flex justify-between items-center text-xl sm:text-2xl p-2 px-4">
          <span>{coffee.weight} g</span>
          <span>{price}</span>
        </p>
      </Link>
      <div className="flex justify-between items-center flex-nowrap w-full p-2 mx-auto text-xl sm:text-2xl gap-2 mb-2">
        <button
          onClick={handleAdd}
          className="flex w-10/12 justify-center items-center gap-2 p-2 border border-solid border-primary/80 hover:border-primary rounded-xl text-lg text-gray-800"
        >
          Add to Bag
          <MdOutlineShoppingCart className="size-7" />
        </button>
        <button
          onClick={handleRemoveFavort}
          className="flex w-2/12 justify-center items-center p-2 border border-solid border-gray-500 rounded-xl text-lg text-red-500"
        >
          <BsFillTrashFill className="size-7" />
        </button>
      </div>
    </article>
  );
};

export default SingleFavorit;
