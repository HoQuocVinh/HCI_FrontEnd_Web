import axios from "api/axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toggleModal } from "sagas/modal/modal-slice";
import { getToken } from "utils/auth";
import { toggleBodyOverflow } from "utils/handler";

export const CartContext = createContext<any>([]);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state: any) => state.auth);

  const { isShow } = useSelector((state: any) => state.modal);

  const [product, setProduct] = useState<Array<any>>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    axios
      .get("cart", {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const { result } = response.data;
        console.log(response);
        setProduct(result);
        result.map((produtChild: any) =>
          setSubTotal(
            (count) => count + produtChild.product.price * produtChild.quantity
          )
        );
      })
      .catch((error) => console.log(error));
  };

  const handleRemoveProduct = (subProductId: string) => {
    setIsLoading(true);
    axios
      .post(
        "cart/remove-product",
        { subProductId: subProductId },
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        toast.success("Remove successfully", { autoClose: 500 });
        dispatch(toggleModal(!isShow));
        toggleBodyOverflow(isShow);
        fetchData(); // Gọi lại API để cập nhật dữ liệu mới nhất
        setSubTotal(0);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRemoveProductNoToast = (subProductId: string) => {
    setIsLoading(true);
    axios
      .post(
        "cart/remove-product",
        { subProductId: subProductId },
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        fetchData(); // Gọi lại API để cập nhật dữ liệu mới nhất
        setSubTotal(0);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        product,
        subTotal,
        handleRemoveProduct,
        handleRemoveProductNoToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
