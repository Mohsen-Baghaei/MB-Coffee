import { ChangeEvent, ReactElement } from "react";
import { StateType } from "../../app/inBag/inBagSlice";

type PropType = {
  item: StateType;
};

const InBagLine = ({ item }: PropType): ReactElement => {
  const { id, name, img, weight, price, qty, itemPrice } = item;
  const highestQty: number = 20 > item.qty! ? 20 : item.qty!;

  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );
  const options: ReactElement[] = optionValues.map((val) => (
    <option key={`opt${val}`} value={val}>
      {val}
    </option>
  ));
  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    /* dispatch({
        payload: { ...item, qty: Number(e.target.value) },
      }); */
  };
  return (
    <article className="flex w-full my-5 justify-between items-center">
      <div className="flex items-start justify-start w-3/4">
        <img src={img} alt={name} className="size-32" />
        <div className="flex flex-col ">
          <p className=" text-2xl font-semibold mt-5">{name}</p>
          <p className=""></p>
          <select
            name="itemQty"
            id="itemQty"
            className="w-1/2 mt-2"
            value={item.qty}
            aria-label="Item Quantity"
            onChange={onChangeQty}
          >
            {options}
          </select>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-between items-center gap-4">
        <button className="w-full">Delete</button>
        <button className="w-full">Delete</button>
      </div>
    </article>
  );
};

export default InBagLine;
