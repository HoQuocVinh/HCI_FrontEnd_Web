import { useTheme } from "components/context/ThemeProvider";
import Slide1 from "modules/Slides/Slide1";
import Slide2 from "modules/Slides/Slide2";
import Slide3 from "modules/Slides/Slide3";
import Slide4 from "modules/Slides/Slide4";
import Slide5 from "modules/Slides/Slide5";
import { useEffect } from "react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const HomePage = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("primary");
  }, [setTheme]);

  const handleValueChange = (value: number) => console.log(value);

  return (
    <div className="wrapper-slide mx-32 mt-[90px] px-5 pt-5">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Navigation]}
        threshold={50}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Slide4 />
        </SwiperSlide> */}
        <SwiperSlide>
          <Slide5 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePage;
