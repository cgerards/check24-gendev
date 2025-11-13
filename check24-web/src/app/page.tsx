import Image from "next/image";
import BasicExample from "../components/Navbar";
import Carousel from "../widgets/Carousel";

export default function Home() {
  return (
    <div>
      <BasicExample />
      <p>Test</p>
      <div className="px-30 py-10">
        <Carousel></Carousel>
      </div>
    </div>
  );
}
