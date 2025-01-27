import { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, selectById } from "../../app/products/productsSlice";
import { RootState } from "../../app/store";
import { addToBag } from "../../app/inBag/inBagSlice";
import heart from "../../assets/about/heart.png";
import heartred from "../../assets/about/heartred.png";

const SingleProduct = (): ReactElement => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [favorit, setFavorit] = useState<boolean>(false);

  const product = useSelector((state: RootState) =>
    selectById(state, Number(productId!))
  ) as ProductType | undefined;

  const {
    id,
    description,
    flavor_profile,
    grind_option,
    image_url,
    name,
    price,
    region,
    roast_level,
    weight,
  } = product!;

  const handleAdd = () => {
    dispatch(addToBag({ id, name, img: image_url, weight, price }));
    navigate("/inbag");
  };

  useEffect(() => {
    if (favorit) {
    }
  }, [favorit]);

  return (
    <section className="bg-slate-50 w-full">
      <img src={image_url} alt={name} className="size-96 block mx-auto " />

      <section className="p-4 max-w-4xl mx-auto">
        <article className="w-full "></article>
        <p className="flex justify-between items-center text-5xl font-cursive font-bold mb-20">
          <span></span>
          {name}
          {favorit ? (
            <img
              src={heartred}
              title="dislike"
              className="size-12 text-black"
              onClick={() => setFavorit(false)}
            />
          ) : (
            <img
              src={heart}
              title="like"
              className="size-12"
              onClick={() => setFavorit(true)}
            />
          )}
        </p>
        <p className="text-4xl mb-5 px-5 flex justify-between items-center">
          <span className="font-serif text-slate-900 font-bold">Details</span>
          <span className="text-rose-400">
            {" "}
            {new Intl.NumberFormat("en-Us", {
              style: "currency",
              currency: "USD",
            }).format(Number(price))}
          </span>
        </p>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl p-1">{description}</p>
        </article>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Region :</span>{" "}
            <span className="text-slate-200">{region}</span>
          </p>
        </article>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Flavor :</span>{" "}
            {flavor_profile.map((flavor, i) => (
              <span className="text-slate-200" key={i}>
                {flavor}
              </span>
            ))}
          </p>
        </article>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Grind :</span>{" "}
            {grind_option.map((grind, i) => (
              <span className="text-slate-200" key={i}>
                {grind}
              </span>
            ))}
          </p>
        </article>

        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Roast Level :</span>{" "}
            <span className="text-slate-200">{roast_level}</span>
          </p>
        </article>
        <article className="w-full p-4 bg-slate-700 rounded-2xl mb-5">
          <p className="text-slate-50 text-xl flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold">Weight :</span>{" "}
            <span className="text-slate-200">{weight} g</span>
          </p>
        </article>
        <button
          onClick={handleAdd}
          className="w-full p-4 bg-primary/80 hover:bg-primary rounded-2xl mb-5 text-2xl text-slate-50 font-bold"
        >
          Add to Bag
        </button>
      </section>
    </section>
  );
};

export default SingleProduct;
