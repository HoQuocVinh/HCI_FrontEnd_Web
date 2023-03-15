import { IconFB, IconIns, IconStart, IconYou } from "components/icon/Icon";
import Img from "components/img/Img";
import React from "react";
import { useForm } from "react-hook-form";

const Footer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: any) => console.log(values);
  return (
    <div className="mx-36">
      <div className="flex items-center justify-between">
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
      <div className="mt-28 flex flex-row justify-between">
        <div>
          <p className="text-xl font-bold text-white">Stay in the loop</p>
          <p className="w-full max-w-[659px] pt-4 text-[#B1B1B1]">
            Join our mailing list to update yourself with a fresh wave of
            fashion, sales and even our limited products.
          </p>
          <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="relative mt-9 w-full max-w-[600px] rounded-lg bg-white px-6 py-5"
          >
            <input
              type="text"
              placeholder="your_email@gmail.com"
              className="w-full bg-transparent pr-32 outline-none placeholder:text-[#A5A5A5]"
              {...register("email")}
            />
            <button className="absolute right-6 top-2/4 -translate-y-2/4 rounded-lg bg-[#1F094D] px-5 py-2 font-medium text-white">
              Sign Up
            </button>
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
      <hr className="mt-8 border border-white border-opacity-10" />
      <div className="flex items-center justify-between pt-8 pb-6 font-footer font-medium text-[#767676]">
        <p>C2022-2023 Palmo. Inc</p>
        <div className="flex items-center gap-16">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
