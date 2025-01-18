import { ReactElement } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectById } from "../../app/products/productsSlice";
import { RootState } from "../../app/store";

type PropType = {
  productId: EntityId;
};

type ProductType = {
  description: string;
  flavor_profile: string[];
  grind_option: string[];
  id: number;
  image_url: string;
  name: string;
  price: number;
  region: string;
  roast_level: number;
  weight: number;
  _id: string;
};

const Product = ({ productId }: PropType): ReactElement => {
  const showProduct = useSelector((state: RootState) =>
    selectById(state, productId)
  ) as ProductType | undefined;
  console.log(showProduct);

  return (
    <article className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group w-full mb-5">
      <img
        src={showProduct?.image_url}
        alt={showProduct?.name}
        className="size-72 block mx-auto 
    group-hover:scale-150 group-hover:rotate-6 duration-300"
      />

      <div className="p-4 text-center">
        <div className="w-full "></div>
        <p className="text-xl font-bold">{showProduct?.name}</p>
        <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
          {showProduct?.description}
        </p>
      </div>
    </article>
  );
};

export default Product;
