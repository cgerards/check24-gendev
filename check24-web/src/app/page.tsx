import Image from "next/image";
import CheckNavbar from "../components/Navbar";
import Carousel from "../widgets/Carousel";
import CarWidget from "@/widgets/CarWidget";
import TravelPack from "@/widgets/TravelPack";
import AlternativeCarousel from "@/widgets/AlternativeCarousel";
import SportTravel from "@/widgets/SportTravel";
import Deal from "@/widgets/Deal";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "./embla.css";

import WidgetRenderer from "@/widgets/WidgetRenderer";
import { Widget } from "@/widgets/types";

export default async function Home() {
  const response = await fetch("http://127.0.0.1:8000/");
  const data = (await response.json()) as { widgets: Widget[] };
  console.log(data);

  const SLIDES = Array.from(Array(6).keys());

  return (
    <div className="flex flex-col min-h-screen w-full">
      <CheckNavbar />
      <Hero />
      <main className="flex flex-col grow items-center gap-y-12 py-12">
        <div className="w-full max-w-7xl px-4 py-5">
          <Carousel />
        </div>
        <div className="w-full max-w-7xl px-4">
          <CarWidget />
        </div>

        {/*
        <div className="w-full max-w-7xl px-4">
          <TravelPack />
        </div>
        */}

        <div className="w-full max-w-7xl px-4">
          <AlternativeCarousel slides={SLIDES} />
        </div>

        <div className="w-full max-w-7xl px-4">
          <SportTravel title="Beliebte Sportreisen durchstöbern!" items = {[]}/>
        </div>

         <div className="w-full max-w-7xl px-4">
          <Deal title="Unsere Black-Friday Deals!" items = {[]}/>
        </div>

        {data.widgets.map((widget, index) => (
          <div key={index} className="w-full max-w-7xl px-4">
            <WidgetRenderer widget={widget} />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
