import Tippy from "@tippyjs/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "api/axios";
import Common from "components/common/Common";
import { CartContext } from "components/context/CartProvider";
import { IconTrash } from "components/icon/Icon";
import Table from "components/table/Table";
import WModal from "components/wrapper/WModal";
import { toggleModal } from "sagas/modal/modal-slice";
import { TABLE_HEAD } from "utils/arrayList";
import { toggleBodyOverflow } from "utils/handler";
import Counter from "./Counter";

const TProduct = () => {
  const { product, handleRemoveProduct, handleRemoveProductNoToast, subTotal } =
    useContext(CartContext);
  const { isShow } = useSelector((state: any) => state.modal);
  const { accessToken } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [subProductId, setSubProductId] = useState<string>("");
  const [listOrder, setListOrder] = useState<Array<object>>([]);

  const handleToggleModal = () => {
    dispatch(toggleModal(!isShow));
    toggleBodyOverflow(isShow);
  };

  const handlePayment = () => {
    axios
      .post(
        "order/create",
        { item: listOrder },
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization: ` Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.result) {
          navigate("/checkout/complete");
          toast.success("Order successfully", { autoClose: 1000 });
          listOrder.map((item: any) =>
            handleRemoveProductNoToast(item.subProductId)
          );
        } else {
          toast.warning(data.message, { autoClose: 1000 });
          navigate("/profile/edit");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const extractItems = product.map((productChild: any) => ({
      subProductId: productChild.product.media[0].subProductId,
      quantity: productChild.quantity,
    }));
    setListOrder(extractItems);
  }, [product]);

  console.log("TCL: TProduct -> product", product);

  return (
    <Fragment>
      <WModal
        heading="Delete Product"
        btnName2="Yes"
        btnName1="No"
        open={isShow}
        onClick={handleToggleModal}
        handleRemoveProduct={() => handleRemoveProduct(subProductId)}
      >
        <p className="mb-10">
          Are you sure you want to remove the product from the cart?
        </p>
      </WModal>
      {!product.length ? (
        <div className="text-xl font-bold text-white">
          You currently have no items in your shopping cart.
        </div>
      ) : (
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
              {product.map((productChild: any, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <img
                      src={productChild?.product?.media[0]?.media?.filePath}
                      alt=""
                    />
                  </Table.Cell>
                  <Table.Cell>{productChild?.product?.name}</Table.Cell>
                  <Table.Cell>
                    {productChild?.product?.color?.colorName}
                  </Table.Cell>
                  <Table.Cell>
                    {productChild?.product?.size?.sizeName}
                  </Table.Cell>
                  <Table.Cell>
                    <Common.Price
                      price={productChild?.product?.price}
                    ></Common.Price>
                  </Table.Cell>
                  <Table.Cell>
                    <Counter
                      defaultCount={productChild?.quantity}
                      id={
                        productChild.product.media &&
                        productChild.product.media[0].subProductId
                      }
                    />
                  </Table.Cell>
                  <Table.Cell className="text-xl text-red-500">
                    <Common.Price
                      color="text-red-500"
                      price={
                        productChild?.product.price * productChild?.quantity
                      }
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Tippy content="Remove" placement="top" offset={[0, 20]}>
                      <i
                        className="cursor-pointer text-[#84878B] transition-all hover:text-black"
                        onClick={() => {
                          handleToggleModal();
                          setSubProductId(
                            productChild?.product?.media[0]?.subProductId
                          );
                        }}
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
                  Subtotal:{" "}
                  <Common.Price
                    color="text-red-500"
                    // price={150000 * 3}
                    price={subTotal}
                    size="text-xl"
                  />
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
            <button
              className="button__submit"
              type="button"
              onClick={handlePayment}
            >
              Payment
            </button>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default TProduct;
