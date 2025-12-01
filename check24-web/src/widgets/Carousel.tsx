"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BasicCarouselProps } from "./types";

import { Pagination, Navigation } from "swiper/modules";

export default function Carousel({ header, items }: BasicCarouselProps) {
  const displayItems = items;
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-1 relative overflow-visible">
      {header && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {header}
        </h2>
      )}
      <button
        ref={prevRef}
        aria-label="Previous"
        className="hidden md:flex items-center justify-center absolute -left-4 top-1/2 transform -translate-y-1/2 z-50 w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 text-gray-500 hover:scale-105"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        ref={nextRef}
        aria-label="Next"
        className="hidden md:flex items-center justify-center absolute -right-4 top-1/2 transform -translate-y-1/2 z-50 w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 text-gray-500 hover:scale-105"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Swiper
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        loop={true}
        initialSlide={0}
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
        className="carouselswiper relative"
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden min-h-[400px] flex flex-col">
              <Image
                src={displayItems[index].src}
                alt={displayItems[index].alt}
                width={1200}
                height={675}
                className="aspect-6/5 object-cover z-0"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">
                  {displayItems[index].title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {displayItems[index].description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
