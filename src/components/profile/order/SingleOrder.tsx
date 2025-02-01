import { memo, ReactElement } from "react";
import { OrdersType } from "../../../app/register/registerSlice";

import SingleOrderItems from "./SingleOrderItems";
import { StateType } from "../../../app/inBag/inBagSlice";

type PropType = {
  order: OrdersType;
  id: number;
};

const SingleOrder = ({ order, id }: PropType): ReactElement => {
  const date = order?.date?.split("-");

  const aos = order?.orderedId % 2 === 0 ? true : false;

  return (
    <article
      data-aos={aos ? "fade-right" : "fade-left"}
      data-aos-once="true"
      className="flex flex-col justify-start items-start w-full p-2 border-2 border-solid border-gray-300 rounded-lg"
    >
      <p className="flex justify-center items-center gap-2 text-xl p-2 pl-4">
        <span>{`${date[0]}/${date[1]}/${date[2].slice(0, 2)}`}</span>
        <span className="text-gray-500 text-2xl">-</span>
        <span>Total Price {order?.totalPrices}</span>
      </p>
      <section className="w-full flex flex-col my-3">
        {order?.orders.map((sOrder: StateType) => (
          <SingleOrderItems
            key={sOrder.id}
            order={sOrder}
            id={id}
            orderedId={order.orderedId}
          />
        ))}
      </section>
    </article>
  );
};

const memoizedItem = memo(SingleOrder);

export default memoizedItem;
