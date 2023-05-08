import Tippy from "@tippyjs/react";
import { useTheme } from "components/context/ThemeProvider";
import { IconMinus, IconPlus, IconTrash } from "components/icon/Icon";
import Table from "components/table/Table";
import WModal from "components/wrapper/WModal";
import WrapperPage from "components/wrapper/WrapperPage";
import useClickOutSide from "hooks/useClickOutSide";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TABLE_HEAD } from "utils/arrayList";
import classNames from "utils/classNames";
interface LPPrice {
  price: number;
  size?: string;
}

const CartPage = () => {
  const { setTheme } = useTheme();
  const { show, setShow, nodeRef } = useClickOutSide();
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

  const { control, setValue } = useForm({
    defaultValues: {
      amount: 2,
    },
  });
  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);
  let price = 300000;
  return (
    <WrapperPage>
      <WModal
        heading="Delete Product"
        btnName2="Yes"
        btnName1="No"
        open={isShow}
        onClick={handleToggleModal}
      >
        <p className="mb-10">
          Are you sure you want to remove the product from the cart?
        </p>
      </WModal>
      <h1 className="cart__heading">Cart</h1>
      <TProduct onClick={handleToggleModal} />
    </WrapperPage>
  );
};

const TProduct = ({ onClick }: any) => {
  const navigate = useNavigate();
  return (
    <form className="bg-white">
      <Table>
        <Table.Head>
          <Table.Row>
            {TABLE_HEAD.map((item: any, index: number) => (
              <Table.HeadCell key={index}>{item}</Table.HeadCell>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {Array(4)
            .fill(0)
            .map((item: any, index: number) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/087/870/products/image1xxl-68298f67-067e-4690-a22a-8fed852b6499.jpg?v=1464092351610"
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell>2421423</Table.Cell>
                <Table.Cell>Quần short bò</Table.Cell>
                <Table.Cell>Yellow</Table.Cell>
                <Table.Cell>Male S</Table.Cell>
                <Table.Cell>750.000₫</Table.Cell>
                <Table.Cell>
                  <Counter />
                </Table.Cell>
                <Table.Cell className="text-xl text-red-500">
                  <Price price={150000} />
                </Table.Cell>
                <Table.Cell>
                  <Tippy content="Remove" placement="top" offset={[0, 20]}>
                    <i
                      className="cursor-pointer text-[#84878B] transition-all hover:text-black"
                      onClick={onClick}
                    >
                      <IconTrash />
                    </i>
                  </Tippy>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell
              className="pr-10 text-right"
              colSpan={TABLE_HEAD.length}
            >
              Subtotal: <Price price={150000 * 3} size="text-xl" />
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <div className="flex items-center justify-end gap-2 py-5 pr-5">
        <button
          type="button"
          className="button__continue"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
        <button className="button__submit" type="button">
          Payment
        </button>
      </div>
    </form>
  );
};

const Counter = () => {
  const [count, setCount] = useState<string>("1");

  const handleDecrement = () => {
    const newCount = parseInt(count) - 1;
    if (newCount >= 1) {
      setCount(newCount.toString());
    }
  };

  const handleIncrement = () => {
    const newCount = parseInt(count) + 1;
    setCount(newCount.toString());
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value === "" || /^\d+$/.test(value)) {
      setCount(value);
    }
  };

  return (
    <div className="flex w-[90px] items-center border border-[#e5e5e5]">
      <button
        type="button"
        className={classNames("p-1", parseInt(count) === 1 && "text-gray-400")}
        onClick={handleDecrement}
      >
        <IconMinus />
      </button>
      <input
        type="text"
        value={count}
        onChange={handleChangeValue}
        className="w-10 border-x border-x-[#e5e5e5] text-center outline-none"
      />
      <button type="button" className="p-1" onClick={handleIncrement}>
        <IconPlus />
      </button>
    </div>
  );
};

const Price = (props: LPPrice) => {
  return (
    <span
      className={classNames("font-bold text-red-500", props.size && props.size)}
    >
      {props.price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      })}
    </span>
  );
};

export default CartPage;
