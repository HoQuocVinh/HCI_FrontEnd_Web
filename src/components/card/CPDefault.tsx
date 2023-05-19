import { Link } from "react-router-dom";
import { LPCPDefault } from "utils/listProps";

const CPDefault = (props: LPCPDefault) => {
  return (
    <Link
      // to={`/product/${props.productID}?colorCode=${props.colorName
      //   .toLowerCase()
      //   .replace(/\s+/g, "-")}&sizeCode=${props.size.split("-")[0]}`}
      // className="flex flex-col"
      to  = {`/product/${props.idProduct}/subproduct/${props.idSubProduct}`}
    >
      <img
        style={{ width: "220px", height: "220px", objectFit: "cover" }}
        src={props.src}
        alt={props.alt}
      />
      <ul className="mt-3 mb-4 flex items-center gap-1">
        <li
          className="h-4 w-4"
          style={{ backgroundColor: props.colorTip }}
        ></li>
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
