import React from "react";
import { Link } from "react-router-dom";
import { LPCPDefault } from "utils/listProps";

const CPDefault = (props: LPCPDefault) => {
  return (
    <Link to={`/product/${props.productID}`} className="flex flex-col">
      <img
        style={{ width: "220px", height: "220px", objectFit: "cover" }}
        src={props.src}
        alt={props.alt}
      />
      {/* <div className="color mt-3 mb-4 h-4 w-4 bg-white"></div> */}
      <ul className="mt-3 mb-4 flex items-center gap-1">
        {props.colorTip.map((color: any, index: number) => (
          <li
            key={index}
            className="h-4 w-4"
            style={{ backgroundColor: `${color}` }}
          ></li>
        ))}
      </ul>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-bold text-[#8E94A3]">
          {props.gender?.toUpperCase()}
        </span>
        <span className="text-sm font-bold text-[#8E94A3]">
          {props.size.toUpperCase()}
        </span>
      </div>
      <p className="mb-5 text-lg font-semibold">{props.productName}</p>
      <div className="mt-auto">
        <span className="block text-2xl font-semibold">
          {props.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </div>
    </Link>
  );
};

export default CPDefault;
