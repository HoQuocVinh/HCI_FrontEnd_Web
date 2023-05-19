import { IconClose } from "components/icon/Icon";
import React from "react";
import ReactDOM from "react-dom";
import classNames from "utils/classNames";
import { LPWModal } from "utils/listProps";

const WModal = (props: LPWModal) => {
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
          <h1 className="text-lg font-bold uppercase">{props.heading}</h1>
          <i
            className="cursor-pointer text-gray-600  hover:text-black"
            onClick={props.onClick}
          >
            <IconClose />
          </i>
        </div>
        {props.children}
        <div className="flex items-center gap-5">
          <button
            className="w-[300px] bg-gray-600 py-2 text-lg font-bold text-white hover:bg-gray-700"
            onClick={props.onClick}
          >
            {props.btnName1}
          </button>
          <button
            className="w-[300px] bg-red-500 py-2 text-lg font-bold text-white hover:bg-red-600"
            onClick={props.handleRemoveProduct}
          >
            {props.btnName2}
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")!
  );
};

export default WModal;
