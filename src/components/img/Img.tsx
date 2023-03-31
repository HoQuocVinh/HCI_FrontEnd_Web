import React from "react";
import classNames from "utils/classNames";
import { ListPropImg } from "utils/listProps";

const Img = ({ src, alt, srcSet, ...props }: ListPropImg) => {
  return (
    <div className={classNames(props.full && "h-full w-full", { ...props })}>
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        className={classNames("h-full w-full object-cover", props.borderRadius)}
      />
    </div>
  );
};

export default Img;
