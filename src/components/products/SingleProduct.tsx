import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductType, selectById } from "../../app/products/productsSlice";
import { RootState } from "../../app/store";

const SingleProduct = (): ReactElement => {
  const { productId } = useParams();

  const product = useSelector((state: RootState) =>
    selectById(state, Number(productId!))
  ) as ProductType | undefined;

  return (
    <section className="bg-slate-50 w-full">
      <img
        src={product?.image_url}
        alt={product?.name}
        className="size-96 block mx-auto "
      />

      <section className="p-4 max-w-4xl mx-auto">
        <article className="w-full "></article>
        <p className="text-5xl font-cursive font-bold text-center mb-20">
          {product?.name}
        </p>
        <p className="text-4xl mb-5 px-5 flex justify-between items-center">
          <span className="font-serif text-slate-900 font-bold">Details</span>
          <span className="text-rose-400">
            {" "}
            {new Intl.NumberFormat("en-Us", {
              style: "currency",
              currency: "USD",
            }).format(Number(product?.price))}
          </span>
        </p>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl p-1">{product?.description}</p>
        </article>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Region :</span>{" "}
            <span className="text-slate-200">{product?.region}</span>
          </p>
        </article>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Flavor :</span>{" "}
            {product?.flavor_profile.map((flavor, i) => (
              <span className="text-slate-200" key={i}>
                {flavor}
              </span>
            ))}
          </p>
        </article>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Grind :</span>{" "}
            {product?.grind_option.map((grind, i) => (
              <span className="text-slate-200" key={i}>
                {grind}
              </span>
            ))}
          </p>
        </article>

        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Roast Level :</span>{" "}
            <span className="text-slate-200">{product?.roast_level}</span>
          </p>
        </article>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Weight :</span>{" "}
            <span className="text-slate-200">{product?.weight} g</span>
          </p>
        </article>
        <button className="w-full p-4 bg-primary/80 hover:bg-primary rounded-2xl mb-5 text-2xl text-slate-50 font-bold">
          Add to Bag
        </button>
      </section>
    </section>
  );
};

export default SingleProduct;
