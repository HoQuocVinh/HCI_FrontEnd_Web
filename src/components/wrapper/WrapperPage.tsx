import React, { ReactNode } from "react";

const WrapperPage = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-1172">{children}</div>;
};

export default WrapperPage;
