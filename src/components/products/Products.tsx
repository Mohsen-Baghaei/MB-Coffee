import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectIds } from "../../app/products/productsSlice";
import Product from "./Product";

const Products = (): ReactElement => {
  const showProducts = useSelector(selectIds);

  return (
    <div className="py-16 w-full">
      <section className="container">
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-8 place-items-center">
          {showProducts.map((product) => (
            <Product key={product} productId={product} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default Products;
