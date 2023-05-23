import classNames from "utils/classNames";
import { ListPropImg } from "utils/listProps";

const CardImg = ({ src, alt, ...props }: ListPropImg) => {
  return (
    <div
      className={classNames(props.border && "card-img", { ...props })}
      onClick={props.onClick}
    >
      <img
        src={src}
        alt={alt}
        className={classNames("h-full w-full object-cover", props.borderRadius)}
      />
    </div>
  );
};

export default CardImg;
