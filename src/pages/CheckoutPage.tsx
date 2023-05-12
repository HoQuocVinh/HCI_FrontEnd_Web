import { useTheme } from "components/context/ThemeProvider";
import { IconArrowDown } from "components/icon/Icon";
import { IInfo } from "components/input/Input";
import Wrapper from "components/wrapper/Wrapper";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const CheckoutPage = () => {
  const price = 2000000;
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      email: "",
      province: "",
    },
  });
  const { setTheme } = useTheme();
  useEffect(() => setTheme("terriary"), [setTheme]);
  const onSubmit = (value: any) => console.log(value);
  return (
    <Wrapper.WCheckout>
      <div className="grid h-full grid-cols-3">
        <div className="col-span-2">
          <header className="pt-5 pb-10">
            <img srcSet="/palmo.png 2x" alt="" />
          </header>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="mb-3 text-lg font-bold">Shipping Information</h1>
              <form
                id="form__checkout"
                className="my-form flex flex-col gap-y-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <IInfo
                  type="email"
                  control={control}
                  name="email"
                  label="Email"
                />
                <IInfo
                  type="text"
                  control={control}
                  name="fullName"
                  label="Full name"
                />
                <IInfo
                  type="text"
                  control={control}
                  name="phoneNumber"
                  label="Phone number"
                />
                <IInfo
                  type="text"
                  control={control}
                  name="province"
                  label="Province"
                />
                <IInfo
                  type="text"
                  control={control}
                  name="district"
                  label="District"
                />
              </form>
            </div>
            <div className="px-4 ">
              <h1 className="mb-3 text-lg font-bold">Checkout</h1>
              <label
                htmlFor="term"
                className="flex cursor-pointer items-center justify-between rounded-[4px] border border-[#737373] px-3"
              >
                <div>
                  <input id="term" type="checkbox" />
                  <span className="ml-5 select-none leading-none">
                    Shipcode
                  </span>
                </div>
                <img srcSet="/money.png 2x" alt="" className="h-10 w-10" />
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-x border-x-[#ccc]">
          <h1 className="border-b border-[#ccc] py-5 px-7 text-lg font-bold">
            Orders (2 products)
          </h1>
          <div className="px-7 py-5">
            {Array(2)
              .fill(0)
              .map((item: any, index: number) => (
                <div
                  className="flex items-center justify-between py-2"
                  key={index}
                >
                  <figure className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1683549003905-a1f385e3de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                      alt=""
                      style={{
                        width: "40px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <figcaption className="pl-2">
                      Áo phông vitage trắng
                    </figcaption>
                  </figure>
                  <span>
                    {price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </div>
              ))}
          </div>
          <hr className="border-[#ccc]" />
          <div className="my-7 flex items-center justify-between gap-4 px-7">
            <IInfo
              control={control}
              label="Vochoure"
              name="vochoure"
              type="text"
            />
            <button
              type="button"
              className="Apply rounded-md bg-blue-400 px-9 py-2 text-white"
            >
              Apply
            </button>
          </div>
          <hr className="mt-3 border-[#ccc]" />
          <div className="px-7 py-5">
            <div className="flex items-center justify-between pt-2">
              <span>Provisional</span>
              <span>
                {price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span>Transport fee</span>
              <span>
                {price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
          </div>
          <hr className="border-[#ccc]" />
          <div className="flex items-center justify-between px-7 py-5">
            <span>Subtotal</span>
            <span>
              {price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 px-7">
            <Link
              to="/cart"
              className="w-full rounded-md bg-blue-500 py-2 text-center text-white transition-all hover:bg-blue-600"
            >
              Go to cart
            </Link>
            <button
              type="submit"
              className="w-full rounded-md bg-red-500 py-2 text-white transition-all hover:bg-red-600"
            >
              Order
            </button>
          </div>
        </div>
      </div>
      {/* <button type="submit" form="form__checkout">
        Submit
      </button> */}
    </Wrapper.WCheckout>
  );
};

export default CheckoutPage;
