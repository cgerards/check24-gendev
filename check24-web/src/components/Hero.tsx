"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const placeholders = [
  "https://picsum.photos/seed/dsf/1920/500",
  "https://picsum.photos/seed/ab/1920/500",
  "https://picsum.photos/seed/fdf/1920/500",
  "https://picsum.photos/seed/crr/1920/500",
];

export default function Hero() {
  return (
    <div className="-mx-8 -my-3">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="heroswiper h-[55vh]"
      >
        <SwiperSlide>
          <div className="bg-white shadow-md overflow-hidden">
            <div className="bg-gray-200 w-full" />{" "}
            <img
              src={placeholders[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white shadow-md overflow-hidden">
            <div className="bg-gray-200 w-full" />{" "}
            <img
              src={placeholders[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white shadow-md overflow-hidden">
            <div className="bg-gray-200 w-full" />{" "}
            <img
              src={placeholders[2]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white shadow-md overflow-hidden">
            <div className="bg-gray-200 w-full" />{" "}
            <img
              src={placeholders[3]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
