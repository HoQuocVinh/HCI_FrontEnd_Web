import { Fragment, ReactNode } from "react";

interface LPW {
  children: ReactNode;
}

const Wrapper = ({ children }: LPW) => {
  return <Fragment>{children}</Fragment>;
};

Wrapper.WCheckout = ({ children }: LPW) => {
  return <div className="mx-auto h-screen max-w-[1200px] px-7">{children}</div>;
};

export default Wrapper;
