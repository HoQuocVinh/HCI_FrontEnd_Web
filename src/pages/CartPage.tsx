import CartProvider from "components/context/CartProvider";
import { useTheme } from "components/context/ThemeProvider";
import WrapperPage from "components/wrapper/WrapperPage";
import TProduct from "modules/pages/cart/TProduct";
import { useEffect } from "react";

const CartPage = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("secondary");
    document.body.style.overflow = "auto";
    document.documentElement.style.paddingRight = "8px";
  }, [setTheme]);

  return (
    <CartProvider>
      <WrapperPage>
        <h1 className="cart__heading">Cart</h1>
        <TProduct />
      </WrapperPage>
    </CartProvider>
  );
};

export default CartPage;
