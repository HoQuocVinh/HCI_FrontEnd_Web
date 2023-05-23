import Common from "components/common/Common";
import { IconArrowR } from "components/icon/Icon";
import classNames from "utils/classNames";
import { ListPropImgSlide } from "utils/listProps";

const CardImg = ({ src, alt, ...props }: ListPropImgSlide) => {
  return (
    <div
      className={classNames(
        "card-product relative cursor-pointer overflow-hidden",
        { ...props }
      )}
    >
      <img
        src={src}
        alt={alt}
        className={classNames("h-full w-full object-cover", props.borderRadius)}
        onClick={props.onClick}
      />
      <div
        className="choose-size absolute left-0 right-0 rounded-bl-[10px] rounded-br-[10px] bg-[rgba(0,_0,_0,_0.8)] p-3 text-white transition-all duration-300"
        onClick={props.onClick}
      >
        <div className="flex flex-col">
          <p className="title__card-home inline-block text-xl font-bold">
            {props.name}
          </p>
          <Common.Price price={props.price} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="mt-3">
              <span>Size</span>
              <span className="ml-3 font-bold">{props.size}</span>
            </div>
            <div className="mt-1 flex items-center gap-3">
              <span>Color</span>
              <div
                className="h-5 w-5 rounded-full border border-white"
                style={{ backgroundColor: props.bgColor }}
              ></div>
            </div>
          </div>
          <button className="rotate-[180px] rounded-full border border-white p-2">
            <span className="rotate-2">
              <IconArrowR />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardImg;
