import React, { ReactNode } from "react";

const Skeleton = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

Skeleton.GenderPage = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5">
      {Array(7)
        .fill(0)
        .map((item: any, index: number) => (
          <div className="flex flex-col items-center" key={index}>
            <div
              className="skeleton rounded-md"
              style={{ width: "210px", height: "290px" }}
            />
            <div className="skeleton mt-2 h-6 w-full" />
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
