"use client";


import Image from "next/image";
import location from "../../public/location.svg";
import CustomDatePicker from "./DatePicker";

const displayItems = [
    {
      src: "https://media.istockphoto.com/id/2190195833/de/foto/ein-paar-das-in-einem-auto-sitzt-und-die-schl%C3%BCssel-von-einem-autoh%C3%A4ndler-erh%C3%A4lt.jpg?s=612x612&w=0&k=20&c=PxOkhdZb117A6wGkm2uBKdBMlCeI5SQUc0Ln22rSLUA=",
      alt: "Mietwagen",
    }
  ];


export default function RentalCar() {

    return (<div className="shadow-md bg-neutral-50 rounded-2xl flex relative w-full h-full">
              <Image
                src={displayItems[0].src}
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
            </div>)
};