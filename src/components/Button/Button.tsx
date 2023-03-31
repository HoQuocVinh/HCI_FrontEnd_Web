import classNames from "utils/classNames";
import { LPButton } from "utils/listProps";

const Button = (props: LPButton) => {
  const variantClasses = {
    normal: "text-white",
  };
  const backgroundClasses = {
    purple: "bg-[#A274FF]",
    blueBlack: "bg-[#1F094D]",
  };

  const shadowClasses = {
    s1: "shadow-[inset_0px_-4px_4px_rgba(255,_255,_255,_0.25),_inset_0px_4px_4px_rgba(255,_242,_242,_0.25)]",
  };

  const customClass = classNames(
    props.bg && backgroundClasses[props.bg],
    props.variant && variantClasses[props.variant],
    props.shadow && shadowClasses[props.shadow]
  );

  return (
    <button className={classNames("cursor-pointer", customClass, { ...props })}>
      {props.children}
    </button>
  );
};

export default Button;
