"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="carouselswiper"
      >
        <SwiperSlide>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-32 w-full" />{" "}
            {/* Placeholder for an image */}
            <div className="p-4">
              <h3 className="text-lg font-bold">Slide 1</h3>
              <p className="text-gray-600 mt-2">Card content goes here.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-32 w-full" />{" "}
            {/* Placeholder for an image */}
            <div className="p-4">
              <h3 className="text-lg font-bold">Slide 2</h3>
              <p className="text-gray-600 mt-2">Card content goes here.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-32 w-full" />{" "}
            {/* Placeholder for an image */}
            <div className="p-4">
              <h3 className="text-lg font-bold">Slide 3</h3>
              <p className="text-gray-600 mt-2">Card content goes here.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-32 w-full" />{" "}
            {/* Placeholder for an image */}
            <div className="p-4">
              <h3 className="text-lg font-bold">Slide 4</h3>
              <p className="text-gray-600 mt-2">Card content goes here.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-32 w-full" />{" "}
            {/* Placeholder for an image */}
            <div className="p-4">
              <h3 className="text-lg font-bold">Slide 5</h3>
              <p className="text-gray-600 mt-2">Card content goes here.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
}
