import Button from "components/Button/Button";
import { IconArrowRight, IconMouse } from "components/icon/Icon";
import Img from "components/img/Img";
import React from "react";

const Slide1 = () => {
  return (
    <div className="relative h-full">
      <Img srcSet="bg-banner.png 2x" alt="bg-banner" full />
      <div className="absolute left-0 top-[100px] w-full max-w-[678px]">
        <h1 className="text-6xl font-bold leading-[70px] text-white">
          The best place to buy <p className="title">amazing product</p>
        </h1>
        <p className="mt-1 text-[32px] font-normal leading-[40px] text-white">
          We can help you show your personality whenever wherever you want
        </p>
        <div className="discover mt-14 flex w-full max-w-sm items-center">
          <Button
            bg="purple"
            shadow="s1"
            variant="normal"
            classNames="rounded-[10px] px-7 py-4"
          >
            <IconArrowRight />
          </Button>
          <div className="flex-1 text-center">
            <p className="text-2xl text-white">Discover more sets</p>
          </div>
        </div>
      </div>
      <i className="absolute left-2/4 bottom-3 -translate-x-2/4">
        <IconMouse />
      </i>
    </div>
  );
};

export default Slide1;
