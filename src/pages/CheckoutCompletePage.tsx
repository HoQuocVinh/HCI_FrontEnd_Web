import axios from "api/axios";
import Common from "components/common/Common";
import { useTheme } from "components/context/ThemeProvider";
import Wrapper from "components/wrapper/Wrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutCompletePage = () => {
  const { setTheme } = useTheme();
  const { accessToken, user } = useSelector((state: any) => state.auth);

  const [orderDetail, setOrderDetail] = useState<any>([]);
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);

  useEffect(() => {
    const request = {
      orders: [],
      filter: [],
      size: 20,
      totalElement: 0,
      pageNumber: 1,
    };
    function fetchData() {
      axios
        .post("order", request, {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response);
          const { result } = response.data;
          setOrderDetail(result);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

  useEffect(() => {
    orderDetail.data &&
      orderDetail.data[0].orderDetail.map((item: any) =>
        setSubTotal((count) => (count += item.price * item.quantity))
      );
  }, [orderDetail.data]);

  return (
    <Wrapper.WDefault>
      <div className="mx-auto max-w-[904px] px-5 text-white">
        <div className="mb-20 mt-10 px-16 text-center">
          <strong className="text-4xl font-bold">Thank You</strong>
          <p className="leading-10 text-white text-opacity-80">
            Thank you for shopping. We have received your order
          </p>
          <Link
            to="/"
            className="mt-4 inline-block w-[250px] rounded-md bg-orange-500 py-3 transition-all hover:bg-orange-600"
          >
            Continue Shopping
          </Link>
        </div>
        <div className="mb-4 flex flex-col">
          <span className="text-sm font-bold leading-8">ORDER NUMBER</span>
          <span className="text-3xl font-bold">
            {orderDetail.data && orderDetail?.data[0]?.id}
          </span>
        </div>
        <Wrapper.Square>
          <span className="font-bold uppercase">Total Orders</span>
          <div className="py-7">
            <button className="w-[220px] rounded-md bg-blue-500 py-2 px-1 transition-all hover:bg-blue-600">
              In total order
            </button>
            <button className="ml-5 w-[220px] rounded-md bg-blue-500 py-2 px-1 transition-all hover:bg-blue-600">
              Order history
            </button>
          </div>
          <table className="w-full">
            <tbody>
              <tr className="flex items-center justify-between pb-3">
                <td>Total</td>
                <td>
                  <Common.Price price={subTotal} />
                </td>
              </tr>
              <tr className="flex items-center justify-between pt-4 text-xl font-bold">
                <td>Subtotal</td>
                <td>
                  <Common.Price price={subTotal} color="text-green-500" />
                </td>
              </tr>
            </tbody>
          </table>
        </Wrapper.Square>
        <Wrapper.Square className="mt-5">
          <span className="mb-5 block font-bold uppercase">
            Delivery address
          </span>
          <strong>{user.fullName}</strong>
          <p className="py-2 pt-1">{user.address}</p>
          <span>{user.phoneNumber}</span>
        </Wrapper.Square>
      </div>
    </Wrapper.WDefault>
  );
};

export default CheckoutCompletePage;
