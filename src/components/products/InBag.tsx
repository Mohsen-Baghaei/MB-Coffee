import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { inBagItems } from "../../app/inBag/inBagSlice";
import InBagLine from "./InBagLine";

const InBag = (): ReactElement => {
  const items = useSelector(inBagItems);

  const orderedItems = [...items].sort((a, b) => b.id - a.id);

  return (
    <section className="flex flex-col justify-center items-center w-full p-1 md:p-5">
      {orderedItems.map((item) => (
        <InBagLine key={item.id} item={item} />
      ))}
    </section>
  );
};

export default InBag;
