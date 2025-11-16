import Image from "next/image";
import CheckNavbar from "../components/Navbar";
import Carousel from "../widgets/Carousel";
import CarWidget from "@/widgets/CarWidget";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import WidgetRenderer from "@/widgets/WidgetRenderer";
import { Widget } from "@/widgets/types";

export default async function Home() {

  const response = await fetch('http://127.0.0.1:8000/');
  const data = (await response.json()) as {widgets: Widget[]}
  console.log(data);

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
