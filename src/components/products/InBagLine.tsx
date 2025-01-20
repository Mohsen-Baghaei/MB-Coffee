import { ReactElement } from "react";
import { deleteItem, StateType, updateQty } from "../../app/inBag/inBagSlice";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

type PropType = {
  item: StateType;
};

const InBagLine = ({ item }: PropType): ReactElement => {
  const dispatch = useDispatch();

  const { id, name, img, weight, price, qty } = item;

  const handleChange = (count: number) => {
    if (count === 0) {
      dispatch(deleteItem({ id }));
    } else {
      dispatch(updateQty({ id, qty: count }));
    }
  };

  const itemPrice: string = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(qty! * price);

  return (
    <article className="flex w-full my-5 justify-between items-center border-b-2 border-solid border-gray-300 pb-5">
      <div className="flex items-start justify-start w-4/5 md:w-11/12">
        <img src={img} alt={name} className="size-32 md:size-48" />
        <div className="flex flex-col justify-between w-4/5 mx-5">
          <p className="text-2xl md:text-4xl font-semibold mt-5">{name}</p>
          <p className="text-xl md:text-2xl font-semibold mt-2 md:mt-4 flex flex-col md:flex-row justify-between items-start">
            <p className="flex justify-center items-center gap-2">
              <span>{qty}</span>
              <span>Pieces</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <span className="hidden md:flex">Item Price:</span>
              <span>{itemPrice}</span>
            </p>
          </p>
          <p className="text-lg font-semibold mt-2 md:mt-4">
            Weight: {weight} g
          </p>
        </div>
      </div>
      <div className="w-1/5 md:w-1/12 flex flex-col justify-between items-center rounded-xl border-2 border-solid border-gray-400 text-red-500 mt-5">
        <button
          className="w-full flex justify-center items-center text-3xl font-cursive font-bold p-5 "
          onClick={() => handleChange(qty! + 1)}
        >
          <FaPlus />
        </button>
        <button
          className="w-full flex justify-center items-center text-3xl font-cursive p-5 font-bold border-t border-solid border-gray-300"
          onClick={() => handleChange(qty! - 1)}
        >
          {qty === 1 ? <FaTrashAlt /> : <FaMinus />}
        </button>
      </div>
    </article>
  );
};

export default InBagLine;
