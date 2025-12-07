"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import macDesk from "../../public/mac_desk.jpeg";
import dolomiti from "../../public/dolomiti.jpg";
import finance from "../../public/finance.jpg";

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
          src={macDesk}
          alt=""
          width={1920}
          height={500}
          className="w-full h-full object-cover"
          priority={true}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-white text-5xl md:text-9xl font-extrabold drop-shadow-lg max-w-3xl text-center leading-tight">
            CHECK24 GENDEV
          </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src={dolomiti}
          alt=""
          width={1920}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-white text-5xl md:text-9xl font-extrabold drop-shadow-lg max-w-3xl text-center leading-tight">
            REISEN
          </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src={finance}
          alt=""
          width={1920}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-white text-5xl md:text-9xl font-extrabold drop-shadow-lg max-w-3xl text-center leading-tight">
            PREISE VERGLEICHEN
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
