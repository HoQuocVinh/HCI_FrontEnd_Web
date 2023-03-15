import React from "react";
import classNames from "utils/classNames";
import { ListPropImg } from "utils/listProps";

const Img = ({ src, alt, ...props }: ListPropImg) => {
  return (
    <div className={classNames({ ...props })}>
      <img
        src={src}
        alt={alt}
        className={classNames("h-full w-full object-cover", props.borderRadius)}
      />
    </div>
  );
};

export default Img;
