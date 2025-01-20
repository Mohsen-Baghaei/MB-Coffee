import { ReactElement } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ProductType, selectById } from "../../app/products/productsSlice";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";

type PropType = {
  productId: EntityId;
};

const Product = ({ productId }: PropType): ReactElement => {
  const showProduct = useSelector((state: RootState) =>
    selectById(state, productId)
  ) as ProductType | undefined;

  return (
    <Link
      to={`/products/${productId}`}
      data-aos="zoom-in"
      data-aos-delay={`${Number(productId) + 100}`}
      data-aos-once="true"
      className="rounded-2xl bg-white hover:bg-primary hover:text-white  shadow-xl duration-high group w-full mb-5"
    >
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
    </Link>
  );
};

export default Product;
