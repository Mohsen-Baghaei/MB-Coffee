import { ReactElement } from "react";
import { OrdersType } from "../../../app/register/registerSlice";

type PropType = {
  order: OrdersType;
};

const SingleOrder = ({ order }: PropType): ReactElement => {
  const date = order?.date?.split("-");

  return (
    <article
      data-aos="fade-right"
      data-aos-once="true"
      className="flex flex-col justify-start items-start w-full p-2 border-2 border-solid border-gray-500 rounded-lg"
    >
      <p className="flex justify-center items-center gap-2">
        <span>{`${date[0]}/${date[1]}/${date[2].slice(0, 2)}`}</span>
        <span className="text-gray-500 text-2xl">-</span>
        <span>Total Price {order?.totalPrices}</span>
      </p>
      <section className="w-full flex flex-col my-3">
        {order?.orders.map((sOrder) => (
          <article
            className="flex justify-start items-start p-5 pl-0 border-t-2 border-solid border-gray-500"
            key={sOrder.id}
          >
            <img src={sOrder.img} alt={sOrder.img} className="size-28" />
            <p className="flex flex-col justify-start items-center gap-1">
              <span>{sOrder.name}</span>
              <span>{sOrder.qty} Coffee</span>
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(sOrder.price)}
              </span>
              <span>{sOrder.weight} g</span>
            </p>
          </article>
        ))}
      </section>
    </article>
  );
};

export default SingleOrder;
