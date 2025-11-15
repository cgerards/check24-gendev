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
      <Hero />
      <main className="flex flex-col grow items-center gap-y-12 py-12">
        <div className="w-full max-w-7xl px-4 py-5">
          <Carousel />
        </div>
        <div className="w-full max-w-7xl px-4">
          <FeaturedGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
