import Button from "components/Button/Button";
import { IconFB, IconIns, IconStart, IconYou } from "components/icon/Icon";
import Img from "components/img/Img";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const Slide5 = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (value: any) => console.log(value);

  return (
    <Fragment>
      <div className="mr-[74px] flex items-center justify-between">
        {Array(5)
          .fill(0)
          .map((item: any, index: number) => (
            <figure className="flex flex-col items-center gap-y-4" key={index}>
              <Img
                src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80"
                alt=""
                width="w-[150px]"
                height="h-[150px]"
                borderRadius="rounded-full"
              />
              <div className="flex items-center justify-center gap-5">
                {Array(3)
                  .fill(0)
                  .map((item: any, index: number) => (
                    <i key={index}>
                      <IconStart />
                    </i>
                  ))}
              </div>
              <figcaption className="text-xl font-bold text-white">
                Alice Huber
              </figcaption>
            </figure>
          ))}
      </div>
      <div className="mt-10 flex flex-row justify-between">
        <div>
          <p className="text-xl font-bold text-white">Stay in the loop</p>
          <p className="w-full max-w-[659px] pt-4 text-[#B1B1B1]">
            Join our mailing list to update yourself with a fresh wave of
            fashion, sales and even our limited products.
          </p>
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-9 flex w-full max-w-[500px] items-center rounded-lg bg-white py-3 pl-6 pr-2"
          >
            <input
              type="text"
              placeholder="your_email@gmail.com"
              className="flex-1 bg-transparent outline-none placeholder:text-[#A5A5A5]"
              {...register("email")}
            />
            <Button
              variant="normal"
              bg="blueBlack"
              classNames="rounded-lg ml-5 py-2 px-5"
            >
              Sign Up
            </Button>
          </form>
        </div>
        <div className="w-full max-w-[350px] text-white">
          <p className="text-xl font-bold">Join Community</p>
          <div className="mt-4 flex items-center gap-4">
            <i>
              <IconFB />
            </i>
            <i>
              <IconIns />
            </i>
            <i>
              <IconYou />
            </i>
          </div>
          <hr className="mt-10 border border-white border-opacity-10" />
          <div className="mt-9 grid grid-cols-3">
            <div className="col-span-1">
              <span className="text-xl font-bold">Company</span>
              <div className="mt-4 flex flex-col gap-2">
                <span>About</span>
                <span>Careers</span>
              </div>
            </div>
            <div className="col-span-2 ml-10">
              <span className="text-xl font-bold">Resources</span>
              <div className="mt-4 flex flex-col gap-2">
                <span>FAQs</span>
                <span>Newsletter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4 border border-white border-opacity-10" />
      <div className="flex items-center justify-between pt-4 font-footer font-medium text-[#767676]">
        <p>C2022-2023 Palmo. Inc</p>
        <div className="flex items-center gap-16">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Slide5;
