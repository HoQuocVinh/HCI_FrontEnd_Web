import { IconClose } from "components/icon/Icon";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import classNames from "utils/classNames";
import { LPMAddToCard } from "utils/listProps";

const MAddToCard = (props: LPMAddToCard) => {
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <div
      className={classNames(
        "fixed inset-0 z-50 flex select-none items-center justify-center",
        !props.open && "invisible snap-none overflow-hidden"
      )}
    >
      <div className="absolute inset-0 z-10 bg-black bg-opacity-25"></div>
      <div className="relative z-20 bg-white p-5">
        <div className="flex items-center justify-between pb-7">
          <h1 className="text-lg font-bold uppercase">
            One item has been added to your cart
          </h1>
          <i
            className="cursor-pointer text-gray-600 transition-all hover:text-black"
            onClick={props.onClick}
          >
            <IconClose />
          </i>
        </div>
        <div className="flex items-center justify-between pb-10">
          <div className="flex items-center justify-between">
            <span className="border-r-2 border-gray-500 pr-2 font-semibold uppercase">
              Sum
            </span>
            <span className="pl-2">{props.quantity} products</span>
          </div>
          <span className="block text-xl font-semibold">
            {props.price &&
              props.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <button
            className="w-[300px] border border-transparent bg-black py-3 text-sm font-bold uppercase text-white transition-all hover:border-black hover:bg-white hover:text-black"
            onClick={() => navigate("/cart")}
          >
            View Cart
          </button>
          <button
            type="button"
            className="w-[300px] border border-transparent bg-black py-3 text-sm font-bold uppercase text-white transition-all hover:border-black hover:bg-white hover:text-black"
            onClick={props.onClick}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")!
  );
};

export default MAddToCard;
