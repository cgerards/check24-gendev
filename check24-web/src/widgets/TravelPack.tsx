"use client";

import Image from "next/image";
import Radio from "../components/Radio";
import CustomDatePicker from "../components/DatePicker";
import DataPlanSelector from "@/components/DataPlanSelector";

import location from "../../public/location.svg";

export default function TravelPack() {
  const displayItems = [
    {
      src: "https://media.istockphoto.com/id/1155872315/de/foto/wei%C3%9Fe-sim-karte-auf-wei%C3%9Fem-hintergrund.webp?s=2048x2048&w=is&k=20&c=mkA8nEL6B8kUDrQrbs9LJNiGiHKrJ0WCn9vH0mO4eNg=",
      alt: "Placeholder 1",
      label: "Argentinien",
    },
    {
      src: "https://media.istockphoto.com/id/2190195833/de/foto/ein-paar-das-in-einem-auto-sitzt-und-die-schl%C3%BCssel-von-einem-autoh%C3%A4ndler-erh%C3%A4lt.webp?s=2048x2048&w=is&k=20&c=pR3oy0-MkDUA_0AgXlFxoDpUQdxLC0cnw_czwoQUmkU=",
      alt: "Placeholder 2",
    },
    {
      src: "https://picsum.photos/seed/c/1200/675",
      alt: "Placeholder 3",
    },
    {
      src: "https://picsum.photos/seed/d/1200/675",
      alt: "Placeholder 4",
    },
    {
      src: "https://picsum.photos/seed/e/1200/675",
      alt: "Placeholder 5",
    },
  ];

  const title = "Bestens gerüstet für Ihre Reise!";

  return (
    <div className="max-w-7xl mx-auto p-1">
      {title && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {title}
        </h2>
      )}
      <div className="flex gap-1 lg:gap-3 p-1">
        {/* ESIM */}
        <div className="shadow-md bg-neutral-50 rounded-2xl flex overflow-hidden relative w-1/2">
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
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Jetzt vergleichen
            </button>
          </div>
        </div>

        {/* RENTAL CAR */}
        <div className="shadow-md bg-neutral-50 rounded-2xl flex relative w-1/2">
          <Image
            src={displayItems[1].src}
            alt=""
            width={1200}
            height={675}
            className="col-span-1 w-1/2 h-full object-cover rounded-l-2xl overflow-hidden"
          />

          <div className="flex flex-col p-5 justify-center grow">
            <h2 className="font-bold">Den richtigen Mietwagen buchen</h2>
            <div className="flex flex-col gap-y-2 mt-4 mb-5">
              <div className="flex flex-row justify-between gap-2">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex pl-2 items-center pointer-events-none">
                    <Image
                      src={location}
                      alt="Ort oder Flughafen für Mietwagen"
                      className="text-gray-500 h-4 w-4"
                    ></Image>
                  </div>
                  <input
                    className="pl-8 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 shadow-xs placeholder:text-gray-400 py-1.5"
                    placeholder="Ort oder Flughafen"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between gap-2">
                <CustomDatePicker placeholder="Abholdatum" />
                <CustomDatePicker placeholder="Rückgabedatum" />
              </div>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Jetzt vergleichen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
