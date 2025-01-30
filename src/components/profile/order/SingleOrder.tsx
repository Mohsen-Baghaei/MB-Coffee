import { ReactElement } from "react";
import { OrdersType } from "../../../app/register/registerSlice";

type PropType = {
  order: OrdersType;
};

const SingleOrder = ({ order }: PropType): ReactElement => {
  return (
    <article
      data-aos="fade-right"
      data-aos-once="true"
      className="flex justify-between items-start w-full p-2 border-2 border-solid border-gray-500 rounded-xl"
    ></article>
  );
};

export default SingleOrder;
