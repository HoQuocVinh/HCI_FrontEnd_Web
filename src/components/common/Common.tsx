import React, { ReactNode } from "react";
import classNames from "utils/classNames";
interface Price {
  price: number;
  size?: string;
  color?: string;
}

interface IDefention {
  children: ReactNode;
  className?: string;
}

const Common = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

Common.Price = (props: Price) => {
  const { price, size, color } = props;
  return (
    <span className={classNames("font-bold", size && size, color && color)}>
      {price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      })}
    </span>
  );
};

Common.Defention = ({ children, className }: IDefention) => {
  return <dl className="py-1">{children}</dl>;
};
Common.Term = ({ children }: IDefention) => {
  return <dl className="inline after:pr-1 after:content-[':']">{children}</dl>;
};

Common.Description = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <dd className={classNames("inline", className)}>{children}</dd>;
};

export default Common;
