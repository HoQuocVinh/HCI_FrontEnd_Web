import { IconArrowRight, IconMouse } from "components/icon/Icon";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { useEffect } from "react";
import CardImg from "components/card/CardImg";
import { useTheme } from "components/context/ThemeProvider";
const HomePage = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("primary");
  }, [setTheme]);

  return (
    <div className="home-page mx-36 mt-5">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner relative h-full">
            <img
              srcSet="bg-banner.png 2x"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute left-0 top-[154px] w-full max-w-[678px]">
              <h1 className="text-6xl font-bold leading-[70px] text-white">
                The best place to buy{" "}
                <strong className="title">amazing product</strong>
              </h1>
              <p className="mt-1 text-[32px] font-normal leading-[40px] text-white">
                We can help you show your personality whenever wherever you want
              </p>
              <div className="discover mt-16 flex w-full max-w-[485px] items-center">
                <button className="rounded-[10px] bg-purple py-5 px-7 shadow-[inset_0px_-4px_4px_rgba(255,_255,_255,_0.25),_inset_0px_4px_4px_rgba(255,_242,_242,_0.25)]">
                  <IconArrowRight />
                </button>
                <div className="flex-1 text-center">
                  <p className="text-3xl text-white">Discover more sets</p>
                </div>
              </div>
            </div>
            <i className="absolute left-2/4 bottom-10 -translate-x-2/4">
              <IconMouse />
            </i>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent">
          <div className="grid grid-cols-4 gap-y-10">
            {Array(8)
              .fill(0)
              .map((item: any, index: number) => (
                <CardImg
                  width="w-[230px]"
                  height="h-[260px]"
                  src="/img-card.png"
                  alt=""
                  borderRadius="rounded-xl"
                  border
                />
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-transpaent">
          <div className="mr-[74px] grid grid-cols-3 gap-x-9">
            <img
              src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="grid grid-rows-2 gap-y-9">
              <div className="h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="grid-row-3 grid gap-y-9">
              <div className="row-span-1 h-[173px]">
                <img
                  src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  className="object-over h-full w-full"
                />
              </div>
              <div className="row-span-2 h-[347px]">
                <img
                  src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  className="object-over h-full w-full"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePage;
