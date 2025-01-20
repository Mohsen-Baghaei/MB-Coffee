import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { inBagItems } from "../../app/inBag/inBagSlice";

const InBag = (): ReactElement => {
  const items = useSelector(inBagItems);
  console.log(items);

  return <div></div>;
};

export default InBag;
