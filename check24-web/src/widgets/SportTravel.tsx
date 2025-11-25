"use client";

import Image from "next/image";

interface GridItem {
  src: string;
  alt: string;
}

interface FeaturedGridProps {
  title: string;
  items: GridItem[];
}

export default function SportTravel({ title, items }: FeaturedGridProps) {
  const displayItems =
    items && items.length > 0
      ? items
      : [
          {
            src: "https://media.istockphoto.com/id/2193052367/de/foto/teenage-boy-spending-winter-holiday-skiing-in-mountain.jpg?s=612x612&w=0&k=20&c=YBjS-UWPw3jU_GPf4_6Rado72-d_yEcaGwHWPynziCA=",
            alt: "Placeholder 1",
            label: "Argentinien",
          },
          {
            src: "https://media.istockphoto.com/id/1137727247/de/foto/abenteuer-in-den-dolomiten-jugendliche-wandern-mit-hund.jpg?s=612x612&w=0&k=20&c=HpV7QRQkvOeYRg-IaFhmk0O1SjETk_sWSSlFmeqWXW0=",
            alt: "Placeholder 2",
          },
          {
            src: "https://media.istockphoto.com/id/641164064/de/foto/tauchen-gozo.jpg?s=612x612&w=0&k=20&c=9I3g4OCXr2RWz7LPncayzLSENKtrPBXzvi4fOponyQ8=",
            alt: "Placeholder 3",
          },
          {
            src: "https://media.istockphoto.com/id/1392998046/de/foto/mountainbiker.jpg?s=612x612&w=0&k=20&c=51pt2TOQBkxapKozqJ5MVF6EItE8UVPG_6_2xkn3YkM=",
            alt: "Placeholder 4",
          },
          {
            src: "https://picsum.photos/seed/e/1200/675",
            alt: "Placeholder 5",
          },
        ];

  return (
    <div className="max-w-7xl mx-auto p-1">
      {title && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {title}
        </h2>
      )}

      <div className="grid lg:grid-cols-4 gap-3">
        <div className="shadow-md col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 rounded-2xl aspect-video lg:aspect-video overflow-hidden relative">
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-m text-amber-50 font-bold z-20">
            Skifahren
          </span>
          <span className="rounded absolute top-5 left-0 m-3 px-2 py-1 text-xs text-amber-50 font-medium z-20">
            2.331 Angebote
          </span>
          <Image
            src={displayItems[0].src}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out z-0"
          />
          <div
            className="absolute inset-0 bg-black/30 z-10 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        <div className="shadow-md col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 rounded-2xl aspect-video lg:aspect-video overflow-hidden relative">
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-m text-amber-50 font-bold z-20">
            Wandern
          </span>
          <span className="rounded absolute top-5 left-0 m-3 px-2 py-1 text-xs text-amber-50 font-medium z-20">
            3.423 Angebote
          </span>
          <Image
            src={displayItems[1].src}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out z-0"
          />
          <div
            className="absolute inset-0 bg-black/30 z-10 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        
        <div className="shadow-md col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 rounded-2xl aspect-video lg:aspect-video overflow-hidden relative">
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-m text-amber-50 font-bold z-20">
            Tauchen
          </span>
          <span className="rounded absolute top-5 left-0 m-3 px-2 py-1 text-xs text-amber-50 font-medium z-20">
            1.264 Angebote
          </span>
          <Image
            src={displayItems[2].src}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out z-0"
          />
          <div
            className="absolute inset-0 bg-black/30 z-10 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        
        <div className="shadow-md col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 rounded-2xl aspect-video lg:aspect-video overflow-hidden relative">
          <span className="rounded absolute top-0 left-0 m-3 px-2 py-1 text-m text-amber-50 font-bold z-20">
            Mountainbike
          </span>
          <span className="rounded absolute top-5 left-0 m-3 px-2 py-1 text-xs text-amber-50 font-medium z-20">
            3.984 Angebote
          </span>
          <Image
            src={displayItems[3].src}
            alt=""
            width={1200}
            height={675}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out z-0"
          />
          <div
            className="absolute inset-0 bg-black/30 z-10 pointer-events-none"
            aria-hidden="true"
          />
        </div>

      </div>
    </div>
  );
}
