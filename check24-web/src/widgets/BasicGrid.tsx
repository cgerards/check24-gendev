"use client";

import Image from "next/image";
import { BasicGridProps } from "@/widgets/types";

import Link from "next/link";

export default function BasicGrid({ header, items }: BasicGridProps) {
  const displayItems = items;

  return (
    <div className="max-w-7xl mx-auto p-1">
      {header && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {header}
        </h2>
      )}

      <div className="grid lg:grid-cols-4 gap-3">
        {displayItems.map((item, index) => (
          <Link key={index} href="/about" className="shadow-md col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 rounded-2xl aspect-video lg:aspect-video overflow-hidden relative">
            <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-m text-amber-50 font-bold z-20">
              {displayItems[index].title}
            </span>
            <span className="rounded absolute top-5 left-0 m-3 px-2 py-1 text-xs text-amber-50 font-medium z-20">
              {displayItems[index].subtitle}
            </span>
            <Image
              src={displayItems[index].src}
              alt={displayItems[index].alt}
              width={1200}
              height={675}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out z-0"
            />
            <div
              className="absolute inset-0 bg-black/30 z-10 pointer-events-none"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
