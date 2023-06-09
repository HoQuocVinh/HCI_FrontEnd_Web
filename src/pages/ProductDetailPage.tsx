import axios from "api/axios";
import ProductProvider, {
  ProductContext,
} from "components/context/ProductProvider";
import { useTheme } from "components/context/ThemeProvider";
import Dropdown from "components/dropdown/Dropdown";
import { IconArrowDown } from "components/icon/Icon";
import MAddToCard from "components/modal/MAddToCard";
import WrapperPage from "components/wrapper/WrapperPage";
import useClickOutSide from "hooks/useClickOutSide";
import { Carousel } from "modules/pages/product/Carousel";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { toggleBodyOverflow } from "utils/handler";

interface TProductDetailSummary {
  // onClick: () => void;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  product: any;
}

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Array<object>>([]);

  const { show, setShow, nodeRef } = useClickOutSide();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);

  return (
    <ProductProvider>
      <WrapperPage>
        <div ref={nodeRef}>
          <Breadcrumb></Breadcrumb>
          <div className="flex items-start justify-between gap-20 text-white">
            <div className="flex flex-col">
              <Carousel />
            </div>
            <ProductDetailSummary
              product={product}
              show={show}
              setShow={setShow}
            />
          </div>
        </div>
      </WrapperPage>
    </ProductProvider>
  );
};

export const Breadcrumb = () => {
  const { productId, subProductId } = useParams();
  console.log("TCL: Breadcrumb -> subProductId", subProductId);
  console.log("TCL: Breadcrumb -> productId", productId);
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    function fetchData() {
      axios
        .get(`product/${productId}`)
        .then((response) => {
          console.log(response);
          const { result } = response.data;
          setProduct(result);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

  return (
    <div className="mt-5 mb-14 text-white">
      <ul className="">
        <li className="inline">
          <Link to="/">
            <span>Home/</span>
          </Link>
        </li>
        <li className="inline">
          <Link
            to={
              product.category &&
              `/gender/${product.category.gender.toLowerCase()}`
            }
          >
            <span>{product.category && product.category.gender}/</span>
          </Link>
        </li>
        <li className="inline">
          <Link
            to={
              product.category &&
              `/gender/${product.category.gender.toLowerCase()}/${product.category.name.toLowerCase()}`
            }
          >
            <span>{product.category && product.category.name}/</span>
          </Link>
        </li>
        <li className="inline">{product.name}</li>
      </ul>
    </div>
  );
};

export const ProductDetailSummary = (props: TProductDetailSummary) => {
  const { subProductId } = useParams();
  const { user, accessToken } = useSelector((state: any) => state.auth);
  console.log("TCL: ProductDetailSummary -> access_token", accessToken);
  const { product, subProduct } = useContext(ProductContext);
  const [quantity, setQuantity] = useState<any>();
  const [price, setPrice] = useState<any>();

  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(false);
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      amount: "1",
      colorCode: "",
      sizeCode: "",
      price: "",
    },
  });

  const onSubmit = ({ amount }: { amount: string }) => {
    const newAmount = parseInt(amount, 10); // hoặc parseFloat() nếu amount có thể là số thực
    const priceElem = document.getElementById("price") as any;
    const priceStr = priceElem?.innerText?.replace(/\D/g, "");
    const newPrice = parseInt(priceStr) * newAmount;
    console.log("TCL: onSubmit -> newPrice", newPrice);
    console.log("TCL: onSubmit -> newAmount", newAmount);
    if (user && accessToken) {
      const result = {
        subProductId,
        // user: user.id,
        quantity: newAmount,
      };
      setQuantity(newAmount);
      setPrice(newPrice);
      axios
        .post("cart/add-product", result, {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response);
          toast.success("Add successfully", { autoClose: 1000 });
        })
        .catch((error) => console.log(error));
    }
  };

  const handleToggleModal = () => {
    if (!user) {
      navigate("/signin");
      toast.warning("Please loggin", { autoClose: 500 });
      return;
    }
    setIsShow(!isShow);
    toggleBodyOverflow(isShow);
  };

  return (
    <div className="max-w-[400px]">
      <MAddToCard
        quantity={quantity}
        price={price}
        open={isShow}
        onClick={handleToggleModal}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="max-w-[400px] text-5xl font-bold">{product.name}</h1>
        <span className="mt-5 block text-3xl font-semibold" id="price">
          {subProduct[0]?.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
        <p className="mt-10 mb-6 whitespace-pre-wrap text-[#B1B5C4]">
          {product.description}
        </p>
        <hr className="mb-5 border-[#B1B5C4]" />
        <div>
          <p className="font-bold">Color: {subProduct[0]?.color.colorName}</p>
          <div
            className="mt-2 h-10 w-10"
            style={{ backgroundColor: subProduct[0]?.color.colorValue }}
          ></div>
        </div>
        <div className="mt-7">
          <p className="font-bold">Size: {subProduct[0]?.size.sizeName}</p>
          <div className="mt-2 flex h-10 w-10 items-center justify-center bg-white text-black ">
            <span className="text-sm leading-none">
              {subProduct[0]?.size.sizeName}
            </span>
          </div>
        </div>

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
          type="submit"
          onClick={handleToggleModal}
        >
          Add to cart
        </button>
      </form>
    </div>
  );
};

export default ProductDetailPage;
