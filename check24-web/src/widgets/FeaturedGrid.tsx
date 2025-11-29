"use client";

import Image from "next/image";

import { BasicGridItem, BasicGridProps } from "@/widgets/types";

export default function FeaturedGrid({ header, items }: BasicGridProps) {
  const displayItems = items;

  return (
    <div className="max-w-7xl mx-auto p-1">
      {header && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {header}
        </h2>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-1 lg:gap-3 p-1">
        <div className="shadow-md col-span-1 row-span-3 lg:col-span-3 lg:row-span-1 rounded-2xl aspect-9/10 lg:aspect-21/9 overflow-hidden relative">
          <Image
            src={displayItems[0].src}
            alt={displayItems[0].alt}
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-sm bg-black/60 text-amber-50 font-bold">
            <div>{displayItems[0].title}</div>
            <div className="text-xs font-medium">
              {displayItems[0].subtitle}
            </div>
          </span>
        </div>

        <div className="shadow-md col-span-1 row-span-3 lg:col-span-3 lg:row-span-1 rounded-2xl aspect-9/10 lg:aspect-21/9 overflow-hidden relative">
          <Image
            src={displayItems[1].src}
            alt={displayItems[1].alt}
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-sm bg-black/60 text-amber-50 font-bold">
            <div>{displayItems[1].title}</div>
            <div className="text-xs font-medium">
              {displayItems[1].subtitle}
            </div>
          </span>
        </div>

        <div className="shadow-md col-span-1 row-span-3 lg:col-span-2 lg:row-span-1 rounded-2xl aspect-9/10 lg:aspect-video overflow-hidden relative">
          <Image
            src={displayItems[2].src}
            alt={displayItems[2].alt}
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-sm bg-black/60 text-amber-50 font-bold">
            <div>{displayItems[2].title}</div>
            <div className="text-xs font-medium">
              {displayItems[2].subtitle}
            </div>
          </span>
        </div>

        <div className="shadow-md col-span-1 row-span-3 lg:col-span-2 lg:row-span-1 rounded-2xl aspect-9/10 lg:aspect-video overflow-hidden relative">
          <Image
            src={displayItems[3].src}
            alt={displayItems[3].alt}
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-sm bg-black/60 text-amber-50 font-bold">
            <div>{displayItems[3].title}</div>
            <div className="text-xs font-medium">
              {displayItems[3].subtitle}
            </div>
          </span>
        </div>

        <div className="shadow-md hidden lg:block col-span-2 row-span-1 rounded-2xl aspect-video overflow-hidden relative">
          <Image
            src={displayItems[4].src}
            alt={displayItems[4].alt}
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-sm bg-black/60 text-amber-50 font-bold">
            <div>{displayItems[4].title}</div>
            <div className="text-xs font-medium">
              {displayItems[4].subtitle}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
