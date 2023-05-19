import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CartProvider, { CartContext } from "components/context/CartProvider";
import { useTheme } from "components/context/ThemeProvider";
import WrapperPage from "components/wrapper/WrapperPage";
import TProduct from "modules/pages/cart/TProduct";
import axios from "api/axios";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { setTheme } = useTheme();
  const { accessToken } = useSelector((state: any) => state.auth);

  const { control, setValue } = useForm({
    defaultValues: {
      amount: 2,
    },
  });

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
