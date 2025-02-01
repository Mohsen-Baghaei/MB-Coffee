import { memo, ReactElement, useState } from "react";
import { OrdersType } from "../../../app/register/registerSlice";
import { Link } from "react-router-dom";
import { CiCoffeeBean, CiStar } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";

type PropType = {
  order: OrdersType;
};

const SingleOrder = ({ order }: PropType): ReactElement => {
  const date = order?.date?.split("-");

  const aos = order?.orderedId % 2 === 0 ? true : false;

  const [rating, setRating] = useState<number[]>(Array(5).fill(0));

  const handleRating = (index: number) => {
    const newRating = Array(5).fill(0);
    for (let i: number = 0; i <= index; i++) {
      newRating[i] = 1;
    }
    setRating(newRating);
  };
  console.log(rating);
  return (
    <article
      data-aos={aos ? "fade-right" : "fade-left"}
      data-aos-once="true"
      className="flex flex-col justify-start items-start w-full p-2 border-2 border-solid border-gray-300 rounded-lg"
    >
      <p className="flex justify-center items-center gap-2 text-xl">
        <span>{`${date[0]}/${date[1]}/${date[2].slice(0, 2)}`}</span>
        <span className="text-gray-500 text-2xl">-</span>
        <span>Total Price {order?.totalPrices}</span>
      </p>
      <section className="w-full flex flex-col my-3">
        {order?.orders.map((sOrder) => (
          <Link
            to={`/products/${sOrder.id}`}
            className="flex justify-start items-start p-5 pl-0 border-t-2 border-solid border-gray-300"
            key={sOrder.id}
          >
            <img src={sOrder.img} alt={sOrder.img} className="size-28" />
            <p className="flex flex-col justify-start items-start gap-1 text-xl w-full">
              <span className="flex justify-center items-center gap-1">
                <CiCoffeeBean className="size-6 text-gray-500" />
                {sOrder.name}
                <CiCoffeeBean className="size-6 text-gray-500" />
              </span>
              <span className="flex justify-between items-center gap-3">
                <span>
                  {sOrder.qty}{" "}
                  <span className="text-lg md:text-xl text-gray-500">
                    Coffee
                  </span>
                </span>
                <span>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(sOrder.price)}
                </span>
              </span>
              <span className="flex justify-between items-center gap-3">
                <span className="text-lg md:text-xl text-gray-500">
                  Total Item Price
                </span>
                <span>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(sOrder.price * sOrder?.qty!)}
                </span>
              </span>
              <span>
                {sOrder.weight}{" "}
                <span className="text-lg md:text-xl text-gray-500">g</span>
              </span>
            </p>
          </Link>
        ))}
        <section className="w-full flex justify-end items-center gap-1">
          {rating.map((rate: number, i: number) => (
            <article key={i}>
              {rate === 1 ? (
                <GiRoundStar
                  className="size-8 text-yellow-400"
                  onClick={() => handleRating(i)}
                />
              ) : (
                <CiStar
                  className="size-8 text-yellow-400"
                  onClick={() => handleRating(i)}
                />
              )}
            </article>
          ))}
        </section>
      </section>
    </article>
  );
};

const memoizedItem = memo(SingleOrder);

export default memoizedItem;
