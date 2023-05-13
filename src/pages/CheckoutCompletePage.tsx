import Common from "components/common/Common";
import { useTheme } from "components/context/ThemeProvider";
import Table from "components/table/Table";
import Wrapper from "components/wrapper/Wrapper";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CheckoutCompletePage = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);
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
            2520080002305121455-6470727
          </span>
        </div>
        <div className="mb-2 flex flex-row items-center">
          <dl className="inline-block">
            <dt className="inline after:pr-1 after:content-[':']">
              Expected delivery time
            </dt>
            <dd className="inline">13/05/2023 - 17/05/2023</dd>
          </dl>
          <p className="ml-2">
            Note: The delivery time above is only an estimate
          </p>
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
                  <Common.Price price={200000} />
                </td>
              </tr>
              <tr className="flex items-center justify-between border-b border-[#dddddd] pb-4">
                <td>Delivery charge</td>
                <td>
                  <Common.Price price={200000} />
                </td>
              </tr>
              <tr className="flex items-center justify-between pt-4 text-xl font-bold">
                <td>Subtotal</td>
                <td>
                  <Common.Price price={200000} color="text-green-500" />
                </td>
              </tr>
            </tbody>
          </table>
        </Wrapper.Square>
        <Wrapper.Square className="mt-5">
          <span className="mb-5 block font-bold uppercase">
            Delivery address
          </span>
          <strong>Hồ Quốc Vinh</strong>
          <p className="py-2 pt-1">
            Ấp 3, xã Phong Mỹ, huyện Cao Lãnh, tỉnh Đồng Tháp
          </p>
          <span>0782883871</span>
        </Wrapper.Square>
        <Wrapper.Square className="mt-5">
          <span className="mb-5 block font-bold uppercase">Shipping date</span>
          <Common.Defention>
            <Common.Term>Delivery charge</Common.Term>
            <Common.Description>
              <Common.Price
                price={50000}
                color="text-green-500"
                size="text-lg"
              />
            </Common.Description>
          </Common.Defention>
          <Common.Defention>
            <Common.Term>Expected delivery time</Common.Term>
            <Common.Description>14/05/2023 - 18/05/2023</Common.Description>
          </Common.Defention>
          <Common.Defention>
            <Common.Term>Note</Common.Term>
            <Common.Description>
              The delivery time above is only an estimate
            </Common.Description>
          </Common.Defention>
        </Wrapper.Square>
      </div>
    </Wrapper.WDefault>
  );
};

export default CheckoutCompletePage;
