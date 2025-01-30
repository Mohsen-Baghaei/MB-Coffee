import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, selectById } from "../../app/products/productsSlice";
import { RootState } from "../../app/store";
import { addToBag } from "../../app/inBag/inBagSlice";
import heart from "../../assets/about/heart.png";
import heartred from "../../assets/about/heartred.png";
import {
  addFavoritCoffee,
  removeFavoritCoffee,
  selectedUsers,
} from "../../app/register/registerSlice";
import { ToastContainer, toast } from "react-toastify";

const SingleProduct = (): ReactElement => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const user = useSelector(selectedUsers);

  const inFavorit: boolean = user?.favoritCoffee?.find(
    (coffee) => coffee?.productId === Number(productId)
  )
    ? true
    : false;

  const notifyError = (errMsg: string) => toast.error(errMsg);

  const notifySuccess = (successMsg: string) => toast.success(successMsg);

  const notifyInfo = (infoMsg: string) => toast(infoMsg);

  const product = useSelector((state: RootState) =>
    selectById(state, Number(productId!))
  ) as ProductType | undefined;

  const handleAdd = () => {
    notifySuccess("Item Added To Bag");
    dispatch(
      addToBag({
        id: product?.id!,
        name: product?.name!,
        img: product?.image_url!,
        weight: product?.weight!,
        price: product?.price!,
      })
    );
  };

  const handleAddFavorit = () => {
    if (user) {
      notifyInfo("Item Added to Favorits");
      dispatch(
        addFavoritCoffee({
          id: user.id,
          productId: product?.id!,
          name: product?.name!,
          img: product?.image_url!,
          price: product?.price!,
          weight: product?.weight!,
        })
      );
    } else {
      notifyError("You Need to Login First");
    }
  };

  const handleRemoveFavort = () => {
    if (user) {
      notifyInfo("Item Removed from Favorits");
      dispatch(
        removeFavoritCoffee({
          id: user.id,
          productId: product?.id!,
        })
      );
    } else {
      notifyError("You Need to Login First");
    }
  };

  return (
    <section className="bg-slate-50 w-full">
      <img
        src={product?.image_url}
        alt={product?.name}
        className="size-96 block mx-auto "
      />
      <section className="p-4 max-w-4xl mx-auto">
        <article className="w-full ">
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </article>
        <p className="flex justify-between items-center text-5xl font-cursive font-bold mb-20">
          <span></span>
          {product?.name}
          {inFavorit ? (
            <img
              src={heartred}
              title="dislike"
              className="size-12 cursor-pointer"
              onClick={handleRemoveFavort}
            />
          ) : (
            <img
              src={heart}
              title="like"
              className="size-12 cursor-pointer"
              onClick={handleAddFavorit}
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
