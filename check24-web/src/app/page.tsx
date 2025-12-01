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
import {
  Widget,
  BasicGridItem,
  DealItem,
  BasicCarouselItem,
  DualItem,
} from "@/widgets/types";
import FeaturedGrid from "@/widgets/FeaturedGrid";
import DualContainer from "@/widgets/DualContainer";

export default async function Home() {
  const response = await fetch("http://127.0.0.1:8000/");
  const data = (await response.json()) as { widgets: Widget[] };
  console.log(data);

  const responseSport = await fetch("http://127.0.0.1:8002/sport");
  const dataSport = (await responseSport.json()) as {
    header: string;
    items: BasicGridItem[];
  };

  const responseNormalTravel = await fetch("http://127.0.0.1:8002/normal");
  const dataNormalTravel = (await responseNormalTravel.json()) as {
    header: string;
    items: BasicGridItem[];
  };

  const responseCityTravel = await fetch("http://127.0.0.1:8002/city");
  const dataCityTravel = (await responseCityTravel.json()) as {
    header: string;
    items: BasicGridItem[];
  };

  const responseBlackfriday = await fetch("http://127.0.0.1:8003/blackfriday");
  const dataBlackfriday = (await responseBlackfriday.json()) as DealItem;

  const responseChristmas = await fetch("http://127.0.0.1:8003/christmas");
  const dataChristmas = (await responseChristmas.json()) as DealItem;

  const responseOffers = await fetch("http://127.0.0.1:8003/offers");

  const dataOffers = (await responseOffers.json()) as {
    header: string;
    items: BasicCarouselItem[];
  };

  const responseHome = await fetch("http://127.0.0.1:8001/home");
  const dataHome = (await responseHome.json()) as {
    header: string;
    items: DualItem[];
  };

  // console.log("HALLO");

  const SLIDES = Array.from(Array(6).keys());

  return (
    <div className="flex flex-col min-h-screen w-full">
      <CheckNavbar />
      <Hero />
      <main className="flex flex-col grow items-center gap-y-12 py-12">
        <div className="w-full max-w-7xl px-4 py-5 overflow-visible">
          <Carousel header={dataOffers.header} items={dataOffers.items} />
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
          <DualContainer header={dataHome.header} items={dataHome.items} />
        </div>

        <div className="w-full max-w-7xl px-4">
          <AlternativeCarousel slides={SLIDES} />
        </div>

        <div className="w-full max-w-7xl px-4">
          <BasicGrid header={dataSport.header} items={dataSport.items} />
        </div>

        <div className="w-full max-w-7xl px-4">
          <FeaturedGrid
            header={dataNormalTravel.header}
            items={dataNormalTravel.items}
          />
        </div>

        <div className="w-full max-w-7xl px-4">
          <FeaturedGrid
            header={dataCityTravel.header}
            items={dataCityTravel.items}
          />
        </div>

        <div className="w-full max-w-7xl px-4">
          <Deal deal={dataBlackfriday} />
        </div>

        <div className="w-full max-w-7xl px-4">
          <Deal deal={dataChristmas} />
        </div>

        {/*
        {data.widgets.map((widget, index) => (
          <div key={index} className="w-full max-w-7xl px-4">
            <WidgetRenderer widget={widget} />
          </div>
        ))}
           */}
      </main>
      <Footer />
    </div>
  );
}
