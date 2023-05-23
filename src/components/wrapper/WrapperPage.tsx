import React, { ReactNode } from "react";

const WrapperPage = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-1172 pt-[90px]">{children}</div>;
};

export default WrapperPage;
