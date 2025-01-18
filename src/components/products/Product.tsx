import { ReactElement } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectById } from "../../app/products/productsSlice";
import { RootState } from "../../app/store";

type PropType = {
  productId: EntityId;
};

const Product = ({ productId }: PropType): ReactElement => {
  const showProduct = useSelector((state: RootState) =>
    selectById(state, productId)
  );

  return (
    <article className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
      <div className="h-[122px]">
        <img
          src={""}
          alt={""}
          className="max-w-[200px] block mx-auto transform -translate-y-14
    group-hover:scale-105 group-hover:rotate-6 duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <div className="w-full "></div>
        <h1 className="text-xl font-bold">{}</h1>
        <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
          {}
        </p>
      </div>
    </article>
  );
};

export default Product;
