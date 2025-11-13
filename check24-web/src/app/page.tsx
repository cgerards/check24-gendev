import Image from "next/image";
import CheckNavbar from "../components/Navbar";
import Carousel from "../widgets/Carousel";
import FeaturedGrid from "@/widgets/FeaturedGrid";

export default function Home() {
  return (
    <div>
      <CheckNavbar />
      <div className="px-30 py-10">
        <p>Test</p>
        <Carousel></Carousel>
        <FeaturedGrid></FeaturedGrid>
      </div>
    </div>
  );
}
