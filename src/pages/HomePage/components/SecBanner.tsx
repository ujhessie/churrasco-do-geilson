import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa o estilo base

export const SecBanner = () => {
  return (
    <div className="p-2 mb-2">
      <Swiper
        spaceBetween={4}
        slidesPerView={1.1}
        className="banners banner  w-full  shadow-md text-gray-400   "
      >
        <SwiperSlide className="content bg-[url('/images/capa.png')] h-full  bg-center bg-cover rounded-md  bg-orange-500 lg:aspect-[21/9] aspect-[16/9]"></SwiperSlide>
        <SwiperSlide className="content bg-[url('/images/capa.png')] h-full  bg-center bg-cover rounded-md  bg-orange-500 lg:aspect-[21/9] aspect-[16/9]"></SwiperSlide>
        <SwiperSlide className="content bg-[url('/images/capa.png')] h-full  bg-center bg-cover rounded-md  bg-orange-500 lg:aspect-[21/9] aspect-[16/9]"></SwiperSlide>
      </Swiper>
    </div>
  );
};
