"use client";

import Image from "next/image";
import Radio from "../components/ui/Radio";

import ruler from "../../public/ruler.svg";

export default function CarWidget() {
  const displayItems = [
    {
      src: "https://media.istockphoto.com/id/1460051199/de/foto/blauer-bmw-m3.jpg?s=2048x2048&w=is&k=20&c=Xf0Unc0G4igZQNpj0IbdkmYy9c1Zi8FQSKJanzr6LmY=",
      alt: "Placeholder 1",
    },
    {
      src: "https://media.istockphoto.com/id/2227068029/de/foto/winterreifen-auf-verschneiter-stra%C3%9Fe.webp?s=2048x2048&w=is&k=20&c=aG5YfefniZfRbwLSAu5Ad9t3__cZCORzwirrxYCFO7Q=",
      alt: "Placeholder 2",
    },
  ];

  const title = "Alles rund um Ihr Auto!";

  return (
    <div className="max-w-7xl mx-auto p-1">
      {title && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {title}
        </h2>
      )}
      <div className="flex flex-col sm:flex-row gap-3 p-1">
        {/* INSURANCE */}
        <div className="shadow-md bg-neutral-50 rounded-2xl flex flex-col sm:flex-row overflow-hidden relative">
          <Image
            src={displayItems[0].src}
            alt=""
            width={1200}
            height={675}
            className="w-full sm:w-1/2 h-48 sm:h-auto object-cover"
          />
          <div className="flex flex-col p-5 justify-center grow">
            <h2 className="font-bold">Autoversicherung abschließen</h2>
            <div className="flex flex-col gap-y-2 mt-4 mb-5">
              <Radio
                id="insurace_option_1"
                name="insurance"
                value="liability"
                label="Haftpflicht"
              />
              <Radio
                id="insurace_option_2"
                name="insurance"
                value="partial"
                label="Teilkasko"
              />
              <Radio
                id="insurace_option_3"
                name="insurance"
                value="full"
                label="Vollkasko"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Vergleichen & sparen
            </button>
          </div>
        </div>

        <div className="shadow-md bg-neutral-50 rounded-2xl flex flex-col sm:flex-row overflow-hidden relative">
          <Image
            src={displayItems[1].src}
            alt=""
            width={1200}
            height={675}
            className="w-full sm:w-1/2 h-48 sm:h-auto object-cover"
          />

          {/* TIRES */}
          <div className="flex flex-col p-5 justify-center grow">
            <h2 className="font-bold">Passende Reifen Finden</h2>
            <div className="flex flex-col gap-y-2 mt-4 mb-5">
              <div className="flex flex-row justify-between">
                <Radio
                  id="tire_option_1"
                  name="tires"
                  value="all-season"
                  label="Ganzjahr"
                />
                <Radio
                  id="tire_option_2"
                  name="tires"
                  value="winter"
                  label="Winter"
                />
                <Radio
                  id="tire_option_3"
                  name="tires"
                  value="summer"
                  label="Sommer"
                />
              </div>
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex pl-2 items-center">
                <Image
                  src={ruler}
                  alt="Reifengröße"
                  className="text-gray-500 h-4 w-4"
                ></Image>
              </div>
              <input
                className="pl-8 bg-white border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 shadow-xs placeholder:text-body py-0.5"
                placeholder="Reifengröße angeben"
                required
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Finden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
