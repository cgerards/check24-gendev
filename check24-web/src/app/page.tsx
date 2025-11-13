import Image from "next/image";
import CheckNavbar from "../components/Navbar";
import Carousel from "../widgets/Carousel";
import FeaturedGrid from "@/widgets/FeaturedGrid";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <CheckNavbar />
      <main className="grow">
        <Hero />
        <div className="px-30 py-10">
          <p>Test</p>
          <Carousel></Carousel>
          <FeaturedGrid></FeaturedGrid>
        </div>
      </main>
      <Footer />
    </div>
  );
}
