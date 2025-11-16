"use client";

import Image from "next/image";


interface GridItem {
  src: string
  alt: string
}

interface FeaturedGridProps {
  title: string
  items: GridItem[]
}



export default function FeaturedGrid({ title, items} : FeaturedGridProps) {
  
  const displayItems = items && items.length > 0 ? items : [
    { src: "https://picsum.photos/seed/a/1200/675", alt: "Placeholder 1", label: "Argentinien" },
    { src: "https://picsum.photos/seed/b/1200/675", alt: "Placeholder 2" },
    { src: "https://picsum.photos/seed/c/1200/675", alt: "Placeholder 3" },
    { src: "https://picsum.photos/seed/d/1200/675", alt: "Placeholder 4" },
    { src: "https://picsum.photos/seed/e/1200/675", alt: "Placeholder 5" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-1">
      {title && <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">{title}</h2>}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-1 lg:gap-3 p-1">
        <div className="shadow-md col-span-1 row-span-3 lg:col-span-3 lg:row-span-1 rounded-2xl aspect-9/10 lg:aspect-21/9 overflow-hidden relative">
          
          <Image
            src={displayItems[0].src}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-sm bg-black/60 text-amber-50 font-bold">
            Argentinien
          </span>
        </div>

        <div className="shadow-md col-span-1 row-span-3 lg:col-span-3 lg:row-span-1 rounded-2xl aspect-9/10 lg:aspect-21/9 overflow-hidden">
          <Image
            src={displayItems[1].src}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="shadow-md col-span-1 row-span-3 lg:col-span-2 lg:row-span-1 rounded-2xl aspect-9/10 lg:aspect-video overflow-hidden">
          <Image
            src={displayItems[2].src}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="shadow-md col-span-1 row-span-3 lg:col-span-2 lg:row-span-1 rounded-2xl aspect-9/10 lg:aspect-video overflow-hidden">
          <Image
            src={displayItems[3].src}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="shadow-md hidden lg:block col-span-2 row-span-1 rounded-2xl aspect-video overflow-hidden">
          <Image
            src={displayItems[4].src}
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
