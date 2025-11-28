import Image from "next/image";
import CheckNavbar from "../components/Navbar";
import Carousel from "../widgets/Carousel";
import CarWidget from "@/widgets/CarWidget";
import TravelPack from "@/widgets/TravelPack";
import AlternativeCarousel from "@/widgets/AlternativeCarousel";
import BasicGrid from "@/widgets/BasicGrid";
import Deal from "@/widgets/Deal";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "./embla.css";

import WidgetRenderer from "@/widgets/WidgetRenderer";
import { Widget, BasicGridItem, DealItem } from "@/widgets/types";

export default async function Home() {
  const response = await fetch("http://127.0.0.1:8000/");
  const data = (await response.json()) as { widgets: Widget[] };
  console.log(data);

  const responseSport = await fetch("http://127.0.0.1:8002/sport");
  const dataSport = (await responseSport.json()) as {
    header: string;
    items: BasicGridItem[];
  };
  // console.log(dataSport);
  // console.log("HALLO");

  const SLIDES = Array.from(Array(6).keys());

  const dealBlack = {
    title: "Black Friday Deals",
    description:
      "Nur noch für kurze Zeit: Angebote auf Reisen, Autovermietungen und Versicherungen mit bis zu [ 50% Rabatt]. Sichere Dir jetzt den Deal!",
    bubble: "✨ Black Friday",
    button: "Jetzt Shoppen",
    addition: "Lerne mehr",
    season: "blackfriday",
  };

  const dealChristmas = {
    title: "Weihnachts & Silvester Specials",
    description:
      "Wir feiern Weihnachten mit großen Rabatten auf Reisen! Spare bis zu [ 40%] bei Komplettreisen! Geschenkgutscheine verfügbar.",
    bubble: "✨ Weihnachtsdeals",
    button: "Jetzt Shoppen",
    addition: "Lerne mehr",
    season: "christmas"
  };

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
          <BasicGrid header={dataSport.header} items={dataSport.items} />
        </div>

        <div className="w-full max-w-7xl px-4">
          <Deal deal={dealBlack} />
        </div>

        <div className="w-full max-w-7xl px-4">
          <Deal deal={dealChristmas} />
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
