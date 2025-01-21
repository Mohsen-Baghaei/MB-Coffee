import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { inBagItems, totalItem, totalPrice } from "../../app/inBag/inBagSlice";
import InBagLine from "./InBagLine";

const InBag = (): ReactElement => {
  const items = useSelector(inBagItems);
  const totalItems = useSelector(totalItem);
  const totalPrices = useSelector(totalPrice);

  const orderedItems = [...items].sort((a, b) => b.id - a.id);

  const content = orderedItems.length ? (
    orderedItems.map((item) => <InBagLine key={item.id} item={item} />)
  ) : (
    <p className="text-3xl font-bold p-10 flex items-center justify-center">
      The Bag Is Empty
    </p>
  );

  return (
    <section className="flex flex-col justify-center items-center w-full p-1 md:p-5">
      {content}
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
        <button className="w-full sm:w-1/3 p-4 rounded-2xl text-slate-50 bg-primary/70 hover:bg-primary ">
          Continue
        </button>
      </div>
    </section>
  );
};

export default InBag;
