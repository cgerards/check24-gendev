"use client";

import Image from "next/image";

export default function FeaturedGrid() {
  const placeholders = [
    "https://picsum.photos/seed/a/1200/675", // 16:9
    "https://picsum.photos/seed/b/1200/675", // 16:9
    "https://picsum.photos/seed/c/1200/675", // square
    "https://picsum.photos/seed/d/1200/675",
    "https://picsum.photos/seed/e/1200/675",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-6 gap-3 p-3">
        <div className="col-span-3 row-span-1 rounded-2xl aspect-video overflow-hidden relative">
          <Image
            src={placeholders[0]}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-sm bg-black/60 text-amber-50 font-bold">Argentinien</span>
        </div>

        <div className="col-span-3 row-span-1 rounded-2xl aspect-video overflow-hidden">
          <Image
            src={placeholders[1]}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="col-span-2 row-span-1 rounded-2xl aspect-video overflow-hidden">
          <Image
            src={placeholders[2]}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="col-span-2 row-span-1 rounded-2xl aspect-video overflow-hidden">
          <Image
            src={placeholders[3]}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="col-span-2 row-span-1 rounded-2xl aspect-video overflow-hidden">
          <Image
            src={placeholders[4]}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
