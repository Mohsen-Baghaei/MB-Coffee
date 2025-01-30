import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItems,
  inBagItems,
  StateType,
  totalItem,
  totalPrice,
} from "../../app/inBag/inBagSlice";
import empty from "../../assets/website/empty.png";
import InBagLine from "./InBagLine";
import { selectedUsers, submitOrders } from "../../app/register/registerSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const InBag = (): ReactElement => {
  const items: StateType[] = useSelector(inBagItems);
  const totalItems: number = useSelector(totalItem);
  const totalPrices: string = useSelector(totalPrice);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const orderedItems = [...items].sort((a, b) => b.id - a.id);

  const user = useSelector(selectedUsers);

  const notifyError = (msg: string) => toast.error(msg);

  const notifySuccess = (msg: string) => toast.success(msg);

  const content = orderedItems.length ? (
    orderedItems.map((item) => <InBagLine key={item.id} item={item} />)
  ) : (
    <div
      data-aos="zoom-in"
      className="flex flex-col w-full justify-center items-center gap-6 my-7"
    >
      <p className="text-2xl font-semibold">The Bag is Empty</p>
      <img src={empty} alt="empty" className="size-48" />
    </div>
  );

  const handleSubmit = () => {
    if (!user) {
      notifyError("You Need to Login First");
      setTimeout(() => {
        navigate("/register");
      }, 3000);
    } else {
      notifySuccess("Purchase Completed");
      dispatch(
        submitOrders({
          id: user.id,
          orders: orderedItems,
          totalItems,
          totalPrices,
        })
      );
      setTimeout(() => {
        dispatch(clearItems());
        navigate("/");
      }, 3000);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-full p-1 md:p-5">
      {content}
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
      <div
        className={`${
          orderedItems.length ? "flex" : "hidden"
        } w-full  flex-col sm:flex-row justify-around items-center text-xl md:text-2xl gap-5 font-semibold`}
      >
        <p className="w-full sm:w-1/3 flex items-center justify-start gap-2 pl-5">
          <span className="font-serif">Items in Bag :</span>
          <span>{totalItems}</span>
        </p>
        <p className="w-full sm:w-1/3 flex items-center justify-start gap-2 pl-5">
          <span className="font-serif">Total Price :</span>
          <span>{totalPrices}</span>
        </p>
        <button
          onClick={handleSubmit}
          className="w-full sm:w-1/3 p-4 rounded-2xl text-slate-50 bg-primary/70 hover:bg-primary "
        >
          Purchase
        </button>
      </div>
    </section>
  );
};

export default InBag;
