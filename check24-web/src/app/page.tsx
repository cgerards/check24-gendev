import Image from "next/image";
import CheckNavbar from "../components/Navbar";
import Carousel from "../widgets/Carousel";

export default function Home() {
  return (
    <div>
      <CheckNavbar />
      <p>Test</p>
      <Carousel></Carousel>
    </div>
  );
}
