import { IconArrowRight, IconMouse } from "components/icon/Icon";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import { Mousewheel, Pagination } from "swiper";

const HomePage = () => {
  return (
    <div className="mx-36">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        // spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner r elative h-full">
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
        <SwiperSlide className="bg-white">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 7</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 8</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePage;
