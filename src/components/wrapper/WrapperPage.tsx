import React, { ReactNode } from "react";

const WrapperPage = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto my-[90px] max-w-1172">{children}</div>;
};

export default WrapperPage;
