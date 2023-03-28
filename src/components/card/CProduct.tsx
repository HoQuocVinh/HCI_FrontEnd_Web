import React from "react";
import classNames from "utils/classNames";
import { ListPropImg } from "utils/listProps";

const CProduct = ({ src, alt, ...props }: ListPropImg) => {
  return (
    <div
      className={classNames(
        "card-product relative overflow-hidden cursor-pointer",
        props.border && "card-img",
        {
          ...props,
        }
      )}
    >
      <img
        src={src}
        alt={alt}
        className={classNames("h-full w-full object-cover", props.borderRadius)}
      />
      <div className="choose-size absolute left-0 right-0 rounded-bl-[10px] rounded-br-[10px] bg-[rgba(0,_0,_0,_0.8)] p-3 text-white transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">102</span>
          <span className="font-bold">12.99$</span>
        </div>
        <div className="text-[#818181]">
          <span>3 reviews</span>
          <span className="ml-3">10 sales</span>
        </div>
        <div className="mt-3">
          <span>Size</span>
          <span className="ml-3 font-bold">M</span>
          <span className="ml-3 font-bold">L</span>
          <span className="ml-3 font-bold">XL</span>
        </div>
        <div className="mt-1 flex items-center gap-3">
          <span>Color</span>
          <div className="h-5 w-5 rounded-full bg-white"></div>
          <div className="h-5 w-5 rounded-full border-2 border-white bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default CProduct;
