"use client";

import Image from "next/image";
import Link from "next/link";

import DataPlanSelector from "./ui/DataPlanSelector";
import location from "../../public/location.svg";

const displayItems = [
  {
    src: "https://media.istockphoto.com/id/1155872315/de/foto/wei%C3%9Fe-sim-karte-auf-wei%C3%9Fem-hintergrund.jpg?s=612x612&w=0&k=20&c=sYJKn6WtcHmkvmXEHr9x4UwKD--lcPhW4BlJxWKtAwU=",
    alt: "eSIM",
  },
];

export default function Esim() {
  return (
    <div className="shadow-md bg-neutral-50 rounded-2xl flex overflow-hidden relative w-full h-full ">
      <Image
        src={displayItems[0].src}
        alt=""
        width={1200}
        height={675}
        className="col-span-1 w-1/2 h-full object-cover"
      />
      <div className="flex flex-col p-5 justify-center grow">
        <h2 className="font-bold">Eine eSIM für Ihr Datenvolumen</h2>
        <div className="flex flex-col gap-y-2 mt-4 mb-2">
          <DataPlanSelector />
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex pl-2 items-center pointer-events-none">
              <Image
                src={location}
                alt="Reiseland eingeben für eSIM"
                className="text-gray-500 h-4 w-4"
              ></Image>
            </div>
            <input
              className="pl-8 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full shadow-xs placeholder:text-gray-400 py-1.5"
              placeholder="Reiseland angeben"
              required
            />
          </div>
          <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Jetzt vergleichen
          </Link>
        </div>
      </div>
    </div>
  );
}
