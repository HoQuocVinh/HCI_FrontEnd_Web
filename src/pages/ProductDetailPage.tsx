import BDirection from "components/Button/BDirection";
import { useTheme } from "components/context/ThemeProvider";
import Dropdown from "components/dropdown/Dropdown";
import { IconArrowDown } from "components/icon/Icon";
import MAddToCard from "components/modal/MAddToCard";
import WrapperPage from "components/wrapper/WrapperPage";
import useClickOutSide from "hooks/useClickOutSide";
import { Fragment, SetStateAction, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import classNames from "utils/classNames";
import handleProductSelection from "utils/handler";
import { LIST_COLOR, LIST_IMG, LIST_SIZE } from "utils/listTest";

interface TProductDetailSummary {
  onClick: () => void;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

const ProductDetailPage = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleToggleModal = () => {
    setIsShow(!isShow);
    if (!isShow) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.paddingRight = "8px";
    } else {
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("padding-right");
    }
  };

  const { show, setShow, nodeRef } = useClickOutSide();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);

  return (
    <Fragment>
      <MAddToCard open={isShow} onClick={handleToggleModal} />
      <WrapperPage>
        <div ref={nodeRef}>
          <Breadcrumb></Breadcrumb>
          <div className="flex items-start justify-between gap-20 text-white">
            <div className="flex flex-col">
              <Carousel />
              <SectionProductInfo />
            </div>
            <ProductDetailSummary
              onClick={handleToggleModal}
              // control={control}
              // setValue={setValue}
              show={show}
              setShow={setShow}
            />
          </div>
        </div>
      </WrapperPage>
    </Fragment>
  );
};

export const SectionProductInfo = () => {
  const [showDivs, setShowDivs] = useState<any>({});
  const handleClick = (index: number) => {
    setShowDivs({ ...showDivs, [index]: !showDivs[index] });
  };
  return (
    <div className="mt-10 max-w-[673px] text-white">
      <p className="font-semibold uppercase">Describe</p>
      <hr className="mt-5 border-gray-100" />
      <div>
        <button
          className="flex w-full justify-between py-5"
          onClick={() => handleClick(1)}
        >
          Meterial
          <span>
            <IconArrowDown />
          </span>
        </button>
        {showDivs[1] && (
          <div className="px-5 pb-5">
            <p className="py-5">
              Bộ sưu tập Uniqlo U là thành quả của đội ngũ thiết kế quốc tế tận
              tâm và lành nghề có trụ sở tại Trung tâm Nghiên cứu và Phát triển
              Paris của chúng tôi do Giám đốc Nghệ thuật Christophe Lemaire đứng
              đầu.
            </p>
            <dl>
              <dt>- Vải Jersey được làm từ 100% cotton nén.</dt>
              <dt>- Áo thun cổ tròn, dáng rộng, trễ vai.</dt>
              <dt>HƯỚNG DẪN GIẶT</dt>
              <dt>- Thiết kế sọc rộng đậm với nhiều tông màu đa dạng.</dt>
            </dl>
          </div>
        )}
      </div>
      <hr className="border-gray-100" />
      <div>
        <button
          className="flex w-full justify-between py-5"
          onClick={() => handleClick(2)}
        >
          Overview
          <span>
            <IconArrowDown />
          </span>
        </button>
        {showDivs[2] && (
          <div className="px-5 pb-5">
            <div className="py-5">
              <span>Code 457714</span>
            </div>
            <p>
              Xin lưu ý mã số nhận diện của sản phẩm có thể có sự khác biệt, kể
              cả khi đó là cùng một mặt hàng.
            </p>
            <dl>
              <dt>VẢI</dt>
              <dt>100% Bông</dt>
              <dt>HƯỚNG DẪN GIẶT</dt>
              <dt>Giặt máy nước lạnh, Giặt khô</dt>
            </dl>
            <p>
              - Những hình ảnh sản phẩm có thể bao gồm Những màu không có sẵn.
            </p>
          </div>
        )}
      </div>
      <hr className="border-gray-100" />
    </div>
  );
};

export const Carousel = () => {
  const [slideDirection, setSlideDirection] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevClick = () => {
    // Xử lý sự kiện khi click vào nút previous
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? LIST_IMG.length - 1 : prevIndex - 1
    );
    setSlideDirection("prev");
  };

  const handleNextClick = () => {
    // Xử lý sự kiện khi click vào nút next
    setSelectedImageIndex((prevIndex) =>
      prevIndex === LIST_IMG.length - 1 ? 0 : prevIndex + 1
    );
    setSlideDirection("next");
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    // Reset slide direction after animation duration (in ms)
    const animationDuration = 400; // Adjust this value to match your CSS animation duration
    const timeout = setTimeout(() => {
      setSlideDirection("");
    }, animationDuration);
    return () => clearTimeout(timeout);
  }, [slideDirection]);
  return (
    <div className="text-white">
      <div className="flex flex-row items-start gap-10">
        <div className="grid auto-rows-auto grid-cols-2">
          {LIST_IMG.map((image: any, index: number) => (
            <button
              key={index}
              type="button"
              onClick={() => handleImageClick(index)}
              className={classNames(
                "mb-[10px] border p-[5px]",
                selectedImageIndex === index
                  ? "border-gray-200"
                  : "border-transparent"
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "45px", height: "45px", flexShrink: 0 }}
              />
            </button>
          ))}
        </div>
        <div className="image-container">
          <img
            src={LIST_IMG[selectedImageIndex].src}
            alt={LIST_IMG[selectedImageIndex].alt}
            className={classNames(
              "image",
              slideDirection === "next" && "slide-from-right",
              slideDirection === "prev" && "slide-from-left"
            )}
          />
          <BDirection className="prev-button" onClick={handlePrevClick}>
            <div className="rotate-90">
              <IconArrowDown width="w-5" height="h-5" strokeW={4} />
            </div>
          </BDirection>
          <BDirection className="next-button" onClick={handleNextClick}>
            <div className="-rotate-90">
              <IconArrowDown width="w-5" height="h-5" strokeW={4} />
            </div>
          </BDirection>
        </div>
      </div>
    </div>
  );
};

export const Breadcrumb = () => {
  return (
    <div className="mt-5 mb-14 text-white">
      <ul className="">
        <li className="inline">
          <Link to="/">
            <span>Home/</span>
          </Link>
        </li>
        <li className="inline">
          <Link to="/gender/male">
            <span>Male/</span>
          </Link>
        </li>
        <li className="inline">
          <Link to="/gender/male/t-shirt">
            <span>T-Shirt/</span>
          </Link>
        </li>
        <li className="inline">Áo Sơ Mi Oxford Ngắn Tay</li>
      </ul>
    </div>
  );
};

export const ProductDetailSummary = (props: TProductDetailSummary) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      amount: "1",
      colorCode: "",
      sizeCode: "",
      price: "",
    },
  });

  const onSubmit = ({
    amount,
    colorCode,
    sizeCode,
    price,
    ...values
  }: {
    amount: string;
    colorCode: string;
    sizeCode: string;
    price: string;
  }) => {
    const param = new URLSearchParams(window.location.search);
    const newAmount = parseInt(amount, 10); // hoặc parseFloat() nếu amount có thể là số thực
    const newColor = param.get("colorCode");
    const newSize = param.get("sizeCode");

    const priceElem = document.getElementById("price") as any;
    const priceStr = priceElem?.innerText?.replace(/\D/g, "");
    const newPrice = parseInt(priceStr) * newAmount;

    const result = {
      amount: newAmount,
      colorCode: newColor,
      sizeCode: newSize,
      price: newPrice,
      values,
    };
    console.log(result);
  };

  let price = 399000;
  return (
    <div className="max-w-[400px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="max-w-[400px] text-5xl font-bold">
          Áo Sơ Mi Oxford Ngắn Tay
        </h1>
        <span className="mt-5 block text-3xl font-semibold" id="price">
          {price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
        <p className="mt-10 mb-6 text-[#B1B5C4]">
          Chiếc áo sơ mi Oxford cổ điển, đã cập nhật chất liệu vải bền hơn.
        </p>
        <hr className="mb-5 border-[#B1B5C4]" />
        <ChooseColor />
        <ChooseSize />
        <div className="mt-8">
          <p className="mb-2 font-bold uppercase">amount</p>
          <Dropdown
            show={props.show}
            setShow={props.setShow}
            list={[1, 2, 3, 4]}
            name="amount"
            control={control}
            setValue={setValue}
          />
        </div>
        <button
          className="mt-8 w-full bg-red-600 py-[10px] text-center font-semibold uppercase transition-all hover:bg-red-500"
          onClick={props.onClick}
        >
          Add to cart
        </button>
      </form>
    </div>
  );
};

export const ChooseColor = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <Fragment>
      <p className="font-bold">
        COLOR: {LIST_COLOR[selectedColorIndex].colorName.toUpperCase()}
      </p>
      <div className="mt-2 flex items-center gap-1">
        {LIST_COLOR.map((color: any, index: number) => (
          <div
            key={index}
            className={classNames(
              "cursor-pointer border p-1 transition-all hover:border-white",
              selectedColorIndex === index
                ? "border-white"
                : "border-transparent"
            )}
            onClick={() =>
              handleProductSelection(
                index,
                setSelectedColorIndex,
                color.hexColor.substring(1),
                "colorCode"
              )
            }
          >
            <div
              className="h-10 w-10"
              style={{ backgroundColor: color.hexColor }}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export const ChooseSize = () => {
  const firstInStockIndex = LIST_SIZE.findIndex(
    (item) => item.isInStoke === true
  );
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(firstInStockIndex);
  const [checkIsStoke, setCheckIsStoke] = useState<boolean>();

  const handleMouseOver = (index: number) => {
    setCheckIsStoke(LIST_SIZE[index].isInStoke);
  };

  const handleClickSize = (index: number) => {
    LIST_SIZE[index].isInStoke && setSelectedSizeIndex(index);
  };
  return (
    <div className="mt-8">
      <p className="font-bold uppercase">
        Size: {LIST_SIZE[selectedSizeIndex].size}
      </p>
      <div className="mt-2 flex items-center gap-1">
        {LIST_SIZE.map((size: any, index: number) => (
          <div
            key={index}
            className={classNames(
              "wrapper__size cursor-pointer border-2 p-1 transition-all",
              selectedSizeIndex === index
                ? "border-white hover:border-white"
                : "border-transparent",
              checkIsStoke && "hover:border-white"
            )}
            onClick={() => handleClickSize(index)}
            onMouseOver={() => handleMouseOver(index)}
          >
            <div
              className={classNames(
                "h-10 w-10 border text-center text-xs font-bold uppercase leading-10",
                selectedSizeIndex === index
                  ? "bg-white text-black"
                  : "border-white bg-transparent text-white",
                !size.isInStoke
                  ? "pointer-events-none relative select-none bg-white bg-opacity-25 text-opacity-20 after:absolute after:top-[-7px] after:left-[17px] after:h-[53px] after:w-1 after:rotate-45 after:bg-gray-200 after:content-['_']"
                  : "hover:bg-white hover:text-black"
              )}
              onClick={() =>
                handleProductSelection(
                  index,
                  setSelectedSizeIndex,
                  size.size.toUpperCase(),
                  "sizeCode"
                )
              }
            >
              {size.size}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailPage;
