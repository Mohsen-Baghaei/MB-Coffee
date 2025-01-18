import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectIds } from "../../app/products/productsSlice";

const Products = (): ReactElement => {
  const showProducts = useSelector(selectIds);
  console.log(showProducts);

  return <div></div>;
};

export default Products;
