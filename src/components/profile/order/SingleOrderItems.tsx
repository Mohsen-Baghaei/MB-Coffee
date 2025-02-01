import { memo, ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiCoffeeBean, CiStar } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";
import { StateType } from "../../../app/inBag/inBagSlice";
import { useDispatch } from "react-redux";
import { changeRating } from "../../../app/register/registerSlice";

type PropType = {
  order: StateType;
  orderedId: number;
  id: number;
};

const SingleOrderItems = ({ order, orderedId, id }: PropType): ReactElement => {
  const rate = order.rate;
  const [rating, setRating] = useState<number[]>(Array(5).fill(0));

  const dispatch = useDispatch();

  useEffect(() => {
    if (rate) {
      const newRating = Array(5).fill(0);
      for (let i: number = 0; i <= rate; i++) {
        newRating[i] = 1;
      }
      setRating(newRating);
    }
  }, [rate]);

  const handleRating = (index: number) => {
    const newRating = Array(5).fill(0);
    for (let i: number = 0; i <= index; i++) {
      newRating[i] = 1;
    }
    setRating(newRating);
    dispatch(
      changeRating({ id, orderedId, singleOrderId: order.id, rate: index })
    );
  };

  return (
    <article className="flex flex-col justify-start items-start p-5 pl-0 border-t-2 border-solid border-gray-300">
      <Link
        to={`/products/${order.id}`}
        className="flex justify-start items-start"
      >
        <img src={order.img} alt={order.img} className="size-32 md:size-56" />
        <p className="flex flex-col justify-between items-start gap-1 text-xl w-full my-2">
          <span className="flex justify-center items-center gap-1 w-full">
            <CiCoffeeBean className="size-6 text-gray-500" />
            {order.name}
            <CiCoffeeBean className="size-6 text-gray-500" />
          </span>
          <span className="flex justify-between items-center gap-3 w-full">
            <span>
              {order.qty}{" "}
              <span className="text-lg md:text-xl text-gray-500">Coffee</span>
            </span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(order.price)}
            </span>
          </span>
          <span className="flex justify-between items-center gap-3 w-full">
            <span className="text-lg md:text-xl text-gray-500">
              Total Item Price
            </span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(order.price * order?.qty!)}
            </span>
          </span>
          <span>
            {order.weight}{" "}
            <span className="text-lg md:text-xl text-gray-500">g</span>
          </span>
        </p>
      </Link>
      <section className="w-full flex justify-end items-center gap-1">
        {rating.map((rate: number, i: number) => (
          <article key={i}>
            {rate === 1 ? (
              <GiRoundStar
                className="size-8 md:size-12 text-yellow-400"
                onClick={() => handleRating(i)}
              />
            ) : (
              <CiStar
                className="size-8 md:size-12 text-yellow-400"
                onClick={() => handleRating(i)}
              />
            )}
          </article>
        ))}
      </section>
    </article>
  );
};

const memoizedItem = memo(SingleOrderItems);

export default memoizedItem;
