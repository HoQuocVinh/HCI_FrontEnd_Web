import { Fragment, ReactNode } from "react";
import classNames from "utils/classNames";

interface LPW {
  children: ReactNode;
  className?: string;
}

const Wrapper = ({ children }: LPW) => {
  return <Fragment>{children}</Fragment>;
};

Wrapper.WCheckout = ({ children }: LPW) => {
  return <div className="mx-auto h-screen max-w-[1200px] px-7">{children}</div>;
};

Wrapper.WDefault = ({ children }: LPW) => {
  return <div className="mx-auto max-w-1172 py-[90px]">{children}</div>;
};

Wrapper.Square = ({ children, className }: LPW) => {
  return (
    <div
      className={classNames(
        "border border-white border-opacity-70 p-7",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
