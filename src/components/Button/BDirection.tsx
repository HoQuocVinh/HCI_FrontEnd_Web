import classNames from "utils/classNames";
import { LPBDirection } from "utils/listProps";

const BDirection = (props: LPBDirection) => {
  return (
    <button
      className={classNames(
        "bg-[#f6f6f6bf] px-2 py-3 font-bold text-[#757575] transition-all hover:bg-[#929191bf]",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default BDirection;
