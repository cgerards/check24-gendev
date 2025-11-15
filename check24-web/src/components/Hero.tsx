"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
      <Swiper
        navigation={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="heroswiper h-[55vh] overflow-hidden"
      >
        <SwiperSlide>
          <Image
            src={placeholders[0]}
            alt=""
            width={1920}
            height={500}
            className="w-full h-full object-cover"
            priority={true}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={placeholders[1]}
            alt=""
            width={1920}
            height={500}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={placeholders[2]}
            alt=""
            width={1920}
            height={500}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={placeholders[3]}
            alt=""
            width={1920}
            height={500}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
  );
}
