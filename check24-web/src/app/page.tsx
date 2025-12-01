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
  MinimalItem,
  MinimalProps,
} from "@/widgets/types";
import FeaturedGrid from "@/widgets/FeaturedGrid";
import MinimalCard from "@/widgets/MinimalCard";
import DualContainer from "@/widgets/DualContainer";

import { loadWidgetsDataFor } from "@/lib/widgetsData";


export default async function Home() {
  const response = await fetch("http://127.0.0.1:8000/");
  const orchestrator = (await response.json()) as { widgets: { widget_id: string; type: string }[] };


  const widgetDataMap = await loadWidgetsDataFor(orchestrator.widgets);

  const widgetsToRender = orchestrator.widgets.map((w) => ({
    type: w.type,
    widget_id: w.widget_id,
    data: widgetDataMap[w.widget_id],
  }));

  console.log(widgetsToRender)


  return (
    <div className="flex flex-col min-h-screen w-full">
      <CheckNavbar />
      <Hero />
      <main className="flex flex-col grow items-center gap-y-12 py-12">
        {widgetsToRender.map((widget, index) => (
          <div key={index} className="w-full max-w-7xl px-4">
            <WidgetRenderer widget={widget} />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
